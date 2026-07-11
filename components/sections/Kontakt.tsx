import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import {
  CALENDLY_URL,
  EMAIL,
  PHONE_E164,
  PHONE_DISPLAY,
} from "@/lib/constants";

export default function Kontakt() {
  return (
    <section className="kontakt" id="kontakt">
      <div className="wrap">
        <Reveal>
          <h2>Du hast den Ablauf im Kopf. Wir bauen das Tool.</h2>
          <p className="lede">
            Erzähl uns in 15 Minuten, was dich im Alltag aufhält — wir sagen
            dir ehrlich, ob und wie Software das löst. Und was es kostet.
          </p>
        </Reveal>

        <div className="cols">
          <Reveal>
            <div className="kways">
              <a
                className="kway"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ic">◷</span>
                <span>
                  <b>Strategiegespräch buchen</b>
                  <span className="d">
                    15 Minuten, kostenlos &amp; unverbindlich — via Calendly
                  </span>
                </span>
              </a>
              <a className="kway" href={`tel:${PHONE_E164}`}>
                <span className="ic">☎</span>
                <span>
                  <b>{PHONE_DISPLAY}</b>
                  <span className="d">Mo–Fr · einfach direkt anrufen</span>
                </span>
              </a>
              <a className="kway" href={`mailto:${EMAIL}`}>
                <span className="ic">@</span>
                <span>
                  <b>{EMAIL}</b>
                  <span className="d">
                    Beschreib kurz deinen Ablauf oder deine Idee
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm
              heading="Oder schreib uns direkt:"
              subject="Individualsoftware – Anfrage über die Startseite"
              defaultService="Individualsoftware"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
