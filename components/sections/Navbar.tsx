"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

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
  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav" aria-label="Hauptnavigation">
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
            <a className="nav-cta" href="/#kontakt">
              Jetzt anfragen
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
        <a className="btn btn-p" href="/#kontakt" onClick={close}>
          Jetzt anfragen
        </a>
      </div>
    </>
  );
}
