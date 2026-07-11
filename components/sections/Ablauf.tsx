import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Beratung",
    text: "Kostenloses Erstgespräch: Wir verstehen deinen Ablauf, klären die Machbarkeit und legen fest, was die erste Version können muss. Danach bekommst du ein Konzept und einen Festpreis.",
    t: "Tag 0 · kostenlos",
  },
  {
    n: "2",
    title: "Umsetzung",
    text: "Wir bauen die erste nutzbare Version — echte Software, die deinen Kern-Ablauf erledigt. Du testest sie im Alltag, nicht auf Folien. Nicht zufrieden? Dann zahlst du nichts.",
    t: "Tag 7 · nutzbar",
  },
  {
    n: "3",
    title: "Weiterentwicklung",
    text: "Aus der echten Nutzung lernen und gezielt ausbauen: neue Funktionen, Betreuung, Hosting und Betrieb — so lange und so weit, wie du willst.",
    t: "laufend",
  },
];

export default function Ablauf() {
  return (
    <section className="section" id="ablauf">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// So läuft&apos;s ab</p>
          <h2 className="title">Drei Phasen. Ein Produkt.</h2>
        </Reveal>
        <Reveal>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="t">{s.t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
