import { NextRequest, NextResponse } from "next/server";
import { DRAFT_PASSWORD, DRAFT_COOKIE } from "@/lib/draft-auth";

// Passwortschutz für unveröffentlichte Entwürfe unter /entwuerfe/*.
// Ohne gültiges Cookie geht es zur Passwort-Seite /zugang (eigenes Formular
// im Cofound-Stil); das Cookie setzt /api/zugang nach korrekter Eingabe.
export function proxy(request: NextRequest) {
  if (request.cookies.get(DRAFT_COOKIE)?.value === DRAFT_PASSWORD) {
    return NextResponse.next();
  }
  const login = new URL("/zugang", request.url);
  login.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: "/entwuerfe/:path*",
};
