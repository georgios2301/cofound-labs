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
  /** Gruppierung für /referenzen und die Projekte-Sektion. */
  kind: "software" | "website";
  lede: string;
  /** Screenshot optional – fehlt er, rendern die Seiten den .ph-Platzhalter. */
  image?: string;
  imageAlt?: string;
  /** Kompakte Teaser-Struktur für die Projekte-Sektion der Homepage. */
  teaser?: { about: string; task: string; facts: string[] };
  /** Pfad zur echten Live-Demo (statische Seite unter /public/case-studies). Optional – nicht jedes Projekt hat eine öffentliche Demo. */
  demoUrl?: string;
  meta: { label: string; value: string }[];
  sections: CaseStudySection[];
  kpis: { value: string; label: string }[];
  stack: string[];
  /** Optional – nur setzen, wenn ein echtes (freigegebenes) Zitat vorliegt. */
  testimonial?: { quote: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nfc-loyalty-plattform",
    title: "NFC-Loyalty-Plattform",
    tagline: "SaaS · NFC",
    kind: "software",
    lede: "Multi-Tenant-SaaS für Loyalty und Reaktivierung in lokalen Betrieben: fälschungssicherer Check-in per NFC-Chip, Treuekarte im Apple- und Google-Wallet und ein Operator-Dashboard mit echten Kennzahlen – von der Konzeption bis zum Deployment eigenverantwortlich umgesetzt.",
    teaser: {
      about:
        "Digitale Treuekarte statt Papier-Stempelkarte: Gäste checken per NFC-Chip ein, die Karte liegt im Handy-Wallet, und der Betrieb erkennt inaktive Kunden, bevor sie ganz wegbleiben.",
      task: "Konzeption, Architektur, Fullstack-Entwicklung und Deployment der gesamten Plattform – eigenverantwortlich.",
      facts: ["NTAG424 DNA · AES-128/CMAC", "Apple & Google Wallet mit Push", "Mandantensicher per Row-Level-Security"],
    },
    meta: [
      { label: "Branche", value: "Gastronomie & Dienstleister · SaaS" },
      { label: "Leistung", value: "Konzeption, Architektur, Fullstack & Betrieb" },
      { label: "Plattform", value: "Web-App + NFC + Apple/Google Wallet" },
      { label: "Zeitraum", value: "laufend" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Papier-Stempelkarten gehen verloren, lassen sich beliebig fälschen und verraten dem Betrieb nichts: Wer kommt wie oft? Wer war lange nicht mehr da? Lokale Betriebe verlieren Stammkunden oft unbemerkt – es fehlt schlicht das Werkzeug, Wiederkehr zu messen und inaktive Kunden gezielt zurückzuholen.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Eine Treue- und Reaktivierungsplattform, die mehrere Betriebe gleichzeitig bedient – mit strikt getrennten Daten pro Betrieb, einem Check-in, der sich nicht fälschen lässt, und einer Treuekarte, die Kunden immer dabei haben: im Wallet ihres Smartphones.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Das Fundament ist eine Fullstack-Anwendung mit Next.js (App Router) und Supabase: PostgreSQL, Auth und Row-Level-Security sorgen dafür, dass jeder Betrieb ausschließlich seine eigenen Kunden und Kennzahlen sieht – Mandantentrennung auf Datenbank-Ebene statt im Anwendungscode.",
          "Der Check-in läuft über NTAG424-DNA-Chips: Jeder Scan erzeugt eine kryptografische Signatur (AES-128/CMAC), die serverseitig geprüft wird. Kopierte oder abgespielte Chips fliegen auf – der Check-in ist fälschungssicher.",
          "Die Treuekarte selbst liegt im Apple Wallet oder Google Wallet und aktualisiert sich per Push (APNs bzw. Google Wallet API): Neuer Stempel, neue Prämie – die Karte im Handy ist immer aktuell. Deployment läuft über Vercel mit Preview-Branches; alle User-Flows (Check-in, Wallet-Pass, Reaktivierung) sind systematisch inklusive Edge-Cases und cross-device auf iOS und Android geprüft.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Multi-Tenant-Architektur mit Row-Level-Security zur mandantensicheren Datentrennung",
          "Fälschungssicherer NFC-Check-in mit NTAG424-DNA-Chips und AES-128/CMAC-Signaturprüfung",
          "Treuekarten in Apple Wallet und Google Wallet inkl. Push-Aktualisierung der Pässe",
          "Operator-Dashboard mit Besuchsfrequenz, ARPU und Reaktivierungs-Kennzahlen",
          "Erkennung inaktiver Kunden über Median-Besuchsintervalle",
          "DSGVO-konforme Verarbeitung, EU-Hosting und technische Dokumentation der Architektur",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Betriebe bekommen eine Treuekarte, die Kunden wirklich benutzen – weil sie im Wallet liegt statt im Portemonnaie zu vergilben. Und zum ersten Mal echte Zahlen dazu: Wer kommt wieder, wer bleibt weg, und welche Reaktivierung wirkt.",
        ],
      },
    ],
    kpis: [
      { value: "Multi-Tenant", label: "ein System, viele Betriebe – sauber getrennt" },
      { value: "AES-128/CMAC", label: "fälschungssicherer NFC-Check-in" },
      { value: "EU-Hosting", label: "DSGVO-konform verarbeitet" },
    ],
    stack: ["Next.js", "Supabase", "PostgreSQL", "Row-Level-Security", "NTAG424 DNA", "Apple/Google Wallet", "Vercel"],
  },
  {
    slug: "lohnabrechnungs-verteiler",
    title: "Lohnabrechnungs-Verteiler",
    tagline: "Individualsoftware · HR",
    kind: "software",
    lede: "Automatisierte, DSGVO-konforme Verteilung von Lohnabrechnungen: OCR trennt das Sammel-PDF, ordnet jede Abrechnung dem richtigen Mitarbeiter zu, und ein Self-Service-Portal ersetzt das händische Splitten und Versenden – komplett auf eigenem EU-Server, ohne Cloud-Dienste.",
    teaser: {
      about:
        "Jeden Monat ein Sammel-PDF mit allen Lohnabrechnungen – früher händisch gesplittet und einzeln gemailt. Heute: hochladen, fertig. Jeder Mitarbeiter sieht im Portal genau seine eigenen Abrechnungen.",
      task: "Anforderungsklärung, Entwicklung und Betrieb auf eigener EU-Infrastruktur.",
      facts: ["OCR statt Handarbeit (Tesseract)", "Eigener EU-Server statt Cloud", "Monatlich produktiv im Einsatz"],
    },
    meta: [
      { label: "Branche", value: "HR · Lohnbuchhaltung" },
      { label: "Leistung", value: "Anforderungsklärung, Entwicklung & Betrieb" },
      { label: "Plattform", value: "OCR-Pipeline + Self-Service-Portal, EU-Server" },
      { label: "Status", value: "produktiv · monatlich im Einsatz" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Die Lohnabrechnungen kamen als ein großes Sammel-PDF – und wurden dann händisch zerlegt: pro Mitarbeiter die richtigen Seiten heraussuchen, einzeln speichern, einzeln per E-Mail verschicken. Fehleranfällig, zeitraubend und bei Gehaltsdaten besonders heikel: Eine falsch adressierte Mail genügt, und sensible Daten liegen beim falschen Empfänger.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Ein Ablauf, bei dem niemand mehr Seiten sortiert: Sammel-PDF hochladen, die Software erledigt Trennung und Zuordnung – und jeder Mitarbeiter holt sich seine Abrechnungen selbst, sieht dabei aber ausschließlich die eigenen. Und das Ganze so datenschutzfreundlich wie möglich.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Kern ist eine lokale OCR-Pipeline auf Basis von Tesseract: Sie erkennt Namen und Personalnummern, trennt das Sammel-PDF automatisch in einzelne Abrechnungen und legt sie in den richtigen Mitarbeiter-Ordnern ab. Darauf sitzt ein Self-Service-Portal mit lokalem Login und strikter Zugriffsbeschränkung.",
          "Die Architektur ist bewusst datenschutzfreundlich: Gehaltsdaten verlassen das System nicht – keine Cloud-Dienste, Verarbeitung und Hosting laufen auf einem eigenen EU-Server (Hetzner). Die Erkennungs- und Zuordnungslogik ist systematisch gegen Edge-Cases geprüft: mehrseitige Abrechnungen, OCR-Fehllesungen, Namensdubletten.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Automatische Trennung von Sammel-Lohn-PDFs per OCR (Tesseract)",
          "Zuordnung zu Mitarbeiter-Ordnern anhand erkannter Namen bzw. Personalnummern",
          "Self-Service-Portal mit lokalem Login – jeder sieht nur die eigenen Abrechnungen",
          "Verarbeitung und Hosting vollständig auf eigenem EU-Server (Hetzner), ohne Cloud-Dienste",
          "Systematische Prüfung der Zuordnungslogik inkl. Edge-Cases",
          "Technische Dokumentation und Übergabe für den produktiven Einsatz",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Aus einem manuellen, fehleranfälligen Prozess wurde eine nachvollziehbare Pipeline: Das Tool läuft produktiv und verteilt jeden Monat die Lohnabrechnungen – ohne händisches Splitten, ohne Mail-Risiko, ohne dass Gehaltsdaten das eigene System verlassen.",
        ],
      },
    ],
    kpis: [
      { value: "1 Upload", label: "statt händischem Splitten & Mailen" },
      { value: "0 Cloud", label: "Gehaltsdaten bleiben auf dem EU-Server" },
      { value: "Monatlich", label: "produktiv im Einsatz" },
    ],
    stack: ["Tesseract OCR", "PDF-Pipeline", "Self-Service-Portal", "Hetzner (EU)", "Lokale Auth"],
  },
  {
    slug: "euer-buchhaltungs-dashboard",
    title: "EÜR-Buchhaltungs-Dashboard",
    tagline: "Automatisierung · Buchhaltung",
    kind: "software",
    lede: "Buchhaltungs-Dashboard zur Einnahmenüberschussrechnung: Belege und Rechnungen kommen per Mail-Parsing automatisch ins System, n8n orchestriert die Pipeline, und ein Next.js-Dashboard zeigt die laufende EÜR – statt händischer Tabellenpflege.",
    teaser: {
      about:
        "Belege von Vinted, AliExpress & Co. landen im Mail-Postfach – und buchen sich von dort selbst: Die relevanten Daten werden extrahiert, zugeordnet und laufen live in die EÜR-Übersicht.",
      task: "Datenmodell, Mail-Parsing, Workflow-Automatisierung und Dashboard – von der Belegerfassung bis zur Auswertung.",
      facts: ["Mail-Parsing statt Abtippen", "n8n-Workflow-Automatisierung", "Stornos & Teilerstattungen abgebildet"],
    },
    meta: [
      { label: "Branche", value: "E-Commerce · Buchhaltung" },
      { label: "Leistung", value: "Datenmodell, Automatisierung & Dashboard" },
      { label: "Plattform", value: "Next.js-Dashboard + n8n-Pipeline" },
      { label: "Zeitraum", value: "laufend" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Belege sammeln, Rechnungen abtippen, Tabellen pflegen: Die Buchhaltung für den E-Commerce-Verkauf über Plattformen wie Vinted und AliExpress lief komplett von Hand. Jede Bestellung, jede Erstattung, jeder Storno musste einzeln erfasst werden – aufwendig und fehleranfällig.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Eine Pipeline, die Belege dort abholt, wo sie ankommen – im Mail-Postfach – und daraus ohne Handarbeit eine laufende, korrekte Einnahmenüberschussrechnung macht. Inklusive der unbequemen Fälle: Stornierungen, Rücksendungen, Teilerstattungen.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Eingehende E-Mails werden automatisch ausgewertet: Ein Mail-Parser extrahiert die relevanten Buchungsdaten aus den unterschiedlichen Formaten der Plattformen, n8n übernimmt Ingestion und Workflow-Automatisierung.",
          "Das Datenmodell in Supabase (PostgreSQL) bildet Einnahmen, Ausgaben und Belegzuordnung ab – inklusive Sonderfällen wie Stornierungen und Rücksendungen. Die Parsing- und Zuordnungslogik ist systematisch gegen Edge-Cases geprüft: abweichende Mail-Formate, Teilerstattungen, Doppelbuchungen. Ausgewertet wird alles über ein Next.js-Dashboard mit laufender EÜR-Übersicht.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "Automatisiertes Einlesen von Belegen und Rechnungen per Mail-Parsing (Vinted, AliExpress u. a.)",
          "Ingestion und Workflow-Automatisierung mit n8n",
          "Datenmodell in Supabase: Einnahmen, Ausgaben, Belegzuordnung inkl. Stornos und Rücksendungen",
          "Next.js-Dashboard mit laufender EÜR-Übersicht statt manueller Tabellenpflege",
          "Systematische Prüfung der Parsing-Logik inkl. Edge-Cases (Teilerstattungen, Doppelbuchungen)",
          "Technische Dokumentation von Datenmodell und Abläufen",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Aus verstreuten Belegen wurde eine automatisierte, nachvollziehbare Buchhaltungs-Pipeline: Die EÜR-Übersicht ist jederzeit aktuell, ohne dass jemand Belege sammelt oder Tabellen pflegt – und Sonderfälle wie Teilerstattungen landen korrekt in der Auswertung statt als Fehler in der Steuer.",
        ],
      },
    ],
    kpis: [
      { value: "Automatisch", label: "vom Mail-Eingang zur Buchung" },
      { value: "Live-EÜR", label: "statt manueller Tabellenpflege" },
      { value: "Edge-Cases", label: "Stornos & Teilerstattungen abgebildet" },
    ],
    stack: ["Next.js", "Supabase", "PostgreSQL", "n8n", "Mail-Parsing", "Vercel"],
  },
  {
    slug: "baizar",
    title: "Baizar",
    tagline: "SaaS · Gastronomie",
    kind: "software",
    teaser: {
      about:
        "Interne App, die den Bestell- und Beschaffungsprozess in der Gastronomie digitalisiert – ein zentraler, nachvollziehbarer Ablauf statt Zettel, Zuruf und unübersichtlicher Bestellungen.",
      task: "Fullstack-Umsetzung mit Next.js und Supabase, iterativ direkt mit den operativen Nutzern entwickelt.",
      facts: ["Täglich produktiv im Einsatz", "Lieferanten & Artikel strukturiert", "Next.js + Supabase"],
    },
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
    kind: "software",
    teaser: {
      about:
        "Digitales Küchendisplay für einen Foodtruck: Bestellungen laufen in Echtzeit von der Kasse in die Küche – statt Bons auf Papier und Zuruf im Stress.",
      task: "Konzeption und Umsetzung des Realtime-Systems inklusive Kassen-Anbindung.",
      facts: ["Echtzeit statt Zettel", "1 Tap pro Status-Update", "In 2 Wochen produktiv"],
    },
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
    kind: "software",
    teaser: {
      about:
        "Angebote, Lieferscheine und Rechnungen auf Knopfdruck – automatisch aus den Auftragsdaten eines Handwerksbetriebs erzeugt, statt händisch getippt und formatiert.",
      task: "Anforderungsklärung, PDF-Pipeline und Umsetzung bis zur produktiven Nutzung.",
      facts: ["1 Klick pro Dokument", "0 Tippfehler durch Berechnung", "Minuten → Sekunden"],
    },
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
    slug: "hundesalon",
    title: "Katrins Hundesalon",
    tagline: "Website · Local Business",
    kind: "website",
    lede: "Conversion-starke Website für einen Hundesalon in Wuppertal – mit Online-Terminanfrage direkt per WhatsApp, Leistungs- und Preisübersicht und einem warmen, handgezeichneten Markenauftritt.",
    image: "/images/projects/hundesalon.jpg",
    imageAlt: "Startseite der Website von Katrins Hundesalon",
    demoUrl: "/case-studies/hundesalon",
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
          "Katrin führt ihren Hundesalon mit viel Herzblut – online war davon aber kaum etwas zu sehen. Es gab nur einen knappen Google-Eintrag, Terminabsprachen liefen ausschließlich übers Telefon. Anrufe während der Arbeit am Hund blieben liegen, Rückrufe kosteten Zeit, und potenzielle Neukundinnen sprangen ab, bevor sie überhaupt eine Anfrage stellen konnten.",
          "Gesucht war keine große Agentur-Website, sondern eine schlanke Seite, die rund um die Uhr Anfragen entgegennimmt – ohne dass Katrin dafür am Schreibtisch sitzen muss.",
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
          "In einem kurzen Kennenlerngespräch haben wir die typischen Kundenfragen gesammelt und daraus die Seitenstruktur abgeleitet. Statt eines klassischen Kontaktformulars setzen wir auf einen WhatsApp-Deep-Link: Ein Klick öffnet einen vorbereiteten Chat mit Katrin – die Hürde für eine Anfrage sinkt damit auf ein Minimum.",
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
      author: "Katrin",
      role: "Inhaberin, Katrins Hundesalon",
    },
  },
  {
    slug: "biergarten-varresbeck",
    title: "Biergarten Varresbeck",
    tagline: "Website · Gastronomie",
    kind: "website",
    lede: "Warme, rustikale One-Page-Website für den Biergarten in einem historischen Bahnhofsgebäude – mit Live-Status „heute geöffnet?“, Veranstaltungskalender, Reservierungsanfrage sowie eigenen Event-, Impressums- und Datenschutz-Unterseiten.",
    image: "/images/projects/biergarten-varresbeck.jpg",
    imageAlt: "Startseite der Website des Biergartens Varresbeck",
    demoUrl: "/case-studies/biergarten-varresbeck",
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
          "Der Biergarten Varresbeck lebt von Atmosphäre – und vom Wetter. Geöffnet wird saisonal und je nach Lage, was Gäste regelmäßig vor dieselbe Frage stellte: Hat heute überhaupt offen? Informationen verteilten sich über verschiedene Social-Media-Posts, Veranstaltungen gingen darin unter, und Reservierungen waren umständlich.",
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
          "Warmer, rustikaler Auftritt passend zum historischen Gebäude",
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
      author: "Team Biergarten Varresbeck",
      role: "Biergarten Varresbeck",
    },
  },
  {
    slug: "zen",
    title: "ZEN",
    tagline: "Website · E-Commerce",
    kind: "website",
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
  {
    slug: "hs-handwerk-service",
    title: "H&S Handwerk & Service",
    tagline: "Website · Handwerk",
    kind: "website",
    lede: "One-Page-Website für Heiko Schönherr aus Mülheim an der Ruhr – Handwerker seit 2008, tätig in ganz NRW. Alle Leistungen auf einen Blick, echte Vorher-Nachher-Baustellen und der Anruf immer nur einen Tap entfernt.",
    image: "/images/projects/hs-handwerk-service.jpg",
    imageAlt: "Startseite der Website von H&S Handwerk & Service",
    demoUrl: "/case-studies/hs-handwerk-service",
    meta: [
      { label: "Branche", value: "Handwerk · Local Business" },
      { label: "Leistung", value: "Website – One-Pager" },
      { label: "Ort", value: "Mülheim an der Ruhr · tätig in ganz NRW" },
      { label: "Zeitraum", value: "2026" },
    ],
    sections: [
      {
        heading: "Ausgangslage",
        paragraphs: [
          "Heiko Schönherr ist seit 2008 als Handwerker selbstständig und erledigt Böden, Wände, Decken, Montagen und Reinigung aus einer Hand – in ganz Nordrhein-Westfalen. Nach außen war davon kaum etwas zu sehen: kein eigener Auftritt, keine gebündelte Leistungsübersicht, und wer ihn beauftragen wollte, musste die Nummer erst suchen.",
          "Gesucht war keine aufwendige Agentur-Seite, sondern ein sauberer One-Pager, der zeigt, was er kann, und Interessenten ohne Umweg zum Hörer bringt.",
        ],
      },
      {
        heading: "Zielsetzung",
        paragraphs: [
          "Der Auftritt sollte drei Dinge leisten: alle Leistungen sofort erfassbar machen, den Kontakt so einfach wie möglich gestalten (ein Tap zum Anruf) und Verlässlichkeit ausstrahlen – seriös, aufgeräumt, ohne Schnickschnack.",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Wir haben die typischen Kundenfragen in eine klare Seitenstruktur übersetzt: Hero mit Anruf-Button und echtem Baustellenfoto, vollständige Leistungsübersicht, eine Vorher-Nachher-Galerie echter Baustellen, ein „Über mich“-Teil für Vertrauen, der Ablauf in drei Schritten und ein direkter Kontaktbereich.",
          "Statt Stockfotos zeigen wir durchgehend echte Arbeit – etwa eine Badsanierung im Kreis Mettmann. Die Schriften laden lokal, es gibt keinen Cookie-Ballast, und auf dem Handy ist der Anruf immer nur einen Daumen entfernt.",
        ],
      },
      {
        heading: "Was wir gebaut haben",
        bullets: [
          "One-Page-Website mit klarer, seriöser Bildsprache",
          "Vollständige Leistungsübersicht – Böden, Wände, Decken, Montagen, Reinigung",
          "Vorher-Nachher-Galerie mit echten Baustellenfotos",
          "Ein-Tap-Anruf im Header, Hero und Kontaktbereich",
          "Trust-Band: seit 2008, ganz NRW, fester Preis vorab, am Wochenende erreichbar",
          "Ablauf in drei Schritten – von der Anfrage bis zum Ergebnis",
          "Lokal geladene Schriften, kein Cookie-Banner nötig",
        ],
      },
      {
        heading: "Ergebnis",
        paragraphs: [
          "Aus keinem sichtbaren Auftritt wurde eine Seite, die 18 Jahre Handwerkserfahrung endlich zeigt: echte Baustellen statt Stockfotos, alle Leistungen gebündelt, und der Anruf ist von jeder Stelle der Seite aus einen Tap entfernt.",
        ],
      },
    ],
    kpis: [
      { value: "Seit 2008", label: "Erfahrung, endlich sichtbar" },
      { value: "1 Tap", label: "vom Besuch zum Anruf" },
      { value: "Ganz NRW", label: "Einsatzgebiet auf einen Blick" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Mobile-first", "Vercel"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
