import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { posts } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const BLOG_DESCRIPTION =
  "Ehrliche Ratgeber rund um deine Website: auffrischen, Kosten, Relaunch und was 2026 auf die Seite lokaler Betriebe gehört – plus Themen zu Software, Apps & MVPs.";

export const metadata: Metadata = {
  title: "Blog – Ratgeber rund um Website & Software",
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog – Ratgeber rund um Website & Software | ${SITE_NAME}`,
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `${SITE_NAME} Blog`,
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    inLanguage: "de-DE",
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.metaDescription,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <header className="subhero">
          <div className="wrap">
            <Link href="/" className="backlink">
              ← Zurück zur Startseite
            </Link>
            <div className="kicker" style={{ marginTop: 28 }}>
              // Ratgeber
            </div>
            <h1>Blog</h1>
            <p className="lede">
              Ehrliche Ratgeber rund um deine Website – auffrischen, Kosten,
              Relaunch und was 2026 auf die Seite lokaler Betriebe gehört. Plus
              Themen zu Software, Apps und MVPs.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="grid grid-3">
              {posts.map((p) => (
                <Link key={p.slug} className="card" href={`/blog/${p.slug}`}>
                  <span className="tag">{p.category}</span>
                  <h3 style={{ marginTop: 14 }}>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <div className="proj-more">
                    Artikel lesen <span className="btn-arrow">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
