import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/case-studies";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Referenzen – Software, Apps & Websites",
  description:
    "Echte Projekte, die produktiv laufen: NFC-Loyalty-Plattform, Lohnabrechnungs-Verteiler, Kitchen Display System & mehr – plus Websites für lokale Betriebe.",
  alternates: { canonical: "/referenzen" },
};

function CaseCard({ cs }: { cs: (typeof caseStudies)[number] }) {
  return (
    <Link className="ref" href={`/referenzen/${cs.slug}`}>
      <div className="thumb">
        {cs.image ? (
          <Image
            src={cs.image}
            alt={cs.imageAlt ?? cs.title}
            fill
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        ) : (
          <div className="ph">
            <span>Screenshot folgt — Projekt läuft produktiv</span>
          </div>
        )}
      </div>
      <div className="body">
        <div className="row">
          <h3>{cs.title}</h3>
          <span className="go">{cs.tagline}</span>
        </div>
        <p>{cs.lede}</p>
      </div>
    </Link>
  );
}

export default function ReferenzenPage() {
  const software = caseStudies.filter((c) => c.kind === "software");
  const websites = caseStudies.filter((c) => c.kind === "website");

  return (
    <>
      <Navbar />
      <main>
        <header className="subhero">
          <div className="wrap">
            <Link href="/" className="backlink">
              ← Zurück zur Startseite
            </Link>
            <div className="kicker" style={{ marginTop: 28 }}>
              // Referenzen
            </div>
            <h1>Gebaut. Im Einsatz.</h1>
            <p className="lede">
              Keine Konzepte in Schubladen: Diese Systeme laufen produktiv —
              vom NFC-Check-in bis zur monatlichen Lohnverteilung. Und wenn es
              „nur“ eine Website sein soll, findest du die weiter unten.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <Reveal className="section-lead">
              <p className="kicker">// Software &amp; Apps</p>
              <h2 className="title">Individuelle Software.</h2>
            </Reveal>
            <Reveal>
              <div className="refs">
                {software.map((cs) => (
                  <CaseCard cs={cs} key={cs.slug} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="section-lead">
              <p className="kicker">// Websites</p>
              <h2 className="title">Websites für Betriebe.</h2>
            </Reveal>
            <Reveal>
              <div className="refs">
                {websites.map((cs) => (
                  <CaseCard cs={cs} key={cs.slug} />
                ))}
              </div>
              <div className="cs-nav" style={{ marginTop: 48 }}>
                <a
                  className="btn btn-primary"
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eigenes Projekt starten <span className="btn-arrow">→</span>
                </a>
                <Link className="btn btn-ghost" href="/beispiele">
                  Website-Beispiele zum Durchklicken
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
