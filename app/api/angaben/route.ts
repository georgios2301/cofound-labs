import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase/server";
import { getAngabenForm, allFields } from "@/lib/angaben/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Öffentlicher Endpunkt: nimmt eine Angaben-Absendung des Kunden-Formulars
// entgegen und speichert sie über die Service-Role (keine Login-Session).
// Rate-Limit gegen Spam pro IP.

const MAX_PER_WINDOW = 20; // Absendungen pro IP in 15 Minuten
const NO_STORE = { "Cache-Control": "no-store" } as const;

function hashIp(req: Request): string {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 32);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400, headers: NO_STORE });
  }

  const { slug, answers, botcheck } = (body ?? {}) as {
    slug?: unknown;
    answers?: unknown;
    botcheck?: unknown;
  };

  // Honeypot: befülltes Feld = Bot.
  if (typeof botcheck === "string" && botcheck.length > 0) {
    return NextResponse.json({ ok: true }, { headers: NO_STORE });
  }

  const form = typeof slug === "string" ? getAngabenForm(slug) : null;
  if (!form) return NextResponse.json({ error: "unknown_form" }, { status: 404, headers: NO_STORE });

  if (!answers || typeof answers !== "object") {
    return NextResponse.json({ error: "invalid_data" }, { status: 400, headers: NO_STORE });
  }

  // Nur bekannte Felder übernehmen, Strings kappen, leere weglassen.
  const known = new Set(allFields(form).map((f) => f.name));
  const clean: Record<string, string> = {};
  for (const [k, v] of Object.entries(answers as Record<string, unknown>)) {
    if (!known.has(k) || typeof v !== "string") continue;
    const val = v.trim().slice(0, 5000);
    if (val) clean[k] = val;
  }
  if (Object.keys(clean).length === 0) {
    return NextResponse.json({ error: "empty" }, { status: 400, headers: NO_STORE });
  }

  const sb = supabaseAdmin();
  const ipHash = hashIp(req);

  // Rate-Limit (best effort; ignoriert Fehler, damit ein Log-Ausfall nicht blockt).
  try {
    const since = new Date(Date.now() - 15 * 60000).toISOString();
    const { count } = await sb
      .from("angaben_submissions")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", since);
    if ((count ?? 0) >= MAX_PER_WINDOW) {
      return NextResponse.json({ error: "locked" }, { status: 429, headers: NO_STORE });
    }
  } catch {
    /* Store nicht erreichbar -> unten schlägt der Insert ohnehin fehl. */
  }

  const { error } = await sb.from("angaben_submissions").insert({
    client_slug: form.slug,
    client_label: form.label,
    answers: clean,
    ip_hash: ipHash,
  });
  if (error) {
    return NextResponse.json({ error: "store_failed" }, { status: 500, headers: NO_STORE });
  }

  return NextResponse.json({ ok: true }, { headers: NO_STORE });
}
