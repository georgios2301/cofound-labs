"use client";

import { useState, type FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY, EMAIL } from "@/lib/constants";

type Status = "idle" | "sending" | "success" | "error";

// Erhebungsformular für die noch fehlenden Inhalte der Oktoberfest-Santa-Ponsa-
// Seite. Versand läuft (wie das Kontaktformular) über Web3Forms und landet als
// E-Mail bei Cofound Labs. Nichts ist Pflicht: Diana kann portionsweise senden,
// so oft sie mag – jede Absendung ist eine eigene Mail.
export default function AngabenOktoberfest() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Oktoberfest Santa Ponsa – Angaben von Diana");
    formData.append("from_name", "Oktoberfest-Angaben (Diana)");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
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
        <strong>Danke, Diana! Deine Angaben sind bei uns.</strong>
        <p>
          Wir bauen sie in die Seite ein und melden uns, wenn wir etwas
          brauchen. Du hast noch mehr Infos? Fülle das Formular einfach erneut
          aus –{" "}
          <a href="#" onClick={() => setStatus("idle")}>
            hier zurück zum Formular
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form angaben-form" onSubmit={handleSubmit}>
      {/* --- Veranstaltungsort & Anfahrt --- */}
      <fieldset className="angaben-group">
        <legend>
          <span className="ag-num">01</span> Veranstaltungsort &amp; Anfahrt
        </legend>
        <div className="field">
          <label htmlFor="ort_adresse">Genaue Veranstaltungsadresse</label>
          <textarea
            id="ort_adresse"
            name="Veranstaltungsadresse"
            rows={2}
            placeholder="Straße, Nr., PLZ, Santa Ponsa – wo genau findet das Fest statt?"
          />
        </div>
        <div className="field">
          <label htmlFor="anfahrt">Anfahrt, Parken &amp; Shuttle</label>
          <textarea
            id="anfahrt"
            name="Anfahrt/Parken"
            rows={3}
            placeholder="Parkmöglichkeiten, Shuttle-Service, Anfahrt mit Bus/Taxi …"
          />
        </div>
      </fieldset>

      {/* --- Öffentlicher Kontakt & Social Media --- */}
      <fieldset className="angaben-group">
        <legend>
          <span className="ag-num">02</span> Kontakt &amp; Social Media
        </legend>
        <div className="ag-grid">
          <div className="field">
            <label htmlFor="kontakt_email">Kontakt-E-Mail (für Gäste)</label>
            <input
              id="kontakt_email"
              type="email"
              name="Kontakt-E-Mail"
              placeholder="info@…"
            />
          </div>
          <div className="field">
            <label htmlFor="kontakt_telefon">Telefon (für Gäste)</label>
            <input
              id="kontakt_telefon"
              type="tel"
              name="Kontakt-Telefon"
              placeholder="+34 …"
            />
          </div>
          <div className="field">
            <label htmlFor="instagram">Instagram-Link</label>
            <input
              id="instagram"
              type="url"
              name="Instagram"
              placeholder="https://instagram.com/…"
            />
          </div>
          <div className="field">
            <label htmlFor="facebook">Facebook-Link</label>
            <input
              id="facebook"
              type="url"
              name="Facebook"
              placeholder="https://facebook.com/…"
            />
          </div>
          <div className="field">
            <label htmlFor="tiktok">TikTok-Link</label>
            <input
              id="tiktok"
              type="url"
              name="TikTok"
              placeholder="https://tiktok.com/@…"
            />
          </div>
        </div>
      </fieldset>

      {/* --- Programm & Musik --- */}
      <fieldset className="angaben-group">
        <legend>
          <span className="ag-num">03</span> Programm &amp; Musik
        </legend>
        <div className="field">
          <label htmlFor="programm">Auftrittszeiten / Tagesprogramm</label>
          <textarea
            id="programm"
            name="Programm/Auftrittszeiten"
            rows={4}
            placeholder="Welche Band spielt an welchem Tag / zu welcher Uhrzeit? Sonderprogramm?"
          />
        </div>
        <div className="field">
          <label htmlFor="lola_text">Band „Lola" – Kurzbeschreibung</label>
          <textarea
            id="lola_text"
            name="Band Lola"
            rows={3}
            placeholder="Ein paar Sätze zur Band Lola (die anderen drei Bands sind schon fertig)."
          />
        </div>
        <div className="field">
          <label htmlFor="dirndl">Dirndl-Contest – Teilnahme &amp; Ablauf</label>
          <textarea
            id="dirndl"
            name="Dirndl-Contest"
            rows={3}
            placeholder="Wie kann man teilnehmen? Wann? Preise?"
          />
        </div>
      </fieldset>

      {/* --- Speisen & Getränke --- */}
      <fieldset className="angaben-group">
        <legend>
          <span className="ag-num">04</span> Speisen &amp; Getränke
        </legend>
        <div className="field">
          <label htmlFor="speisekarte">Speisekarte (Gerichte, Getränke, ggf. Preise)</label>
          <textarea
            id="speisekarte"
            name="Speisekarte"
            rows={5}
            placeholder={"z. B.\nHaxe – 18 €\nBrezn – 4 €\nMaß Bier – 11 €\n…"}
          />
        </div>
      </fieldset>

      {/* --- Reservierung --- */}
      <fieldset className="angaben-group">
        <legend>
          <span className="ag-num">05</span> Tisch-Reservierung
        </legend>
        <div className="field">
          <label htmlFor="reservierung_art">Wie sollen Gäste reservieren?</label>
          <select
            id="reservierung_art"
            name="Reservierung – Art"
            defaultValue=""
          >
            <option value="" disabled>
              Bitte auswählen…
            </option>
            <option value="E-Mail">Per E-Mail</option>
            <option value="Telefon">Per Telefon</option>
            <option value="WhatsApp">Per WhatsApp</option>
            <option value="Eigenes Online-Tool">Online-Formular auf der Seite</option>
            <option value="Externer Anbieter">Externer Anbieter (z. B. OpenTable)</option>
            <option value="Noch offen">Noch offen / weiß ich nicht</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="reservierung_details">Details zur Reservierung</label>
          <textarea
            id="reservierung_details"
            name="Reservierung – Details"
            rows={2}
            placeholder="E-Mail/Telefon für Reservierungen, Link zum Anbieter, Besonderheiten …"
          />
        </div>
      </fieldset>

      {/* --- Impressum & Datenschutz (rechtlich Pflicht) --- */}
      <fieldset className="angaben-group angaben-group--pflicht">
        <legend>
          <span className="ag-num">06</span> Impressum &amp; Datenschutz
          <span className="ag-pflicht">Pflicht für den Livegang</span>
        </legend>
        <p className="ag-hint">
          Ohne diese Angaben darf die Seite rechtlich nicht online gehen. Wenn du
          unsicher bist, schreib einfach rein, was du hast – den Rest klären wir.
        </p>
        <div className="ag-grid">
          <div className="field">
            <label htmlFor="veranstalter_name">Veranstalter / Firma</label>
            <input
              id="veranstalter_name"
              type="text"
              name="Veranstalter/Firma"
              placeholder="Name des Veranstalters oder der Firma"
            />
          </div>
          <div className="field">
            <label htmlFor="verantwortlich">Verantwortliche Person</label>
            <input
              id="verantwortlich"
              type="text"
              name="Verantwortliche Person"
              placeholder="Vor- und Nachname"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="anschrift">Anschrift (Sitz)</label>
          <textarea
            id="anschrift"
            name="Anschrift"
            rows={2}
            placeholder="Straße, Nr., PLZ, Ort, Land"
          />
        </div>
        <div className="ag-grid">
          <div className="field">
            <label htmlFor="impressum_email">E-Mail (Impressum)</label>
            <input
              id="impressum_email"
              type="email"
              name="Impressum-E-Mail"
              placeholder="kontakt@…"
            />
          </div>
          <div className="field">
            <label htmlFor="impressum_telefon">Telefon (Impressum)</label>
            <input
              id="impressum_telefon"
              type="tel"
              name="Impressum-Telefon"
              placeholder="+34 …"
            />
          </div>
          <div className="field">
            <label htmlFor="steuernr">USt-IdNr. / NIF (falls vorhanden)</label>
            <input
              id="steuernr"
              type="text"
              name="USt-IdNr/NIF"
              placeholder="optional"
            />
          </div>
          <div className="field">
            <label htmlFor="rechtsform">Rechtsform / Registernr. (optional)</label>
            <input
              id="rechtsform"
              type="text"
              name="Rechtsform/Register"
              placeholder="optional"
            />
          </div>
        </div>
      </fieldset>

      {/* --- Sonstiges --- */}
      <fieldset className="angaben-group">
        <legend>
          <span className="ag-num">07</span> Sonstiges
        </legend>
        <div className="field">
          <label htmlFor="sonstiges">Anmerkungen, Wünsche, Änderungen</label>
          <textarea
            id="sonstiges"
            name="Sonstiges"
            rows={3}
            placeholder="Alles, was dir sonst noch wichtig ist."
          />
        </div>
        <p className="ag-hint">
          <strong>Fotos &amp; Speisekarte als PDF?</strong> Schick sie uns gerne
          direkt per E-Mail an <a href={`mailto:${EMAIL}`}>{EMAIL}</a> oder per
          WhatsApp – hier im Formular geht nur Text.
        </p>
      </fieldset>

      {/* Honeypot gegen Spam */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      <input type="hidden" name="Eingereicht für" value="Oktoberfest Santa Ponsa 2026" />

      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Wird gesendet…" : "Angaben absenden"}{" "}
        <span className="btn-arrow">→</span>
      </button>

      {status === "error" && (
        <p className="form-error">
          Da ist etwas schiefgelaufen. Bitte versuch es erneut oder schreib an{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}

      <p className="form-note">
        Du musst nicht alles auf einmal ausfüllen – sende einfach, was du gerade
        hast. Du kannst das Formular so oft absenden, wie du möchtest.
      </p>
    </form>
  );
}
