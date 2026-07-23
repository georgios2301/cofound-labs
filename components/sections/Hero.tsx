import { ANALYSE_URL, ANALYSE_LABEL, MUSTERHAUS_URL } from "@/lib/constants";
import RevealText from "@/components/ui/RevealText";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="toplbl">Das digitale Betriebssystem für lokale Betriebe</p>
        <RevealText
          as="h1"
          delay={0.15}
          lines={[
            "Eine Website ist",
            <span key="l2">
              nur das <span className="mark-a">Schaufenster.</span>
            </span>,
          ]}
        />
        <p className="sub">
          Wir bauen deinem Betrieb beides: das Aushängeschild nach außen und die
          Werkzeuge nach innen —{" "}
          <b>
            Website plus maßgeschneiderte Software, zu einem betreuten
            Betriebssystem verbunden.
          </b>{" "}
          Du startest günstig und wächst Werkzeug für Werkzeug hinein.
        </p>
        <div className="btnrow">
          <a
            className="btn btn-p"
            href={ANALYSE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ANALYSE_LABEL} →
          </a>
          <a className="btn btn-s" href={MUSTERHAUS_URL}>
            Musterhaus live ansehen
          </a>
        </div>
        <div className="trustrow">
          <span className="trust">✓ Website + Werkzeuge aus einer Hand</span>
          <span className="trust">✓ Günstiger Einstieg, betreut</span>
          <span className="trust">✓ EU-Hosting &amp; DSGVO</span>
        </div>
      </div>
    </header>
  );
}
