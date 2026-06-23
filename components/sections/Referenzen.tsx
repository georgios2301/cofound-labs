import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  href: string;
};

type CaseStudy = Project;

const projects: Project[] = [
  {
    title: "Baizar",
    description:
      "Gastronomie-SaaS-Plattform für die digitale Verwaltung von Speisekarten, Bestellungen und Tischreservierungen – mobil optimiert für den täglichen Gastro-Betrieb.",
    tags: ["SaaS", "Gastronomie", "Web App"],
    image: "/images/projects/baizar.png",
    alt: "Baizar – Gastronomie SaaS Screenshot",
    href: "/referenzen/baizar",
  },
  {
    title: "Kitchen Display System",
    description:
      "Digitales Küchendisplay für einen Foodtruck: Echtzeit-Bestellanzeige, Status-Updates und nahtlose Kommunikation zwischen Kasse und Küche.",
    tags: ["Embedded Display", "Foodtruck", "Realtime"],
    image: "/images/projects/kds.png",
    alt: "Kitchen Display System für Foodtruck Screenshot",
    href: "/referenzen/kitchen-display-system",
  },
  {
    title: "Dokument-Generator",
    description:
      "Automatisierte Dokumentenerstellung für eine Schleiferei – individuelle Angebote, Lieferscheine und Rechnungen auf Knopfdruck, direkt aus dem Auftragssystem.",
    tags: ["Automatisierung", "Handwerk", "PDF-Generator"],
    image: "/images/projects/dokumente.webp",
    alt: "Dokument-Generator für Schleiferei Screenshot",
    href: "/referenzen/dokument-generator",
  },
];

const cases: CaseStudy[] = [
  {
    title: "Kerstins Hundesalon",
    description:
      "Conversion-starke Website für einen Hundesalon in Wuppertal – mit Online-Terminanfrage direkt per WhatsApp, Leistungs- und Preisübersicht und einem warmen, handgezeichneten Markenauftritt.",
    tags: ["Website", "Local Business", "Terminanfrage"],
    image: "/images/projects/kerstin-hundesalon.jpg",
    alt: "Kerstins Hundesalon – Website Case Study",
    href: "/referenzen/kerstin-hundesalon",
  },
  {
    title: "Biergarten Bahnhof Varresbeck",
    description:
      "Warme, rustikale One-Page-Website für den Biergarten im historischen Varresbecker Bahnhof – mit Live-Status „heute geöffnet?“, Veranstaltungskalender, Reservierungsanfrage sowie eigenen Event-, Impressums- und Datenschutz-Unterseiten.",
    tags: ["Website", "Gastronomie", "Events"],
    image: "/images/projects/bahnhof-varresbeck-screenshot.jpg",
    alt: "Biergarten Bahnhof Varresbeck – Website Case Study",
    href: "/referenzen/bahnhof-varresbeck",
  },
  {
    title: "ZEN",
    description:
      "Editorial gedachtes Redesign für ein Schmuck-Label aus Berlin: ein ruhiger, hochwertiger Online-Shop für handgefertigte Choker – mit Schnellkauf, Produktdetailseite und Warenkorb, der zum Abschluss führt.",
    tags: ["Website", "E-Commerce", "Shop-UI"],
    image: "/images/projects/zen.jpg",
    alt: "ZEN – Redesign des Online-Shops für handgefertigten Schmuck",
    href: "/referenzen/zen",
  },
];

function Cover({ src, alt }: { src: string; alt: string }) {
  if (src.endsWith(".svg")) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  }
  return <Image src={src} alt={alt} fill sizes="(max-width: 980px) 100vw, 33vw" />;
}

export default function Referenzen() {
  return (
    <section className="section" id="referenzen" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <Reveal className="section-lead">
          <div className="kicker">// Ausgewählte Projekte</div>
          <h2 className="title">Echte Produkte, gebaut für echte Kunden.</h2>
          <p className="desc">
            Von der Gastronomie bis zum Handwerk – Software, die im Alltag
            wirklich benutzt wird.
          </p>
        </Reveal>

        <div className="proj-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <Link className="proj" href={project.href}>
                <div className="shot">
                  <Cover src={project.image} alt={project.alt} />
                </div>
                <div className="body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tagrow">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="proj-more">
                    Case Study lesen <span className="btn-arrow">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="cs-grid">
          {cases.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <Link className="csbig" href={project.href}>
                <div className="shot">
                  <Cover src={project.image} alt={project.alt} />
                </div>
                <div className="body">
                  <div className="live">● Case Study lesen →</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tagrow">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
