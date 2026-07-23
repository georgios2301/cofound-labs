// Bereichs-Rechte des Admin-Dashboards. Single Source of Truth für
// Middleware (proxy.ts), requireAdmin, Sidebar und Benutzerverwaltung.
// Edge-safe (keine Node-APIs) — wird auch in der Middleware importiert.
//
// Wachstumsfähig: neue Module (z. B. weitere Kunden-Formulare, Rechnungen,
// Analytics) einfach als weiteren Eintrag ergänzen. Der Bereichs-Schlüssel
// muss dann auch in der Supabase-RLS-Policy (admin_has) berücksichtigt werden.

export const ADMIN_SECTIONS = [
  { key: "dashboard", path: "/dashboard", label: "Übersicht", icon: "LayoutDashboard" },
  { key: "angaben", path: "/dashboard/angaben", label: "Angaben", icon: "ClipboardList" },
] as const;

export type AdminSection = (typeof ADMIN_SECTIONS)[number]["key"] | "benutzer";

/** permissions = null -> Vollzugriff. "benutzer" (Benutzerverwaltung) nur bei Vollzugriff. */
export function sectionAllowed(permissions: string[] | null, section: AdminSection): boolean {
  if (permissions === null) return true;
  if (section === "benutzer") return false;
  return permissions.includes(section);
}

/** Erster erlaubter Bereich als Login-/Fallback-Ziel; null wenn gar keiner. */
export function firstAllowedPath(permissions: string[] | null): string | null {
  const s = ADMIN_SECTIONS.find((x) => sectionAllowed(permissions, x.key));
  return s ? s.path : null;
}

/** Ordnet einen Admin-Pfad seinem Bereich zu. Längster Treffer gewinnt
 *  (damit /dashboard/angaben nicht fälschlich als /dashboard zählt). */
export function sectionForPath(pathname: string): AdminSection | null {
  const match = [...ADMIN_SECTIONS]
    .sort((a, b) => b.path.length - a.path.length)
    .find((x) => pathname === x.path || pathname.startsWith(x.path + "/"));
  return match ? match.key : null;
}
