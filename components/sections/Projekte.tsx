import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getCaseStudy } from "@/lib/case-studies";

// Kuratierte Auswahl für die Homepage – das Flaggschiff zuerst (volle Breite).
const FEATURED = [
  "nfc-loyalty-plattform",
  "lohnabrechnungs-verteiler",
  "euer-buchhaltungs-dashboard",
  "kitchen-display-system",
] as const;

export default function Projekte() {
  return (
    <section className="section" id="projekte">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Projekte</p>
          <h2 className="title">Gebaut. Im Einsatz.</h2>
          <p className="desc">
            Keine Konzepte in Schubladen: Diese Systeme laufen produktiv — täglich
            im Betrieb, monatlich in der Lohnverteilung.
          </p>
        </Reveal>
        <Reveal>
          <div className="refs">
            {FEATURED.map((slug, i) => {
              const cs = getCaseStudy(slug);
              if (!cs?.teaser) return null;
              return (
                <Link
                  className={i === 0 ? "ref ref-wide" : "ref"}
                  href={`/referenzen/${cs.slug}`}
                  key={cs.slug}
                >
                  <div className="body body-lg">
                    <div className="row">
                      <h3>{cs.title}</h3>
                      <span className="tag">{cs.tagline}</span>
                    </div>
                    <p className="case-lbl">Worum es geht</p>
                    <p>{cs.teaser.about}</p>
                    <p className="case-lbl">Unsere Aufgabe</p>
                    <p>{cs.teaser.task}</p>
                    <div className="stackrow">
                      {cs.teaser.facts.map((f) => (
                        <span className="chip" key={f}>
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="case-lbl" style={{ marginTop: 18 }}>
                      <span className="go">Case Study lesen →</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="refs-foot">
            <Link className="btn btn-s" href="/referenzen">
              Alle Referenzen ansehen →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
