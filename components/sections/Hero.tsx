import { CALENDLY_URL, PHONE_E164, PHONE_DISPLAY } from "@/lib/constants";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="toplbl">Individuelle Software- &amp; App-Entwicklung</p>
        <h1>
          Deine Software.
          <br />
          <span className="mark-a">Nutzbar in 7 Tagen.</span>
          <br />
          Sonst zahlst du nichts.
        </h1>
        <p className="sub">
          Du beschreibst den Ablauf, wir bauen das Werkzeug: individuelle
          Software und Apps für deinen Betrieb —{" "}
          <b>
            erste nutzbare Version in 7 Tagen, Festpreis vorab,
            Geld-zurück-Garantie.
          </b>
        </p>
        <div className="btnrow">
          <a
            className="btn btn-p"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Kostenloses Erstgespräch →
          </a>
          <a className="btn btn-s" href={`tel:${PHONE_E164}`}>
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
        <div className="trustrow">
          <span className="trust">✓ In 7 Tagen nutzbar</span>
          <span className="trust">✓ Individuelle Entwicklung</span>
          <span className="trust">✓ Geld-zurück-Garantie</span>
        </div>
      </div>
    </header>
  );
}
