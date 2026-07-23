import Link from "next/link";
import { redirect } from "next/navigation";
import { ClipboardList, ArrowRight } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const adminId = await requireAdmin();
  if (!adminId) redirect("/login");

  const sb = await supabaseServer();
  const { data: rows } = await sb
    .from("angaben_submissions")
    .select("client_slug, client_label, created_at")
    .order("created_at", { ascending: false });

  const submissions = rows ?? [];
  const total = submissions.length;

  // Pro Kunde: Anzahl + letzte Absendung.
  const byClient = new Map<string, { label: string; count: number; last: string }>();
  for (const r of submissions) {
    const cur = byClient.get(r.client_slug);
    if (cur) cur.count += 1;
    else byClient.set(r.client_slug, { label: r.client_label, count: 1, last: r.created_at });
  }

  const today = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <div style={{ marginBottom: 28 }}>
        <p className="kicker" style={{ marginBottom: 6 }}>Übersicht</p>
        <h1 className="anton" style={{ fontSize: "clamp(30px,5vw,44px)", lineHeight: 1 }}>
          Dashboard
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 8 }}>Stand: {today}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 28 }}>
        <Kpi label="Angaben gesamt" value={total} accent />
        <Kpi label="Kunden mit Eingang" value={byClient.size} />
      </div>

      <p className="kicker" style={{ marginBottom: 12 }}>Kunden-Angaben</p>
      {byClient.size === 0 ? (
        <div className="card" style={{ boxShadow: "none" }}>
          <p style={{ color: "var(--muted)" }}>
            Noch keine Angaben eingegangen. Sobald ein Kunde sein Formular absendet, erscheint es hier.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {[...byClient.entries()].map(([slug, c]) => (
            <Link key={slug} href="/dashboard/angaben" className="card" style={{ textDecoration: "none" }}>
              <div className="c-ic"><ClipboardList size={22} strokeWidth={2.2} /></div>
              <h3 style={{ marginTop: 12 }}>{c.label}</h3>
              <p>
                {c.count} {c.count === 1 ? "Absendung" : "Absendungen"} · zuletzt{" "}
                {new Date(c.last).toLocaleDateString("de-DE")}
              </p>
              <span
                style={{
                  marginTop: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                Öffnen <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function Kpi({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div
      className="card"
      style={{
        boxShadow: accent ? "4px 4px 0 var(--accent), 4px 4px 0 1.5px var(--ink)" : "none",
      }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>
        {label}
      </div>
      <div className="anton" style={{ fontSize: 40, lineHeight: 1, marginTop: 8, color: "var(--ink)" }}>
        {value}
      </div>
    </div>
  );
}
