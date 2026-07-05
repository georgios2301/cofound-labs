import Reveal from "@/components/ui/Reveal";

const INCLUDED = [
  "Komplette Neugestaltung deiner Website",
  "Optimiert für Handy, Tablet & Desktop",
  "Texte & Bilder übernommen und aufgefrischt",
  "Impressum & Datenschutz inklusive",
  "Live-Gang auf deiner Domain",
];

const NOTES = [
  {
    b: "0 € monatlich",
    text: "— wenn deine bestehende Domain übernommen werden kann, fallen keine laufenden Kosten an.",
  },
  {
    b: "Änderungen? 20 €/h",
    text: "— abgerechnet auf volle halbe Stunden. Eine neue Öffnungszeit kostet dich 10 €, kein neues Projekt.",
  },
  {
    b: "Keine Bindung",
    text: "— die Website gehört dir. Du kannst jederzeit ändern lassen, was du willst — auch woanders.",
  },
];

export default function Preis() {
  return (
    <section className="priceblock" id="preis">
      <div className="wrap">
        <div className="cols">
          <Reveal>
            <div className="huge">
              199&thinsp;€ <small>Alles drin.</small>
            </div>
            <p className="plbl">
              Pauschal.{" "}
              <b>Kein Stundenzettel, kein Kleingedrucktes, keine Abos.</b> Du
              weißt vorher auf den Euro genau, was es kostet.
            </p>
          </Reveal>
          <Reveal>
            <ul className="plist">
              {INCLUDED.map((li) => (
                <li key={li}>
                  <span className="ck">✓</span> {li}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal>
          <div className="pnotes">
            {NOTES.map((n) => (
              <div className="pnote" key={n.b}>
                <b>{n.b}</b> {n.text}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
