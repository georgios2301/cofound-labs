import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Leistungen – Website-Auffrischung, Software & Apps",
  description:
    "Unsere Leistungen: Website auffrischen lassen für 199 € – für Friseure, Gastronomie, Handwerker & KMU. Dazu MVP-, Web-App-, App- & Individualsoftware-Entwicklung.",
  alternates: { canonical: "/leistungen" },
};

const branchen = services.filter((s) => s.group === "branche");
const kernleistungen = services.filter((s) => s.group !== "branche");

export default function LeistungenPage() {
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
              // Leistungen
            </div>
            <h1>Womit wir dir helfen</h1>
            <p className="lede">
              Vom schnellen Website-Auffrischen für 199 € bis zur individuellen
              Software – ein Partner für deinen digitalen Auftritt, von der
              ersten Idee bis zum Launch.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Website-Auffrischung nach Branche</div>
              <h2 className="title">Website für deine Branche – 199 € pauschal</h2>
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

        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Und wenn's mehr sein soll</div>
              <h2 className="title">Software, Apps & MVPs</h2>
            </div>
            <div className="grid grid-3">
              {kernleistungen.map((s) => (
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
      </main>
      <Footer />
    </>
  );
}
