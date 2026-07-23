"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Weiches Trägheits-Scrollen (Lenis) — nur Desktop (≥981px) und nur ohne
 * `prefers-reduced-motion`. Auf Touch/Mobil bleibt natives Scrollen aktiv.
 *
 * Die Instanz wird global als `window.__lenis` abgelegt, damit ScrollTop und
 * Anker-Links weich dorthin scrollen können. Lenis setzt die CSS-Klassen
 * `.lenis` auf <html>, wodurch die Regeln in globals.css das native
 * `scroll-behavior: smooth` deaktivieren (sonst kämpfen beide gegeneinander).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 981px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!desktop.matches || reduce) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
    window.__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Anker-Links (#id) weich scrollen — mit Offset für die sticky Navbar.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96, duration: 1.1 });
      history.replaceState(null, "", id);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
