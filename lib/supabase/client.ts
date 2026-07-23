"use client";
import { createBrowserClient } from "@supabase/ssr";

/** Browser-Client für das Admin-Dashboard (Login, Session). */
export function supabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
