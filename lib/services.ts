// Service-Landingpages für /leistungen/[slug].
// Datengetrieben & visuell – neue Leistungen einfach als weiteren Eintrag ergänzen.

export type ServiceFeature = { icon: string; title: string; text: string };
export type ServiceStep = { title: string; text: string };
export type ServiceStat = { value: string; label: string };

export type Service = {
  slug: string;
  group?: "service" | "branche"; // "branche" = Branchen-Landingpage (Website-Auffrischung)
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
      "Website erstellen lassen: bestehende Seite auffrischen für 199 € pauschal (live in 48 h) oder komplett neu nach transparentem Festpreisangebot. Jetzt anfragen.",
    h1: "Website erstellen lassen – auffrischen für 199 € oder neu nach Angebot",
    lede:
      "Zwei Wege zur neuen Seite: Gibt es eine bestehende Website zum Auffrischen, kostet das pauschal 199 € und ist in 48 Stunden live. Soll etwas komplett Neues entstehen, bekommst du vorab ein transparentes Festpreisangebot.",
    offer: { price: "199", priceCurrency: "EUR" },
    serviceType: "Website-Erstellung & Webdesign",
    stats: [
      { value: "199 €", label: "Auffrischung, pauschal" },
      { value: "48 Std.", label: "aufgefrischt live" },
      { value: "nach Angebot", label: "kompletter Neubau" },
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
      { title: "Launch & Änderungen", text: "Online gehen – spätere Änderungen 20 €/h, keine Abos." },
    ],
    audienceHeading: "Für wen wir Websites bauen",
    audienceText:
      "Überall dort, wo eine klare, schnelle Website Anfragen bringt – vom Hundesalon mit WhatsApp-Termin bis zum Biergarten mit Live-Status.",
    audienceChips: ["Lokale Dienstleister", "Gastronomie", "Handwerk", "Selbstständige", "Kleine Teams"],
    faqs: [
      [
        "Was kostet eine Website bei euch?",
        "Die Auffrischung einer bestehenden Website kostet pauschal 199 € – alles inklusive, live in 48 Stunden. Für einen komplett neuen Aufbau bekommst du vorab ein transparentes Festpreisangebot, je nach Umfang und Funktionen.",
      ],
      [
        "Wo kann ich günstig eine Website erstellen lassen?",
        "Bei Cofound Labs: Wir frischen bestehende Websites für 199 € pauschal auf – deutschlandweit, mobil-optimiert und mit technischer SEO-Basis. Neue Seiten bauen wir zum transparenten Festpreis. Das Erstgespräch ist kostenlos.",
      ],
      [
        "Wie lange dauert es, bis meine Website online ist?",
        "Eine Auffrischung ist in 48 Stunden live. Ein kompletter Neuaufbau dauert länger – sobald Texte und Bilder vorliegen, nennen wir dir im Erstgespräch einen realistischen Zeitrahmen.",
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
    relatedCaseSlugs: ["hundesalon", "biergarten-varresbeck"],
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

  // ─── Branchen-Landingpages (Website-Auffrischung, 199 € pauschal) ───────────

  {
    slug: "website-fuer-friseure",
    group: "branche",
    navLabel: "Friseure",
    cardIcon: "palette",
    cardDesc:
      "Aufgefrischte Website für deinen Salon – Termine, Preise & Google, 199 € pauschal.",
    eyebrow: "Website für Friseure",
    keyword: "website für friseure",
    metaTitle: "Website für Friseure & Salons",
    metaDescription:
      "Website für Friseure auffrischen lassen – 199 € pauschal, live in 48 Stunden. Salon-Seite mit Terminanfrage, Preisen & Google. Jetzt anfragen.",
    h1: "Website für Friseure – aufgefrischt für 199 €, live in 48 Stunden",
    lede:
      "Deine Salon-Website sieht aus wie vor zehn Jahren? Wir frischen sie komplett auf – modern, aufs Handy optimiert und mit klarer Terminanfrage. Pauschal 199 €, in 48 Stunden live. Voraussetzung: Es gibt bereits eine Seite, die wir übernehmen.",
    offer: { price: "199", priceCurrency: "EUR" },
    serviceType: "Website-Auffrischung für Friseursalons",
    stats: [
      { value: "199 €", label: "pauschal, alles drin" },
      { value: "48 Std.", label: "bis live" },
      { value: "Handy", label: "zuerst optimiert" },
    ],
    featuresHeading: "Was deine neue Salon-Website mitbringt",
    features: [
      { icon: "message", title: "Termin-Anfrage", text: "Buchung per WhatsApp, Telefon oder Formular – ein Tipp genügt." },
      { icon: "file", title: "Preisliste & Leistungen", text: "Schnitt, Farbe, Styling – übersichtlich und aktuell." },
      { icon: "smartphone", title: "Mobil zuerst", text: "Die meisten Kundinnen kommen vom Smartphone. Genau dafür gebaut." },
      { icon: "search", title: "Bei Google gefunden", text: "SEO-Basis für „Friseur + deine Stadt“." },
      { icon: "star", title: "Bewertungen & Instagram", text: "Google-Rezensionen und dein Insta-Feed direkt eingebunden." },
      { icon: "clock", title: "Öffnungszeiten aktuell", text: "Zeiten und Feiertage in Minuten geändert – für 10 €." },
    ],
    stepsHeading: "So läuft's",
    steps: [
      { title: "Absprache", text: "Kurzes Gespräch: Was soll bleiben, was besser werden? Kostenlos." },
      { title: "Entwurf nach ~24 h", text: "Du bekommst eine echte Seite zum Durchklicken auf dem Handy." },
      { title: "Live nach 48 h", text: "Ein Wort von dir – und dein Salon ist online, auf deiner Adresse." },
      { title: "Danach", text: "Änderungen 20 €/h, keine Abos. Die Seite gehört dir." },
    ],
    audienceHeading: "Für welche Salons wir bauen",
    audienceText:
      "Vom Ein-Stuhl-Salon bis zum Team – überall, wo eine klare, schnelle Seite neue Kundinnen bringt.",
    audienceChips: ["Friseursalons", "Barbershops", "Hair & Beauty", "Mobile Friseure"],
    faqs: [
      [
        "Was kostet eine Website für meinen Friseursalon?",
        "199 € pauschal – für die Auffrischung deiner bestehenden Salon-Website, alles inklusive. Hast du noch keine Seite, machen wir dir vorab ein transparentes Festpreisangebot für den Neuaufbau.",
      ],
      [
        "Können meine Kundinnen online Termine anfragen?",
        "Ja. Wir binden eine Terminanfrage per WhatsApp, Telefon-Direktwahl oder Formular ein – so, wie es für dich am einfachsten ist. Ein vollwertiges Buchungssystem ist auf Wunsch möglich und wird separat besprochen.",
      ],
      [
        "Wirklich in 48 Stunden live?",
        "Ja – Absprache, ein Entwurf, live gehen. Texte und Bilder übernehmen wir von deiner alten Seite und frischen sie auf.",
      ],
      [
        "Wird mein Salon bei Google gefunden?",
        "Die technische SEO-Basis ist immer dabei: saubere Struktur, Tempo, mobile Optimierung. Für die lokale Suche („Friseur + Stadt“) richten wir auf Wunsch die Grundlagen und deinen Google-Eintrag mit ein.",
      ],
      [
        "Ich habe noch gar keine Website – geht das trotzdem?",
        "Der 199-€-Festpreis gilt für die Auffrischung einer bestehenden Seite. Für einen komplett neuen Auftritt bekommst du vorab ein klares Festpreisangebot.",
      ],
    ],
    relatedCaseSlugs: ["hundesalon", "biergarten-varresbeck"],
    ctaLabel: "Salon-Website auffrischen",
    ctaHeading: "Bereit für einen frischen Salon-Auftritt?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was deine Seite braucht.",
  },

  {
    slug: "website-fuer-gastronomie",
    group: "branche",
    navLabel: "Gastronomie",
    cardIcon: "message",
    cardDesc:
      "Aufgefrischte Website für Restaurant, Café & Bar – Karte, Reservierung & Google, 199 € pauschal.",
    eyebrow: "Website für Gastronomie",
    keyword: "website für gastronomie",
    metaTitle: "Website für Gastronomie & Restaurants",
    metaDescription:
      "Website für Gastronomie auffrischen lassen – 199 € pauschal, live in 48 h. Mit digitaler Speisekarte, Reservierung & Google. Jetzt anfragen.",
    h1: "Website für Gastronomie – aufgefrischt für 199 €, live in 48 Stunden",
    lede:
      "Speisekarte als verstecktes PDF, Seite lahm auf dem Handy? Wir frischen deinen Auftritt für Restaurant, Café oder Bar komplett auf – mit lesbarer Karte, Reservierung und aktuellen Öffnungszeiten. Pauschal 199 €, in 48 Stunden live. Voraussetzung: Es gibt bereits eine Seite.",
    offer: { price: "199", priceCurrency: "EUR" },
    serviceType: "Website-Auffrischung für Gastronomie",
    stats: [
      { value: "199 €", label: "pauschal, alles drin" },
      { value: "48 Std.", label: "bis live" },
      { value: "Karte", label: "immer aktuell" },
    ],
    featuresHeading: "Was deine Gastro-Website mitbringt",
    features: [
      { icon: "file", title: "Digitale Speisekarte", text: "Lesbar auf dem Handy statt verstecktes PDF – in Minuten aktualisiert." },
      { icon: "message", title: "Reservierung & Kontakt", text: "Tisch-Anfrage per Formular, Telefon oder WhatsApp." },
      { icon: "clock", title: "Öffnungszeiten & Feiertage", text: "Immer aktuell – Ruhetag oder Sonderöffnung in Minuten geändert." },
      { icon: "search", title: "Bei Google gefunden", text: "SEO-Basis für „Restaurant/Café + deine Stadt“." },
      { icon: "star", title: "Bewertungen & Fotos", text: "Google-Rezensionen und Bilder, die Appetit machen." },
      { icon: "smartphone", title: "Mobil zuerst", text: "Gäste suchen unterwegs – deine Seite lädt schnell und sauber." },
    ],
    stepsHeading: "So läuft's",
    steps: [
      { title: "Absprache", text: "Kurzes Gespräch: Was soll bleiben, was besser werden? Kostenlos." },
      { title: "Entwurf nach ~24 h", text: "Eine echte Seite zum Durchklicken – inklusive lesbarer Speisekarte." },
      { title: "Live nach 48 h", text: "Ein Wort von dir – und dein Lokal ist online, auf deiner Adresse." },
      { title: "Danach", text: "Karte oder Zeiten ändern? 20 €/h, keine Abos. Die Seite gehört dir." },
    ],
    audienceHeading: "Für welche Betriebe wir bauen",
    audienceText:
      "Restaurant, Café, Bar, Imbiss oder Foodtruck – überall, wo Gäste dich zuerst online finden.",
    audienceChips: ["Restaurants", "Cafés & Bars", "Imbiss & Lieferdienst", "Foodtrucks", "Biergärten"],
    faqs: [
      [
        "Was kostet eine Website für mein Restaurant?",
        "199 € pauschal – für die Auffrischung deiner bestehenden Gastro-Website, alles inklusive. Ohne bestehende Seite bekommst du vorab ein transparentes Festpreisangebot für den Neuaufbau.",
      ],
      [
        "Kann ich meine Speisekarte selbst aktualisieren?",
        "Kleinere Änderungen an Karte, Preisen oder Öffnungszeiten übernehmen wir schnell (20 €/h, auf halbe Stunden genau). Auf Wunsch bauen wir die Karte so, dass du sie selbst pflegen kannst – das besprechen wir vorher.",
      ],
      [
        "Können Gäste online reservieren?",
        "Ja. Wir binden eine Tisch-Anfrage per Formular, Telefon oder WhatsApp ein. Ein vollständiges Reservierungssystem ist möglich und wird separat besprochen.",
      ],
      [
        "Wird mein Lokal bei Google gefunden?",
        "Die technische SEO-Basis ist immer dabei. Für die lokale Suche („Restaurant + Stadt“) und deinen Google-Eintrag richten wir auf Wunsch die Grundlagen mit ein.",
      ],
      [
        "Wirklich in 48 Stunden live?",
        "Ja – Absprache, ein Entwurf, live gehen. Texte und Bilder übernehmen wir von deiner alten Seite und frischen sie auf.",
      ],
    ],
    relatedCaseSlugs: ["biergarten-varresbeck", "baizar"],
    ctaLabel: "Gastro-Website auffrischen",
    ctaHeading: "Bereit für einen frischen Gastro-Auftritt?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was deine Seite braucht.",
  },

  {
    slug: "website-fuer-handwerker",
    group: "branche",
    navLabel: "Handwerker",
    cardIcon: "shield",
    cardDesc:
      "Aufgefrischte Website für deinen Betrieb – Leistungen, Anfragen & Google, 199 € pauschal.",
    eyebrow: "Website für Handwerker",
    keyword: "website für handwerker",
    metaTitle: "Website für Handwerker & Betriebe",
    metaDescription:
      "Website für Handwerker auffrischen lassen – 199 € pauschal, live in 48 Stunden. Leistungen, Anfragen & Google für deinen Betrieb. Jetzt anfragen.",
    h1: "Website für Handwerker – aufgefrischt für 199 €, live in 48 Stunden",
    lede:
      "Deine Betriebs-Website bringt keine Anfragen? Wir frischen sie auf – klar strukturiert, mobil und mit einfachem Anfrageweg für neue Aufträge. Pauschal 199 €, in 48 Stunden live. Voraussetzung: Es gibt bereits eine Seite.",
    offer: { price: "199", priceCurrency: "EUR" },
    serviceType: "Website-Auffrischung für Handwerksbetriebe",
    stats: [
      { value: "199 €", label: "pauschal, alles drin" },
      { value: "48 Std.", label: "bis live" },
      { value: "Anfragen", label: "in einem Tipp" },
    ],
    featuresHeading: "Was deine Handwerker-Website mitbringt",
    features: [
      { icon: "shield", title: "Leistungen & Gewerke", text: "Was du machst – klar und vertrauenswürdig aufbereitet." },
      { icon: "message", title: "Anfrage in einem Tipp", text: "Angebots-Anfrage per Formular, Telefon oder WhatsApp." },
      { icon: "star", title: "Referenzen & Bewertungen", text: "Fertige Projekte und Google-Rezensionen schaffen Vertrauen." },
      { icon: "search", title: "Bei Google gefunden", text: "SEO-Basis für „dein Gewerk + Region“." },
      { icon: "smartphone", title: "Mobil & schnell", text: "Kunden suchen unterwegs – deine Seite lädt sofort." },
      { icon: "clock", title: "Notdienst & Zeiten", text: "Erreichbarkeit und Öffnungszeiten immer aktuell." },
    ],
    stepsHeading: "So läuft's",
    steps: [
      { title: "Absprache", text: "Kurzes Gespräch: Was soll bleiben, was besser werden? Kostenlos." },
      { title: "Entwurf nach ~24 h", text: "Du bekommst eine echte Seite zum Durchklicken auf dem Handy." },
      { title: "Live nach 48 h", text: "Ein Wort von dir – und dein Betrieb ist online, auf deiner Adresse." },
      { title: "Danach", text: "Änderungen 20 €/h, keine Abos. Die Seite gehört dir." },
    ],
    audienceHeading: "Für welche Betriebe wir bauen",
    audienceText:
      "Vom Ein-Mann-Betrieb bis zum Team – überall, wo eine klare Seite mehr Aufträge bringt.",
    audienceChips: ["Elektro & SHK", "Maler & Bau", "Tischler & Schreiner", "Dachdecker", "KFZ & Werkstatt"],
    faqs: [
      [
        "Was kostet eine Website für meinen Handwerksbetrieb?",
        "199 € pauschal – für die Auffrischung deiner bestehenden Betriebs-Website, alles inklusive. Ohne bestehende Seite bekommst du vorab ein transparentes Festpreisangebot für den Neuaufbau.",
      ],
      [
        "Bekomme ich über die Seite wirklich Anfragen?",
        "Wir bauen die Seite so, dass der Weg zur Anfrage kurz ist: sichtbare Leistungen, Referenzen für Vertrauen und ein Anfrage-Button per Formular, Telefon oder WhatsApp – gut sichtbar auf jedem Gerät.",
      ],
      [
        "Wird mein Betrieb bei Google gefunden?",
        "Die technische SEO-Basis ist immer dabei. Für die lokale Suche („Gewerk + Region“) und deinen Google-Eintrag richten wir auf Wunsch die Grundlagen mit ein.",
      ],
      [
        "Wirklich in 48 Stunden live?",
        "Ja – Absprache, ein Entwurf, live gehen. Texte und Bilder übernehmen wir von deiner alten Seite und frischen sie auf.",
      ],
      [
        "Ich habe noch keine Website – geht das trotzdem?",
        "Der 199-€-Festpreis gilt für die Auffrischung einer bestehenden Seite. Für einen komplett neuen Auftritt bekommst du vorab ein klares Festpreisangebot.",
      ],
    ],
    relatedCaseSlugs: ["dokument-generator", "hundesalon"],
    ctaLabel: "Betriebs-Website auffrischen",
    ctaHeading: "Bereit für mehr Anfragen über deine Seite?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was deine Seite braucht.",
  },

  {
    slug: "website-fuer-kmu",
    group: "branche",
    navLabel: "KMU",
    cardIcon: "boxes",
    cardDesc:
      "Aufgefrischte Website für kleine & mittlere Unternehmen – professionell, 199 € pauschal.",
    eyebrow: "Website für KMU",
    keyword: "website für kmu",
    metaTitle: "Website für KMU & kleine Unternehmen",
    metaDescription:
      "Website für KMU auffrischen lassen – 199 € pauschal, live in 48 Stunden. Professioneller Auftritt für kleine & mittlere Unternehmen. Jetzt anfragen.",
    h1: "Website für KMU – aufgefrischt für 199 €, live in 48 Stunden",
    lede:
      "Ein veralteter Web-Auftritt kostet dich Aufträge und Bewerber. Wir frischen die Seite deines kleinen oder mittleren Unternehmens auf – professionell, mobil und schnell. Pauschal 199 €, in 48 Stunden live. Voraussetzung: Es gibt bereits eine Seite.",
    offer: { price: "199", priceCurrency: "EUR" },
    serviceType: "Website-Auffrischung für KMU",
    stats: [
      { value: "199 €", label: "pauschal, alles drin" },
      { value: "48 Std.", label: "bis live" },
      { value: "0 €", label: "monatlich*" },
    ],
    featuresHeading: "Was deine KMU-Website mitbringt",
    features: [
      { icon: "palette", title: "Professioneller Auftritt", text: "Ein Look, der zu deinem Unternehmen passt – kein Baukasten." },
      { icon: "message", title: "Kontakt & Anfragen", text: "Klare Wege zur Anfrage per Formular, Telefon oder WhatsApp." },
      { icon: "users", title: "Team & Karriere", text: "Leistungen, Team und offene Stellen – für Kunden und Bewerber." },
      { icon: "search", title: "Bei Google gefunden", text: "Saubere SEO-Basis für deine wichtigsten Suchbegriffe." },
      { icon: "shield", title: "Rechtssicher", text: "Impressum & Datenschutz von Anfang an sauber dabei." },
      { icon: "smartphone", title: "Mobil & schnell", text: "Auf jedem Gerät stabil und in unter einer Sekunde geladen." },
    ],
    stepsHeading: "So läuft's",
    steps: [
      { title: "Absprache", text: "Kurzes Gespräch: Was soll bleiben, was besser werden? Kostenlos." },
      { title: "Entwurf nach ~24 h", text: "Du bekommst eine echte Seite zum Durchklicken auf dem Handy." },
      { title: "Live nach 48 h", text: "Ein Wort von dir – und dein Auftritt ist online, auf deiner Adresse." },
      { title: "Danach", text: "Änderungen 20 €/h, keine Abos. Die Seite gehört dir." },
    ],
    audienceHeading: "Für welche Unternehmen wir bauen",
    audienceText:
      "Dienstleister, Kanzleien, Praxen, Agenturen oder B2B-Betriebe – überall, wo ein professioneller Auftritt zählt.",
    audienceChips: ["Dienstleister", "Kanzleien & Praxen", "Agenturen", "Vereine", "B2B-Betriebe"],
    faqs: [
      [
        "Was kostet eine Website für mein Unternehmen?",
        "199 € pauschal – für die Auffrischung eurer bestehenden Website, alles inklusive. Ohne bestehende Seite bekommt ihr vorab ein transparentes Festpreisangebot für den Neuaufbau.",
      ],
      [
        "Fallen laufende Kosten an?",
        "Nein – wenn eure bestehende Domain übernommen werden kann, bleibt es bei den einmaligen 199 €. Falls nicht, klären wir vorher transparent, was anfällt.",
      ],
      [
        "Können wir die Seite später erweitern?",
        "Ja. Die Auffrischung ist der schnelle erste Schritt. Größere Erweiterungen – etwa Karriere-Bereich, Portal oder Automatisierung – setzen wir danach als separates Projekt um.",
      ],
      [
        "Werden wir bei Google gefunden?",
        "Die technische SEO-Basis ist immer dabei: saubere Struktur, Tempo, mobile Optimierung, Meta-Angaben und Sitemap. Für die lokale Suche richten wir auf Wunsch die Grundlagen mit ein.",
      ],
      [
        "Wirklich in 48 Stunden live?",
        "Ja – Absprache, ein Entwurf, live gehen. Texte und Bilder übernehmen wir von eurer alten Seite und frischen sie auf.",
      ],
    ],
    relatedCaseSlugs: ["dokument-generator", "baizar"],
    ctaLabel: "Firmen-Website auffrischen",
    ctaHeading: "Bereit für einen professionellen Auftritt?",
    ctaText: "30 Minuten, kostenlos & unverbindlich. Wir schauen gemeinsam, was eure Seite braucht.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
