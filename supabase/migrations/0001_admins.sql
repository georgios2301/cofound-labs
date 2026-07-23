-- Cofound Labs Dashboard — Admin-Allowlist & Bereichs-Rechte.
--
-- Login läuft über Supabase Auth (E-Mail/Passwort). Nur wer zusätzlich in
-- public.admins steht, kommt ins Dashboard. permissions steuert, welche
-- Module (Bereiche) sichtbar sind.
--
--   permissions = null            -> Vollzugriff (Inhaber)
--   permissions = '{angaben}'     -> nur das Modul „Angaben", usw.
--
-- Gültige Bereichs-Schlüssel siehe lib/admin-sections.ts:  dashboard | angaben

create table if not exists public.admins (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text not null,
  permissions text[],
  created_at  timestamptz not null default now()
);

alter table public.admins enable row level security;

-- Ein Admin darf ausschließlich den eigenen Datensatz lesen (für die Sidebar
-- und den Middleware-Self-Check). Anlegen/Ändern von Admins passiert über die
-- Service-Role (Supabase-Studio bzw. Benutzerverwaltung).
drop policy if exists "admin reads self" on public.admins;
create policy "admin reads self" on public.admins
  for select using (id = auth.uid());

-- Helfer: hat der aktuelle Request Zugriff auf einen Bereich?
-- Vollzugriff (permissions is null) schließt jeden Bereich ein.
create or replace function public.admin_has(section text)
returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.admins a
    where a.id = auth.uid()
      and (a.permissions is null or section = any (a.permissions))
  );
$$;
