import { redirect } from "next/navigation";
import { FileText, Image as ImageIcon, Download } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer, supabaseAdmin } from "@/lib/supabase/server";
import { getAngabenForm, type AngabenForm, type UploadedFile } from "@/lib/angaben/schema";

export const dynamic = "force-dynamic";

const BUCKET = "angaben-uploads";

interface Row {
  id: string;
  client_slug: string;
  client_label: string;
  answers: Record<string, string | UploadedFile[]>;
  created_at: string;
}

function isFileList(v: unknown): v is UploadedFile[] {
  return Array.isArray(v) && v.every((f) => f && typeof f === "object" && "path" in f);
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

  // Alle Datei-Pfade einsammeln und kurzlebige signierte Download-URLs erzeugen
  // (privater Bucket → Zugriff nur über Service-Role, nie im Client).
  const paths = rows.flatMap((r) =>
    Object.values(r.answers)
      .filter(isFileList)
      .flat()
      .map((f) => f.path),
  );
  const signed = new Map<string, string>();
  if (paths.length) {
    const { data: urls } = await supabaseAdmin().storage.from(BUCKET).createSignedUrls(paths, 3600);
    urls?.forEach((u) => {
      if (u.path && u.signedUrl) signed.set(u.path, u.signedUrl);
    });
  }

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
            <SubmissionCard key={row.id} row={row} form={getAngabenForm(row.client_slug)} signed={signed} />
          ))}
        </div>
      )}
    </>
  );
}

interface Item {
  label: string;
  value?: string;
  files?: UploadedFile[];
}

function SubmissionCard({
  row,
  form,
  signed,
}: {
  row: Row;
  form: AngabenForm | null;
  signed: Map<string, string>;
}) {
  const when = new Date(row.created_at).toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const schemaFields = form ? form.steps.flatMap((s) => s.fields) : [];
  const ordered: Item[] = [];
  const seen = new Set<string>();

  const pushValue = (label: string, v: string | UploadedFile[]) => {
    if (isFileList(v)) {
      if (v.length) ordered.push({ label, files: v });
    } else if (typeof v === "string" && v) {
      ordered.push({ label, value: v });
    }
  };

  for (const f of schemaFields) {
    if (f.name in row.answers) {
      pushValue(f.label, row.answers[f.name]);
      seen.add(f.name);
    }
  }
  for (const [k, v] of Object.entries(row.answers)) {
    if (!seen.has(k)) pushValue(k, v);
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
                {item.files ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {item.files.map((f) => (
                      <a
                        key={f.path}
                        href={signed.get(f.path) ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 12px",
                          border: "1.5px solid var(--ink)",
                          borderRadius: 8,
                          background: "var(--bg)",
                          color: "var(--ink)",
                          fontSize: 14,
                          fontWeight: 600,
                          width: "fit-content",
                          maxWidth: "100%",
                        }}
                      >
                        {f.type === "application/pdf" ? <FileText size={16} /> : <ImageIcon size={16} />}
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
                        <span style={{ color: "var(--muted)", fontSize: 12 }}>{(f.size / 1024 / 1024).toFixed(1)} MB</span>
                        <Download size={15} />
                      </a>
                    ))}
                  </div>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
