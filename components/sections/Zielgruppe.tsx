import Reveal from "@/components/ui/Reveal";

const AUDIENCES: [string, string, string][] = [
  [
    "01",
    "Solo-Gründer",
    "Du hast die Idee, aber keinen CTO. Wir werden dein Tech-Team und bringen deine Vision zum Leben.",
  ],
  [
    "02",
    "Early-Stage Startups",
    "Ihr braucht ein MVP, um Investoren oder erste Kunden zu überzeugen – schnell, solide und skalierbar.",
  ],
  [
    "03",
    "Skalierende Teams",
    "Euer Team kommt nicht hinterher? Wir bauen parallel mit und liefern ohne Einarbeitungszeit.",
  ],
];

export default function Zielgruppe() {
  return (
    <section className="section" id="fuer-wen">
      <div className="wrap">
        <Reveal className="section-lead">
          <div className="kicker">// Für wen wir bauen</div>
          <h2 className="title">Egal wo du im Startup-Zyklus stehst.</h2>
          <p className="desc">
            Wir passen uns deinen Bedürfnissen an – vom ersten Prototyp bis zum
            skalierenden Produkt.
          </p>
        </Reveal>
        <div className="grid grid-3">
          {AUDIENCES.map(([num, title, desc], i) => (
            <Reveal key={num} delay={i * 0.08}>
              <div className="card">
                <div className="c-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
