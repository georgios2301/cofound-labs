import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import BeforeAfter from "@/components/ui/BeforeAfter";
import { services } from "@/lib/services";

const BRANCHEN = services.filter((s) => s.group === "branche");

export default function Websites() {
  return (
    <section className="software" id="websites">
      <div className="wrap">
        <Reveal>
          <p className="kicker">// Auch das machen wir</p>
          <h2>
            Website-Auffrischung ab 399 € — für lokale Betriebe, die online
            wieder gut aussehen wollen.
          </h2>
          <p className="lede">
            Deine Website sieht aus wie 2010? Wir frischen sie in 48 Stunden
            komplett auf — ab 399 € pauschal, inkl. 12 Monate Betreuung &amp;
            Hosting, ohne versteckte Gebühren.
          </p>
        </Reveal>

        <Reveal>
          <BeforeAfter />
          <p className="ba-cap">
            // Zieh den Regler: links das Alte, rechts das Neue — 48 Stunden
            dazwischen. (Beispiel: fiktiver Friseursalon)
          </p>
        </Reveal>

        <Reveal>
          <div className="sw-list">
            <Link className="sw-row" href="/leistungen/website-erstellen-lassen">
              <span className="tag">ab 399 € · pauschal</span>
              <div>
                <h4>Website erstellen oder auffrischen lassen</h4>
                <p>
                  Individuell, mobil-optimiert, mit technischer SEO-Basis — in
                  48 Stunden live.
                </p>
              </div>
              <span className="go">→</span>
            </Link>
            <Link className="sw-row" href="/beispiele">
              <span className="tag">Live-Demos</span>
              <div>
                <h4>Beispiele zum Durchklicken</h4>
                <p>
                  Drei echte Demo-Websites — so könnte dein Auftritt aussehen.
                </p>
              </div>
              <span className="go">→</span>
            </Link>
          </div>
          <div className="stackrow" style={{ marginTop: 22 }}>
            {BRANCHEN.map((b) => (
              <Link className="chip" href={`/leistungen/${b.slug}`} key={b.slug}>
                Website für {b.navLabel}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
