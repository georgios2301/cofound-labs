"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { CALENDLY_URL } from "@/lib/constants";

const FAQS: [string, string][] = [
  [
    "Was kostet eine App bei euch?",
    "Unsere Projekte starten ab 2.500 € – je nach Komplexität, Umfang und Laufzeit. Einfache Tools und MVPs liegen oft im unteren Bereich, komplexere Plattformen oder Apps entsprechend höher. Im kostenlosen Erstgespräch bekommst du eine ehrliche Einschätzung für dein Vorhaben.",
  ],
  [
    "Wie lange dauert die Entwicklung?",
    "Das hängt vom Scope ab. Ein einfaches MVP oder Tool ist oft in 2–4 Wochen fertig. Komplexere Web- oder Mobile-Apps planen wir gemeinsam mit klaren Meilensteinen – du siehst den Fortschritt wöchentlich live und weißt immer, wo wir stehen.",
  ],
  [
    "Was, wenn ich die Idee noch nicht fertig durchdacht habe?",
    "Das ist kein Problem – im Gegenteil. Viele unserer besten Projekte haben mit einer groben Idee angefangen. Im Kennenlerngespräch helfen wir dir, das Wesentliche herauszuarbeiten und einen sinnvollen Scope zu definieren.",
  ],
  [
    "Gehört mir der Code am Ende?",
    "Ja, selbstverständlich. Du bekommst nach Projektabschluss den vollständigen Quellcode und alle Zugänge. Der Code gehört dir – keine Abhängigkeit von uns.",
  ],
  [
    "Bietet ihr auch Wartung und Support nach dem Launch?",
    "Ja. Wir bieten optionale Betreuungspakete ab 199 € im Monat an. Das umfasst Bugfixes, Sicherheitsupdates, kleine Weiterentwicklungen und einen direkten Ansprechpartner bei Fragen. Ideal, wenn du dich auf dein Business konzentrieren willst – und wir uns um die Technik kümmern.",
  ],
];

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
