"use client";

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
 * Scroll-reveal wrapper mirroring the design's `.reveal` behaviour
 * (fade + 24px rise, 0.7s, cubic-bezier(.2,.8,.2,1), once). Honours
 * `prefers-reduced-motion` by rendering content statically.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
