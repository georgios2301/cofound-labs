import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import { CALENDLY_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="section" id="kontakt">
      <div className="wrap">
        <Reveal className="section-lead center">
          <div className="kicker">// Kontakt</div>
          <h2 className="title">
            Bereit, deine Idee <span className="hl">zu bauen?</span>
          </h2>
          <p className="desc" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Schreib uns – wir melden uns schnell zurück. Lieber direkt sprechen?
            Buch dir ein kostenloses Erstgespräch, 30 Minuten und unverbindlich.
          </p>
        </Reveal>

        <Reveal>
          <ContactForm subject="Neue Anfrage über die Startseite" />
        </Reveal>

        <Reveal>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a
              className="btn btn-ghost"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lieber direkt einen Termin buchen <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
