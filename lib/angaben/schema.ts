// Datengetriebene Definition der Angaben-Formulare (Akquise: Kunden reichen
// fehlende Website-Inhalte nach). EIN Schema pro Kunde/Projekt speist sowohl
// das öffentliche Mehrschritt-Formular (/angaben/<slug>) als auch die Anzeige
// im Dashboard-Modul „Angaben". Neues Kunden-Formular = neuer Eintrag in
// FORMS unten. Antworten werden als JSON (Feld-Name -> Wert) gespeichert.

export type FieldType = "text" | "email" | "tel" | "url" | "textarea" | "select" | "files";

export interface Field {
  name: string; // Schlüssel in den gespeicherten Antworten
  label: string;
  type: FieldType;
  placeholder?: string;
  help?: string;
  options?: string[]; // nur bei type "select"
  half?: boolean; // im Zwei-Spalten-Raster (kurze Felder)
  accept?: string; // nur bei type "files": erlaubte Dateitypen (input accept)
}

// Gespeicherte Datei im Antwort-JSON (bei type "files": Array davon).
export interface UploadedFile {
  path: string; // Storage-Pfad im Bucket angaben-uploads
  name: string; // Original-Dateiname
  size: number;
  type: string; // MIME-Type
}

export interface Step {
  key: string;
  title: string;
  intro?: string;
  pflicht?: boolean; // rechtlich erforderlich (Impressum/Datenschutz)
  fields: Field[];
}

export interface AngabenForm {
  slug: string;
  label: string; // Klartext-Name fürs Dashboard
  headline: string;
  intro: string;
  steps: Step[];
}

const OKTOBERFEST: AngabenForm = {
  slug: "oktoberfest-santa-ponsa",
  label: "Oktoberfest Santa Ponsa 2026",
  headline: "Diese Angaben fehlen\nnoch für den Livegang",
  intro:
    "Hallo Diana! Deine Website steht schon – es fehlen nur noch ein paar Inhalte, damit wir sie online stellen können. Trag hier ein, was du hast, am Handy oder am PC. Dein Fortschritt wird automatisch gespeichert: Du kannst jederzeit pausieren und später weitermachen.",
  steps: [
    {
      key: "ort",
      title: "Veranstaltungsort & Anfahrt",
      fields: [
        {
          name: "veranstaltungsadresse",
          label: "Genaue Veranstaltungsadresse",
          type: "textarea",
          placeholder: "Straße, Nr., PLZ, Santa Ponsa – wo genau findet das Fest statt?",
        },
        {
          name: "anfahrt",
          label: "Anfahrt, Parken & Shuttle",
          type: "textarea",
          placeholder: "Parkmöglichkeiten, Shuttle-Service, Anfahrt mit Bus/Taxi …",
        },
      ],
    },
    {
      key: "kontakt",
      title: "Kontakt & Social Media",
      fields: [
        { name: "kontakt_email", label: "Kontakt-E-Mail (für Gäste)", type: "email", placeholder: "info@…", half: true },
        { name: "kontakt_telefon", label: "Telefon (für Gäste)", type: "tel", placeholder: "+34 …", half: true },
        { name: "instagram", label: "Instagram-Link", type: "url", placeholder: "https://instagram.com/…", half: true },
        { name: "facebook", label: "Facebook-Link", type: "url", placeholder: "https://facebook.com/…", half: true },
        { name: "tiktok", label: "TikTok-Link", type: "url", placeholder: "https://tiktok.com/@…", half: true },
      ],
    },
    {
      key: "programm",
      title: "Programm & Musik",
      fields: [
        {
          name: "programm",
          label: "Auftrittszeiten / Tagesprogramm",
          type: "textarea",
          placeholder: "Welche Band spielt an welchem Tag / zu welcher Uhrzeit? Sonderprogramm?",
        },
        {
          name: "band_lola",
          label: "Band Lola – Kurzbeschreibung",
          type: "textarea",
          placeholder: "Ein paar Sätze zur Band Lola (die anderen drei Bands sind schon fertig).",
        },
        {
          name: "dirndl_contest",
          label: "Dirndl-Contest – Teilnahme & Ablauf",
          type: "textarea",
          placeholder: "Wie kann man teilnehmen? Wann? Preise?",
        },
      ],
    },
    {
      key: "speisen",
      title: "Speisen & Reservierung",
      fields: [
        {
          name: "speisekarte",
          label: "Speisekarte (Gerichte, Getränke, ggf. Preise)",
          type: "textarea",
          placeholder: "z. B.\nHaxe – 18 €\nBrezn – 4 €\nMaß Bier – 11 €\n…",
        },
        {
          name: "speisekarte_dateien",
          label: "Oder Speisekarte als Foto / PDF hochladen",
          type: "files",
          accept: "image/*,application/pdf",
          help: "Bilder (JPG, PNG) oder PDF – mehrere möglich, max. 20 MB pro Datei.",
        },
        {
          name: "reservierung_art",
          label: "Wie sollen Gäste reservieren?",
          type: "select",
          options: [
            "Per E-Mail",
            "Per Telefon",
            "Per WhatsApp",
            "Online-Formular auf der Seite",
            "Externer Anbieter (z. B. OpenTable)",
            "Noch offen / weiß ich nicht",
          ],
        },
        {
          name: "reservierung_details",
          label: "Details zur Reservierung",
          type: "textarea",
          placeholder: "E-Mail/Telefon für Reservierungen, Link zum Anbieter, Besonderheiten …",
        },
      ],
    },
    {
      key: "impressum",
      title: "Impressum & Datenschutz",
      pflicht: true,
      intro:
        "Ohne diese Angaben darf die Seite rechtlich nicht online gehen. Wenn du unsicher bist, schreib einfach rein, was du hast – den Rest klären wir.",
      fields: [
        { name: "veranstalter", label: "Veranstalter / Firma", type: "text", placeholder: "Name des Veranstalters oder der Firma", half: true },
        { name: "verantwortlich", label: "Verantwortliche Person", type: "text", placeholder: "Vor- und Nachname", half: true },
        { name: "anschrift", label: "Anschrift (Sitz)", type: "textarea", placeholder: "Straße, Nr., PLZ, Ort, Land" },
        { name: "impressum_email", label: "E-Mail (Impressum)", type: "email", placeholder: "kontakt@…", half: true },
        { name: "impressum_telefon", label: "Telefon (Impressum)", type: "tel", placeholder: "+34 …", half: true },
        { name: "steuernr", label: "USt-IdNr. / NIF (falls vorhanden)", type: "text", placeholder: "optional", half: true },
        { name: "rechtsform", label: "Rechtsform / Registernr. (optional)", type: "text", placeholder: "optional", half: true },
      ],
    },
    {
      key: "sonstiges",
      title: "Sonstiges",
      fields: [
        {
          name: "sonstiges",
          label: "Anmerkungen, Wünsche, Änderungen",
          type: "textarea",
          placeholder: "Alles, was dir sonst noch wichtig ist.",
        },
      ],
    },
  ],
};

const FORMS: Record<string, AngabenForm> = {
  [OKTOBERFEST.slug]: OKTOBERFEST,
};

export function getAngabenForm(slug: string): AngabenForm | null {
  return FORMS[slug] ?? null;
}

/** Alle Felder eines Formulars flach (für Anzeige/Validierung). */
export function allFields(form: AngabenForm): Field[] {
  return form.steps.flatMap((s) => s.fields);
}

/** Label zu einem gespeicherten Antwort-Schlüssel (fürs Dashboard). */
export function fieldLabel(form: AngabenForm, name: string): string {
  return allFields(form).find((f) => f.name === name)?.label ?? name;
}
