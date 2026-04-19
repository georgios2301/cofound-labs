"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Kennenlerngespräch",
    description:
      "Wir besprechen deine Idee, deine Ziele und deinen Zeitplan – kostenlos und unverbindlich.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Konzept & Angebot",
    description:
      "Du bekommst einen klaren Plan mit Technologie-Empfehlung, Timeline und Festpreis.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Entwicklung",
    description:
      "Wöchentliche Updates, du siehst den Fortschritt live. Kein Blindflug, keine Überraschungen.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Wir bringen dein Produkt live und bleiben an deiner Seite – auch nach dem Go-live.",
  },
];

export default function Prozess() {
  return (
    <section className="py-24 bg-white" id="prozess">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            So arbeiten wir
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Transparent, strukturiert und mit dir im Mittelpunkt – von Tag 1 bis Launch.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-indigo-100"
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-indigo-200">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-2">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-100"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Circle on line */}
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
