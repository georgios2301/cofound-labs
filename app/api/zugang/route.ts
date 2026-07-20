import { NextRequest, NextResponse } from "next/server";
import { DRAFT_PASSWORD, DRAFT_COOKIE } from "@/lib/draft-auth";

// Nimmt das Passwort-Formular von /zugang entgegen. Bei Erfolg: Cookie setzen
// und zurück zum angefragten Entwurf; sonst zurück zum Formular mit Fehler.
export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = form.get("password");
  const fromRaw = form.get("from");
  // Nur interne Entwurf-Pfade als Ziel zulassen (kein Open Redirect).
  const from =
    typeof fromRaw === "string" && fromRaw.startsWith("/entwuerfe/")
      ? fromRaw
      : "/";

  if (password === DRAFT_PASSWORD) {
    const response = NextResponse.redirect(new URL(from, request.url), 303);
    response.cookies.set(DRAFT_COOKIE, DRAFT_PASSWORD, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/entwuerfe",
      maxAge: 60 * 60 * 24 * 30, // 30 Tage
    });
    return response;
  }

  const retry = new URL("/zugang", request.url);
  retry.searchParams.set("error", "1");
  if (from !== "/") retry.searchParams.set("from", from);
  return NextResponse.redirect(retry, 303);
}
