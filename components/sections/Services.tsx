import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/services";
import { SERVICE_ICONS, FALLBACK_ICON } from "@/lib/service-icons";

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <Reveal className="section-lead">
          <div className="kicker">// Was wir bauen</div>
          <h2 className="title">
            Von der Website bis zur skalierenden Software.
          </h2>
          <p className="desc">
            Wir decken den gesamten Stack ab – ein Partner, kein Flickenteppich
            aus Freelancern.
          </p>
        </Reveal>
        <div className="grid grid-3">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[service.cardIcon] ?? FALLBACK_ICON;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link className="card" href={`/leistungen/${service.slug}`}>
                  <div className="c-ic">
                    <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                  </div>
                  <h3>{service.navLabel}</h3>
                  <p>{service.cardDesc}</p>
                  <div className="proj-more">
                    Mehr erfahren <span className="btn-arrow">→</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link className="btn btn-ghost" href="/leistungen">
              Alle Leistungen ansehen <span className="btn-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
