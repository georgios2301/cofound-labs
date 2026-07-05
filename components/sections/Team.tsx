import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { INSTAGRAM_URL, LINKEDIN_URL, GITHUB_URL } from "@/lib/constants";

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
                deine Website baut. Ich entwickle Websites und Software, die im
                Alltag wirklich benutzt werden — schnell, ehrlich und zum
                vereinbarten Preis.
              </p>
              <div className="socials">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
