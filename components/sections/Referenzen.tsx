"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  /** Optional: macht die Karte zu einem Link auf eine Live-Demo / Case Study. */
  href?: string;
};

const projects: Project[] = [
  {
    title: "Baizar",
    description:
      "Gastronomie-SaaS-Plattform für die digitale Verwaltung von Speisekarten, Bestellungen und Tischreservierungen – mobil optimiert für den täglichen Gastro-Betrieb.",
    tags: ["SaaS", "Gastronomie", "Web App"],
    image: "/images/projects/baizar.png",
    alt: "Baizar – Gastronomie SaaS Screenshot",
  },
  {
    title: "Kitchen Display System",
    description:
      "Digitales Küchendisplay für einen Foodtruck: Echtzeit-Bestellanzeige, Status-Updates und nahtlose Kommunikation zwischen Kasse und Küche.",
    tags: ["Embedded Display", "Foodtruck", "Realtime"],
    image: "/images/projects/kds.png",
    alt: "Kitchen Display System für Foodtruck Screenshot",
  },
  {
    title: "Dokument-Generator",
    description:
      "Automatisierte Dokumentenerstellung für eine Schleiferei – individuelle Angebote, Lieferscheine und Rechnungen auf Knopfdruck, direkt aus dem Auftragssystem.",
    tags: ["Automatisierung", "Handwerk", "PDF-Generator"],
    image: "/images/projects/dokumente.webp",
    alt: "Dokument-Generator für Schleiferei Screenshot",
  },
  {
    title: "Kerstins Hundesalon",
    description:
      "Conversion-starke Website für einen Hundesalon in Wuppertal – mit Online-Terminanfrage direkt per WhatsApp, Leistungs- und Preisübersicht und einem warmen, handgezeichneten Markenauftritt.",
    tags: ["Website", "Local Business", "Terminanfrage"],
    image: "/images/projects/kerstin-hundesalon.svg",
    alt: "Kerstins Hundesalon – Website Case Study",
    href: "/case-studies/kerstin-hundesalon",
  },
];

export default function Referenzen() {
  return (
    <section className="py-24 bg-[#FAFAFA]" id="referenzen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            Ausgewählte Projekte
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Echte Produkte, gebaut für echte Kunden – von der Gastronomie bis zum Handwerk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const motionProps = {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              className:
                "bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 group h-full",
            } as const;

            const cover = project.image.endsWith(".svg") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.alt}
                className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            );

            const inner = (
              <>
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  {cover}
                  {project.href && (
                    <span className="absolute top-3 right-3 text-xs font-semibold bg-white/90 backdrop-blur text-[#0F172A] px-3 py-1 rounded-full shadow-sm">
                      Live ansehen →
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.href ? (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.article key={project.title} {...motionProps}>
                {inner}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
