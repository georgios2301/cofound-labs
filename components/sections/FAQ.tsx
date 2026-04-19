"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "Was kostet eine App bei euch?",
    answer:
      "Unsere Projekte starten ab 2.500 € – je nach Komplexität, Umfang und Laufzeit. Einfache Tools und MVPs liegen oft im unteren Bereich, komplexere Plattformen oder Apps entsprechend höher. Im kostenlosen Erstgespräch bekommst du eine ehrliche Einschätzung für dein Vorhaben.",
  },
  {
    question: "Wie lange dauert die Entwicklung?",
    answer:
      "Das hängt vom Scope ab. Ein einfaches MVP oder Tool ist oft in 2–4 Wochen fertig. Komplexere Web- oder Mobile-Apps planen wir gemeinsam mit klaren Meilensteinen – du siehst den Fortschritt wöchentlich live und weißt immer, wo wir stehen.",
  },
  {
    question: "Was, wenn ich die Idee noch nicht fertig durchdacht habe?",
    answer:
      "Das ist kein Problem – im Gegenteil. Viele unserer besten Projekte haben mit einer groben Idee angefangen. Im Kennenlerngespräch helfen wir dir, das Wesentliche herauszuarbeiten und einen sinnvollen Scope zu definieren.",
  },
  {
    question: "Gehört mir der Code am Ende?",
    answer:
      "Ja, selbstverständlich. Du bekommst nach Projektabschluss den vollständigen Quellcode und alle Zugänge. Der Code gehört dir – keine Abhängigkeit von uns.",
  },
  {
    question: "Bietet ihr auch Wartung und Support nach dem Launch?",
    answer:
      "Ja. Wir bieten optionale Betreuungspakete ab 199 € im Monat an. Das umfasst Bugfixes, Sicherheitsupdates, kleine Weiterentwicklungen und einen direkten Ansprechpartner bei Fragen. Ideal, wenn du dich auf dein Business konzentrieren willst – und wir uns um die Technik kümmern.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            Häufige Fragen
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Alles, was du wissen möchtest – bevor wir uns kennenlernen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm"
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
