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
          <h2>Schick uns deine alte Website.</h2>
          <p className="lede">
            Wir schauen kostenlos drüber und sagen dir ehrlich, was wir daraus
            machen würden — innerhalb eines Werktags.
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
                  <b>Gesprächstermin buchen</b>
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
                    Schick uns einfach den Link zu deiner Website
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm
              heading="Oder schreib uns direkt:"
              subject="Website-Auffrischung – Anfrage über die Startseite"
              defaultService="Website erstellen lassen"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
