"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

const COOKIE_NAME = "hasConsent";
const COOKIE_TTL = 33696000000; // 13 Monate

function getConsent(): boolean | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)hasConsent=(true|false)/);
  if (!match) return null;
  return match[1] === "true";
}

function setConsent(value: boolean) {
  const expires = new Date(Date.now() + COOKIE_TTL).toUTCString();
  document.cookie = `${COOKIE_NAME}=${value}; expires=${expires}; path=/`;
}

function clearConsent() {
  document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
}

// Hier Analytics initialisieren sobald Consent erteilt wurde.
// Solange diese Funktion nicht aufgerufen wird, lädt kein externes Script
// und es werden keine Tracking-Cookies gesetzt.
function initAnalytics() {
  // Beispiel Google Analytics — auskommentiert bis du einen Tag hast:
  // const script = document.createElement("script");
  // script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
  // script.async = true;
  // document.head.appendChild(script);
  // window.dataLayer = window.dataLayer || [];
  // function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  // gtag("js", new Date());
  // gtag("config", "G-XXXXXXXXXX");
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => {
        clearConsent();
        window.dispatchEvent(new Event("cookie-reset"));
      }}
      className={className}
    >
      Cookie-Einstellungen ändern
    </button>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();

    // Bereits akzeptiert (z.B. Folgebesuch) → Analytics sofort starten
    if (consent === true) initAnalytics();

    // Noch keine Entscheidung → Banner zeigen
    if (consent === null) setVisible(true);

    const handler = () => setVisible(true);
    window.addEventListener("cookie-reset", handler);
    return () => window.removeEventListener("cookie-reset", handler);
  }, []);

  function accept() {
    setConsent(true);
    setVisible(false);
    initAnalytics(); // Erst jetzt wird das Script geladen
  }

  function reject() {
    setConsent(false);
    setVisible(false);
    // initAnalytics() wird NICHT aufgerufen → kein Script, keine Cookies
  }

  function openSettings() {
    clearConsent();
    setVisible(true);
  }

  return (
    <>
      {visible && (
        <div id="cookies-eu-banner">
          <p>
            Wir nutzen Cookies, um diese Website zu verbessern.{" "}
            <a href="/datenschutz" id="cookies-eu-more">
              Mehr erfahren
            </a>
          </p>
          <div className="cookies-eu-banner-buttons">
            <button id="cookies-eu-reject" onClick={reject}>Ablehnen</button>
            <button id="cookies-eu-accept" onClick={accept}>Akzeptieren</button>
          </div>
        </div>
      )}

      <button
        onClick={openSettings}
        className="cookie-settings-fab"
        aria-label="Cookie-Einstellungen ändern"
        title="Cookie-Einstellungen ändern"
      >
        <Cookie size={18} />
      </button>
    </>
  );
}
