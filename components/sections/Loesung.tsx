import Reveal from "@/components/ui/Reveal";
import {
  Rocket,
  Code2,
  Receipt,
  KeyRound,
  ShieldCheck,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

const ITEMS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Rocket,
    title: "Nutzbar ab Tag 7",
    text: "Kein Klickdummy, keine Folien: eine erste Version, die deinen Ablauf wirklich erledigt — zum Testen im echten Alltag.",
  },
  {
    icon: Code2,
    title: "Echter, sauberer Code",
    text: "Kein Baukasten, kein halbgarer Low-Code. Eine technische Basis, die skalierbar ist und weiterentwickelt werden kann.",
  },
  {
    icon: Receipt,
    title: "Festpreis vorab",
    text: "Du kennst den Preis, bevor wir anfangen. Keine Stundensätze ohne Deckel, keine Überraschungen auf der Rechnung.",
  },
  {
    icon: KeyRound,
    title: "Der Code gehört dir",
    text: "Vollständiger Quellcode und alle Zugänge nach Projektabschluss. Du bist nie an uns gebunden.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO & EU-Hosting",
    text: "Datenschutzfreundliche Architektur, Hosting in der EU — bei sensiblen Daten auch komplett auf eigenem Server, ohne Cloud.",
  },
  {
    icon: MessageCircle,
    title: "Direkter Draht",
    text: "Du sprichst mit dem, der baut. Kein Projektmanagement-Überbau, keine Ticket-Systeme, keine Warteschleifen.",
  },
];

export default function Loesung() {
  return (
    <section className="section" id="loesung">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Was du bekommst</p>
          <h2 className="title">Ein Produkt. Kein Klickdummy.</h2>
          <p className="desc">
            Wir bauen deine Software in 7 Tagen zur ersten nutzbaren Version —
            und wenn du danach nicht zufrieden bist, zahlst du nichts.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid grid-3" style={{ marginTop: 38 }}>
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
        </Reveal>
      </div>
    </section>
  );
}
