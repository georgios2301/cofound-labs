"use client";

import { useEffect, useRef, useState } from "react";

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

/** Wiederverwendbares FAQ-Akkordeon. Nimmt [Frage, Antwort]-Paare. */
export default function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: [string, string][];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="faq">
      {items.map(([question, answer], i) => (
        <FaqItem
          key={question}
          question={question}
          answer={answer}
          open={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
