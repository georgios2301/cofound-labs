import Reveal from "@/components/ui/Reveal";

const PAINS = [
  {
    title: "Zettel, Zuruf, Chaos",
    text: "Bestellungen auf Notizzetteln, Absprachen per Zuruf, Wissen nur in Köpfen. Funktioniert — bis es voll wird. Dann gehen Dinge unter.",
  },
  {
    title: "Excel als Datenbank",
    text: "Die eine Tabelle, die keiner mehr anfassen darf. Händisch gepflegt, fehleranfällig, und nur eine Person weiß, wie sie funktioniert.",
  },
  {
    title: "Standardsoftware passt nicht",
    text: "Das Tool von der Stange kann 100 Dinge — nur nicht deinen Ablauf. Also verbiegst du deinen Betrieb, statt dass die Software sich nach dir richtet.",
  },
  {
    title: "Kein Draht zu einem Entwickler",
    text: "Agenturen wollen Workshops und sechsstellige Budgets. Freelancer verschwinden nach dem Projekt. Und du willst eigentlich nur, dass es läuft.",
  },
];

export default function Problem() {
  return (
    <section className="problemblock" id="problem">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Kommt dir bekannt vor?</p>
          <h2 className="title">
            Warum gute Ideen im Betrieb liegen bleiben.
          </h2>
          <p className="plead">
            Fast jeder Betrieb hat den einen Ablauf, der jeden Tag Zeit frisst.
            Und fast immer bleibt er, wie er ist — <b>nicht, weil die Lösung fehlt,
            sondern weil sie nie greifbar wird.</b>
          </p>
        </Reveal>
        <Reveal>
          <div className="pain-grid">
            {PAINS.map((p) => (
              <div className="pc" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="pnote-line">
            Die Wahrheit ist: Ohne ein Werkzeug, das du <b>anfassen, testen und
            im Alltag benutzen</b> kannst, bleibt jede Idee Theorie. Genau da
            setzen wir an — der Ablauf ist in deinem Kopf, er fehlt nur als
            Software.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
