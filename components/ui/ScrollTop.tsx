"use client";

import { useEffect, useState } from "react";

/**
 * „Nach oben"-Button. Erscheint nach ~65% Viewport-Scroll, scrollt weich nach
 * oben — über Lenis, falls aktiv, sonst nativ.
 */
export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.65);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const lenis = window.__lenis;
    if (lenis?.scrollTo) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={"scrolltop" + (visible ? " is-visible" : "")}
      onClick={toTop}
      aria-label="Nach oben scrollen"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
