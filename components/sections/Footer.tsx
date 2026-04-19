import Link from "next/link";
import { IconInstagram, IconLinkedin, IconGithub } from "@/components/ui/SocialIcons";
import {
  SITE_NAME,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-bold text-xl text-white tracking-tight hover:text-indigo-400 transition-colors"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              Individuelle Software und Apps für Startups – von der ersten Idee
              bis zum Launch.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <IconInstagram size={16} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <IconLinkedin size={16} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              >
                <IconGithub size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm" role="list">
              {[
                { label: "Services", href: "#services" },
                { label: "Prozess", href: "#prozess" },
                { label: "Referenzen", href: "#referenzen" },
                { label: "FAQ", href: "#faq" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {year} {SITE_NAME}. Alle Rechte vorbehalten.
          </p>
          <p className="text-slate-600">
            Made with ♥ in Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
