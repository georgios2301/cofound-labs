import { NextRequest, NextResponse } from "next/server";

// Passwortschutz für unveröffentlichte Entwürfe unter /entwuerfe/*.
// Passwort per Vercel-Env DRAFT_PASSWORD überschreibbar; Benutzername egal.
const DRAFT_PASSWORD = process.env.DRAFT_PASSWORD ?? "fuchswinkel";

export function proxy(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    const decoded = atob(auth.slice(6));
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (password === DRAFT_PASSWORD) {
      return NextResponse.next();
    }
  }
  return new NextResponse("Zugang nur mit Passwort.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Entwurf", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: "/entwuerfe/:path*",
};
