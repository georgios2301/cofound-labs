"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, Check, Upload, X, FileText, Image as ImageIcon } from "lucide-react";
import type { AngabenForm, Field, UploadedFile } from "@/lib/angaben/schema";
import { supabaseBrowser } from "@/lib/supabase/client";

type Status = "idle" | "sending" | "success" | "error";
type Answers = Record<string, string | UploadedFile[]>;

const BUCKET = "angaben-uploads";
const MAX_BYTES = 20 * 1024 * 1024;

// Mehrschritt-Formular mit automatischem Zwischenspeichern (localStorage, je
// Formular-Slug). Der Kunde kann jederzeit pausieren und später weitermachen;
// der Entwurf bleibt im Browser, bis abgesendet wurde. Nach erfolgreichem
// Absenden (POST /api/angaben) wird der Entwurf gelöscht.
export default function AngabenWizard({ form }: { form: AngabenForm }) {
  const steps = form.steps;
  const lastStep = steps.length - 1;
  const draftKey = `angaben-draft-${form.slug}`;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [status, setStatus] = useState<Status>("idle");
  const [botcheck, setBotcheck] = useState("");
  const hydrated = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey);
      if (raw) {
        const d = JSON.parse(raw) as { answers?: Answers; step?: number };
        if (d.answers && typeof d.answers === "object") setAnswers(d.answers);
        if (typeof d.step === "number" && d.step >= 0 && d.step <= lastStep) setStep(d.step);
      }
    } catch {
      /* kaputter Entwurf -> ignorieren */
    }
    hydrated.current = true;
  }, [draftKey, lastStep]);

  useEffect(() => {
    if (!hydrated.current || status === "success") return;
    try {
      localStorage.setItem(draftKey, JSON.stringify({ answers, step }));
    } catch {
      /* Speicher voll/blockiert -> ignorieren */
    }
  }, [answers, step, draftKey, status]);

  function setStr(name: string, value: string) {
    setAnswers((a) => ({ ...a, [name]: value }));
  }
  function setFiles(name: string, files: UploadedFile[]) {
    setAnswers((a) => ({ ...a, [name]: files }));
  }

  async function submit() {
    setStatus("sending");
    try {
      const res = await fetch("/api/angaben", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: form.slug, answers, botcheck }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        try {
          localStorage.removeItem(draftKey);
        } catch {}
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <strong>Danke! Deine Angaben sind bei uns.</strong>
        <p>
          Wir bauen sie in die Seite ein und melden uns, wenn wir etwas brauchen. Du hast noch mehr
          Infos?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setAnswers({});
              setStep(0);
              setStatus("idle");
            }}
          >
            Formular erneut ausfüllen
          </a>
          .
        </p>
      </div>
    );
  }

  const current = steps[step];

  return (
    <div className="wiz">
      <div className="wiz-steps" aria-hidden="true">
        {steps.map((s, i) => (
          <div key={s.key} className="wiz-step">
            <div className="wiz-bar" style={{ background: i <= step ? "var(--accent)" : "var(--line)" }} />
            <span className={"wiz-step-label" + (i === step ? " is-active" : "")}>{s.title}</span>
          </div>
        ))}
      </div>
      <p className="wiz-count">
        Schritt {step + 1} von {steps.length}
        <span className="wiz-saved">· Fortschritt automatisch gespeichert</span>
      </p>

      <form
        className="contact-form angaben-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (status === "sending") return;
          if (step < lastStep) setStep((s) => s + 1);
          else submit();
        }}
      >
        <fieldset className={"angaben-group" + (current.pflicht ? " angaben-group--pflicht" : "")}>
          <legend>
            <span className="ag-num">{String(step + 1).padStart(2, "0")}</span>
            {current.title}
            {current.pflicht && <span className="ag-pflicht">Pflicht für den Livegang</span>}
          </legend>
          {current.intro && <p className="ag-hint">{current.intro}</p>}

          <div className="ag-grid ag-grid--auto">
            {current.fields.map((f) =>
              f.type === "files" ? (
                <FileField
                  key={f.name}
                  field={f}
                  slug={form.slug}
                  files={(answers[f.name] as UploadedFile[]) ?? []}
                  onChange={(files) => setFiles(f.name, files)}
                />
              ) : (
                <FieldInput
                  key={f.name}
                  field={f}
                  value={(answers[f.name] as string) ?? ""}
                  onChange={(v) => setStr(f.name, v)}
                />
              ),
            )}
          </div>
        </fieldset>

        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={botcheck}
          onChange={(e) => setBotcheck(e.target.value)}
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />

        <div className="wiz-nav">
          {step > 0 && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setStep((s) => s - 1)}
              disabled={status === "sending"}
            >
              <ArrowLeft size={16} /> Zurück
            </button>
          )}
          <button className="btn btn-primary wiz-next" type="submit" disabled={status === "sending"}>
            {step < lastStep ? (
              <>
                Weiter <ArrowRight size={17} />
              </>
            ) : status === "sending" ? (
              "Wird gesendet…"
            ) : (
              <>
                Angaben absenden <Check size={17} />
              </>
            )}
          </button>
        </div>

        {status === "error" && (
          <p className="form-error">
            Da ist etwas schiefgelaufen. Bitte versuch es erneut oder schreib an{" "}
            <a href="mailto:georgios@cofound-labs.de">georgios@cofound-labs.de</a>.
          </p>
        )}

        <p className="form-note">
          Du musst nicht alles auf einmal ausfüllen – dein Fortschritt wird automatisch gespeichert.
        </p>
      </form>
    </div>
  );
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
}) {
  const id = `f-${field.name}`;
  return (
    <div className={"field" + (field.half ? " field--half" : "")}>
      <label htmlFor={id}>{field.label}</label>
      {field.type === "textarea" ? (
        <textarea id={id} rows={3} placeholder={field.placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : field.type === "select" ? (
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Bitte auswählen…</option>
          {(field.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} type={field.type} placeholder={field.placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
      {field.help && <span className="field-help">{field.help}</span>}
    </div>
  );
}

function FileField({
  field,
  slug,
  files,
  onChange,
}: {
  field: Field;
  slug: string;
  files: UploadedFile[];
  onChange: (files: UploadedFile[]) => void;
}) {
  const id = `f-${field.name}`;
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handleSelect(list: FileList | null) {
    if (!list || list.length === 0) return;
    setErr(null);
    setBusy(true);
    const added: UploadedFile[] = [];
    try {
      for (const file of Array.from(list)) {
        const okType = file.type.startsWith("image/") || file.type === "application/pdf";
        if (!okType) {
          setErr(`„${file.name}": nur Bilder oder PDF erlaubt.`);
          continue;
        }
        if (file.size > MAX_BYTES) {
          setErr(`„${file.name}": zu groß (max. 20 MB).`);
          continue;
        }
        // 1) Signierte Upload-URL holen.
        const signRes = await fetch("/api/angaben/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, filename: file.name, contentType: file.type, size: file.size }),
        });
        const sign = await signRes.json().catch(() => ({}));
        if (!signRes.ok || !sign.path || !sign.token) {
          setErr(`„${file.name}": Upload nicht möglich.`);
          continue;
        }
        // 2) Datei direkt zu Supabase Storage laden.
        const { error } = await supabaseBrowser()
          .storage.from(BUCKET)
          .uploadToSignedUrl(sign.path, sign.token, file, { contentType: file.type });
        if (error) {
          setErr(`„${file.name}": Upload fehlgeschlagen.`);
          continue;
        }
        added.push({ path: sign.path, name: file.name, size: file.size, type: file.type });
      }
      if (added.length) onChange([...files, ...added]);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function remove(path: string) {
    onChange(files.filter((f) => f.path !== path));
  }

  return (
    <div className="field">
      <label htmlFor={id}>{field.label}</label>

      <label className={"file-drop" + (busy ? " is-busy" : "")}>
        <input
          ref={inputRef}
          id={id}
          type="file"
          multiple
          accept={field.accept}
          onChange={(e) => handleSelect(e.target.files)}
          disabled={busy}
          style={{ display: "none" }}
        />
        <Upload size={18} strokeWidth={2.2} />
        <span>{busy ? "Wird hochgeladen…" : "Datei(en) auswählen"}</span>
      </label>

      {field.help && <span className="field-help">{field.help}</span>}
      {err && <span className="form-error" style={{ fontSize: 13 }}>{err}</span>}

      {files.length > 0 && (
        <ul className="file-list">
          {files.map((f) => (
            <li key={f.path} className="file-item">
              <span className="file-ic">
                {f.type === "application/pdf" ? <FileText size={16} /> : <ImageIcon size={16} />}
              </span>
              <span className="file-name">{f.name}</span>
              <span className="file-size">{(f.size / 1024 / 1024).toFixed(1)} MB</span>
              <button type="button" className="file-remove" aria-label="Entfernen" onClick={() => remove(f.path)}>
                <X size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
