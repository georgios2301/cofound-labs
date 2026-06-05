import Reveal from "@/components/ui/Reveal";
import { CALENDLY_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="section" id="kontakt">
      <div className="wrap">
        <Reveal>
          <div className="ctaband">
            <div className="cglow" aria-hidden="true" />
            <h2>
              Bereit, deine Idee <span className="hl">zu bauen?</span>
            </h2>
            <p>
              Kostenloses Erstgespräch – 30 Minuten, unverbindlich. Wir schauen
              gemeinsam, ob und wie wir helfen können.
            </p>
            <a
              className="btn btn-primary"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "16.5px", padding: "16px 30px" }}
            >
              Termin buchen <span className="btn-arrow">→</span>
            </a>
            <div className="fine">Keine Verpflichtung. Kein Spam.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
