"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-indigo-600 px-8 py-20 sm:px-16 text-center"
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 0%, transparent 60%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/5"
            aria-hidden="true"
          />
          <div
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/5"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-8"
            >
              <Calendar size={14} />
              Jetzt Gesprächstermin buchen
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Bereit, deine Idee
              <br />
              zu bauen?
            </h2>
            <p className="text-xl text-indigo-200 max-w-xl mx-auto mb-10">
              Kostenloses Erstgespräch – 30 Minuten, unverbindlich. Wir schauen
              gemeinsam, ob und wie wir helfen können.
            </p>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-white text-indigo-700 font-bold text-lg hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Termin buchen
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <p className="mt-6 text-indigo-300 text-sm">
              Keine Verpflichtung. Kein Spam.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
