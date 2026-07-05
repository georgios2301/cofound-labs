/**
 * Biergarten Varresbeck — geteilter Öffnungs-Status (Speicher-Layer).
 *
 * Quelle der Wahrheit: ein einzelner Key in Upstash Redis / Vercel KV.
 * Datensatz: { state: "auto" | "closed", date: "YYYY-MM-DD" } (Europe/Berlin).
 * Tages-Auto-Reset: ist das gespeicherte Datum nicht "heute", gilt effektiv "auto"
 * (ein "heute geschlossen" fällt am Folgetag automatisch auf die Uhrzeit-Logik zurück).
 *
 * Ohne konfigurierte Credentials (lokale Entwicklung) wird ein prozess-lokaler
 * In-Memory-Speicher genutzt, damit `next dev`/`build` ohne Upstash läuft.
 * In Produktion müssen die Env-Vars gesetzt sein (sonst persistiert nichts).
 */
import { Redis } from "@upstash/redis";

export type State = "auto" | "closed";
export interface StatusRecord {
  state: State;
  date: string; // YYYY-MM-DD, Europe/Berlin
}

const KEY = "bahnhof:status";

// Vercel-KV-Integration setzt KV_REST_API_*, native Upstash setzt UPSTASH_REDIS_REST_*.
const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;

// Dev-Fallback (nur ohne konfigurierten Store relevant).
let memory: StatusRecord | null = null;

/** Heutiges Datum in Europe/Berlin als YYYY-MM-DD. */
export function todayBerlin(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin" }).format(new Date());
}

/** Wendet den Tages-Auto-Reset an und liefert den effektiven Status für heute. */
function effective(rec: StatusRecord | null): StatusRecord {
  const date = todayBerlin();
  if (!rec || rec.date !== date) return { state: "auto", date };
  return { state: rec.state === "closed" ? "closed" : "auto", date };
}

/** true, wenn ein echter (persistenter) Store konfiguriert ist. */
export function isStoreConfigured(): boolean {
  return redis !== null;
}

/** Liest den effektiven Status. Bei Store-Fehlern: sicherer Default "auto". */
export async function readStatus(): Promise<StatusRecord> {
  let rec: StatusRecord | null = null;
  if (redis) {
    try {
      rec = (await redis.get<StatusRecord>(KEY)) ?? null;
    } catch {
      rec = null;
    }
  } else {
    rec = memory;
  }
  return effective(rec);
}

/** Schreibt den Status für heute und liefert den effektiven Status zurück. */
export async function writeStatus(state: State): Promise<StatusRecord> {
  const rec: StatusRecord = { state, date: todayBerlin() };
  if (redis) {
    await redis.set(KEY, rec);
  } else {
    memory = rec;
  }
  return effective(rec);
}
