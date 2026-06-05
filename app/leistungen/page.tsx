import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Leistungen – Software, Apps & Websites",
  description:
    "Unsere Leistungen: Website erstellen lassen, MVP-, Web-App-, App- & Individualsoftware-Entwicklung. Ein Partner für dein digitales Produkt – von der Idee bis zum Launch.",
  alternates: { canonical: "/leistungen" },
};

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
              Von der schnellen Website bis zur komplexen Software – ein Partner
              für dein digitales Produkt, von der ersten Idee bis zum Launch.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="grid grid-3">
              {services.map((s) => (
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
