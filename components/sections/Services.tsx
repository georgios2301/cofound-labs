import type { ReactNode } from "react";
import { Smartphone, Gem } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const SERVICES: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: "</>",
    title: "Web Apps",
    desc: "Moderne, skalierbare Webanwendungen mit dem richtigen Stack für dein Business – von der Landing Page bis zur komplexen SaaS-Plattform.",
  },
  {
    icon: <Smartphone size={22} strokeWidth={1.9} aria-hidden="true" />,
    title: "Mobile Apps",
    desc: "iOS & Android, nativ oder cross-platform. Wir bauen Apps, die deine Nutzer täglich benutzen wollen.",
  },
  {
    icon: <Gem size={22} strokeWidth={1.9} aria-hidden="true" />,
    title: "MVPs",
    desc: "Schnell ein funktionierendes Produkt auf die Straße bringen. Wir bauen das Wesentliche – nichts mehr, nichts weniger.",
  },
  {
    icon: "{ }",
    title: "Backends & APIs",
    desc: "Die unsichtbare Technik, die alles zusammenhält. Stabile, sichere und gut dokumentierte Backends und Schnittstellen.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <Reveal className="section-lead">
          <div className="kicker">// Was wir bauen</div>
          <h2 className="title">
            Von der ersten Zeile Code bis zum fertigen Produkt.
          </h2>
          <p className="desc">
            Wir decken den gesamten Stack ab – ein Partner, kein Flickenteppich
            aus Freelancern.
          </p>
        </Reveal>
        <div className="grid grid-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <div className="card">
                <div className="c-ic">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
