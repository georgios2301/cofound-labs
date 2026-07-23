"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NAV_LINKS,
  SITE_NAME,
  PHONE_E164,
  PHONE_DISPLAY,
  ANALYSE_URL,
  ANALYSE_LABEL,
} from "@/lib/constants";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="logo" aria-label={SITE_NAME} onClick={onClick}>
      <Image
        src="/logo-full.png"
        alt={SITE_NAME}
        width={132}
        height={40}
        priority
        className="logo-full"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Header-Dock: ab 80px Scroll schrumpft die Bar + wirft Schatten.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-Lock + Escape, solange das Vollbild-Menü offen ist.
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav
        className={"nav" + (scrolled ? " is-scrolled" : "")}
        aria-label="Hauptnavigation"
      >
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
            <a
              className="nav-cta"
              href={ANALYSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ANALYSE_LABEL}
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

      <div className={"mobile-menu" + (open ? " open" : "")} aria-hidden={!open}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mm-extra">
          <a
            className="btn btn-y"
            href={ANALYSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            {ANALYSE_LABEL}
          </a>
          <a className="mm-phone" href={`tel:${PHONE_E164}`}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </>
  );
}
