import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getCaseStudy } from "@/lib/case-studies";

const REFS = [
  {
    slug: "kerstin-hundesalon",
    title: "Kerstins Hundesalon",
    desc: "Website mit Terminanfrage direkt per WhatsApp — für einen Hundesalon in Wuppertal.",
  },
  {
    slug: "bahnhof-varresbeck",
    title: "Biergarten Bahnhof Varresbeck",
    desc: "One-Pager mit Live-Status „heute geöffnet?“, Veranstaltungen und Reservierungsanfrage.",
  },
];

export default function Referenzen() {
  return (
    <section className="section" id="referenzen">
      <div className="wrap">
        <Reveal className="section-lead">
          <p className="kicker">// Referenzen</p>
          <h2 className="title">Frisch gemacht:</h2>
        </Reveal>
        <Reveal>
          <div className="refs">
            {REFS.map((r) => {
              const cs = getCaseStudy(r.slug);
              return (
                <Link className="ref" href={`/referenzen/${r.slug}`} key={r.slug}>
                  <div className="thumb">
                    {cs && (
                      <Image
                        src={cs.image}
                        alt={cs.imageAlt}
                        fill
                        sizes="(max-width: 980px) 100vw, 560px"
                      />
                    )}
                  </div>
                  <div className="body">
                    <div className="row">
                      <h3>{r.title}</h3>
                      <span className="go">Case Study →</span>
                    </div>
                    <p>{r.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
