"use client";

import { useEffect } from "react";
import { Cookie } from "lucide-react";

declare global {
  interface Window {
    CookiesEuBanner: new (callback: () => void, waitAccept?: boolean) => void;
  }
}

function resetCookieConsent() {
  document.cookie = "hasConsented=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  const banner = document.getElementById("cookies-eu-banner");
  if (banner) banner.style.display = "flex";
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button onClick={resetCookieConsent} className={className}>
      Cookie-Einstellungen ändern
    </button>
  );
}

export default function CookieBanner() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/cookies-eu-banner.min.js";
    script.onload = () => {
      new window.CookiesEuBanner(() => {}, true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
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

      <button
        onClick={resetCookieConsent}
        className="cookie-settings-fab"
        aria-label="Cookie-Einstellungen ändern"
        title="Cookie-Einstellungen ändern"
      >
        <Cookie size={18} />
      </button>
    </>
  );
}
