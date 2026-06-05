import Reveal from "@/components/ui/Reveal";

const STEPS: [string, string, string][] = [
  [
    "01",
    "Kennenlerngespräch",
    "Wir besprechen deine Idee, deine Ziele und deinen Zeitplan – kostenlos und unverbindlich.",
  ],
  [
    "02",
    "Konzept & Angebot",
    "Du bekommst einen klaren Plan mit Technologie-Empfehlung, Timeline und Festpreis.",
  ],
  [
    "03",
    "Entwicklung",
    "Wöchentliche Updates, du siehst den Fortschritt live. Kein Blindflug, keine Überraschungen.",
  ],
  [
    "04",
    "Launch & Support",
    "Wir bringen dein Produkt live und bleiben an deiner Seite – auch nach dem Go-live.",
  ],
];

export default function Prozess() {
  return (
    <section className="section" id="prozess">
      <div className="wrap">
        <Reveal className="section-lead">
          <div className="kicker">// So arbeiten wir</div>
          <h2 className="title">Transparent, strukturiert, mit dir im Mittelpunkt.</h2>
          <p className="desc">
            Von Tag 1 bis Launch weißt du jederzeit, woran wir gerade arbeiten.
          </p>
        </Reveal>
        <Reveal>
          <div className="process">
            {STEPS.map(([num, title, desc]) => (
              <div className="pstep" key={num}>
                <div className="pnum">{num}</div>
                <div className="pdot" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
