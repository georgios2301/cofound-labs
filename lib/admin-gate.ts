// Kurzlebiger, HMAC-signierter Nachweis „Admin kürzlich verifiziert" für die
// Middleware. Spart pro Navigation zwei Netzwerk-Roundtrips (getUser +
// admins-Lookup); der volle Check läuft nur alle GATE_TTL_MS erneut. Ein aus
// der Allowlist entfernter Admin behält also höchstens 5 Minuten Zugriff.
// Web Crypto statt node:crypto, weil die Middleware im Edge-Runtime läuft.

export const ADMIN_GATE_COOKIE = "cl_admin_gate";
export const GATE_TTL_MS = 5 * 60 * 1000;

const enc = new TextEncoder();

function b64urlEncode(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(s: string): Uint8Array<ArrayBuffer> {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64 + "=".repeat((4 - (b64.length % 4)) % 4));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacKey(usage: KeyUsage): Promise<CryptoKey> {
  const b64 = process.env.ADMIN_GATE_SECRET;
  if (!b64) throw new Error("ADMIN_GATE_SECRET fehlt.");
  return crypto.subtle.importKey(
    "raw",
    b64urlDecode(b64),
    { name: "HMAC", hash: "SHA-256" },
    false,
    [usage],
  );
}

export interface AdminGate {
  uid: string;
  /** null = Vollzugriff, sonst Liste erlaubter Bereichs-Schlüssel. */
  permissions: string[] | null;
}

export async function signAdminGate(uid: string, permissions: string[] | null): Promise<string> {
  const payload = b64urlEncode(
    enc.encode(JSON.stringify({ uid, p: permissions, exp: Date.now() + GATE_TTL_MS })),
  );
  const sig = await crypto.subtle.sign("HMAC", await hmacKey("sign"), enc.encode(payload));
  return `${payload}.${b64urlEncode(new Uint8Array(sig))}`;
}

/** Liefert User-ID + Rechte, wenn das Gate-Cookie gültig und nicht abgelaufen ist. */
export async function verifyAdminGate(cookie: string | undefined | null): Promise<AdminGate | null> {
  if (!cookie) return null;
  const [payload, sig] = cookie.split(".");
  if (!payload || !sig) return null;
  try {
    const ok = await crypto.subtle.verify(
      "HMAC",
      await hmacKey("verify"),
      b64urlDecode(sig),
      enc.encode(payload),
    );
    if (!ok) return null;
    const obj = JSON.parse(new TextDecoder().decode(b64urlDecode(payload)));
    const { uid, exp } = obj;
    if (!uid || typeof exp !== "number" || Date.now() > exp) return null;
    if (!("p" in obj) || (obj.p !== null && !Array.isArray(obj.p))) return null;
    return { uid: uid as string, permissions: obj.p as string[] | null };
  } catch {
    return null;
  }
}
