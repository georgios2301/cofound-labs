import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { CALENDLY_URL } from "@/lib/constants";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} – Case Study`,
    description: cs.lede,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <Navbar />
      <main>
        <header className="subhero">
          <div className="wrap">
            <Link href="/#referenzen" className="backlink">
              ← Zurück zu Referenzen
            </Link>
            <div className="kicker" style={{ marginTop: 28 }}>
              // Case Study · {cs.tagline}
            </div>
            <h1>{cs.title}</h1>
            <p className="lede">{cs.lede}</p>

            <div className="metabar">
              {cs.meta.map((m) => (
                <div className="m" key={m.label}>
                  <div className="ml">{m.label}</div>
                  <div className="mv">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="cs-nav" style={{ marginTop: 32 }}>
              {cs.demoUrl ? (
                <>
                  <a
                    className="btn btn-primary"
                    href={cs.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live-Demo ansehen <span className="btn-arrow">→</span>
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ähnliches Projekt starten
                  </a>
                </>
              ) : (
                <a
                  className="btn btn-primary"
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ähnliches Projekt starten <span className="btn-arrow">→</span>
                </a>
              )}
            </div>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="cs-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cs.image} alt={cs.imageAlt} />
            </div>

            <div className="prose" style={{ marginTop: 56 }}>
              {cs.sections.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="kpis" style={{ marginTop: 24 }}>
              {cs.kpis.map((k) => (
                <div className="kpi" key={k.label}>
                  <div className="kn">{k.value}</div>
                  <div className="kl">{k.label}</div>
                </div>
              ))}
            </div>
            <p className="cs-note">
              Kennzahlen und Kundenstimme sind illustrative Beispielwerte und
              werden durch echte Projektdaten ersetzt.
            </p>

            <figure className="quote">
              <p>„{cs.testimonial.quote}“</p>
              <figcaption className="q-author">
                {cs.testimonial.author} · {cs.testimonial.role}
              </figcaption>
            </figure>

            <div className="cs-stack-block">
              <div className="kicker">// Eingesetzte Technologien</div>
              <div className="stackrow">
                {cs.stack.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="cs-nav">
              <a
                className="btn btn-primary"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Projekt starten <span className="btn-arrow">→</span>
              </a>
              <Link className="btn btn-ghost" href={`/referenzen/${next.slug}`}>
                Nächste Case Study: {next.title}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
