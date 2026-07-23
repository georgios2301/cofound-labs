import { NextRequest, NextResponse } from "next/server";
import {
  slugFromPath,
  passwordForSlug,
  cookieNameForSlug,
} from "@/lib/draft-auth";

// OFFLINE-MODUS (Neuausrichtung): Die öffentliche Seite ist abgeschaltet.
// Nur die Startseite („Bald kommt hier was Großes hin") ist erreichbar; jede
// andere Seiten-Route wird dorthin zurückgeleitet. Private Entwürfe unter
// /entwuerfe/<slug> bleiben per Passwort zugänglich (bestehende Logik).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Entwürfe: Passwortschutz pro Slug (eigenes Cookie). Ohne gültiges Cookie
  // zur Passwort-Seite /zugang.
  if (pathname === "/entwuerfe" || pathname.startsWith("/entwuerfe/")) {
    const slug = slugFromPath(pathname);
    const expected = slug ? passwordForSlug(slug) : undefined;
    if (
      slug &&
      expected &&
      request.cookies.get(cookieNameForSlug(slug))?.value === expected
    ) {
      return NextResponse.next();
    }
    const login = new URL("/zugang", request.url);
    login.searchParams.set("from", pathname);
    return NextResponse.redirect(login);
  }

  // Startseite und die Zugang-Seite (Formular für die Entwürfe) bleiben offen.
  // Ebenso die (nicht verlinkten) Angaben-Formulare unter /angaben/*, über die
  // Akquise-Kunden fehlende Inhalte für ihren Entwurf nachreichen.
  if (pathname === "/" || pathname === "/zugang" || pathname.startsWith("/angaben")) {
    return NextResponse.next();
  }

  // Alles andere ist offline → zurück zur Startseite.
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // Greift auf allen Seiten-Routen, ausgenommen Next-Interna, API und Dateien
  // mit Endung (Bilder, sitemap.xml, robots.txt, statische Case-Study-HTMLs).
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
