import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/admin/me — eigener Admin-Datensatz für die Sidebar
// (welche Bereiche anzeigen, Vollzugriff ja/nein). RLS „admin reads self".
export async function GET() {
  const sb = await supabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  const { data: admin } = await sb.from("admins").select("*").eq("id", user.id).maybeSingle();
  if (!admin) return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  return NextResponse.json({ email: admin.email, permissions: admin.permissions ?? null });
}
