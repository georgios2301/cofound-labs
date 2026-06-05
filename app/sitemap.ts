import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.flatMap((c) => {
    const entries: MetadataRoute.Sitemap = [
      {
        url: `${SITE_URL}/referenzen/${c.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.7,
      },
    ];
    if (c.demoUrl) {
      entries.push({
        url: `${SITE_URL}${c.demoUrl}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
    return entries;
  });

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/leistungen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
    ...caseStudyPages,
  ];
}
