import Reveal from "@/components/ui/Reveal";
import { CALENDLY_URL } from "@/lib/constants";
import {
  BadgeEuro,
  Receipt,
  MessageCircle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const ITEMS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: BadgeEuro,
    title: "Geld-zurück-Garantie",
    text: "Keine nutzbare erste Version nach 7 Tagen? Dann bekommst du keine Rechnung. Ohne Diskussion.",
  },
  {
    icon: Receipt,
    title: "Festpreis vorab",
    text: "Ein klares Angebot vor dem Start — du weißt vorher, was es kostet, nicht hinterher.",
  },
  {
    icon: MessageCircle,
    title: "Direkte Kommunikation",
    text: "Kein Projektmanagement-Gefasel: Du erreichst direkt den, der deine Software baut.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO & EU-Hosting",
    text: "Deine Daten und die deiner Kunden bleiben in der EU — dokumentiert und nachvollziehbar.",
  },
];

export default function Garantie() {
  return (
    <section className="section" id="garantie" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Garantie &amp; Sicherheit</p>
          <h2 className="title">Du trägst kein Risiko.</h2>
          <p className="desc">
            Wir wissen, was wir bauen — deshalb können wir dir das schriftlich
            geben:
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-4" style={{ marginTop: 38 }}>
            {ITEMS.map((it) => {
              const Icon = it.icon;
              return (
                <div className="card" key={it.title}>
                  <div className="c-ic">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              );
            })}
          </div>
          <div className="refs-foot">
            <a
              className="btn btn-p"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kostenloses Erstgespräch sichern <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
