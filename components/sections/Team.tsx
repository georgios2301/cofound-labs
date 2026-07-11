import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function Team() {
  return (
    <section className="section" id="ueber">
      <div className="wrap">
        <Reveal>
          <div className="ueber">
            <div className="photo">
              <Image
                src="/images/georgios.png"
                alt="Georgios Apostolidis"
                fill
                sizes="200px"
              />
            </div>
            <div>
              <p className="role">Gründer &amp; Entwickler</p>
              <h3>Georgios Apostolidis</h3>
              <p>
                <b>Kein Agentur-Überbau:</b> Du sprichst direkt mit dem, der
                deine Software baut. Ich entwickle Systeme, die produktiv
                laufen — von der NFC-Treueplattform über Bestell-Apps und
                Kassenzähl-Tools bis zum Lohnabrechnungs-Portal. Täglich im
                Betrieb benutzt, ehrlich gebaut und zum vereinbarten Festpreis.
              </p>
              <div className="socials">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
