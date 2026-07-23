import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { STAGES, PRICING_NOTE } from "@/lib/pricing";
import { ANALYSE_URL, ANALYSE_LABEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preise – günstig starten, ins Betriebssystem wachsen",
  description:
    "Keine 5.000-€-Pakete auf einen Schlag: Du startest günstig mit deiner Website und wächst Werkzeug für Werkzeug in dein Betriebssystem hinein. Analyse, Website, Werkzeuge und Betreuung im Überblick.",
  alternates: { canonical: "/preise" },
};

export default function PreisePage() {
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
              // Preise
            </div>
            <h1>Günstig starten. Schritt für Schritt wachsen.</h1>
            <p className="lede">{PRICING_NOTE}</p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Deine Reise in vier Stufen</div>
              <h2 className="title">Vom ersten Gespräch zum Betriebssystem</h2>
            </div>
            <div className="grid grid-2" style={{ marginTop: 38 }}>
              {STAGES.map((s) => (
                <div className="card" key={s.step}>
                  <div className="c-num">{s.step}</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3 style={{ margin: "8px 0 0" }}>{s.name}</h3>
                    <span className="chip accent">{s.kind}</span>
                  </div>
                  <p
                    className="anton"
                    style={{ fontSize: 26, margin: "6px 0 10px", color: "var(--ink)" }}
                  >
                    {s.price}
                  </p>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Nächster Schritt</div>
              <h2 className="title">Der erste Schritt ist kostenlos</h2>
              <p className="desc">
                In der Digitalisierungs-Analyse schauen wir gemeinsam, womit sich
                der Anfang für dich am meisten lohnt.
              </p>
            </div>
            <div
              className="btnrow"
              style={{ justifyContent: "center", marginTop: 28 }}
            >
              <a
                className="btn btn-p"
                href={ANALYSE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ANALYSE_LABEL} →
              </a>
              <Link className="btn btn-s" href="/betriebssystem">
                Das Betriebssystem ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
