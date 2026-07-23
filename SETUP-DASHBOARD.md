# Dashboard-Setup (Supabase)

Das Admin-Dashboard (`/dashboard`) läuft auf Supabase — Auth + Postgres, gleiches
Muster wie das bvportal. Kunden-Angaben aus den `/angaben/<slug>`-Formularen
landen im Modul **Angaben**.

## 1. Supabase-Projekt

1. Auf [supabase.com](https://supabase.com) ein Projekt anlegen — **Region EU**
   (Frankfurt oder Irland, DSGVO).
2. Aus **Project Settings → API** notieren:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` `public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (geheim!)

## 2. Migrations einspielen

Im Supabase-Studio **SQL Editor** nacheinander ausführen:

- `supabase/migrations/0001_admins.sql`
- `supabase/migrations/0002_angaben.sql`

(Oder mit der Supabase-CLI: `supabase db push`.)

## 3. Admin-Account anlegen

1. **Authentication → Users → Add user** → deine E-Mail + Passwort
   („Auto Confirm" aktivieren).
2. Die User-ID (UUID) kopieren, dann im **SQL Editor**:

   ```sql
   insert into public.admins (id, email, permissions)
   values ('<user-uuid>', 'georgios@cofound-labs.de', null);
   ```

   `permissions = null` = Vollzugriff. Für einen Bereichs-Admin stattdessen
   z. B. `array['angaben']`.

## 4. Umgebungsvariablen

`.env.local` (lokal) und Vercel-Env setzen — siehe `.env.local.example`:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_GATE_SECRET=$(openssl rand -base64 32)
```

## 5. Fertig

- Login: `/login`
- Dashboard: `/dashboard`
- Kunden-Formular (Beispiel): `/angaben/oktoberfest-santa-ponsa`

Neues Kunden-Formular = neuer Eintrag in `lib/angaben/schema.ts` (`FORMS`).
Neues Dashboard-Modul = Eintrag in `lib/admin-sections.ts` + ggf. RLS-Policy.
