import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Case Studies / Beispiele: eigenständige, statische Demo-Seiten unter
      // sauberer URL. Die kompletten HTML-Dokumente (mit eigenen Fonts/Skripten)
      // liegen unter public/case-studies/<slug>/ und werden hier auf die hübsche
      // URL ohne .html gemappt. Rewrites greifen erst, wenn keine echte Datei
      // passt – Unterseiten wie /case-studies/<slug>/longevity.html laufen also
      // weiterhin direkt über public/.
      {
        source: "/case-studies/:slug",
        destination: "/case-studies/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
