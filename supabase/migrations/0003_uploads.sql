-- Datei-Uploads fürs Angaben-Formular (z. B. Speisekarte als Foto/PDF).
--
-- Privater Storage-Bucket. Hochladen läuft über signierte Upload-URLs, die die
-- API-Route /api/angaben/upload mit der Service-Role erzeugt (der Browser lädt
-- dann direkt zu Supabase, ohne das Vercel-Body-Limit zu treffen). Lesen im
-- Dashboard über kurzlebige signierte Download-URLs (ebenfalls Service-Role).
-- Kein anon/authenticated-Policy: Zugriff ausschließlich über signierte URLs.

insert into storage.buckets (id, name, public)
values ('angaben-uploads', 'angaben-uploads', false)
on conflict (id) do nothing;
