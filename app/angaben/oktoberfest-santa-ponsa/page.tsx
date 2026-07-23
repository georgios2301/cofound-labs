import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AngabenOktoberfest from "@/components/ui/AngabenOktoberfest";

export const metadata: Metadata = {
  title: "Fehlende Angaben – Oktoberfest Santa Ponsa",
  robots: { index: false, follow: false },
};

// Nicht öffentlich verlinkte Erhebungsseite: nur per Direktlink für Diana.
// Sammelt die noch fehlenden Inhalte, damit der Oktoberfest-Entwurf live gehen
// kann. Der Proxy (proxy.ts) lässt /angaben/* trotz Offline-Modus durch.
export default function AngabenPage() {
  return (
    <main className="angaben-page">
      <div className="wrap angaben-wrap">
        <header className="angaben-head">
          <Link href="/" className="angaben-logo">
            <Image src="/logo-full.png" alt="Cofound Labs" width={158} height={48} />
          </Link>
          <p className="kicker">Oktoberfest Santa Ponsa 2026</p>
          <h1 className="anton">Diese Angaben fehlen<br />noch für den Livegang</h1>
          <p className="angaben-sub">
            Hallo Diana! Deine Website steht schon – es fehlen nur noch ein paar
            Inhalte, damit wir sie online stellen können. Trag hier ein, was du
            hast, am Handy oder am PC. Du musst nicht alles auf einmal machen:
            sende einfach, was gerade da ist, und den Rest später.
          </p>
        </header>

        <AngabenOktoberfest />
      </div>
    </main>
  );
}
