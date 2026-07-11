import Reveal from "@/components/ui/Reveal";

const WITHOUT = [
  "Der Ablauf bleibt bei Zettel, Zuruf und Excel — und frisst weiter jede Woche Stunden.",
  "Monatelange Agenturprojekte mit Workshops, bevor irgendetwas benutzbar ist.",
  "Stundensätze ohne Deckel — das Budget ist weg, bevor das Produkt da ist.",
  "Software, die am Alltag vorbei entwickelt wurde und die keiner benutzt.",
];

const WITH = [
  "Erste nutzbare Version in 7 Tagen — sonst zahlst du nichts.",
  "Festpreis vor dem Start, klarer Umfang, keine Überraschungen.",
  "Code, Zugänge und Dokumentation gehören dir.",
  "Gebaut mit den Leuten, die täglich damit arbeiten — und danach im echten Betrieb weiterentwickelt.",
];

export default function Vergleich() {
  return (
    <section className="section" id="vergleich" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Der Unterschied</p>
          <h2 className="title">Ohne uns. Mit uns.</h2>
        </Reveal>
        <Reveal>
          <div className="vs">
            <div className="vs-col">
              <h3>Ohne uns</h3>
              <ul>
                {WITHOUT.map((t) => (
                  <li key={t}>
                    <span className="vx no">✗</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="vs-col good">
              <h3>Mit uns</h3>
              <ul>
                {WITH.map((t) => (
                  <li key={t}>
                    <span className="vx">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
