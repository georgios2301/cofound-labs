"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import type { AngabenForm, Field } from "@/lib/angaben/schema";

type Status = "idle" | "sending" | "success" | "error";

// Mehrschritt-Formular mit automatischem Zwischenspeichern (localStorage, je
// Formular-Slug). Der Kunde kann jederzeit pausieren und später weitermachen;
// der Entwurf bleibt im Browser, bis abgesendet wurde. Nach erfolgreichem
// Absenden (POST /api/angaben) wird der Entwurf gelöscht.
export default function AngabenWizard({ form }: { form: AngabenForm }) {
  const steps = form.steps;
  const lastStep = steps.length - 1;
  const draftKey = `angaben-draft-${form.slug}`;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [botcheck, setBotcheck] = useState("");
  const hydrated = useRef(false);

  // Entwurf laden (einmalig).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey);
      if (raw) {
        const d = JSON.parse(raw) as { answers?: Record<string, string>; step?: number };
        if (d.answers && typeof d.answers === "object") setAnswers(d.answers);
        if (typeof d.step === "number" && d.step >= 0 && d.step <= lastStep) setStep(d.step);
      }
    } catch {
      /* kaputter Entwurf -> ignorieren */
    }
    hydrated.current = true;
  }, [draftKey, lastStep]);

  // Entwurf speichern bei jeder Änderung (erst nach dem Laden).
  useEffect(() => {
    if (!hydrated.current || status === "success") return;
    try {
      localStorage.setItem(draftKey, JSON.stringify({ answers, step }));
    } catch {
      /* Speicher voll/blockiert -> ignorieren */
    }
  }, [answers, step, draftKey, status]);

  function set(name: string, value: string) {
    setAnswers((a) => ({ ...a, [name]: value }));
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
      {/* Fortschritt */}
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
            {current.fields.map((f) => (
              <FieldInput key={f.name} field={f} value={answers[f.name] ?? ""} onChange={(v) => set(f.name, v)} />
            ))}
          </div>
        </fieldset>

        {/* Honeypot */}
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
          Fotos &amp; PDFs gerne per E-Mail an{" "}
          <a href="mailto:georgios@cofound-labs.de">georgios@cofound-labs.de</a>.
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
