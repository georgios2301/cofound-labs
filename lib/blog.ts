// Blog / Ratgeber – datengetriebene Artikel für /blog und /blog/[slug].
// Jeder Artikel liegt als eigene Datei in lib/blog-posts/ und wird hier zusammengeführt.
// Neuen Artikel anlegen: Datei in lib/blog-posts/ erstellen, hier importieren & in `posts` eintragen.

import { post as wasIstEinMvp } from "./blog-posts/was-ist-ein-mvp";
import { post as mvpEntwickeln } from "./blog-posts/mvp-entwickeln-schritt-fuer-schritt";
import { post as wasKostetEineApp } from "./blog-posts/was-kostet-eine-app";
import { post as wasKostetEineWebsite } from "./blog-posts/was-kostet-eine-website";
import { post as wieLangeApp } from "./blog-posts/wie-lange-dauert-app-entwicklung";
import { post as nativeVsCross } from "./blog-posts/native-vs-cross-platform-app";
import { post as webappVsNative } from "./blog-posts/web-app-vs-native-app";
import { post as techStack } from "./blog-posts/tech-stack-startup";
import { post as technischerMitgruender } from "./blog-posts/technischer-mitgruender-ohne-cto";
import { post as individualVsStandard } from "./blog-posts/individualsoftware-vs-standardsoftware";

export type BlogPost = {
  slug: string;
  title: string; // H1 / Card-Titel
  metaTitle: string; // <title> (Template ergänzt „| Cofound Labs")
  metaDescription: string;
  excerpt: string; // Card-Text + Lede unter der H1
  keyword: string; // Haupt-Keyword (Doku)
  category: string; // Cluster-Label (Chip/Kicker)
  date: string; // ISO 8601, fürs Schema (datePublished)
  dateLabel: string; // deutsche Anzeige
  readingTime: string; // z. B. "6 Min."
  body: string; // HTML, wird in .prose gerendert
  faqs: [string, string][]; // → FAQPage-Schema + Accordion
  relatedServiceSlugs: string[]; // Karten „Passende Leistungen"
  relatedPostSlugs: string[]; // Block „Weiterlesen"
};

// Reihenfolge = Anzeige-Reihenfolge auf /blog (kuratiert: Einsteiger → Tiefe).
export const posts: BlogPost[] = [
  wasIstEinMvp,
  mvpEntwickeln,
  wasKostetEineApp,
  wasKostetEineWebsite,
  wieLangeApp,
  nativeVsCross,
  webappVsNative,
  techStack,
  technischerMitgruender,
  individualVsStandard,
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// Liefert Posts in der übergebenen Slug-Reihenfolge (unbekannte Slugs werden ignoriert).
export function getPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p));
}
