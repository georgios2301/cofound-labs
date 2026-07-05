import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Case Study: eigenständige, statische Demo-Seite unter sauberer URL.
      // Das komplette HTML-Dokument (mit eigenen Fonts/Skripten) liegt unter
      // public/ und wird hier auf die hübsche URL ohne .html gemappt.
      {
        source: "/case-studies/hundesalon",
        destination: "/case-studies/hundesalon/index.html",
      },
      {
        source: "/case-studies/biergarten-varresbeck",
        destination: "/case-studies/biergarten-varresbeck/index.html",
      },
      {
        source: "/case-studies/zen",
        destination: "/case-studies/zen/index.html",
      },
      {
        source: "/case-studies/mustermann-handwerk",
        destination: "/case-studies/mustermann-handwerk/index.html",
      },
    ];
  },
};

export default nextConfig;
