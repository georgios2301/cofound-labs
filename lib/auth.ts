import { supabaseServer } from "@/lib/supabase/server";
import { sectionAllowed, type AdminSection } from "@/lib/admin-sections";

/**
 * Liefert die User-ID, wenn der Request ein eingeloggter, freigeschalteter
 * Admin ist. Mit Bereichs-Argumenten zusätzlich: mindestens einer der
 * genannten Bereiche muss erlaubt sein (Vollzugriff = permissions null
 * erlaubt alles).
 */
export async function requireAdmin(...sections: AdminSection[]): Promise<string | null> {
  const sb = await supabaseServer();
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return null;
  const { data: admin } = await sb.from("admins").select("*").eq("id", user.id).maybeSingle();
  if (!admin) return null;
  const permissions: string[] | null = admin.permissions ?? null;
  if (sections.length > 0 && !sections.some((s) => sectionAllowed(permissions, s))) return null;
  return user.id;
}
