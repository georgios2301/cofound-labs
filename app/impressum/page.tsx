import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-indigo-600 text-sm font-medium hover:text-indigo-700 mb-8 inline-block"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#0F172A] mb-10">Impressum</h1>

        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-8 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="leading-relaxed">
              Georgios Apostolidis<br />
              Cofound Labs<br />
              In der Krim 9<br />
              42369 Wuppertal<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              Kontakt
            </h2>
            <p className="leading-relaxed">
              Telefon: +49 155 60410686<br />
              E-Mail:{" "}
              <a
                href="mailto:georgios@cofound-labs.de"
                className="text-indigo-600 hover:underline"
              >
                georgios@cofound-labs.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="leading-relaxed">
              Georgios Apostolidis<br />
              In der Krim 9<br />
              42369 Wuppertal
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              Haftungsausschluss
            </h2>
            <h3 className="font-medium text-[#0F172A] mb-2">Haftung für Inhalte</h3>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <h3 className="font-medium text-[#0F172A] mb-2">Haftung für Links</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              Urheberrecht
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
