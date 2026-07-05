import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/ui/ContactForm";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";
import {
  SITE_URL,
  EMAIL,
  PHONE_E164,
  PHONE_DISPLAY,
  CALENDLY_URL,
} from "@/lib/constants";

const url = `${SITE_URL}/standort/wuppertal`;

export const metadata: Metadata = {
  title: "Website erstellen lassen in Wuppertal",
  description:
    "Website erstellen lassen in Wuppertal: Auffrischung für 199 € pauschal, live in 48 Stunden. Persönlich vor Ort im Bergischen Land, deutschlandweit tätig.",
  alternates: { canonical: "/standort/wuppertal" },
  openGraph: {
    title: "Website erstellen lassen in Wuppertal | Cofound Labs",
    description:
      "Deine Website aus Wuppertal – Auffrischung für 199 € pauschal, live in 48 Stunden. Persönlich vor Ort, deutschlandweit tätig.",
    url,
    type: "website",
    images: ["/opengraph-image"],
  },
};

// Lokale FAQ – geteilt zwischen Accordion und FAQPage-Schema.
const FAQS: [string, string][] = [
  [
    "Arbeitet ihr nur in Wuppertal?",
    "Unser Sitz ist in Wuppertal (Blumenstraße 12, 42119). In Wuppertal und dem Bergischen Land sind wir gern persönlich vor Ort; darüber hinaus arbeiten wir deutschlandweit per Telefon und Video – am Ergebnis ändert das nichts.",
  ],
  [
    "Können wir uns persönlich treffen?",
    "Ja. In Wuppertal und Umgebung treffen wir uns auf Wunsch vor Ort für das Kennenlerngespräch. Kein Agentur-Überbau: Du sprichst direkt mit dem, der deine Website baut.",
  ],
  [
    "Was kostet eine Website in Wuppertal?",
    "Die Auffrischung einer bestehenden Website kostet pauschal 199 € – alles inklusive, live in 48 Stunden. Für einen komplett neuen Aufbau bekommst du vorab ein transparentes Festpreisangebot.",
  ],
  [
    "Wie schnell ist meine Website online?",
    "Eine Auffrischung ist in 48 Stunden live – Absprache, ein Entwurf, live gehen. Auf deiner gewohnten Adresse, ohne Ausfallzeit.",
  ],
  [
    "Betreut ihr die Website nach dem Launch?",
    "Kann deine bestehende Domain übernommen werden, fallen keine laufenden Kosten an. Spätere Änderungen rechnen wir mit 20 €/h auf halbe Stunden genau ab – keine Abos, die Website gehört dir.",
  ],
];

const branchen = services.filter((s) => s.group === "branche");
const localCases = caseStudies.filter((c) =>
  ["kerstin-hundesalon", "bahnhof-varresbeck"].includes(c.slug),
);

const AREAS = [
  "Wuppertal",
  "Solingen",
  "Remscheid",
  "Velbert",
  "Wülfrath",
  "Bergisches Land",
  "Düsseldorf",
  "Köln",
  "Essen",
];

export default function StandortWuppertalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Website erstellen lassen in Wuppertal",
        inLanguage: "de-DE",
        about: { "@id": `${SITE_URL}/#localbusiness` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Standort Wuppertal",
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQS.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* HERO */}
        <header className="subhero">
          <div className="wrap">
            <Link href="/" className="backlink">
              ← Zurück zur Startseite
            </Link>
            <div className="kicker" style={{ marginTop: 28 }}>
              // Standort Wuppertal
            </div>
            <h1>Website erstellen lassen in Wuppertal – 199 € pauschal</h1>
            <p className="lede">
              Dein Web-Studio aus dem Bergischen Land: Wir frischen deine
              Website auf – pauschal 199 €, live in 48 Stunden. Persönlich vor
              Ort in Wuppertal, auf Wunsch deutschlandweit.
            </p>
            <div className="cs-nav" style={{ marginTop: 32 }}>
              <a className="btn btn-primary" href="#kontakt">
                Kostenloses Erstgespräch <span className="btn-arrow">→</span>
              </a>
              <a className="btn btn-ghost" href={`tel:${PHONE_E164}`}>
                ☎ {PHONE_DISPLAY}
              </a>
            </div>

            <div className="kpis" style={{ marginTop: 44 }}>
              <div className="kpi">
                <div className="kn">199 €</div>
                <div className="kl">pauschal, alles drin</div>
              </div>
              <div className="kpi">
                <div className="kn">48 Std.</div>
                <div className="kl">bis live</div>
              </div>
              <div className="kpi">
                <div className="kn">vor Ort</div>
                <div className="kl">in Wuppertal &amp; Umgebung</div>
              </div>
            </div>
          </div>
        </header>

        {/* NAP / Kontaktdaten sichtbar */}
        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// So erreichst du uns</div>
              <h2 className="title">Cofound Labs in Wuppertal</h2>
            </div>
            <div className="metabar">
              <div className="m">
                <div className="ml">Adresse</div>
                <div className="mv">
                  Blumenstraße 12
                  <br />
                  42119 Wuppertal
                </div>
              </div>
              <div className="m">
                <div className="ml">Telefon</div>
                <div className="mv">
                  <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="m">
                <div className="ml">E-Mail</div>
                <div className="mv">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warum lokal */}
        <section className="section">
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Warum ein Partner aus der Region</div>
              <h2 className="title">Nah dran, kein Agentur-Überbau</h2>
            </div>
            <div className="grid grid-3">
              <div className="card">
                <h3>Persönlich vor Ort</h3>
                <p>
                  Kennenlernen auf Wunsch bei dir im Betrieb oder auf einen
                  Kaffee in Wuppertal – du sprichst direkt mit dem Entwickler.
                </p>
              </div>
              <div className="card">
                <h3>Kennt die Region</h3>
                <p>
                  Vom Friseur in Elberfeld bis zum Biergarten im Tal – wir
                  wissen, wie lokale Betriebe im Bergischen ticken.
                </p>
              </div>
              <div className="card">
                <h3>Schnell &amp; verlässlich</h3>
                <p>
                  Kurze Wege, klare Absprachen, fester Preis: 199 € pauschal,
                  in 48 Stunden live – ohne Meeting-Marathon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Branchen */}
        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Für deine Branche</div>
              <h2 className="title">Websites für Wuppertaler Betriebe</h2>
            </div>
            <div className="grid grid-3">
              {branchen.map((s) => (
                <Link
                  key={s.slug}
                  className="card"
                  href={`/leistungen/${s.slug}`}
                >
                  <h3>{s.navLabel}</h3>
                  <p>{s.cardDesc}</p>
                  <div className="proj-more">
                    Mehr erfahren <span className="btn-arrow">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lokale Referenzen */}
        {localCases.length > 0 && (
          <section className="section">
            <div className="wrap">
              <div className="section-lead">
                <div className="kicker">// Aus der Region</div>
                <h2 className="title">Projekte aus Wuppertal &amp; Umgebung</h2>
              </div>
              <div className="proj-grid">
                {localCases.map((c) => (
                  <Link
                    className="proj"
                    href={`/referenzen/${c.slug}`}
                    key={c.slug}
                  >
                    <div className="shot">
                      <Image
                        src={c.image}
                        alt={c.imageAlt}
                        fill
                        sizes="(max-width: 980px) 100vw, 50vw"
                      />
                    </div>
                    <div className="body">
                      <h3>{c.title}</h3>
                      <p>{c.lede}</p>
                      <div className="proj-more">
                        Case Study lesen <span className="btn-arrow">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Einzugsgebiet */}
        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Einzugsgebiet</div>
              <h2 className="title">Vor Ort im Bergischen – remote deutschlandweit</h2>
              <p
                className="desc"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                Rund um Wuppertal sind wir gern persönlich da. Überall sonst
                läuft es genauso reibungslos per Telefon und Video.
              </p>
            </div>
            <div
              className="tagrow"
              style={{ marginTop: 24 }}
            >
              {AREAS.map((a) => (
                <span className="chip" key={a}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Häufige Fragen</div>
              <h2 className="title">Gut zu wissen.</h2>
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </section>

        {/* Kontakt */}
        <section className="section" id="kontakt" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Kontakt</div>
              <h2 className="title">Deine Website aus Wuppertal?</h2>
              <p
                className="desc"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                30 Minuten, kostenlos &amp; unverbindlich – vor Ort oder per
                Telefon. Wir schauen gemeinsam, was deine Seite braucht.
              </p>
            </div>
            <ContactForm subject="Anfrage: Standort Wuppertal" />
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a
                className="btn btn-ghost"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lieber direkt einen Termin buchen{" "}
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
