"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, TrendingUp } from "lucide-react";
import Card from "@/components/ui/Card";

const targets = [
  {
    icon: Lightbulb,
    title: "Solo-Gründer",
    description:
      "Du hast die Idee, aber keinen CTO. Wir werden dein Tech-Team und bringen deine Vision zum Leben.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Rocket,
    title: "Early-Stage Startups",
    description:
      "Ihr braucht ein MVP, um Investoren oder erste Kunden zu überzeugen – schnell, solide und skalierbar.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: TrendingUp,
    title: "Skalierende Teams",
    description:
      "Euer Team kommt nicht hinterher? Wir bauen parallel mit und liefern ohne Einarbeitungszeit.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export default function Zielgruppe() {
  return (
    <section className="py-24 bg-white" id="zielgruppe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            Für wen wir bauen
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Egal wo du im Startup-Zyklus bist – wir passen uns deinen Bedürfnissen an.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {targets.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300 group">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} className={item.color} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
