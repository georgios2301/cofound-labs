import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AngabenWizard from "@/components/ui/AngabenWizard";
import { getAngabenForm } from "@/lib/angaben/schema";

export const metadata: Metadata = {
  title: "Fehlende Angaben – Oktoberfest Santa Ponsa",
  robots: { index: false, follow: false },
};

// Nicht öffentlich verlinkte Erhebungsseite: nur per Direktlink für den Kunden.
// Der Proxy (proxy.ts) lässt /angaben/* trotz Offline-Modus durch. Das Formular
// speichert den Fortschritt lokal und sendet die Angaben ins Dashboard-Modul.
export default function AngabenPage() {
  const form = getAngabenForm("oktoberfest-santa-ponsa");
  if (!form) notFound();

  const [line1, line2] = form.headline.split("\n");

  return (
    <main className="angaben-page">
      <div className="wrap angaben-wrap">
        <header className="angaben-head">
          <Link href="/" className="angaben-logo">
            <Image src="/logo-full.png" alt="Cofound Labs" width={158} height={48} />
          </Link>
          <p className="kicker">{form.label}</p>
          <h1 className="anton">
            {line1}
            {line2 && (
              <>
                <br />
                {line2}
              </>
            )}
          </h1>
          <p className="angaben-sub">{form.intro}</p>
        </header>

        <AngabenWizard form={form} />
      </div>
    </main>
  );
}
