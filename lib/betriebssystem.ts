// Das Betriebssystem in vier Ebenen + die real gebauten Werkzeuge.
// Kern-Narrativ des Redesigns (siehe REDESIGN-PLAN.md §2, Sektion BetriebssystemPillars).

export type Pillar = {
  icon: string; // lucide-Key, gemappt in der Seite
  title: string;
  text: string;
  points: string[];
};

export const PILLARS: Pillar[] = [
  {
    icon: "layout",
    title: "Aushängeschild",
    text: "Die Website als Schaufenster nach außen — schnell, mobil, seriös. Der Einstieg, der neue Kunden bringt.",
    points: ["Individuelles Design statt Baukasten", "Mobil zuerst, unter 1 s geladen", "CMS & Änderungen als Erweiterung"],
  },
  {
    icon: "wrench",
    title: "Werkzeuge",
    text: "Digitale Werkzeuge nach innen, die genau den Engpass deines Betriebs lösen — kein starrer Modul-Katalog.",
    points: ["Maßgeschneidert auf deinen Ablauf", "Modul für Modul gewachsen", "Lohn, Buchung, Angebote, Dienstpläne …"],
  },
  {
    icon: "headset",
    title: "Betreuung",
    text: "Ein fester Ansprechpartner, der den Betrieb versteht. Die Seite läuft, Werkzeuge werden weiterentwickelt.",
    points: ["Hosting, Backups, kleine Änderungen", "Ein Draht zu dem, der baut", "Jederzeit kündbar, kein Kleingedrucktes"],
  },
  {
    icon: "shield",
    title: "Datenhoheit",
    text: "DSGVO ernst genommen: lokale Verarbeitung wo möglich, EU-Hosting, keine unnötigen Fremd-Clouds.",
    points: ["EU-Hosting, sensible Daten lokal", "Voller Code-Besitz nach Projektende", "Datenschutzfreundlich gebaut"],
  },
];

export type Werkzeug = { name: string; desc: string; betrieb: string };

// Real gebaute Werkzeuge (aus den Case Studies) — Beleg der Bandbreite, kein Produktkatalog.
export const WERKZEUGE: Werkzeug[] = [
  { name: "Lohnzettel-Verteiler", desc: "Sammel-PDF hochladen, jeder Mitarbeiter sieht nur seine Abrechnung — auf eigenem EU-Server.", betrieb: "Biergarten Varresbeck" },
  { name: "Angebots-Generator", desc: "Angebote, Lieferscheine, Rechnungen auf Knopfdruck im Firmenlayout — statt abtippen.", betrieb: "H&S Handwerk & Service" },
  { name: "Buchungs- & Reservierungstool", desc: "Reservierungen strukturiert entgegennehmen statt verstreut über Anrufe und Nachrichten.", betrieb: "Oktoberfest Santa Ponsa" },
  { name: "Onboarding & Putzpläne", desc: "Interne Abläufe digital: Öffnen/Schließen, Onboarding neuer Kräfte, Dienst- und Putzpläne.", betrieb: "Biergarten Varresbeck" },
  { name: "Kitchen Display System", desc: "Bestellungen in Echtzeit von der Kasse in die Küche — statt Bons und Zuruf im Stress.", betrieb: "Foodtruck" },
  { name: "EÜR-Buchhaltungs-Dashboard", desc: "Belege buchen sich per Mail-Parsing selbst in eine laufende Einnahmenüberschussrechnung.", betrieb: "E-Commerce" },
];
