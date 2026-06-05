// Service-Landingpages für /leistungen/[slug].
// Datengetrieben & visuell – neue Leistungen einfach als weiteren Eintrag ergänzen.

export type ServiceFeature = { icon: string; title: string; text: string };
export type ServiceStep = { title: string; text: string };
export type ServiceStat = { value: string; label: string };

export type Service = {
  slug: string;
  navLabel: string; // kurzer Name (Nav, Karten, Breadcrumb)
  cardIcon: string; // Icon für die Homepage-Service-Card
  cardDesc: string; // kurze Beschreibung in Übersicht/Homepage
  eyebrow: string; // Kicker über der H1
  keyword: string; // Haupt-Keyword (Doku)
  metaTitle: string; // <title> (ohne Marken-Suffix – Template ergänzt ihn)
  metaDescription: string;
  h1: string;
  lede: string;
  offer?: { price: string; priceCurrency: string };
  serviceType: string;
  stats: ServiceStat[]; // Highlight-Kacheln im Hero
  featuresHeading: string;
  features: ServiceFeature[]; // Icon-Cards
  stepsHeading: string;
  steps: ServiceStep[]; // nummerierte Prozess-Schritte
  audienceHeading: string;
  audienceText?: string;
  audienceChips: string[];
  faqs: [string, string][];
  relatedCaseSlugs: string[];
  ctaLabel: string;
  ctaHeading: string;
  ctaText: string;
};

export const services: Service[] = [
  {
    slug: "website-erstellen-lassen",
    navLabel: "Website erstellen lassen",
    cardIcon: "globe",
    cardDesc:
      "Individuelle, mobil-optimierte Websites mit technischer SEO-Basis – ab 199 €.",
    eyebrow: "Website erstellen lassen",
    keyword: "website erstellen lassen",
    metaTitle: "Website erstellen lassen ab 199 €",
    metaDescription:
      "Professionelle Website erstellen lassen – individuell, mobil-optimiert und SEO-ready, ab 199 €. Von der ersten Idee bis online. Jetzt kostenloses Erstgespräch sichern.",
    h1: "Website erstellen lassen – modern, schnell, ab 199 €",
    lede:
      "Wir erstellen deine Website individuell, mobil-optimiert und mit technischer SEO-Basis – von der ersten Idee bis live. Schon ab 199 €.",
    offer: { price: "199", priceCurrency: "EUR" },
    serviceType: "Website-Erstellung & Webdesign",
    stats: [
      { value: "ab 199 €", label: "Startpreis" },
      { value: "1–3 Wochen", label: "bis online" },
      { value: "< 1 s", label: "Ladezeit" },
    ],
    featuresHeading: "Das steckt in deiner Website",
    features: [
      { icon: "palette", title: "Individuelles Design", text: "Kein Template von der Stange – ein Look, der zu dir passt." },
      { icon: "smartphone", title: "Mobile-first", text: "Optimiert für die Mehrheit, die vom Smartphone kommt." },
      { icon: "zap", title: "Blitzschnell", text: "Ladezeiten oft unter einer Sekunde." },
      { icon: "search", title: "SEO-Basis", text: "Sauber für die Google-Suche aufgebaut." },
      { icon: "message", title: "Direkte Anfragen", text: "Per Kontaktformular oder WhatsApp-Direktlink." },
      { icon: "shield", title: "Rechtssicher", text: "Impressum & Datenschutz von Anfang an dabei." },
    ],
    stepsHeading: "So läuft's",
    steps: [
      { title: "Kennenlerngespräch", text: "Kostenlos & unverbindlich: Idee, Ziele, Beispiele." },
      { title: "Konzept & Festpreis", text: "Klare Seitenstruktur und ein transparenter Preis." },
      { title: "Umsetzung", text: "Wir bauen – du bekommst eine Vorschau, bevor es live geht." },
      { title: "Launch & Betreuung", text: "Online gehen – optional Betreuung ab 199 €/Monat." },
    ],
    audienceHeading: "Für wen wir Websites bauen",
    audienceText:
      "Überall dort, wo eine klare, schnelle Website Anfragen bringt – vom Hundesalon mit WhatsApp-Termin bis zum Biergarten mit Live-Status.",
    audienceChips: ["Lokale Dienstleister", "Gastronomie", "Handwerk", "Selbstständige", "Kleine Teams"],
    faqs: [
      [
        "Was kostet eine Website bei euch?",
        "Der Startpreis liegt bei 199 €. Der genaue Preis hängt von Umfang, Seitenzahl und Funktionen ab – eine schlanke Onepage-Website ist günstiger als ein mehrseitiger Auftritt mit Buchungssystem. Im kostenlosen Erstgespräch bekommst du eine ehrliche Einschätzung.",
      ],
      [
        "Wo kann ich günstig eine Website erstellen lassen?",
        "Bei Cofound Labs: Wir erstellen professionelle, individuelle Websites ab 199 € – deutschlandweit, mobil-optimiert und mit technischer SEO-Basis. Im kostenlosen Erstgespräch bekommst du eine transparente Einschätzung für dein Projekt.",
      ],
      [
        "Wie lange dauert es, bis meine Website online ist?",
        "Eine schlanke Website ist oft in 1–3 Wochen live. Sobald Texte und Bilder vorliegen, geht es meist schneller – einen realistischen Zeitrahmen nennen wir dir im Erstgespräch.",
      ],
      [
        "Brauche ich eigene Texte und Bilder?",
        "Hilfreich, aber kein Muss. Wir helfen dir, die wichtigsten Inhalte herauszuarbeiten, und unterstützen bei Texten und Bildauswahl.",
      ],
      [
        "Ist die Website für Google optimiert?",
        "Ja, die technische SEO-Basis ist immer dabei: saubere Struktur, schnelle Ladezeiten, mobile Optimierung, Meta-Angaben und Sitemap. Für die lokale Suche richten wir auf Wunsch zusätzlich die Grundlagen ein.",
      ],
    ],
    relatedCaseSlugs: ["kerstin-hundesalon", "bahnhof-varresbeck"],
    ctaLabel: "Kostenloses Erstgespräch sichern",
    ctaHeading: "Bereit für deine neue Website?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was deine Seite braucht.",
  },

  {
    slug: "mvp-entwicklung",
    navLabel: "MVP-Entwicklung",
    cardIcon: "rocket",
    cardDesc:
      "Schnell ein funktionierendes Produkt, um Kunden & Investoren zu überzeugen.",
    eyebrow: "MVP-Entwicklung",
    keyword: "mvp entwickeln lassen",
    metaTitle: "MVP entwickeln lassen für Startups",
    metaDescription:
      "MVP entwickeln lassen – schnell ein funktionierendes Produkt, um Kunden und Investoren zu überzeugen. MVP-first, wöchentliche Updates, ab 2.500 €. Jetzt Erstgespräch sichern.",
    h1: "MVP entwickeln lassen – schnell vom Konzept zum Produkt",
    lede:
      "Bring dein Produkt schnell auf die Straße: Wir bauen das Wesentliche, testen mit echten Nutzern und liefern dir ein MVP, mit dem du Kunden und Investoren überzeugst.",
    offer: { price: "2500", priceCurrency: "EUR" },
    serviceType: "MVP- & Produktentwicklung",
    stats: [
      { value: "ab 2.500 €", label: "Startpreis" },
      { value: "2–4 Wochen", label: "erste Version" },
      { value: "MVP-first", label: "nur das Wesentliche" },
    ],
    featuresHeading: "Was dein MVP stark macht",
    features: [
      { icon: "rocket", title: "MVP-first", text: "Erst das Wesentliche, das echten Wert zeigt." },
      { icon: "gauge", title: "Schnell live", text: "Erste Version oft in 2–4 Wochen." },
      { icon: "repeat", title: "Iterativ", text: "Wöchentliche Updates, Fortschritt jederzeit sichtbar." },
      { icon: "layers", title: "Skalierbares Fundament", text: "Sauberer Stack, der mit dir mitwächst." },
      { icon: "chart", title: "Validierung", text: "Gebaut, um am echten Markt getestet zu werden." },
      { icon: "users", title: "Investoren-ready", text: "Ein Produkt, das du zeigen kannst." },
    ],
    stepsHeading: "So entsteht dein MVP",
    steps: [
      { title: "Kennenlerngespräch", text: "Kostenlos: Idee, Ziele und Scope klären." },
      { title: "Scope & Festpreis", text: "Wir definieren das Wesentliche – klarer Plan & Preis." },
      { title: "Entwicklung", text: "MVP-first gebaut, mit wöchentlichen Updates." },
      { title: "Launch & Iteration", text: "Live gehen, lernen, gezielt weiterbauen." },
    ],
    audienceHeading: "Für wen wir MVPs bauen",
    audienceText:
      "Für Gründer:innen und Teams, die eine Idee schnell und solide validieren wollen.",
    audienceChips: ["Solo-Gründer", "Early-Stage Startups", "Investoren-Pitch", "Produkt-Validierung"],
    faqs: [
      [
        "Was kostet ein MVP?",
        "Unsere Projekte starten ab 2.500 € – je nach Umfang und Komplexität. Im kostenlosen Erstgespräch bekommst du eine ehrliche Einschätzung für dein Vorhaben.",
      ],
      [
        "Wie lange dauert die MVP-Entwicklung?",
        "Ein einfaches MVP ist oft in 2–4 Wochen fertig. Komplexere Produkte planen wir mit klaren Meilensteinen – du siehst den Fortschritt wöchentlich live.",
      ],
      [
        "Was, wenn meine Idee noch nicht fertig durchdacht ist?",
        "Kein Problem – im Gegenteil. Im Kennenlerngespräch helfen wir dir, das Wesentliche herauszuarbeiten und einen sinnvollen Scope zu definieren.",
      ],
      [
        "Gehört mir der Code am Ende?",
        "Ja. Nach Projektabschluss bekommst du den vollständigen Quellcode und alle Zugänge – keine Abhängigkeit von uns.",
      ],
    ],
    relatedCaseSlugs: ["baizar", "kitchen-display-system"],
    ctaLabel: "Kostenloses Erstgespräch sichern",
    ctaHeading: "Bereit, dein MVP zu bauen?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was dein MVP braucht.",
  },

  {
    slug: "web-app-entwicklung",
    navLabel: "Web-App-Entwicklung",
    cardIcon: "code",
    cardDesc:
      "Skalierbare Webanwendungen – von der Landing Page bis zur SaaS-Plattform.",
    eyebrow: "Web-App-Entwicklung",
    keyword: "web app entwickeln lassen",
    metaTitle: "Web-App entwickeln lassen",
    metaDescription:
      "Web-App entwickeln lassen – moderne, skalierbare Webanwendungen mit dem richtigen Stack, von der Idee bis zur SaaS-Plattform. Ab 2.500 €. Jetzt Erstgespräch sichern.",
    h1: "Web-App entwickeln lassen – modern & skalierbar",
    lede:
      "Ob internes Tool, Kundenportal oder SaaS-Plattform: Wir bauen moderne Web-Apps mit dem richtigen Stack – schnell, sicher und gemacht, um zu wachsen.",
    offer: { price: "2500", priceCurrency: "EUR" },
    serviceType: "Web-App- & SaaS-Entwicklung",
    stats: [
      { value: "ab 2.500 €", label: "Startpreis" },
      { value: "Skalierbar", label: "wächst mit" },
      { value: "Dein Code", label: "voller Zugriff" },
    ],
    featuresHeading: "Was deine Web-App auszeichnet",
    features: [
      { icon: "code", title: "Moderner Stack", text: "Next.js, React, TypeScript – zukunftssicher." },
      { icon: "layers", title: "Skalierbar", text: "Architektur, die mit deinem Wachstum mithält." },
      { icon: "database", title: "Solides Backend", text: "Stabile, dokumentierte API & Datenhaltung." },
      { icon: "dashboard", title: "Dashboards & Portale", text: "Klare Oberflächen für Nutzer & Betreiber." },
      { icon: "shield", title: "Sicher", text: "Auth, Rollen & Rechte von Anfang an mitgedacht." },
      { icon: "gauge", title: "Performant", text: "Schnell und stabil auch unter echter Last." },
    ],
    stepsHeading: "So bauen wir deine Web-App",
    steps: [
      { title: "Kennenlerngespräch", text: "Kostenlos: Anforderungen, Nutzer und Ziele." },
      { title: "Konzept & Festpreis", text: "Technologie-Empfehlung, Timeline und Festpreis." },
      { title: "Entwicklung", text: "Wöchentliche Updates, du siehst den Fortschritt live." },
      { title: "Launch & Support", text: "Live gehen und auf Wunsch betreut weiterentwickeln." },
    ],
    audienceHeading: "Für wen wir Web-Apps bauen",
    audienceText:
      "Für Teams, die mehr als eine Website brauchen – eine Anwendung, die echte Arbeit erledigt.",
    audienceChips: ["SaaS-Startups", "Skalierende Teams", "Interne Tools", "Kundenportale"],
    faqs: [
      [
        "Was kostet eine Web-App?",
        "Unsere Projekte starten ab 2.500 € – je nach Umfang, Funktionen und Komplexität. Im kostenlosen Erstgespräch bekommst du eine transparente Einschätzung.",
      ],
      [
        "Welchen Tech-Stack nutzt ihr?",
        "Bevorzugt Next.js, React, TypeScript und je nach Projekt Supabase/PostgreSQL – ein moderner, bewährter Stack, der gut skaliert und gut zu warten ist.",
      ],
      [
        "Könnt ihr eine bestehende Web-App weiterentwickeln?",
        "Ja. Wir steigen auch in bestehende Projekte ein, räumen auf und bauen gezielt weiter – ohne lange Einarbeitungsphase.",
      ],
      [
        "Gehört mir der Code am Ende?",
        "Ja. Du bekommst nach Projektabschluss den vollständigen Quellcode und alle Zugänge.",
      ],
    ],
    relatedCaseSlugs: ["baizar", "kitchen-display-system"],
    ctaLabel: "Kostenloses Erstgespräch sichern",
    ctaHeading: "Bereit für deine Web-App?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was deine Anwendung braucht.",
  },

  {
    slug: "app-entwicklung",
    navLabel: "App-Entwicklung",
    cardIcon: "smartphone",
    cardDesc:
      "iOS & Android – cross-platform Apps, die deine Nutzer täglich öffnen.",
    eyebrow: "App-Entwicklung",
    keyword: "app entwickeln lassen",
    metaTitle: "App entwickeln lassen – iOS & Android",
    metaDescription:
      "App entwickeln lassen – iOS & Android, nativ oder cross-platform. Wir bauen Apps, die deine Nutzer täglich benutzen. Ab 2.500 €. Jetzt kostenloses Erstgespräch sichern.",
    h1: "App entwickeln lassen – iOS & Android",
    lede:
      "Vom Konzept zur App, die Nutzer täglich öffnen: Wir bauen mobile Apps – nativ oder cross-platform – schnell, stabil und mit Fokus auf das, was zählt.",
    offer: { price: "2500", priceCurrency: "EUR" },
    serviceType: "Mobile-App-Entwicklung",
    stats: [
      { value: "iOS & Android", label: "eine Codebasis" },
      { value: "ab 2.500 €", label: "Startpreis" },
      { value: "MVP-first", label: "schnell im Store" },
    ],
    featuresHeading: "Was deine App auszeichnet",
    features: [
      { icon: "smartphone", title: "iOS & Android", text: "Cross-platform aus einer Codebasis." },
      { icon: "zap", title: "Schnell & flüssig", text: "Performance, die sich nativ anfühlt." },
      { icon: "bell", title: "Push & Realtime", text: "Benachrichtigungen und Live-Updates." },
      { icon: "refresh", title: "Offline-tauglich", text: "Funktioniert auch bei wackeligem Netz." },
      { icon: "gauge", title: "MVP-first", text: "Erst das Wesentliche, schnell veröffentlicht." },
      { icon: "star", title: "Nutzerfokus", text: "Gebaut für die tägliche Nutzung." },
    ],
    stepsHeading: "So entsteht deine App",
    steps: [
      { title: "Kennenlerngespräch", text: "Kostenlos: Idee, Plattformen und Ziele." },
      { title: "Konzept & Festpreis", text: "Klarer Funktionsumfang, Timeline und Festpreis." },
      { title: "Entwicklung", text: "Wöchentliche Updates, Test auf echten Geräten." },
      { title: "Launch & Support", text: "Veröffentlichung und betreute Weiterentwicklung." },
    ],
    audienceHeading: "Für wen wir Apps bauen",
    audienceText:
      "Für Gründer und Betriebe, die ihre Nutzer direkt auf dem Smartphone erreichen wollen.",
    audienceChips: ["Startups", "Gastronomie & Foodtrucks", "Service-Apps", "Interne Apps"],
    faqs: [
      [
        "Was kostet eine App?",
        "Unsere Projekte starten ab 2.500 € – je nach Funktionsumfang und Komplexität. Im kostenlosen Erstgespräch bekommst du eine ehrliche Einschätzung.",
      ],
      [
        "Native App oder cross-platform?",
        "Meist cross-platform aus einer Codebasis – das spart Zeit und Budget bei sehr guter Qualität. Wenn ein Projekt native Vorteile braucht, sagen wir das offen.",
      ],
      [
        "Übernehmt ihr die Veröffentlichung im App Store?",
        "Ja, wir begleiten die Veröffentlichung in App Store und Play Store und kümmern uns um die technischen Anforderungen.",
      ],
      [
        "Gehört mir der Code am Ende?",
        "Ja. Du bekommst nach Projektabschluss den vollständigen Quellcode und alle Zugänge.",
      ],
    ],
    relatedCaseSlugs: ["kitchen-display-system", "baizar"],
    ctaLabel: "Kostenloses Erstgespräch sichern",
    ctaHeading: "Bereit für deine App?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was deine App braucht.",
  },

  {
    slug: "individualsoftware",
    navLabel: "Individualsoftware",
    cardIcon: "boxes",
    cardDesc:
      "Maßgeschneiderte Tools & Automatisierung, die echte Zeit sparen.",
    eyebrow: "Individualsoftware",
    keyword: "individualsoftware entwickeln lassen",
    metaTitle: "Individualsoftware entwickeln lassen",
    metaDescription:
      "Individualsoftware entwickeln lassen – maßgeschneiderte Tools, Automatisierung und Schnittstellen, die echte Zeit sparen. Ab 2.500 €. Jetzt kostenloses Erstgespräch sichern.",
    h1: "Individualsoftware entwickeln lassen",
    lede:
      "Wenn Standardsoftware nicht passt: Wir bauen maßgeschneiderte Tools, automatisieren wiederkehrende Abläufe und verbinden deine Systeme – Software, die im Alltag wirklich Zeit spart.",
    offer: { price: "2500", priceCurrency: "EUR" },
    serviceType: "Individualsoftware & Automatisierung",
    stats: [
      { value: "ab 2.500 €", label: "Startpreis" },
      { value: "Festpreis", label: "planbar" },
      { value: "Stunden", label: "gespart pro Woche" },
    ],
    featuresHeading: "Was Individualsoftware leistet",
    features: [
      { icon: "boxes", title: "Maßgeschneidert", text: "Genau auf deinen Ablauf zugeschnitten." },
      { icon: "workflow", title: "Automatisierung", text: "Wiederkehrende Aufgaben laufen von selbst." },
      { icon: "database", title: "Datenanbindung", text: "Verbindet deine bestehenden Systeme." },
      { icon: "plug", title: "Schnittstellen", text: "Sauberes Anbinden von Tools & APIs." },
      { icon: "file", title: "Dokumente & PDFs", text: "Automatisch erzeugt statt mühsam getippt." },
      { icon: "clock", title: "Zeitersparnis", text: "Weniger Handarbeit, weniger Fehler." },
    ],
    stepsHeading: "So entsteht deine Software",
    steps: [
      { title: "Kennenlerngespräch", text: "Kostenlos: Abläufe und Engpässe verstehen." },
      { title: "Konzept & Festpreis", text: "Lösungsweg, Timeline und Festpreis." },
      { title: "Entwicklung", text: "Schrittweise gebaut, eng mit dir abgestimmt." },
      { title: "Launch & Support", text: "In Betrieb nehmen und betreut weiterentwickeln." },
    ],
    audienceHeading: "Für wen wir Individualsoftware bauen",
    audienceText:
      "Für Betriebe, die einen Ablauf haben, für den es kein passendes Standard-Tool gibt.",
    audienceChips: ["Handwerk", "KMU", "Gastronomie", "Dienstleister"],
    faqs: [
      [
        "Was kostet Individualsoftware?",
        "Unsere Projekte starten ab 2.500 € – je nach Umfang und Komplexität. Im kostenlosen Erstgespräch bekommst du eine ehrliche, transparente Einschätzung.",
      ],
      [
        "Lohnt sich das gegenüber Standardsoftware?",
        "Wenn du Abläufe an ein Tool anpassen musst, das nicht richtig passt, kostet das dauerhaft Zeit. Maßgeschneiderte Software bildet genau deinen Prozess ab – das spart oft jede Woche Stunden.",
      ],
      [
        "Könnt ihr meine bestehenden Tools anbinden?",
        "Ja. Wir binden vorhandene Systeme über Schnittstellen an, damit Daten nicht doppelt erfasst werden müssen.",
      ],
      [
        "Gehört mir der Code am Ende?",
        "Ja. Du bekommst nach Projektabschluss den vollständigen Quellcode und alle Zugänge.",
      ],
    ],
    relatedCaseSlugs: ["dokument-generator", "kitchen-display-system"],
    ctaLabel: "Kostenloses Erstgespräch sichern",
    ctaHeading: "Bereit, Zeit zu sparen?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was sich automatisieren lässt.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
