"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="logo" aria-label={SITE_NAME} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-full-dark.png" alt={SITE_NAME} />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={"nav" + (scrolled ? " scrolled" : "")} aria-label="Hauptnavigation">
        <div className="nav-inner">
          <Logo />

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <a className="nav-cta" href="#kontakt">
              Projekt starten
            </a>
            <button
              className={"hamburger" + (open ? " open" : "")}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={"mobile-menu" + (open ? " open" : "")}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#kontakt" onClick={close}>
          Projekt starten
        </a>
      </div>
    </>
  );
}
