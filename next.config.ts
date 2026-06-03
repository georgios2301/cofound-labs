import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Case Study: eigenständige, statische Demo-Seite unter sauberer URL.
      // Das komplette HTML-Dokument (mit eigenen Fonts/Skripten) liegt unter
      // public/ und wird hier auf die hübsche URL ohne .html gemappt.
      {
        source: "/case-studies/kerstin-hundesalon",
        destination: "/case-studies/kerstin-hundesalon/index.html",
      },
    ];
  },
};

export default nextConfig;
