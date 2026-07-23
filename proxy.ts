import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import {
  slugFromPath,
  passwordForSlug,
  cookieNameForSlug,
} from "@/lib/draft-auth";
import {
  ADMIN_GATE_COOKIE,
  GATE_TTL_MS,
  signAdminGate,
  verifyAdminGate,
} from "@/lib/admin-gate";
import { firstAllowedPath, sectionAllowed, sectionForPath } from "@/lib/admin-sections";

// OFFLINE-MODUS (Neuausrichtung): Die öffentliche Seite ist abgeschaltet.
// Nur die Startseite („Bald kommt hier was Großes hin") ist erreichbar; jede
// andere Seiten-Route wird dorthin zurückgeleitet. Ausnahmen:
//   • /entwuerfe/<slug>  — private Entwürfe, Passwortschutz pro Slug
//   • /angaben/*         — nicht verlinkte Kunden-Formulare
//   • /login, /dashboard — Admin-Dashboard (Supabase-Auth-Guard)
export async function proxy(request: NextRequest) {
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

  // Admin-Dashboard: Supabase-Session + Bereichs-Rechte erzwingen.
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) {
    return guardAdmin(request);
  }

  // Startseite, Zugang-Formular, Angaben-Formulare und Login bleiben offen.
  if (
    pathname === "/" ||
    pathname === "/zugang" ||
    pathname === "/login" ||
    pathname.startsWith("/angaben")
  ) {
    return NextResponse.next();
  }

  // Alles andere ist offline → zurück zur Startseite.
  return NextResponse.redirect(new URL("/", request.url));
}

// Auth-Guard fürs Dashboard. Schneller Pfad über ein HMAC-Gate-Cookie
// (keine Netzwerk-Roundtrips); voller Check gegen Supabase Auth + admins-
// Allowlist nur alle GATE_TTL_MS. Portiert aus dem bvportal-Middleware-Muster.
async function guardAdmin(request: NextRequest): Promise<NextResponse> {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (
          toSet: { name: string; value: string; options?: Record<string, unknown> }[],
        ) => {
          toSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          toSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options as never),
          );
        },
      },
    },
  );

  const toLogin = () => NextResponse.redirect(new URL("/login", request.url));

  const enforceSection = (permissions: string[] | null): NextResponse | null => {
    const section = sectionForPath(request.nextUrl.pathname);
    if (!section || sectionAllowed(permissions, section)) return null;
    const target = firstAllowedPath(permissions) ?? "/login";
    return NextResponse.redirect(new URL(target, request.url));
  };

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const uid = session?.user?.id;
  if (!uid) return toLogin();

  // Schneller Pfad: gültiges Gate-Cookie für dieselbe User-ID.
  const gate = await verifyAdminGate(request.cookies.get(ADMIN_GATE_COOKIE)?.value);
  if (gate && gate.uid === uid) return enforceSection(gate.permissions) ?? response;

  // Voller Check: Token gegen Supabase validieren, dann Admin-Allowlist.
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return toLogin();
  const { data: admin } = await supabase.from("admins").select("*").eq("id", user.id).maybeSingle();
  if (!admin) return toLogin();
  const permissions: string[] | null = admin.permissions ?? null;

  const denied = enforceSection(permissions);
  const res = denied ?? response;
  res.cookies.set(ADMIN_GATE_COOKIE, await signAdminGate(user.id, permissions), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(GATE_TTL_MS / 1000),
  });
  return res;
}

export const config = {
  // Greift auf allen Seiten-Routen, ausgenommen Next-Interna, API und Dateien
  // mit Endung (Bilder, sitemap.xml, robots.txt, statische Case-Study-HTMLs).
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
