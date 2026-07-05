import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { FAQS } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Häufige Fragen</p>
          <h2 className="title">Kurz beantwortet.</h2>
        </Reveal>

        <Reveal>
          <FaqAccordion items={FAQS} />
        </Reveal>
      </div>
    </section>
  );
}
