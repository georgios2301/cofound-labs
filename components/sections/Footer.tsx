import Link from "next/link";
import { IconInstagram } from "@/components/ui/SocialIcons";
import { SITE_NAME, NAV_LINKS, INSTAGRAM_URL } from "@/lib/constants";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="brand">
            <Link href="/" className="logo" aria-label={SITE_NAME}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-full-dark.png" alt={SITE_NAME} />
            </Link>
            <p>
              Individuelle Software und Apps für Startups – von der ersten Idee
              bis zum Launch.
            </p>
            <div className="socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IconInstagram size={16} />
              </a>
            </div>
          </div>

          <div className="fcol">
            <h4>Leistungen</h4>
            {services.map((s) => (
              <Link key={s.slug} href={`/leistungen/${s.slug}`}>
                {s.navLabel}
              </Link>
            ))}
          </div>

          <div className="fcol">
            <h4>Navigation</h4>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="fcol">
            <h4>Rechtliches</h4>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {SITE_NAME}. Alle Rechte vorbehalten.
          </span>
          <span>
            Made with <span className="heart">♥</span> in Deutschland
          </span>
        </div>
      </div>
    </footer>
  );
}
