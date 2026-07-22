// Per-Entwurf-Passwortschutz (Proxy + API-Route + /zugang).
// Jeder Entwurf unter /entwuerfe/<slug>/ hat sein eigenes Passwort und ein
// eigenes Cookie (Pfad /entwuerfe/<slug>), damit ein freigeschalteter Entwurf
// keinen anderen mit-entsperrt.
//
// Passwort pro Slug per Vercel-Env DRAFT_PW_<SLUG> überschreibbar
// (Slug in Großbuchstaben, Bindestriche zu Unterstrichen).
const PASSWORDS: Record<string, string> = {
  // Bestand: bleibt bei fuchswinkel bzw. altem DRAFT_PASSWORD-Env-Override.
  "hundepension-fuchswinkel": process.env.DRAFT_PASSWORD ?? "fuchswinkel",
  "oktoberfest-santa-ponsa": "diana",
};

export const DRAFT_COOKIE_PREFIX = "draft_auth_";

// Ersten Pfadteil unter /entwuerfe/ als Slug ziehen.
export function slugFromPath(pathname: string): string | null {
  const m = pathname.match(/^\/entwuerfe\/([^/]+)/);
  return m ? m[1] : null;
}

function envKey(slug: string): string {
  return "DRAFT_PW_" + slug.toUpperCase().replace(/-/g, "_");
}

export function passwordForSlug(slug: string): string | undefined {
  return process.env[envKey(slug)] ?? PASSWORDS[slug];
}

export function cookieNameForSlug(slug: string): string {
  return DRAFT_COOKIE_PREFIX + slug;
}
