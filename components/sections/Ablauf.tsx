import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Absprache",
    text: "Kurzes Gespräch am Telefon oder vor Ort: Was soll bleiben, was soll besser werden? Mehr brauchen wir nicht von dir.",
    t: "Stunde 0 · kostenlos",
  },
  {
    n: "2",
    title: "Entwurf",
    text: "Du bekommst einen fertigen Entwurf — als echte Seite zum Durchklicken auf deinem Handy. Kein PDF, keine Skizze.",
    t: "nach ~24 h",
  },
  {
    n: "3",
    title: "Live gehen",
    text: "Ein Wort von dir, und deine neue Website ist online — auf deiner gewohnten Adresse, ohne Ausfallzeit.",
    t: "nach 48 h",
  },
];

export default function Ablauf() {
  return (
    <section className="section" id="ablauf">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// So läuft&apos;s ab</p>
          <h2 className="title">Drei Schritte. Fertig.</h2>
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
