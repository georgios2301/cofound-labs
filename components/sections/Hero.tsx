"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FAFAFA]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(to right, #0F172A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Soft indigo glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #4F46E5, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 text-indigo-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Individuelle Software für Startups
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.05] mb-6"
          >
            Dein technischer
            <br />
            <span className="text-indigo-600">Mitgründer</span>
            <br />
            auf Zeit.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10"
          >
            Wir bauen individuelle Software und Apps für Startups – von der
            ersten Idee bis zum Launch.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              Projekt starten
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#referenzen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-lg border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
            >
              Referenzen ansehen
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-10 flex items-center gap-2 text-slate-500 text-sm"
          >
            <MapPin size={14} className="text-indigo-400" />
            <span>Vertraut von Gründern in Köln, Berlin, München</span>
          </motion.div>
        </div>

        {/* Right: abstract visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex flex-col gap-4 relative"
          aria-hidden="true"
        >
          {/* Floating app mockup cards */}
          <div className="flex gap-4">
            <FloatingCard delay="0s" className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 bg-indigo-100 rounded-full w-3/4" />
                <div className="h-2.5 bg-slate-100 rounded-full w-full" />
                <div className="h-2.5 bg-slate-100 rounded-full w-5/6" />
              </div>
              <div className="mt-4 h-16 bg-indigo-50 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-indigo-500" />
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay="0.3s" className="w-36">
              <div className="h-3 bg-emerald-100 rounded-full mb-2 w-2/3" />
              <div className="text-2xl font-bold text-[#0F172A]">94%</div>
              <div className="h-2 bg-slate-100 rounded-full mt-1 w-full" />
              <div className="mt-3 flex gap-1">
                {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-indigo-200 rounded-sm"
                    style={{ height: `${h * 0.4}px` }}
                  />
                ))}
              </div>
            </FloatingCard>
          </div>

          <FloatingCard delay="0.5s">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <div className="w-5 h-5 rounded-md bg-indigo-500" />
              </div>
              <div>
                <div className="h-2.5 bg-[#0F172A] rounded-full w-24 mb-1" />
                <div className="h-2 bg-slate-200 rounded-full w-16" />
              </div>
              <div className="ml-auto px-3 py-1 bg-emerald-100 rounded-full">
                <div className="h-2 bg-emerald-500 rounded-full w-10" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Web App", "iOS", "Backend"].map((tag) => (
                <div
                  key={tag}
                  className="bg-slate-50 rounded-lg p-2 text-center text-xs text-slate-500 font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>
          </FloatingCard>

          <div className="flex gap-4">
            <FloatingCard delay="0.1s" className="flex-1">
              <div className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">Launch in</div>
              <div className="text-3xl font-bold text-[#0F172A]">8 Wo</div>
              <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: "72%" }} />
              </div>
              <div className="text-xs text-slate-400 mt-1">72% abgeschlossen</div>
            </FloatingCard>

            <FloatingCard delay="0.6s" className="flex-1">
              <div className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">Stack</div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Next.js", "React", "Supabase", "Vercel"].map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-indigo-50 text-indigo-700 rounded-md px-2 py-0.5 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FloatingCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  children,
  className = "",
  delay = "0s",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-md border border-slate-100 animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
