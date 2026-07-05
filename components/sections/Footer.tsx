import Link from "next/link";
import {
  SITE_NAME,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div className="brand">
            <Link href="/" className="logo" aria-label={SITE_NAME}>
              <span className="mark">C</span>
              <span>Cofound Labs</span>
            </Link>
            <p>
              Website-Auffrischung zum Festpreis — und individuelle Software,
              wenn&apos;s mehr sein soll.
            </p>
            <div className="socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>

          <div className="fcol">
            <h4>Navigation</h4>
            <a href="/#ablauf">Ablauf</a>
            <a href="/#preis">Preis</a>
            <a href="/#referenzen">Referenzen</a>
            <a href="/#software">Software</a>
            <Link href="/leistungen">Leistungen</Link>
            <Link href="/blog">Blog</Link>
            <a href="/#kontakt">Kontakt</a>
          </div>

          <div className="fcol">
            <h4>Rechtliches</h4>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>

        <div className="bottom">
          <span>
            © {year} {SITE_NAME}. Alle Rechte vorbehalten.
          </span>
          <span>Made in Wuppertal</span>
        </div>
      </div>
    </footer>
  );
}
