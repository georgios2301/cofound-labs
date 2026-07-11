import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Beispiele – So könnte deine Website aussehen",
  description:
    "Drei komplette Beispiel-Websites zum Anklicken: Hundesalon, Biergarten und eine Premium-Praxis für Dermatologie & Longevity. So fühlt sich das Ergebnis an.",
  alternates: { canonical: "/beispiele" },
};

// Klickbare Beispiel-Websites (statische Demos unter /public/case-studies).
const BEISPIELE = [
  {
    title: "Katrins Hundesalon",
    tag: "Local Business · Hundesalon",
    desc: "Warmer, handgezeichneter Auftritt mit Leistungs- und Preisliste – Terminanfrage direkt per WhatsApp.",
    href: "/case-studies/hundesalon",
    image: "/images/projects/hundesalon.jpg",
    imageAlt: "Startseite der Beispiel-Website für einen Hundesalon",
  },
  {
    title: "Biergarten Varresbeck",
    tag: "Gastronomie · Biergarten",
    desc: "One-Pager mit Live-Status „heute geöffnet?“, Veranstaltungskalender und Reservierungsanfrage.",
    href: "/case-studies/biergarten-varresbeck",
    image: "/images/projects/biergarten-varresbeck.jpg",
    imageAlt: "Startseite der Beispiel-Website für einen Biergarten",
  },
  {
    title: "Praxis Sonnenthal",
    tag: "Medizin · Dermatologie & Longevity",
    desc: "Premium-Konzept für eine dermatologische Praxis – inklusive mehrstufiger Online-Anamnese. Fiktive Praxis.",
    href: "/case-studies/praxis-sonnenthal",
    image: "/images/projects/praxis-sonnenthal.jpg",
    imageAlt: "Startseite der Beispiel-Website für eine dermatologische Praxis",
  },
];

export default function BeispielePage() {
  return (
    <>
      <Navbar />
      <main>
        <header className="subhero">
          <div className="wrap">
            <Link href="/" className="backlink">
              ← Zurück zur Startseite
            </Link>
            <div className="kicker" style={{ marginTop: 28 }}>
              // Beispiele
            </div>
            <h1>So könnte deine Website aussehen</h1>
            <p className="lede">
              Drei komplette Beispiel-Websites zum Anklicken – vom Hundesalon
              über den Biergarten bis zur Arztpraxis. Jede Demo ist voll
              funktionsfähig: Klick dich durch, wie es deine Kundinnen und
              Kunden später tun würden.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <Reveal>
              <div className="refs">
                {BEISPIELE.map((b) => (
                  <a
                    className="ref"
                    href={b.href}
                    key={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="thumb">
                      <Image
                        src={b.image}
                        alt={b.imageAlt}
                        fill
                        sizes="(max-width: 980px) 100vw, 560px"
                      />
                    </div>
                    <div className="body">
                      <div className="row">
                        <h3>{b.title}</h3>
                        <span className="go">Demo öffnen →</span>
                      </div>
                      <p>
                        <strong style={{ display: "block", marginBottom: 4 }}>
                          {b.tag}
                        </strong>
                        {b.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <div className="cs-nav" style={{ marginTop: 48 }}>
              <a
                className="btn btn-primary"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                So eine Seite will ich auch <span className="btn-arrow">→</span>
              </a>
              <Link className="btn btn-ghost" href="/referenzen">
                Echte Projekte ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
