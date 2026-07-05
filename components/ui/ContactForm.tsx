"use client";

import { useState, type FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_OPTIONS = [...services.map((s) => s.navLabel), "Etwas anderes"];

export default function ContactForm({
  subject = "Neue Anfrage über cofound-labs.de",
  defaultService = "",
  heading,
}: {
  subject?: string;
  defaultService?: string;
  heading?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", subject);
    formData.append("from_name", "Cofound Labs Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
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
        <strong>Danke für deine Nachricht!</strong>
        <p>Wir melden uns so schnell wie möglich bei dir zurück.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {heading && <p className="fh">{heading}</p>}
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Dein Name"
        />
      </div>
      <div className="field">
        <label htmlFor="cf-email">E-Mail</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="du@beispiel.de"
        />
      </div>
      <div className="field">
        <label htmlFor="cf-service">Was brauchst du?</label>
        <select id="cf-service" name="leistung" defaultValue={defaultService} required>
          <option value="" disabled>
            Bitte auswählen…
          </option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-message">Nachricht</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Worum geht's? Erzähl uns kurz von deinem Vorhaben."
        />
      </div>

      {/* Honeypot gegen Spam */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet…" : "Nachricht senden"}{" "}
        <span className="btn-arrow">→</span>
      </button>

      {status === "error" && (
        <p className="form-error">
          Da ist etwas schiefgelaufen. Bitte versuch es erneut oder schreib an{" "}
          <a href="mailto:georgios@cofound-labs.de">georgios@cofound-labs.de</a>.
        </p>
      )}

      <p className="form-note">
        Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur
        Bearbeitung deiner Anfrage zu (siehe <a href="/datenschutz">Datenschutz</a>).
      </p>
    </form>
  );
}
