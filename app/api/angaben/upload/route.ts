import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase/server";
import { getAngabenForm } from "@/lib/angaben/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" } as const;
const BUCKET = "angaben-uploads";
const MAX_BYTES = 20 * 1024 * 1024; // 20 MB

const ALLOWED: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/heic": "heic",
  "application/pdf": "pdf",
};

// POST /api/angaben/upload { slug, filename, contentType, size }
// Liefert eine signierte Upload-URL. Der Browser lädt die Datei danach direkt
// zu Supabase Storage (uploadToSignedUrl) — umgeht das Vercel-Body-Limit.
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400, headers: NO_STORE });
  }

  const { slug, filename, contentType, size } = (body ?? {}) as {
    slug?: unknown;
    filename?: unknown;
    contentType?: unknown;
    size?: unknown;
  };

  const form = typeof slug === "string" ? getAngabenForm(slug) : null;
  if (!form) return NextResponse.json({ error: "unknown_form" }, { status: 404, headers: NO_STORE });

  const ext = typeof contentType === "string" ? ALLOWED[contentType] : undefined;
  if (!ext) {
    return NextResponse.json({ error: "type_not_allowed" }, { status: 400, headers: NO_STORE });
  }
  if (typeof size !== "number" || size <= 0 || size > MAX_BYTES) {
    return NextResponse.json({ error: "too_large" }, { status: 400, headers: NO_STORE });
  }

  const path = `${form.slug}/${randomUUID()}.${ext}`;
  const sb = supabaseAdmin();
  const { data, error } = await sb.storage.from(BUCKET).createSignedUploadUrl(path);
  if (error || !data) {
    return NextResponse.json({ error: "signing_failed" }, { status: 500, headers: NO_STORE });
  }

  const name = typeof filename === "string" ? filename.slice(0, 200) : `datei.${ext}`;
  return NextResponse.json(
    { path: data.path, token: data.token, name, contentType, size },
    { headers: NO_STORE },
  );
}
