"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Zap, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Apps",
    description:
      "Moderne, skalierbare Webanwendungen mit dem richtigen Stack für dein Business – von der Landing Page bis zur komplexen SaaS-Plattform.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "iOS & Android, nativ oder cross-platform. Wir bauen Apps, die deine Nutzer täglich benutzen wollen.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Zap,
    title: "MVPs",
    description:
      "Schnell ein funktionierendes Produkt auf die Straße bringen. Wir bauen das Wesentliche – nichts mehr, nichts weniger.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Server,
    title: "Backends & APIs",
    description:
      "Die unsichtbare Technik, die alles zusammenhält. Stabile, sichere und gut dokumentierte Backends und Schnittstellen.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            Was wir bauen
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Von der ersten Zeile Code bis zum fertigen Produkt – wir decken den
            gesamten Stack ab.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-8 border ${service.border} hover:shadow-md transition-all duration-300 group`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} className={service.color} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
