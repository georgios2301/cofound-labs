import Reveal from "@/components/ui/Reveal";

// Vier Angebote: Basis (nur Auffrischung, Selbst-Hosting), Refresh (hervorgehoben),
// Relaunch — und darunter eine Kachel in voller Breite für Individuelle Software & KI.

const BASIS = [
  "Komplette Neugestaltung deiner Website (bis 5 Seiten)",
  "Optimiert für Handy, Tablet & Desktop",
  "Texte & Bilder übernommen und aufgefrischt",
  "Übergabe der fertigen Seite — sie gehört komplett dir",
  "Schritt-für-Schritt-Anleitung: selbst hochladen & pflegen",
  "Hosting & Verwaltung übernimmst du selbst — Änderungen durch uns kosten extra",
];

const REFRESH = [
  "Komplette Neugestaltung deiner Website (bis 5 Seiten)",
  "Optimiert für Handy, Tablet & Desktop",
  "Texte & Bilder übernommen und aufgefrischt",
  "Impressum & Datenschutz inklusive",
  "Live-Gang auf deiner Domain",
];

const RELAUNCH = [
  "Alles aus Refresh, bis 10 Seiten",
  "Texte professionell neu geschrieben",
  "Bilder aufbereitet & veredelt",
  "Google-Unternehmensprofil eingerichtet bzw. abgeglichen",
  "Zwei Korrekturschleifen",
];

const KI = [
  "Individuelle Software, Apps & Tools",
  "Automatisierte Abläufe: Angebote, Rechnungen, Termin- & Kundenkommunikation",
  "KI-Lösungen, die im Alltag wirklich benutzt werden",
  "Festpreis vor Projektstart — keine Überraschungen",
];

function CheckList({ items, extra }: { items: string[]; extra?: React.ReactNode }) {
  return (
    <ul className="pc-list">
      {items.map((li) => (
        <li key={li}>
          <span className="ck">✓</span> <span>{li}</span>
        </li>
      ))}
      {extra}
    </ul>
  );
}

export default function Preis() {
  return (
    <section className="priceblock" id="preis">
      <div className="wrap">
        <Reveal>
          <p className="kicker">{"// Preise · Festpreis"}</p>
          <h2 className="title">Ein Preis. Alles drin.</h2>
          <p className="plead">
            Pauschal und vorher auf den Euro genau.{" "}
            <b>Kein Stundenzettel, kein Kleingedrucktes.</b>
          </p>
        </Reveal>

        <Reveal>
          <div className="pgrid">
            {/* POS. 01 — Basis */}
            <div className="pc">
              <div className="pc-head">
                <span>Pos. 01 · Basis</span>
              </div>
              <div className="pc-price anton">
                199&thinsp;€ <span className="pc-once">einmalig</span>
              </div>
              <p className="pc-lede">
                Nur die Auffrischung: Du bekommst die fertige Seite und machst
                den Rest selbst.
              </p>
              <hr className="pc-sep" />
              <CheckList items={BASIS} />
              <a className="btn btn-y" href="#kontakt">
                Kontakt aufnehmen <span className="btn-arrow">→</span>
              </a>
            </div>

            {/* POS. 02 — Refresh */}
            <div className="pc pc-featured">
              <div className="pc-head">
                <span>Pos. 02 · Refresh</span>
                <span className="pc-badge">Beliebt</span>
              </div>
              <div className="pc-price anton">
                399&thinsp;€ <span className="pc-once">einmalig</span>
              </div>
              <p className="pc-lede">
                Deine bestehende Website, komplett aufgefrischt — ohne
                versteckte Gebühren.
              </p>
              <hr className="pc-sep" />
              <CheckList
                items={REFRESH}
                extra={
                  <>
                    <li>
                      <span className="ck">✓</span>{" "}
                      <span>
                        <b>12 Monate Betreuung &amp; Hosting inklusive</b>
                      </span>
                    </li>
                    <li>
                      <span className="ck">✓</span>{" "}
                      <span>
                        <b>100-€-Änderungs-Gutschein inklusive</b> — für
                        Anpassungen nach dem Live-Gang
                      </span>
                    </li>
                  </>
                }
              />
              <a className="btn btn-y" href="#kontakt">
                Kontakt aufnehmen <span className="btn-arrow">→</span>
              </a>
            </div>

            {/* POS. 03 — Relaunch */}
            <div className="pc">
              <div className="pc-head">
                <span>Pos. 03 · Relaunch</span>
              </div>
              <div className="pc-price anton">
                599&thinsp;€ <span className="pc-once">einmalig</span>
              </div>
              <p className="pc-lede">
                Kompletter Neuaufbau — wenn mehr als eine Auffrischung nötig
                ist.
              </p>
              <hr className="pc-sep" />
              <CheckList
                items={RELAUNCH}
                extra={
                  <>
                    <li>
                      <span className="ck">✓</span>{" "}
                      <span>
                        <b>12 Monate Betreuung &amp; Hosting inklusive</b>
                      </span>
                    </li>
                    <li>
                      <span className="ck">✓</span>{" "}
                      <span>
                        <b>150-€-Änderungs-Gutschein inklusive</b>
                      </span>
                    </li>
                  </>
                }
              />
              <a className="btn btn-y" href="#kontakt">
                Kontakt aufnehmen <span className="btn-arrow">→</span>
              </a>
            </div>

            {/* POS. 04 — Individuelle Software & KI (volle Breite) */}
            <div className="pc pc-wide">
              <div className="pc-wide-inner">
                <div>
                  <div className="pc-head">
                    <span>Pos. 04 · Individuelle Software &amp; KI</span>
                  </div>
                  <div className="pc-price anton">Individuell</div>
                  <p className="pc-once-line">Festpreis nach Erstgespräch</p>
                  <p className="pc-lede">
                    Wenn deine Website steht, automatisieren wir deinen
                    Betrieb.
                  </p>
                  <a className="btn btn-p" href="#kontakt">
                    Kontakt aufnehmen <span className="btn-arrow">→</span>
                  </a>
                </div>
                <div>
                  <CheckList items={KI} />
                  <a className="pc-sub" href="#software">
                    Beispiele ansehen ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="pnote-line">
            <b>Keine Bindung</b> — die Website und alle Rechte gehören dir. ·{" "}
            <b>Refresh &amp; Relaunch:</b> Hosting, Domain-Verwaltung und
            kleine Änderungen sind im ersten Jahr abgedeckt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
