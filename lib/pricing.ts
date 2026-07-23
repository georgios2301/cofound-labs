// Preise als REISE, nicht als Preisliste — Land & Expand für den lokalen Markt.
// Anker tief (günstiger Einstieg), gewachsen Werkzeug für Werkzeug, kleiner sticky Retainer.
// Siehe REDESIGN-PLAN.md §1b.

export type Stage = {
  step: string;
  name: string;
  price: string;
  kind: "Einstieg" | "einmalig" | "monatlich";
  desc: string;
};

export const STAGES: Stage[] = [
  {
    step: "01",
    name: "Digitalisierungs-Analyse",
    price: "kostenloses Erstgespräch",
    kind: "Einstieg",
    desc: "Wir schauen uns deinen Betrieb an, finden den größten Engpass und geben dir einen klaren Fahrplan — unverbindlich.",
  },
  {
    step: "02",
    name: "Website",
    price: "ab 199–399 €",
    kind: "einmalig",
    desc: "Dein Aushängeschild: modern, mobil, schnell live. Der leichte erste Schritt — kein großes Projekt, kein Risiko.",
  },
  {
    step: "03",
    name: "Werkzeug",
    price: "ab 900 €",
    kind: "einmalig",
    desc: "Ein Werkzeug nach dem anderen löst genau einen Engpass — Lohn, Buchung, Angebote. Du entscheidest, was als Nächstes kommt.",
  },
  {
    step: "04",
    name: "Betreuung",
    price: "ab 39 € / Monat",
    kind: "monatlich",
    desc: "Die Seite läuft, kleine Änderungen inklusive, Werkzeuge wachsen mit. Jederzeit kündbar, ohne Kleingedrucktes.",
  },
];

export const PRICING_NOTE =
  "Kein 5.000-€-Paket auf einen Schlag. Du startest günstig und wächst in dein Betriebssystem hinein — Schritt für Schritt, so wie es der Betrieb trägt.";
