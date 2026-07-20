import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Statische Demo-Seiten der Case Studies nicht indexieren (Duplicate Content).
      // Entwürfe: unveröffentlichte Akquise-Drafts, nur per Direktlink.
      disallow: ["/case-studies/", "/entwuerfe/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
