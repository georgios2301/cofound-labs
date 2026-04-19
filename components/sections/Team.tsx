"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconGithub, IconLinkedin, IconInstagram } from "@/components/ui/SocialIcons";
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/constants";

export default function Team() {
  return (
    <section className="py-24 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            Hinter Cofound Labs
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#FAFAFA] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row gap-10 items-center"
        >
          {/* Avatar – füge dein Foto unter public/images/georgios.jpg ein, dann ersetze den Platzhalter */}
          <div className="shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
              <Image
                src="/images/georgios.png"
                alt="Georgios Apostolidis"
                width={160}
                height={160}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <div className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
              Gründer & Lead Developer
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              Georgios Apostolidis
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
              Individuelle Software, die nachweislich Zeit und Geld spart. Als
              Lead Developer mit absoluter Hands-on-Mentalität entwickle ich
              Lösungen, die in der Praxis wirklich funktionieren. Meine Mission
              mit Cofound Labs: Gründern und Teams als starker technischer
              Partner zur Seite zu stehen, damit Visionen ohne Umwege Realität
              werden.
            </p>

            <div className="mt-6 flex items-center justify-center sm:justify-start gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-sm"
              >
                <IconInstagram size={18} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-sm"
              >
                <IconLinkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
