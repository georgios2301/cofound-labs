import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { FAQS } from "@/lib/faqs";
import { CALENDLY_URL } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="section" id="faq" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <Reveal className="section-lead center">
          <div className="kicker">// Häufige Fragen</div>
          <h2 className="title">Alles, was du wissen möchtest.</h2>
          <p className="desc" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Bevor wir uns kennenlernen – die Antworten auf die häufigsten Fragen.
          </p>
        </Reveal>

        <Reveal>
          <FaqAccordion items={FAQS} />
        </Reveal>

        <Reveal>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              className="btn btn-primary"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Jetzt Gesprächstermin buchen <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
