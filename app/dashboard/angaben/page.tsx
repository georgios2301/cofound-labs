import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { getAngabenForm, type AngabenForm } from "@/lib/angaben/schema";

export const dynamic = "force-dynamic";

interface Row {
  id: string;
  client_slug: string;
  client_label: string;
  answers: Record<string, string>;
  created_at: string;
}

export default async function AngabenModulePage() {
  const adminId = await requireAdmin("angaben");
  if (!adminId) redirect("/login");

  const sb = await supabaseServer();
  const { data } = await sb
    .from("angaben_submissions")
    .select("id, client_slug, client_label, answers, created_at")
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as Row[];

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <p className="kicker" style={{ marginBottom: 6 }}>Modul</p>
        <h1 className="anton" style={{ fontSize: "clamp(30px,5vw,44px)", lineHeight: 1 }}>Angaben</h1>
        <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 8 }}>
          {rows.length} {rows.length === 1 ? "Absendung" : "Absendungen"} von Kunden.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="card" style={{ boxShadow: "none" }}>
          <p style={{ color: "var(--muted)" }}>Noch keine Angaben eingegangen.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {rows.map((row) => (
            <SubmissionCard key={row.id} row={row} form={getAngabenForm(row.client_slug)} />
          ))}
        </div>
      )}
    </>
  );
}

function SubmissionCard({ row, form }: { row: Row; form: AngabenForm | null }) {
  const when = new Date(row.created_at).toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Reihenfolge & Labels aus dem Schema; unbekannte Felder ans Ende.
  const schemaFields = form ? form.steps.flatMap((s) => s.fields) : [];
  const ordered: { label: string; value: string }[] = [];
  const seen = new Set<string>();
  for (const f of schemaFields) {
    const v = row.answers[f.name];
    if (v) {
      ordered.push({ label: f.label, value: v });
      seen.add(f.name);
    }
  }
  for (const [k, v] of Object.entries(row.answers)) {
    if (!seen.has(k) && v) ordered.push({ label: k, value: v });
  }

  return (
    <div className="card" style={{ boxShadow: "4px 4px 0 var(--accent), 4px 4px 0 1.5px var(--ink)" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
        <h3 style={{ margin: 0 }}>{row.client_label}</h3>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>{when}</span>
      </div>
      {ordered.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>Leere Absendung.</p>
      ) : (
        <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 0 }}>
          {ordered.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(160px, 220px) 1fr",
                gap: 16,
                padding: "12px 0",
                borderTop: "1px solid var(--line)",
              }}
            >
              <dt style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--muted)" }}>
                {item.label}
              </dt>
              <dd style={{ margin: 0, fontSize: 15, color: "var(--ink)", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
