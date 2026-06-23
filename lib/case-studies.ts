// Detaillierte Case-Study-Inhalte für /referenzen/[slug].
// Hinweis: Kennzahlen und Kundenstimmen sind aktuell illustrative Platzhalter
// ("erstmal ausgedacht") und sollen durch echte Projektdaten ersetzt werden.

export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string; // erscheint im Kicker, z. B. "Website · Local Business"
  lede: string;
  image: string;
  imageAlt: string;
  /** Pfad zur echten Live-Demo (statische Seite unter /public/case-studies). Optional – nicht jedes Projekt hat eine öffentliche Demo. */
  demoUrl?: string;
  meta: { label: string; value: string }[];
  sections: CaseStudySection[];
  kpis: { value: string; label: string }[];
  stack: string[];
  testimonial: { quote: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "baizar",
    title: "Baizar",
    tagline: "SaaS · Gastronomie",
    lede: "Gastronomie-SaaS-Plattform für die digitale Verwaltung von Speisekarten, Bestellungen und Tischreservierungen – mobil optimiert für den täglichen Gastro-Betrieb.",
    image: "/images/projects/baizar.png",
    imageAlt: "Baizar – Dashboard der Gastronomie-SaaS-Plattform",
    meta: [
      { label: "Branche", value: "Gastronomie · SaaS" },
      { label: "Leistung", value: "Produktentwicklung, Web App & Backend" },
      { label: "Plattform", value: "Web (responsive) + API" },
      { label: "Zeitraum", value: "laufend · seit 2024" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Gastronomiebetriebe jonglieren Speisekarten, Bestellungen und Reservierungen oft über getrennte Tools, Zettel und Telefon. Das kostet Zeit, führt zu Fehlern und macht spontane Änderungen – etwa ein ausverkauftes Gericht – unnötig mühsam.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Eine zentrale Plattform, die den Alltag im Gastro-Betrieb bündelt: schnell bedienbar auf dem Handy, auch im Stress mitten im Service, und flexibel genug für ganz unterschiedliche Betriebe.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Wir sind MVP-first gestartet: zuerst die digitale Speisekarte und der Bestellfluss, eng mit echten Betrieben getestet. Darauf aufbauend kamen Tischreservierungen, Echtzeit-Status und ein Betreiber-Dashboard dazu.",
          "Fundament ist eine saubere API, an die sich weitere Module anschließen lassen – die Plattform wächst mit den Anforderungen mit.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Digitale, in Echtzeit aktualisierbare Speisekarte",
          "Bestellverwaltung für den laufenden Service",
          "Tischreservierungen inkl. Übersicht für den Betrieb",
          "Mobil-optimiertes Betreiber-Dashboard",
          "Mehrbenutzer-Fähigkeit mit Rollen und Rechten",
          "Skalierbares Backend mit dokumentierter API",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Betriebe verwalten Karte, Bestellungen und Reservierungen an einem Ort. Änderungen sind in Sekunden live, Medienbrüche zwischen Zettel, Telefon und Tool entfallen.",
        ],
      },
    ],
    kpis: [
      { value: "1 Plattform", label: "statt mehrerer Insellösungen" },
      { value: "Sekunden", label: "bis Kartenänderungen live sind" },
      { value: "Mobile-first", label: "bedienbar mitten im Service" },
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    testimonial: {
      quote:
        "Speisekarte ändern, Reservierungen checken, Bestellungen sehen – alles auf dem Handy, mitten im Service. Genau das hat uns gefehlt.",
      author: "Betreiber",
      role: "Gastronomiebetrieb (Pilotkunde)",
    },
  },
  {
    slug: "kitchen-display-system",
    title: "Kitchen Display System",
    tagline: "Realtime · Foodtruck",
    lede: "Digitales Küchendisplay für einen Foodtruck: Echtzeit-Bestellanzeige, Status-Updates und nahtlose Kommunikation zwischen Kasse und Küche.",
    image: "/images/projects/kds.png",
    imageAlt: "Kitchen Display System – Küchendisplay mit Echtzeit-Bestellungen",
    meta: [
      { label: "Branche", value: "Gastronomie · Foodtruck" },
      { label: "Leistung", value: "Embedded Display & Realtime-System" },
      { label: "Plattform", value: "Display-Anwendung + Kassen-Anbindung" },
      { label: "Zeitraum", value: "2 Wochen · 2024" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Im engen Foodtruck liefen Bestellungen per Zuruf und Bon-Zettel von der Kasse in die Küche. Bei Andrang gingen Bestellungen unter, Reihenfolge und Status waren unklar – und Nachfragen kosteten genau dann Zeit, wenn keine war.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Ein klares Küchendisplay, das Bestellungen in Echtzeit anzeigt, den Status sichtbar macht und die Kommunikation zwischen Kasse und Küche entlastet – robust und ablenkungsarm genug für den Foodtruck-Alltag.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Wir haben ein schlankes Echtzeit-System gebaut: Die Kasse sendet Bestellungen, das Display zeigt sie sofort sortiert an, die Küche quittiert per Tap. Die Darstellung ist großformatig und auch aus Distanz und bei Sonne gut lesbar.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Echtzeit-Bestellanzeige direkt aus der Kasse",
          "Status-Workflow: neu → in Arbeit → fertig",
          "Synchronisierung zwischen Kasse und Küche",
          "Großformatige, ablenkungsarme Küchen-UI",
          "Bündelung der Positionen pro Bestellung",
          "Tolerant gegenüber kurzen Verbindungsabbrüchen",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Bestellungen gehen nicht mehr unter, die Reihenfolge ist eindeutig, und Kasse wie Küche sehen jederzeit denselben Stand. Gerade bei Stoßzeiten bringt das spürbar Ruhe in den Ablauf.",
        ],
      },
    ],
    kpis: [
      { value: "Echtzeit", label: "Bestellungen ohne Verzögerung" },
      { value: "0 Zettel", label: "papierlose Küche" },
      { value: "1 Tap", label: "Status-Update pro Bestellung" },
    ],
    stack: ["React", "TypeScript", "Realtime / WebSocket", "Vercel"],
    testimonial: {
      quote:
        "Kein Zuruf, kein Zettelchaos mehr – die Küche sieht sofort, was ansteht. Bei Andrang ist das Gold wert.",
      author: "Betreiber",
      role: "Foodtruck",
    },
  },
  {
    slug: "dokument-generator",
    title: "Dokument-Generator",
    tagline: "Automatisierung · Handwerk",
    lede: "Automatisierte Dokumentenerstellung für eine Schleiferei – individuelle Angebote, Lieferscheine und Rechnungen auf Knopfdruck, direkt aus dem Auftragssystem.",
    image: "/images/projects/dokumente.webp",
    imageAlt: "Dokument-Generator – automatisch erzeugte Angebote und Rechnungen",
    meta: [
      { label: "Branche", value: "Handwerk · Schleiferei" },
      { label: "Leistung", value: "Prozess-Automatisierung & PDF-Generator" },
      { label: "Plattform", value: "Web-Tool + PDF-Pipeline" },
      { label: "Zeitraum", value: "3 Wochen · 2024" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Angebote, Lieferscheine und Rechnungen wurden manuell in Office-Vorlagen getippt – fehleranfällig, zeitraubend und bei jedem Auftrag aufs Neue. Zahlendreher und uneinheitliche Dokumente waren die regelmäßige Folge.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Aus den vorhandenen Auftragsdaten auf Knopfdruck saubere, einheitliche Dokumente erzeugen – ohne Copy-Paste und ohne Vorlagen-Wirrwarr.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Wir haben die Auftragsdaten angebunden und eine PDF-Pipeline gebaut, die Angebote, Lieferscheine und Rechnungen aus einheitlichen, gebrandeten Vorlagen generiert. Positionen, Preise und Summen werden automatisch berechnet und übernommen.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Ein-Klick-Erzeugung von Angebot, Lieferschein und Rechnung",
          "Automatische Positions- und Summenberechnung",
          "Einheitliche, gebrandete PDF-Vorlagen",
          "Direkte Übernahme der Daten aus dem Auftragssystem",
          "Fortlaufende, lückenlose Nummerierung",
          "Archiv aller erzeugten Dokumente",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Dokumente entstehen in Sekunden statt Minuten – fehlerfrei und einheitlich. Die Verwaltung im Betrieb wird spürbar entlastet, und der Außenauftritt wirkt durchgängig professionell.",
        ],
      },
    ],
    kpis: [
      { value: "1 Klick", label: "vom Auftrag zum fertigen PDF" },
      { value: "Minuten → Sek.", label: "pro Dokument" },
      { value: "0 Tippfehler", label: "durch automatische Berechnung" },
    ],
    stack: ["TypeScript", "Node.js", "PDF-Generierung", "Vercel"],
    testimonial: {
      quote:
        "Früher habe ich jedes Angebot abgetippt. Heute ein Klick – und das Dokument stimmt. Das spart jede Woche Stunden.",
      author: "Inhaber",
      role: "Schleiferei",
    },
  },
  {
    slug: "kerstin-hundesalon",
    title: "Kerstins Hundesalon",
    tagline: "Website · Local Business",
    lede: "Conversion-starke Website für einen Hundesalon in Wuppertal – mit Online-Terminanfrage direkt per WhatsApp, Leistungs- und Preisübersicht und einem warmen, handgezeichneten Markenauftritt.",
    image: "/images/projects/kerstin-hundesalon.jpg",
    imageAlt: "Startseite der Website von Kerstins Hundesalon",
    demoUrl: "/case-studies/kerstin-hundesalon",
    meta: [
      { label: "Branche", value: "Hundepflege · Local Business" },
      { label: "Leistung", value: "Website, Branding & WhatsApp-Terminanfrage" },
      { label: "Ort", value: "Wuppertal" },
      { label: "Zeitraum", value: "3 Wochen · 2025" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Kerstin führt ihren Hundesalon mit viel Herzblut – online war davon aber kaum etwas zu sehen. Es gab nur einen knappen Google-Eintrag, Terminabsprachen liefen ausschließlich übers Telefon. Anrufe während der Arbeit am Hund blieben liegen, Rückrufe kosteten Zeit, und potenzielle Neukundinnen sprangen ab, bevor sie überhaupt eine Anfrage stellen konnten.",
          "Gesucht war keine große Agentur-Website, sondern eine schlanke Seite, die rund um die Uhr Anfragen entgegennimmt – ohne dass Kerstin dafür am Schreibtisch sitzen muss.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Drei Dinge standen im Vordergrund: Anfragen sollten ohne Hürde und direkt aufs Handy kommen, Leistungen und Preise auf einen Blick verständlich sein, und der Auftritt sollte die persönliche, warme Atmosphäre des Salons widerspiegeln.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "In einem kurzen Kennenlerngespräch haben wir die typischen Kundenfragen gesammelt und daraus die Seitenstruktur abgeleitet. Statt eines klassischen Kontaktformulars setzen wir auf einen WhatsApp-Deep-Link: Ein Klick öffnet einen vorbereiteten Chat mit Kerstin – die Hürde für eine Anfrage sinkt damit auf ein Minimum.",
          "Das Branding haben wir bewusst handgezeichnet gehalten, passend zur liebevollen, unkomplizierten Art des Salons. Gebaut ist alles mobile-first, weil über 80 % der Besucherinnen vom Smartphone kommen.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Online-Terminanfrage per WhatsApp – ein Klick statt Kontaktformular",
          "Übersichtliche Leistungs- und Preisliste für alle Salon-Angebote",
          "Warmer, handgezeichneter Markenauftritt mit eigener Bildsprache",
          "Konsequent mobile-first – optimiert für Anfragen unterwegs",
          "Schnelle Ladezeiten und technische SEO-Grundlagen für die lokale Suche",
          "Klare Anfahrt mit Karte und Öffnungszeiten",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Seit dem Launch landen Terminanfragen gebündelt in einem WhatsApp-Verlauf – planbar und ohne verpasste Anrufe. Die Seite lädt in unter einer Sekunde und rankt für die lokale Suche nach Hundepflege in Wuppertal weit oben.",
        ],
      },
    ],
    kpis: [
      { value: "< 1 s", label: "Ladezeit der Startseite" },
      { value: "+63 %", label: "mehr Terminanfragen im Quartal" },
      { value: "98/100", label: "Lighthouse Performance" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "WhatsApp Business", "Vercel", "Lokales SEO"],
    testimonial: {
      quote:
        "Endlich verpasse ich keine Anfrage mehr – die meisten Kundinnen schreiben mir einfach über WhatsApp, während ich am Hund arbeite.",
      author: "Kerstin",
      role: "Inhaberin, Kerstins Hundesalon",
    },
  },
  {
    slug: "bahnhof-varresbeck",
    title: "Biergarten Bahnhof Varresbeck",
    tagline: "Website · Gastronomie",
    lede: "Warme, rustikale One-Page-Website für den Biergarten im historischen Varresbecker Bahnhof – mit Live-Status „heute geöffnet?“, Veranstaltungskalender, Reservierungsanfrage sowie eigenen Event-, Impressums- und Datenschutz-Unterseiten.",
    image: "/images/projects/bahnhof-varresbeck-screenshot.jpg",
    imageAlt: "Startseite der Website des Biergartens Bahnhof Varresbeck",
    demoUrl: "/case-studies/bahnhof-varresbeck",
    meta: [
      { label: "Branche", value: "Gastronomie" },
      { label: "Leistung", value: "One-Page-Website, Live-Status & Events" },
      { label: "Ort", value: "Wuppertal-Varresbeck" },
      { label: "Zeitraum", value: "4 Wochen · 2025" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Der Biergarten im historischen Bahnhof Varresbeck lebt von Atmosphäre – und vom Wetter. Geöffnet wird saisonal und je nach Lage, was Gäste regelmäßig vor dieselbe Frage stellte: Hat heute überhaupt offen? Informationen verteilten sich über verschiedene Social-Media-Posts, Veranstaltungen gingen darin unter, und Reservierungen waren umständlich.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Die Seite sollte eine einzige, verlässliche Anlaufstelle werden: sofort erkennbar, ob geöffnet ist, alle Events an einem Ort, eine einfache Reservierungsmöglichkeit – und ein Auftritt, der die rustikale Wärme des Ortes transportiert.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Kernstück ist ein Live-Status „heute geöffnet?“, der über eine kleine serverlose API gesteuert wird und reguläre Öffnungszeiten sowie spontane Änderungen berücksichtigt. So sehen Gäste auf den ersten Blick, ob sich der Weg lohnt.",
          "Rundherum haben wir einen Veranstaltungskalender mit eigenen Event-Detailseiten, eine Speise- und Getränkekarte sowie eine Reservierungsanfrage gebaut. Umgesetzt ist alles als installierbare PWA – Stammgäste können die Seite wie eine App auf den Homescreen legen.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Live-Status „heute geöffnet?“ über eine serverlose API",
          "Veranstaltungskalender mit eigenen Event-Detailseiten",
          "Digitale Speise- und Getränkekarte, jederzeit aktualisierbar",
          "Reservierungsanfrage direkt über die Seite",
          "Installierbar als PWA inklusive eigenem App-Icon",
          "Eigene Unterseiten für Events, Impressum und Datenschutz",
          "Warmer, rustikaler Auftritt passend zum historischen Bahnhof",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Gäste haben jetzt eine verlässliche Quelle für Öffnung und Programm. Die gebündelte Event-Seite erhöht die Sichtbarkeit der Veranstaltungen, und Reservierungsanfragen kommen strukturiert herein – statt verstreut über Kommentare und Direktnachrichten.",
        ],
      },
    ],
    kpis: [
      { value: "Live", label: "Öffnungsstatus in Echtzeit" },
      { value: "+45 %", label: "mehr Reservierungsanfragen" },
      { value: "100/100", label: "Lighthouse Best Practices" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Serverless API", "PWA", "Vercel"],
    testimonial: {
      quote:
        "Die häufigste Frage unserer Gäste war immer ‚Hat heute offen?‘ – die beantwortet die Seite jetzt von selbst. Und unsere Events finden endlich alle an einem Ort.",
      author: "Team Bahnhof Varresbeck",
      role: "Biergarten Bahnhof Varresbeck",
    },
  },
  {
    slug: "zen",
    title: "ZEN",
    tagline: "Website · E-Commerce",
    lede: "Editorial gedachtes Redesign für ein Schmuck-Label aus Berlin: ein ruhiger, hochwertiger Online-Shop für handgefertigte Choker – mit klarer Produktinszenierung, Schnellkauf und einem Warenkorb, der zum Abschluss führt.",
    image: "/images/projects/zen.jpg",
    imageAlt: "ZEN – Redesign des Online-Shops für handgefertigten Schmuck",
    demoUrl: "/case-studies/zen",
    meta: [
      { label: "Branche", value: "E-Commerce · Schmuck" },
      { label: "Leistung", value: "Website-Redesign & Shop-UI" },
      { label: "Plattform", value: "Web (responsive)" },
      { label: "Zeitraum", value: "2 Wochen · 2026" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "ZEN fertigt filigrane Choker und reduzierten Schmuck in Handarbeit in Berlin. Das Produkt ist hochwertig und mit Sorgfalt gemacht – der bestehende Auftritt transportierte diese Ruhe und Wertigkeit aber nicht. Produktfotos, Preise und Vertrauenssignale wirkten beliebig, und der Weg vom ersten Blick bis in den Warenkorb war länger als nötig.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Ein Auftritt, der sich so anfühlt wie die Stücke selbst: leise, edel, aufgeräumt. Gleichzeitig sollte die Seite verkaufen – mit klarer Produktübersicht, einem schnellen Weg in den Warenkorb und Argumenten (handgefertigt, nickelfrei, Versand), die genau dort stehen, wo die Kaufentscheidung fällt.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Wir haben den Shop als editoriales Erlebnis neu gedacht: eine warme, gedeckte Farbwelt, eine Serifen-Headline für den Charakter und viel Ruhe im Layout. Jedes Produkt lässt sich direkt aus der Übersicht in den Warenkorb legen – ohne Umweg über die Detailseite.",
          "Den Kaufabschluss begleitet ein Warenkorb-Drawer mit Fortschrittsanzeige zum kostenlosen Versand, der sanft zur Kasse führt. Umgesetzt ist alles mobile-first und mit dezenten Scroll-Animationen, die das Stöbern lebendig halten, ohne aufdringlich zu sein.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Editorialer Markenauftritt mit eigener Typo- und Farbwelt",
          "Produktübersicht mit Schnellkauf direkt aus der Kachel",
          "Detailseite mit Galerie, Varianten- und Mengenauswahl",
          "Warenkorb-Drawer inkl. Fortschritt zum kostenlosen Versand",
          "Vertrauenssignale: handgefertigt, nickelfrei, Bewertungen",
          "Newsletter-Anmeldung mit Gutschein als Conversion-Anker",
          "Konsequent mobile-first mit dezenten Scroll-Animationen",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Aus einem austauschbaren Shop wurde ein eigenständiger Markenauftritt, der die Handarbeit spürbar macht und gleichzeitig zum Kauf führt. Produkte sind in wenigen Sekunden im Warenkorb, und der Weg zur Kasse ist klar – ein Auftritt, der die Wertigkeit der Stücke endlich auch online zeigt.",
        ],
      },
    ],
    kpis: [
      { value: "1 Klick", label: "vom Stöbern in den Warenkorb" },
      { value: "Mobile-first", label: "über 80 % der Besucherinnen" },
      { value: "< 1 s", label: "Ladezeit der Startseite" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI-Design", "Vercel"],
    testimonial: {
      quote:
        "Endlich sieht der Shop so aus, wie sich meine Stücke anfühlen. Ruhig, hochwertig – und Kundinnen finden viel schneller in den Warenkorb.",
      author: "Inhaberin",
      role: "ZEN (Schmuck-Label)",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
