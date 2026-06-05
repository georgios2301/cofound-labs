import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/ui/ContactForm";
import { SERVICE_ICONS, FALLBACK_ICON } from "@/lib/service-icons";
import { services, getService } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";
import { CALENDLY_URL, SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `${SITE_URL}/leistungen/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/leistungen/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url,
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: s.metaTitle,
      description: s.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `${SITE_URL}/leistungen/${s.slug}`;
  const related = caseStudies.filter((c) => s.relatedCaseSlugs.includes(c.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.navLabel,
        serviceType: s.serviceType,
        description: s.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Deutschland" },
        ...(s.offer
          ? {
              offers: {
                "@type": "Offer",
                price: s.offer.price,
                priceCurrency: s.offer.priceCurrency,
                url,
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Leistungen",
            item: `${SITE_URL}/leistungen`,
          },
          { "@type": "ListItem", position: 3, name: s.navLabel, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: s.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* HERO + Highlight-Kacheln */}
        <header className="subhero">
          <div className="wrap">
            <Link href="/leistungen" className="backlink">
              ← Alle Leistungen
            </Link>
            <div className="kicker" style={{ marginTop: 28 }}>
              // {s.eyebrow}
            </div>
            <h1>{s.h1}</h1>
            <p className="lede">{s.lede}</p>
            <div className="cs-nav" style={{ marginTop: 32 }}>
              <a
                className="btn btn-primary"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.ctaLabel} <span className="btn-arrow">→</span>
              </a>
              <Link className="btn btn-ghost" href="/leistungen">
                Alle Leistungen
              </Link>
            </div>

            <div className="kpis" style={{ marginTop: 44 }}>
              {s.stats.map((st) => (
                <div className="kpi" key={st.label}>
                  <div className="kn">{st.value}</div>
                  <div className="kl">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Feature-Cards */}
        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// Leistungsumfang</div>
              <h2 className="title">{s.featuresHeading}</h2>
            </div>
            <div className="grid grid-3">
              {s.features.map((f) => {
                const Icon = SERVICE_ICONS[f.icon] ?? FALLBACK_ICON;
                return (
                  <div className="card" key={f.title}>
                    <div className="c-ic">
                      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Prozess */}
        <section className="section">
          <div className="wrap">
            <div className="section-lead">
              <div className="kicker">// So arbeiten wir</div>
              <h2 className="title">{s.stepsHeading}</h2>
            </div>
            <div className="process">
              {s.steps.map((st, i) => (
                <div className="pstep" key={st.title}>
                  <div className="pnum">{String(i + 1).padStart(2, "0")}</div>
                  <div className="pdot" />
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zielgruppe */}
        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Für wen</div>
              <h2 className="title">{s.audienceHeading}</h2>
              {s.audienceText && (
                <p
                  className="desc"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  {s.audienceText}
                </p>
              )}
            </div>
            <div
              className="tagrow"
              style={{ justifyContent: "center", marginTop: 8 }}
            >
              {s.audienceChips.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Passende Projekte */}
        {related.length > 0 && (
          <section className="section">
            <div className="wrap">
              <div className="section-lead">
                <div className="kicker">// Passende Projekte</div>
                <h2 className="title">Echte Ergebnisse, die wir gebaut haben.</h2>
              </div>
              <div className="proj-grid">
                {related.map((c) => (
                  <Link className="proj" href={`/referenzen/${c.slug}`} key={c.slug}>
                    <div className="shot">
                      <Image
                        src={c.image}
                        alt={c.imageAlt}
                        fill
                        sizes="(max-width: 980px) 100vw, 50vw"
                      />
                    </div>
                    <div className="body">
                      <h3>{c.title}</h3>
                      <p>{c.lede}</p>
                      <div className="proj-more">
                        Case Study lesen <span className="btn-arrow">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section" style={{ background: "var(--bg-2)" }}>
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Häufige Fragen</div>
              <h2 className="title">Gut zu wissen.</h2>
            </div>
            <FaqAccordion items={s.faqs} />
          </div>
        </section>

        {/* Kontakt */}
        <section className="section" id="kontakt">
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Kontakt</div>
              <h2 className="title">{s.ctaHeading}</h2>
              <p
                className="desc"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                {s.ctaText}
              </p>
            </div>
            <ContactForm subject={`Anfrage: ${s.navLabel}`} defaultService={s.navLabel} />
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a
                className="btn btn-ghost"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lieber direkt einen Termin buchen <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
