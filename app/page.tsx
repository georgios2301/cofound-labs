import type { Metadata } from "next";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";

// Offline-Modus: Die öffentliche Seite ist während der Neuausrichtung
// abgeschaltet. Es steht nur diese „Bald kommt hier was Großes"-Startseite
// im Plakat-Stil. Alle anderen Routen leitet proxy.ts hierher zurück.
export const metadata: Metadata = {
  title: `Bald | ${SITE_NAME}`,
  description: "Bald kommt hier was Großes hin.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function ComingSoon() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "40px 24px",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* dünnes Rahmen-Raster im Plakat-Look */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 18,
          border: "2.5px solid var(--ink)",
          borderRadius: 18,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", textAlign: "center", maxWidth: 900 }}>
        <Image
          src="/logo-full.png"
          alt={SITE_NAME}
          width={480}
          height={130}
          priority
          style={{
            width: "clamp(180px, 34vw, 280px)",
            height: "auto",
            margin: "0 auto 34px",
          }}
        />

        <h1
          className="anton"
          style={{
            fontSize: "clamp(44px, 11vw, 132px)",
            lineHeight: 0.94,
            letterSpacing: ".005em",
            color: "var(--ink)",
            margin: "0 auto",
          }}
        >
          Bald kommt hier
          <br />
          was{" "}
          <span
            style={{
              color: "var(--accent)",
              WebkitTextStroke: "2px var(--ink)",
            }}
          >
            Großes
          </span>{" "}
          hin.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginTop: 34,
          }}
        >
          In Arbeit — bleib dran.
        </p>
      </div>
    </main>
  );
}
