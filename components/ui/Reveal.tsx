"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: React.ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
};

/**
 * Scroll-reveal wrapper (fade + 24px rise, 0.7s, cubic-bezier(.2,.8,.2,1),
 * once). Honours `prefers-reduced-motion` by rendering content statically.
 *
 * Visibility is never gated solely on the scroll observer: the content is
 * always revealed when it enters the viewport, but ALSO if it is already in
 * view on mount, on bfcache back/forward restores, and when
 * IntersectionObserver is unavailable. This prevents sections from getting
 * stuck invisible (opacity 0) — the failure that made the page look broken.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old/odd browsers) → show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setShown(true);
      io.disconnect();
      window.removeEventListener("resize", check);
      window.removeEventListener("pageshow", onPageShow);
    };

    // Reveal whenever the element is within the viewport. Used as a safety net
    // alongside the observer: covers elements already in view at mount (above
    // the fold, hash-link landings) and layout/viewport changes that settle
    // after mount (late fonts, resizes) — so content is never stuck hidden.
    // Below-fold content stays hidden until scrolled to, preserving the effect.
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal();
    };

    // Back/forward (bfcache) restore: ensure content is visible.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) reveal();
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    const raf = requestAnimationFrame(check);
    window.addEventListener("resize", check);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", check);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
