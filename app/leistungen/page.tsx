import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { services } from "@/lib/services";
import { SERVICE_ICONS, FALLBACK_ICON } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: "Leistungen – Individualsoftware, Apps & Websites",
  description:
    "Unsere Leistungen: Individualsoftware, App-, Web-App- und MVP-Entwicklung – erste nutzbare Version in 7 Tagen, Festpreis vorab. Dazu Website-Auffrischung ab 399 € pauschal für lokale Betriebe.",
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
              Individuelle Software, Apps und MVPs — erste nutzbare Version in
              7 Tagen, Festpreis vorab. Und wenn es die Website ist: Auffrischen
              ab 399 € pauschal.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Software, Apps &amp; MVPs</div>
              <h2 className="title">Individuelle Entwicklung</h2>
            </div>
            <div className="grid grid-3">
              {kernleistungen.map((s) => {
                const Icon = SERVICE_ICONS[s.cardIcon] ?? FALLBACK_ICON;
                return (
                  <Link
                    key={s.slug}
                    className="card"
                    href={`/leistungen/${s.slug}`}
                  >
                    <div className="c-ic">
                      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <h3>{s.navLabel}</h3>
                    <p>{s.cardDesc}</p>
                    <div className="proj-more">
                      Mehr erfahren <span className="btn-arrow">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Website-Auffrischung nach Branche</div>
              <h2 className="title">Website für deine Branche – ab 399 € pauschal</h2>
            </div>
            <div className="grid grid-4">
              {branchen.map((s) => {
                const Icon = SERVICE_ICONS[s.cardIcon] ?? FALLBACK_ICON;
                return (
                  <Link
                    key={s.slug}
                    className="card"
                    href={`/leistungen/${s.slug}`}
                  >
                    <div className="c-ic">
                      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <h3>{s.navLabel}</h3>
                    <p>{s.cardDesc}</p>
                    <div className="proj-more">
                      Mehr erfahren <span className="btn-arrow">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
