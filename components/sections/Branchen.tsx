import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/services";

// Branchen-Landingpages (Website-Auffrischung) – datengetrieben aus services.ts.
const branchen = services.filter((s) => s.group === "branche");

export default function Branchen() {
  return (
    <section className="section" id="branchen">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Für deine Branche gemacht</p>
          <h2 className="title">Website-Auffrischung für lokale Betriebe</h2>
          <p className="desc">
            Ob Salon, Restaurant, Werkstatt oder Büro – wir kennen, worauf es in
            deiner Branche ankommt. 199 € pauschal, in 48 Stunden live.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-3">
            {branchen.map((s) => (
              <Link className="card" href={`/leistungen/${s.slug}`} key={s.slug}>
                <h3>{s.navLabel}</h3>
                <p>{s.cardDesc}</p>
                <div className="proj-more">
                  Mehr erfahren <span className="btn-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
