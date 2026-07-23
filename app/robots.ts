import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// OFFLINE-MODUS: Solange die Seite abgeschaltet ist, keine Indexierung.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    host: SITE_URL,
  };
}
