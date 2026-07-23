-- Modul „Angaben": Kunden reichen über /angaben/<slug> die noch fehlenden
-- Website-Inhalte nach. Jede Absendung ist ein Datensatz; die Antworten
-- liegen als JSON (Feld-Name -> Wert, Schema in lib/angaben/schema.ts).
--
-- Schreiben: ausschließlich über die Service-Role in der API-Route
-- /api/angaben (das öffentliche Formular hat keine Login-Session).
-- Lesen: Admins mit Bereich „angaben" (oder Vollzugriff) im Dashboard.

create table if not exists public.angaben_submissions (
  id           uuid primary key default gen_random_uuid(),
  client_slug  text not null,           -- z. B. 'oktoberfest-santa-ponsa'
  client_label text not null,           -- Klartext fürs Dashboard
  answers      jsonb not null default '{}'::jsonb,
  ip_hash      text,                    -- gehasht, keine Klar-IP
  created_at   timestamptz not null default now()
);

create index if not exists angaben_submissions_slug_idx
  on public.angaben_submissions (client_slug, created_at desc);

alter table public.angaben_submissions enable row level security;

-- Nur Admins mit Bereich „angaben" dürfen lesen. Kein Insert-Policy nötig:
-- die Service-Role umgeht RLS und ist der einzige Schreibweg.
drop policy if exists "angaben admin read" on public.angaben_submissions;
create policy "angaben admin read" on public.angaben_submissions
  for select using (public.admin_has('angaben'));
