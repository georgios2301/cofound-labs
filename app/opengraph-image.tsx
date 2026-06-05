import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

export const alt = "Cofound Labs – Softwareentwicklung & MVPs für Startups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamisch generiertes Social-Sharing-Bild in Markenfarben.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C0B09",
          color: "#F5F1E9",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 600,
            color: "#7C6BFF",
          }}
        >
          {`// ${SITE_NAME}`}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {"Softwareentwicklung & MVPs für Startups"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              marginTop: 28,
              color: "#C9C3B6",
            }}
          >
            {"Dein technischer Mitgründer auf Zeit – von der Idee bis zum Launch."}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
          }}
        >
          <span style={{ color: "#9A9486" }}>cofound-labs.de</span>
          <span
            style={{
              display: "flex",
              height: 10,
              width: 140,
              background: "#7C6BFF",
              borderRadius: 9999,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
