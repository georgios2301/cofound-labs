import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { CookieSettingsButton } from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main>
        <section className="subhero">
          <div className="wrap">
            <Link href="/" className="backlink">
              ← Zurück zur Startseite
            </Link>
            <h1>Datenschutzerklärung</h1>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="prose">
              <h2>1. Verantwortlicher</h2>
              <p>
                Georgios Apostolidis
                <br />
                Cofound Labs
                <br />
                In der Krim 9, 42369 Wuppertal
                <br />
                E-Mail:{" "}
                <a href="mailto:georgios@cofound-labs.de">georgios@cofound-labs.de</a>
                <br />
                Telefon: +49 155 60410686
              </p>

              <h2>2. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten unserer Nutzer
                grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Verarbeitung personenbezogener Daten
                erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine
                Ausnahme gilt in solchen Fällen, in denen eine vorherige
                Einholung einer Einwilligung aus tatsächlichen Gründen nicht
                möglich ist und die Verarbeitung der Daten durch gesetzliche
                Vorschriften gestattet ist.
              </p>

              <h2>3. Rechtsgrundlagen der Verarbeitung</h2>
              <p>
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
                Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1
                lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur
                Erfüllung eines Vertrags dient Art. 6 Abs. 1 lit. b DSGVO als
                Rechtsgrundlage. Für die Verarbeitung zur Erfüllung einer
                rechtlichen Verpflichtung dient Art. 6 Abs. 1 lit. c DSGVO. Ist
                die Verarbeitung zur Wahrung eines berechtigten Interesses
                erforderlich, dient Art. 6 Abs. 1 lit. f DSGVO als
                Rechtsgrundlage.
              </p>

              <h2>4. Bereitstellung der Website – Server-Logfiles</h2>
              <p>
                Der Hostinganbieter dieser Website (Vercel Inc., 340 Pine Street,
                Suite 900, San Francisco, CA 94104, USA) erhebt und speichert
                automatisch Informationen in sogenannten Server-Logfiles, die Ihr
                Browser automatisch übermittelt. Dies sind: Browsertyp und
                -version, verwendetes Betriebssystem, Referrer-URL, Hostname des
                zugreifenden Rechners, Uhrzeit der Serveranfrage sowie
                IP-Adresse. Diese Daten werden nicht mit anderen Datenquellen
                zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse am sicheren Betrieb der Website).
              </p>
              <p>
                Vercel verarbeitet Daten ggf. in den USA. Es besteht ein
                Angemessenheitsbeschluss (EU-US Data Privacy Framework). Weitere
                Informationen:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </p>

              <h2>5. Kontaktaufnahme per E-Mail</h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
                übermittelten Daten (Ihre E-Mail-Adresse sowie ggf. Ihr Name und
                Ihre Telefonnummer) von uns gespeichert, um Ihre Anfrage zu
                bearbeiten. Die in diesem Zusammenhang anfallenden Daten löschen
                wir, nachdem die Speicherung nicht mehr erforderlich ist, oder
                schränken die Verarbeitung ein, falls gesetzliche
                Aufbewahrungspflichten bestehen. Rechtsgrundlage ist Art. 6 Abs.
                1 lit. b DSGVO (vorvertragliche Maßnahmen).
              </p>

              <h2>6. Calendly (Terminbuchung)</h2>
              <p>
                Auf unserer Website verlinken wir auf den Dienst Calendly
                (Calendly LLC, 271 17th St NW, Atlanta, GA 30363, USA). Wenn Sie
                über Calendly einen Termin buchen, werden die von Ihnen
                eingegebenen Daten (Name, E-Mail, ggf. Notizen) an Calendly
                übermittelt. Wir haben keinen Einfluss auf die Datenverarbeitung
                durch Calendly. Weitere Informationen:{" "}
                <a
                  href="https://calendly.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  calendly.com/privacy
                </a>
                . Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>

              <h2>7. Cookies</h2>
              <p>
                Diese Website verwendet ein Cookie-Consent-Banner, das Ihre
                Einwilligung zur Nutzung von Cookies abfragt. Ihre Entscheidung
                wird in einem Cookie (<code>hasConsented</code>) gespeichert.
                Rechtsgrundlage für die Verarbeitung nach Einwilligung ist Art. 6
                Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit
                widerrufen:
              </p>
              <p>
                <CookieSettingsButton className="link-btn" />
              </p>

              <h2>8. Soziale Medien (Instagram)</h2>
              <p>
                Auf unserer Website befindet sich ein Link zu unserem Profil bei
                Instagram (Meta Platforms Ireland Ltd.). Beim Klick auf diesen
                Link werden Sie auf die Plattform weitergeleitet. Es erfolgt erst
                bei Klick eine Übertragung von Daten an den Anbieter.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an der Außendarstellung).
              </p>

              <h2>9. Ihre Rechte als betroffene Person</h2>
              <p>
                Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer
                personenbezogenen Daten:
              </p>
              <ul>
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3
                  DSGVO)
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:georgios@cofound-labs.de">georgios@cofound-labs.de</a>
              </p>

              <h2>10. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
                Sie haben das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren. Die zuständige
                Aufsichtsbehörde für Nordrhein-Westfalen ist die
                Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
                (LDI NRW), Kavalleriestr. 2–4, 40213 Düsseldorf,{" "}
                <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
                  www.ldi.nrw.de
                </a>
                .
              </p>

              <h2>11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
                April 2026. Durch die Weiterentwicklung unserer Website oder
                aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann
                es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
