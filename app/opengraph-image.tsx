import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

export const alt =
  "Cofound Labs – Neue Website ab 399 €. Ohne versteckte Gebühren.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamisch generiertes Social-Sharing-Bild in Markenfarben („Plakat").
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
          background: "#FFFBF2",
          color: "#16140E",
          padding: 80,
          fontFamily: "sans-serif",
          borderBottom: "16px solid #FF6B4B",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            color: "#16140E",
          }}
        >
          {`// ${SITE_NAME}`}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {"Neue Website. Ab 399 €. Ohne versteckte Gebühren."}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              marginTop: 28,
              color: "#5F594A",
            }}
          >
            {"Website-Auffrischung zum Festpreis – für lokale Betriebe."}
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
          <span style={{ color: "#8A8371" }}>cofound-labs.de</span>
          <span
            style={{
              display: "flex",
              height: 12,
              width: 160,
              background: "#FF6B4B",
              borderRadius: 9999,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
