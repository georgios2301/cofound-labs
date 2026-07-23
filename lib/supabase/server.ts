import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** An den eingeloggten Admin gebundener Client (respektiert RLS + Session). */
export async function supabaseServer() {
  const cookieStore = await cookies();
  return createServerClient(URL, ANON, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (
        toSet: { name: string; value: string; options?: Record<string, unknown> }[],
      ) => {
        try {
          toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Aufruf aus einer Server-Component ohne Response — von der Middleware abgedeckt.
        }
      },
    },
  });
}

/**
 * Service-Role-Client. Umgeht RLS — NUR serverseitig nutzen (öffentliche
 * Formular-Submits, die keine Admin-Session haben). Niemals ins Frontend.
 */
export function supabaseAdmin() {
  return createClient(URL, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
