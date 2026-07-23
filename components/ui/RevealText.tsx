import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealTextProps = {
  /** Eine Zeile pro Eintrag — je Zeile eine Masken-Enthüllung von unten. */
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  /** Startverzögerung der ersten Zeile in Sekunden. */
  delay?: number;
};

/**
 * Zeilen-Masken-Reveal für Headlines (die Signatur-Bewegung von eventxlove,
 * hier als reines CSS statt GSAP/JS). Jede Zeile sitzt in einem
 * `overflow: hidden`-Rahmen; der Inhalt fährt von unten (110%) herein,
 * gestaffelt Zeile für Zeile.
 *
 * Bewusst CSS-`@keyframes` mit `animation-fill-mode: both` statt einer
 * JS-Animation: Die läuft nach Wanduhr, pausiert nicht wenn der Tab im
 * Hintergrund lädt und endet garantiert im sichtbaren Zustand — die
 * Headline kann also nie „unsichtbar hängen bleiben". `prefers-reduced-motion`
 * schaltet die Bewegung per Media-Query komplett ab.
 */
export default function RevealText({
  lines,
  as: Tag = "h1",
  className,
  delay = 0.1,
}: RevealTextProps) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="rl-line">
          <span
            className="rl-inner"
            style={{ animationDelay: `${delay + i * 0.12}s` } as CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
