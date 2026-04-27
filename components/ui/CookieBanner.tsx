"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    CookiesEuBanner: new (callback: () => void, waitAccept?: boolean) => void;
  }
}

export default function CookieBanner() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/cookies-eu-banner.min.js";
    script.onload = () => {
      new window.CookiesEuBanner(() => {
        // Cookies accepted — Analytics o.ä. hier initialisieren
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="cookies-eu-banner" style={{ display: "none" }}>
      <p>
        Wir nutzen Cookies, um diese Website zu verbessern.{" "}
        <a href="/datenschutz" id="cookies-eu-more">
          Mehr erfahren
        </a>
      </p>
      <div className="cookies-eu-banner-buttons">
        <button id="cookies-eu-reject">Ablehnen</button>
        <button id="cookies-eu-accept">Akzeptieren</button>
      </div>
    </div>
  );
}
