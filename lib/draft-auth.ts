// Gemeinsame Konstanten für den Entwurf-Passwortschutz (Proxy + API-Route).
// Passwort per Vercel-Env DRAFT_PASSWORD überschreibbar.
export const DRAFT_PASSWORD = process.env.DRAFT_PASSWORD ?? "fuchswinkel";
export const DRAFT_COOKIE = "draft_auth";
