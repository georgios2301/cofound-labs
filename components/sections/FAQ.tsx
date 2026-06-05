"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { CALENDLY_URL } from "@/lib/constants";
import { FAQS } from "@/lib/faqs";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const inner = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const measure = () =>
      setMaxH(open && inner.current ? inner.current.scrollHeight : 0);
    measure();
    if (!open) return;
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);

  return (
    <div className={"qa" + (open ? " open" : "")}>
      <button className="qa-q" onClick={onToggle} aria-expanded={open}>
        <span>{question}</span>
        <span className="qa-icon" aria-hidden="true" />
      </button>
      <div className="qa-a" style={{ maxHeight: maxH }}>
        <div className="qa-a-inner" ref={inner}>
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

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
          <div className="faq">
            {FAQS.map(([question, answer], i) => (
              <FaqItem
                key={question}
                question={question}
                answer={answer}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
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
