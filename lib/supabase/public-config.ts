// Öffentliche Supabase-Zugangsdaten (Projekt-URL + anon-Key).
//
// Bewusst KEIN Geheimnis: der anon-Key ist dafür gedacht, im Browser
// ausgeliefert zu werden — der Datenschutz kommt über Row Level Security,
// nicht über Geheimhaltung dieses Keys. Deshalb hier als Fallback hart
// hinterlegt, damit der Build nicht an (falsch gescopten) Vercel-Env-Vars
// scheitert. process.env hat weiterhin Vorrang, falls gesetzt.
//
// NICHT hier hinterlegen: SUPABASE_SERVICE_ROLE_KEY und ADMIN_GATE_SECRET —
// das sind echte Geheimnisse und kommen ausschließlich aus der Laufzeit-Env.

export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ovyekonfltkbyzmpqren.supabase.co";

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92eWVrb25mbHRrYnl6bXBxcmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MjQ2NzMsImV4cCI6MjEwMDQwMDY3M30.IdHDAJgHYFZC1-G8X3pUukI5p70oV3QOq5RXgEPCa7s";
