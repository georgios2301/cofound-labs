import { NextResponse } from "next/server";
import { readStatus, writeStatus, isStoreConfigured, type State } from "@/lib/status-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" } as const;

/** Öffentlich: aktueller effektiver Status (vom Biergarten-Frontend gepollt). */
export async function GET() {
  const status = await readStatus();
  return NextResponse.json(status, {
    headers: { "Cache-Control": "public, s-maxage=20, stale-while-revalidate=120" },
  });
}

/** Mitarbeiter (PWA): Status setzen. Body: { state: "auto"|"closed", pin: string }. */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400, headers: NO_STORE });
  }

  const { state, pin } = (body ?? {}) as { state?: unknown; pin?: unknown };

  const expected = process.env.BIERGARTEN_PIN;
  if (!expected) {
    // Fehlkonfiguration: PIN nicht gesetzt -> niemals stillschweigend erlauben.
    return NextResponse.json({ error: "pin_not_configured" }, { status: 500, headers: NO_STORE });
  }
  if (typeof pin !== "string" || pin !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401, headers: NO_STORE });
  }
  if (state !== "auto" && state !== "closed") {
    return NextResponse.json({ error: "invalid_state" }, { status: 400, headers: NO_STORE });
  }

  const status = await writeStatus(state as State);
  // persisted=false signalisiert der PWA, dass (in Prod) kein Store konfiguriert ist.
  return NextResponse.json({ ...status, persisted: isStoreConfigured() }, { status: 200, headers: NO_STORE });
}
