import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { caseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
    ...caseStudyPages,
    {
      url: `${SITE_URL}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
