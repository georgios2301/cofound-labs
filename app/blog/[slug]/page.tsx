import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/ui/ContactForm";
import { posts, getPost, getPosts } from "@/lib/blog";
import { services } from "@/lib/services";
import { CALENDLY_URL, SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const url = `${SITE_URL}/blog/${p.slug}`;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url,
      type: "article",
      publishedTime: p.date,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const url = `${SITE_URL}/blog/${p.slug}`;
  const relatedServices = services.filter((s) =>
    p.relatedServiceSlugs.includes(s.slug),
  );
  const relatedPosts = getPosts(p.relatedPostSlugs);
  const primaryService = relatedServices[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: p.title,
        description: p.metaDescription,
        datePublished: p.date,
        dateModified: p.date,
        url,
        inLanguage: "de-DE",
        author: { "@id": `${SITE_URL}/#georgios` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        image: `${SITE_URL}/opengraph-image`,
        mainEntityOfPage: url,
        keywords: p.keyword,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: p.faqs.map(([q, a]) => ({
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
        {/* HERO */}
        <header className="subhero">
          <div className="wrap">
            <Link href="/blog" className="backlink">
              ← Alle Artikel
            </Link>
            <div className="kicker" style={{ marginTop: 28 }}>
              // {p.category}
            </div>
            <h1>{p.title}</h1>
            <p className="lede">{p.excerpt}</p>
            <div className="metabar">
              <div className="m">
                <div className="ml">Veröffentlicht</div>
                <div className="mv">{p.dateLabel}</div>
              </div>
              <div className="m">
                <div className="ml">Lesezeit</div>
                <div className="mv">{p.readingTime}</div>
              </div>
              <div className="m">
                <div className="ml">Kategorie</div>
                <div className="mv">{p.category}</div>
              </div>
            </div>
          </div>
        </header>

        {/* ARTIKEL */}
        <section className="section" style={{ paddingTop: 56 }}>
          <div className="wrap">
            <article
              className="prose"
              dangerouslySetInnerHTML={{ __html: p.body }}
            />
          </div>
        </section>

        {/* Passende Leistungen */}
        {relatedServices.length > 0 && (
          <section className="section" style={{ background: "var(--bg-2)" }}>
            <div className="wrap">
              <div className="section-lead">
                <div className="kicker">// Passende Leistung</div>
                <h2 className="title">Das könnte für dich passen.</h2>
              </div>
              <div className="grid grid-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    className="card"
                    href={`/leistungen/${s.slug}`}
                  >
                    <h3>{s.navLabel}</h3>
                    <p>{s.cardDesc}</p>
                    <div className="proj-more">
                      Mehr erfahren <span className="btn-arrow">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Weiterlesen */}
        {relatedPosts.length > 0 && (
          <section className="section">
            <div className="wrap">
              <div className="section-lead">
                <div className="kicker">// Weiterlesen</div>
                <h2 className="title">Mehr aus dem Ratgeber.</h2>
              </div>
              <div className="grid grid-3">
                {relatedPosts.map((r) => (
                  <Link key={r.slug} className="card" href={`/blog/${r.slug}`}>
                    <span className="tag">{r.category}</span>
                    <h3 style={{ marginTop: 14 }}>{r.title}</h3>
                    <p>{r.excerpt}</p>
                    <div className="proj-more">
                      Artikel lesen <span className="btn-arrow">→</span>
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
            <FaqAccordion items={p.faqs} />
          </div>
        </section>

        {/* Kontakt */}
        <section className="section" id="kontakt">
          <div className="wrap">
            <div className="section-lead center">
              <div className="kicker">// Kontakt</div>
              <h2 className="title">Aus deiner Idee ein Produkt machen?</h2>
              <p
                className="desc"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                30 Minuten, kostenlos und unverbindlich. Erzähl uns von deinem
                Vorhaben – wir geben dir eine ehrliche Einschätzung.
              </p>
            </div>
            <ContactForm
              subject={`Anfrage über den Blog: ${p.title}`}
              defaultService={primaryService?.navLabel ?? ""}
            />
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <a
                className="btn btn-ghost"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lieber direkt einen Termin buchen{" "}
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
