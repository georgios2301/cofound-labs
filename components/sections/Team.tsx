import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IconInstagram, IconLinkedin, IconGithub } from "@/components/ui/SocialIcons";
import { INSTAGRAM_URL, LINKEDIN_URL, GITHUB_URL } from "@/lib/constants";

export default function Team() {
  return (
    <section className="section" id="ueber">
      <div className="wrap">
        <Reveal className="section-lead">
          <div className="kicker">// Hinter Cofound Labs</div>
          <h2 className="title">Ein Partner, kein Dienstleister.</h2>
        </Reveal>

        <Reveal>
          <div className="founder">
            <div className="photo">
              <Image
                src="/images/georgios.png"
                alt="Georgios Apostolidis"
                fill
                sizes="300px"
              />
            </div>
            <div>
              <div className="role">Gründer &amp; Lead Developer</div>
              <h3>Georgios Apostolidis</h3>
              <p>
                Individuelle Software, die nachweislich Zeit und Geld spart. Als
                Lead Developer mit absoluter Hands-on-Mentalität entwickle ich
                Lösungen, die in der Praxis wirklich funktionieren. Meine Mission
                mit Cofound Labs: Gründern und Teams als starker technischer
                Partner zur Seite zu stehen, damit Visionen ohne Umwege Realität
                werden.
              </p>
              <div className="socials">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IconInstagram size={18} />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <IconLinkedin size={18} />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <IconGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
