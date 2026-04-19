import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#FAFAFA] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-bold text-[#0F172A] mb-10">
          Datenschutzerklärung
        </h1>

        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-8 text-slate-700">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              1. Verantwortlicher
            </h2>
            <p className="text-sm leading-relaxed">
              Georgios Apostolidis<br />
              Cofound Labs<br />
              In der Krim 9, 42369 Wuppertal<br />
              E-Mail:{" "}
              <a href="mailto:georgios@cofound-labs.de" className="text-indigo-600 hover:underline">
                georgios@cofound-labs.de
              </a><br />
              Telefon: +49 155 60410686
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              3. Rechtsgrundlagen der Verarbeitung
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur Erfüllung eines Vertrags dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Für die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung dient Art. 6 Abs. 1 lit. c DSGVO. Ist die Verarbeitung zur Wahrung eines berechtigten Interesses erforderlich, dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              4. Bereitstellung der Website – Server-Logfiles
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Der Hostinganbieter dieser Website (Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA) erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
            </p>
            <p className="text-sm leading-relaxed text-slate-600 mt-2">
              Vercel verarbeitet Daten ggf. in den USA. Es besteht ein Angemessenheitsbeschluss (EU-US Data Privacy Framework). Weitere Informationen:{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                vercel.com/legal/privacy-policy
              </a>.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              5. Kontaktaufnahme per E-Mail
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (Ihre E-Mail-Adresse sowie ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Anfrage zu bearbeiten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              6. Calendly (Terminbuchung)
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Auf unserer Website verlinken wir auf den Dienst Calendly (Calendly LLC, 271 17th St NW, Atlanta, GA 30363, USA). Wenn Sie über Calendly einen Termin buchen, werden die von Ihnen eingegebenen Daten (Name, E-Mail, ggf. Notizen) an Calendly übermittelt. Wir haben keinen Einfluss auf die Datenverarbeitung durch Calendly. Weitere Informationen:{" "}
              <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                calendly.com/privacy
              </a>. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              7. Cookies
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Diese Website verwendet keine Tracking-Cookies und setzt keine Analyse- oder Werbe-Cookies ein. Technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind, können ohne gesonderte Einwilligung gesetzt werden (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              8. Soziale Medien (Instagram, LinkedIn)
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Auf unserer Website befinden sich Links zu unseren Profilen bei Instagram (Meta Platforms Ireland Ltd.) und LinkedIn (LinkedIn Ireland Unlimited Company). Beim Klick auf einen solchen Link werden Sie auf die jeweilige Plattform weitergeleitet. Es erfolgt erst bei Klick eine Übertragung von Daten an den jeweiligen Anbieter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Außendarstellung).
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              9. Ihre Rechte als betroffene Person
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 mb-3">
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
            </p>
            <ul className="text-sm leading-relaxed text-slate-600 space-y-1 list-disc list-inside">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="text-sm leading-relaxed text-slate-600 mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:georgios@cofound-labs.de" className="text-indigo-600 hover:underline">
                georgios@cofound-labs.de
              </a>
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              10. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW), Kavalleriestr. 2–4, 40213 Düsseldorf,{" "}
              <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                www.ldi.nrw.de
              </a>.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
              11. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
