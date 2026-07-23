import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, INSTAGRAM_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div className="brand">
            <Link href="/" className="logo" aria-label={SITE_NAME}>
              <span className="mark mark-img">
                <Image
                  src="/logo-mark.png"
                  alt=""
                  width={22}
                  height={22}
                  aria-hidden="true"
                />
              </span>
              <span>Cofound Labs</span>
            </Link>
            <p>
              Das digitale Betriebssystem für lokale Betriebe: Website plus
              maßgeschneiderte Werkzeuge — beraten, gebaut und betreut.
            </p>
            <div className="socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                Instagram
              </a>
            </div>
          </div>

          <div className="fcol">
            <h4>Navigation</h4>
            <Link href="/betriebssystem">Betriebssystem</Link>
            <Link href="/leistungen">Lösungen</Link>
            <Link href="/referenzen">Referenzen</Link>
            <Link href="/preise">Preise</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/standort/wuppertal">Standort Wuppertal</Link>
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
          <Link href="/standort/wuppertal">Made in Wuppertal</Link>
        </div>
      </div>
    </footer>
  );
}
