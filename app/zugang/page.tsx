import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Geschützter Entwurf",
  robots: { index: false, follow: false },
};

// Passwort-Gate für Entwürfe unter /entwuerfe/*. Der Proxy leitet hierher um,
// solange kein gültiges draft_auth-Cookie gesetzt ist.
export default async function ZugangPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const { from, error } = await searchParams;
  const target = from?.startsWith("/entwuerfe/") ? from : "";

  return (
    <main className="zugang">
      <div className="zugang-card">
        <Link href="/" className="zugang-logo">
          <Image src="/logo-full.png" alt="Cofound Labs" width={158} height={48} />
        </Link>
        <p className="kicker">Geschützter Bereich</p>
        <h1 className="anton">Entwurf ansehen</h1>
        <p className="zugang-sub">
          Diese Seite ist ein unveröffentlichter Website-Entwurf. Bitte geben
          Sie das Passwort ein, das Sie von uns erhalten haben.
        </p>
        <form className="contact-form" method="POST" action="/api/zugang">
          <input type="hidden" name="from" value={target} />
          <div className="field">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              required
              autoComplete="off"
              placeholder="Passwort eingeben"
            />
          </div>
          {error && (
            <p className="form-error">Falsches Passwort. Bitte erneut versuchen.</p>
          )}
          <button className="btn btn-primary" type="submit">
            Entwurf öffnen <span className="btn-arrow">→</span>
          </button>
        </form>
        <p className="zugang-note">
          Kein Passwort? <a href={`mailto:${EMAIL}`}>Schreiben Sie uns.</a>
        </p>
      </div>
    </main>
  );
}
