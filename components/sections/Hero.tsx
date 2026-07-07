import BeforeAfter from "@/components/ui/BeforeAfter";
import { PHONE_E164, PHONE_DISPLAY } from "@/lib/constants";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="toplbl">Website-Auffrischung für lokale Betriebe</p>
        <h1>
          Website auffrischen.
          <br />
          <span className="mark-a">Ab 399 Euro.</span>
          <br />
          Ohne versteckte Gebühren.
        </h1>
        <p className="sub">
          Deine Website sieht aus wie 2010? Wir frischen sie komplett auf —{" "}
          <b>ab 399 €, inklusive 12 Monate Betreuung &amp; Hosting.</b>{" "}
          Absprache, Entwurf, live gehen. Fertig.
        </p>
        <div className="btnrow">
          <a className="btn btn-p" href="#kontakt">
            Website auffrischen →
          </a>
          <a className="btn btn-s" href={`tel:${PHONE_E164}`}>
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <BeforeAfter />

      <p className="ba-cap">
        // Zieh den Regler: links das Alte, rechts das Neue — 48 Stunden
        dazwischen. (Beispiel: fiktiver Friseursalon)
      </p>
    </header>
  );
}
