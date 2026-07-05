import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const ROWS = [
  {
    slug: "baizar",
    title: "Baizar",
    desc: "Gastronomie-Plattform für Speisekarten, Bestellungen und Tischreservierungen.",
    tag: "SaaS · Gastronomie",
  },
  {
    slug: "kitchen-display-system",
    title: "Kitchen Display System",
    desc: "Digitales Küchendisplay für einen Foodtruck — Bestellungen in Echtzeit von der Kasse in die Küche.",
    tag: "Realtime · Foodtruck",
  },
  {
    slug: "dokument-generator",
    title: "Dokument-Generator",
    desc: "Angebote, Lieferscheine und Rechnungen auf Knopfdruck — für eine Schleiferei.",
    tag: "Automatisierung · Handwerk",
  },
];

export default function Software() {
  return (
    <section className="software" id="software">
      <div className="wrap">
        <Reveal>
          <p className="kicker">// Und wenn&apos;s mehr sein soll</p>
          <h2>
            Wir bauen auch individuelle Software — Apps, Tools und
            Automatisierungen für deinen Betrieb.
          </h2>
          <p className="lede">
            Festpreis nach einem kurzen Gespräch. Ein paar Beispiele:
          </p>
        </Reveal>
        <Reveal>
          <div className="sw-list">
            {ROWS.map((r) => (
              <Link className="sw-row" href={`/referenzen/${r.slug}`} key={r.slug}>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
                <span className="tag">
                  {r.tag}
                  <span className="go">Case Study →</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
