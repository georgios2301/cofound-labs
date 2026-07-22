import { NextRequest, NextResponse } from "next/server";
import {
  slugFromPath,
  passwordForSlug,
  cookieNameForSlug,
} from "@/lib/draft-auth";

// Nimmt das Passwort-Formular von /zugang entgegen. Bei Erfolg: Cookie für den
// jeweiligen Entwurf setzen und zurück zum angefragten Entwurf; sonst zurück
// zum Formular mit Fehler.
export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = form.get("password");
  const fromRaw = form.get("from");
  // Nur interne Entwurf-Pfade als Ziel zulassen (kein Open Redirect).
  const from =
    typeof fromRaw === "string" && fromRaw.startsWith("/entwuerfe/")
      ? fromRaw
      : "/";

  const slug = slugFromPath(from);
  const expected = slug ? passwordForSlug(slug) : undefined;

  if (slug && expected && password === expected) {
    const response = NextResponse.redirect(new URL(from, request.url), 303);
    response.cookies.set(cookieNameForSlug(slug), expected, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: `/entwuerfe/${slug}`,
      maxAge: 60 * 60 * 24 * 30, // 30 Tage
    });
    return response;
  }

  const retry = new URL("/zugang", request.url);
  retry.searchParams.set("error", "1");
  if (from !== "/") retry.searchParams.set("from", from);
  return NextResponse.redirect(retry, 303);
}
