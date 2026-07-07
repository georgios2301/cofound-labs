import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/services";
import { SERVICE_ICONS, FALLBACK_ICON } from "@/lib/service-icons";

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
            deiner Branche ankommt. Ab 399 € pauschal — ohne versteckte
            Gebühren.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-4">
            {branchen.map((s) => {
              const Icon = SERVICE_ICONS[s.cardIcon] ?? FALLBACK_ICON;
              return (
                <Link className="card" href={`/leistungen/${s.slug}`} key={s.slug}>
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
        </Reveal>
      </div>
    </section>
  );
}
