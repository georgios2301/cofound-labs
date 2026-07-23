import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Wrench,
  Headset,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { PILLARS, WERKZEUGE } from "@/lib/betriebssystem";
import { ANALYSE_URL, ANALYSE_LABEL, MUSTERHAUS_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Das Betriebssystem – Website plus Werkzeuge für deinen Betrieb",
  description:
    "Cofound Labs verbindet Website und interne Werkzeuge zu einem betreuten Betriebssystem für lokale Betriebe: Aushängeschild, Werkzeuge, Betreuung und Datenhoheit in vier Ebenen.",
  alternates: { canonical: "/betriebssystem" },
};

const PILLAR_ICONS: Record<string, LucideIcon> = {
  layout: LayoutDashboard,
  wrench: Wrench,
  headset: Headset,
  shield: ShieldCheck,
};

export default function BetriebssystemPage() {
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
              // Das Betriebssystem
            </div>
            <h1>Website plus Werkzeuge. Ein verbundenes System.</h1>
            <p className="lede">
              Andere bauen dir ein Schaufenster. Wir verbinden dein
              Aushängeschild nach außen mit den Werkzeugen nach innen — zu einem
              System, das dein Betrieb ohne eigenes IT-Team sonst nicht bekommt.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Vier Ebenen</div>
              <h2 className="title">Woraus dein Betriebssystem besteht</h2>
            </div>
            <div className="grid grid-2" style={{ marginTop: 38 }}>
              {PILLARS.map((p) => {
                const Icon = PILLAR_ICONS[p.icon] ?? LayoutDashboard;
                return (
                  <div className="card" key={p.title}>
                    <div className="c-ic">
                      <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <ul
                      style={{
                        marginTop: 14,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        listStyle: "none",
                        padding: 0,
                      }}
                    >
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          style={{ fontSize: 14.5, color: "var(--ink-2)" }}
                        >
                          ✓ {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Werkzeuge</div>
              <h2 className="title">Ein Muster, viele Werkzeuge</h2>
              <p className="desc">
                Es gibt bewusst keinen festen Modul-Katalog. Gebaut wird, was dein
                Betrieb wirklich braucht. Diese hier laufen schon — bei echten
                Betrieben.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: 38 }}>
              {WERKZEUGE.map((w) => (
                <div className="card" key={w.name}>
                  <h3>{w.name}</h3>
                  <p>{w.desc}</p>
                  <span className="chip accent" style={{ marginTop: 14 }}>
                    {w.betrieb}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Nächster Schritt</div>
              <h2 className="title">Wo drückt es bei dir?</h2>
              <p className="desc">
                In der kostenlosen Analyse finden wir den größten Engpass deines
                Betriebs und den passenden ersten Schritt.
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
              <a className="btn btn-s" href={MUSTERHAUS_URL}>
                Musterhaus live ansehen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
