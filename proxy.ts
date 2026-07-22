import { NextRequest, NextResponse } from "next/server";
import {
  slugFromPath,
  passwordForSlug,
  cookieNameForSlug,
} from "@/lib/draft-auth";

// Passwortschutz für unveröffentlichte Entwürfe unter /entwuerfe/<slug>/.
// Pro Entwurf eigenes Passwort + eigenes Cookie. Ohne gültiges Cookie geht es
// zur Passwort-Seite /zugang (eigenes Formular im Cofound-Stil); das Cookie
// setzt /api/zugang nach korrekter Eingabe.
export function proxy(request: NextRequest) {
  const slug = slugFromPath(request.nextUrl.pathname);
  const expected = slug ? passwordForSlug(slug) : undefined;
  if (
    slug &&
    expected &&
    request.cookies.get(cookieNameForSlug(slug))?.value === expected
  ) {
    return NextResponse.next();
  }
  const login = new URL("/zugang", request.url);
  login.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: "/entwuerfe/:path*",
};
