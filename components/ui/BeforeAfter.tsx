"use client";

import { useEffect, useRef } from "react";

/**
 * Vorher/Nachher-Vergleich für den Hero: links eine Homepage anno 2009,
 * rechts der moderne Neuentwurf. Der runde Regler ist per Maus/Touch
 * ziehbar und per Pfeiltasten bedienbar. Die 1200×720-Mockups werden
 * über --mockscale an die Container-Breite angepasst.
 */
export default function BeforeAfter() {
  const baRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ba = baRef.current;
    const handle = handleRef.current;
    if (!ba || !handle) return;

    const setCut = (pct: number) => {
      pct = Math.max(6, Math.min(94, pct));
      ba.style.setProperty("--cut", pct + "%");
    };
    const pctFromEvent = (clientX: number) => {
      const r = ba.getBoundingClientRect();
      return ((clientX - r.left) / r.width) * 100;
    };
    const fitMocks = () => {
      ba.style.setProperty("--mockscale", (ba.clientWidth / 1200).toFixed(4));
    };

    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      handle.setPointerCapture(e.pointerId);
      const move = (ev: PointerEvent) => setCut(pctFromEvent(ev.clientX));
      const up = (ev: PointerEvent) => {
        handle.releasePointerCapture(ev.pointerId);
        handle.removeEventListener("pointermove", move);
        handle.removeEventListener("pointerup", up);
      };
      handle.addEventListener("pointermove", move);
      handle.addEventListener("pointerup", up);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const cur =
        parseFloat(getComputedStyle(ba).getPropertyValue("--cut")) || 50;
      if (e.key === "ArrowLeft") {
        setCut(cur - 3);
        e.preventDefault();
      }
      if (e.key === "ArrowRight") {
        setCut(cur + 3);
        e.preventDefault();
      }
    };

    fitMocks();
    window.addEventListener("resize", fitMocks);
    handle.addEventListener("pointerdown", onPointerDown);
    handle.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", fitMocks);
      handle.removeEventListener("pointerdown", onPointerDown);
      handle.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="ba-band">
      <div className="ba" ref={baRef} style={{ ["--cut" as string]: "50%" }}>
        {/* --------- VORHER (2009) --------- */}
        <div className="layer before">
          <div className="mock mock-old" aria-hidden="true">
            <div className="mo-page">
              <div className="mo-head">
                <div className="mo-title">✂ Friseursalon Meyer ✂</div>
                <div className="mo-sub">
                  ~ Ihr Friseurmeisterbetrieb in Wuppertal – seit 1987 ~
                </div>
              </div>
              <div className="mo-nav">
                <span>Startseite</span>
                <span>Über uns</span>
                <span>Preise</span>
                <span>Galerie</span>
                <span>Gästebuch</span>
                <span>Kontakt</span>
              </div>
              <div className="mo-marq">
                <span>
                  +++ Herzlich Willkommen auf unserer Homepage !!! +++ Wir haben
                  auch samstags für Sie geöffnet +++ Schauen Sie doch mal in
                  unser Gästebuch +++ Zuletzt aktualisiert am 14.03.2009 +++
                </span>
              </div>
              <div className="mo-body">
                <div className="mo-menu">
                  <div className="mo-menu-t">Navigation</div>
                  <a href="#top">» Startseite</a>
                  <a href="#top">» Aktuelles</a>
                  <a href="#top">» Unsere Preise</a>
                  <a href="#top">» Fotogalerie</a>
                  <a href="#top">» Anfahrt</a>
                  <a href="#top">» Impressum</a>
                  <div className="mo-counter">
                    Sie sind Besucher
                    <br />
                    <b>0038471</b>
                  </div>
                </div>
                <div className="mo-main">
                  <h3>Willkommen !</h3>
                  <p>
                    Herzlich Willkommen auf der Homepage vom{" "}
                    <b>Friseursalon Meyer</b> ! Wir freuen uns, dass Sie den Weg
                    auf unsere Internetseite gefunden haben. Auf den folgenden
                    Seiten möchten wir uns Ihnen gerne vorstellen.
                  </p>
                  <div className="mo-imgrow">
                    <div className="mo-img">
                      <span>
                        [ Foto: unser Salon ]
                        <br />
                        320 x 240 Pixel
                      </span>
                    </div>
                    <div className="mo-offerbox">
                      <div className="mo-new">NEU !</div>
                      <p className="mo-offer">
                        <u>Angebot des Monats:</u>
                        <br />
                        <span className="red">
                          Waschen + Schneiden + Föhnen
                          <br />
                          nur 19,90 EUR !!!
                        </span>
                      </p>
                    </div>
                  </div>
                  <p>
                    Rufen Sie uns einfach an unter Tel. 0202 / 55 55 55 oder
                    besuchen Sie uns direkt im Salon. Wir freuen uns auf Ihren
                    Besuch !<br />
                    <i>Ihre Familie Meyer</i>
                  </p>
                </div>
              </div>
              <div className="mo-foot">
                © 2009 by Friseursalon Meyer | Alle Rechte vorbehalten |{" "}
                <u>Gästebuch</u> | <u>Impressum</u>
                <br />
                Diese Homepage ist optimiert für Internet Explorer 6.0 und eine
                Auflösung von 1024 x 768
              </div>
            </div>
          </div>
          <span className="stamp s-v">Vorher</span>
        </div>

        {/* --------- NACHHER (modern) --------- */}
        <div className="layer after">
          <div className="mock mock-new" aria-hidden="true">
            <div className="mn-window">
              <div className="mn-chrome">
                <span className="d d1" />
                <span className="d d2" />
                <span className="d d3" />
                <span className="url">www.friseursalon-meyer.de</span>
              </div>
              <div className="mn-site">
                <div className="mn-nav">
                  <div className="mn-logo">
                    Meyer <span>· Friseursalon</span>
                  </div>
                  <div className="mn-links">
                    <span>Leistungen</span>
                    <span>Preise</span>
                    <span>Team</span>
                    <span>Kontakt</span>
                  </div>
                  <div className="mn-cta">Termin anfragen</div>
                </div>
                <div className="mn-hero">
                  <div className="mn-left">
                    <div className="mn-over">
                      Friseursalon in Wuppertal · seit 1987
                    </div>
                    <h3>Guter Schnitt beginnt mit gutem Zuhören.</h3>
                    <p>Damen, Herren und Kids — mit Termin, ohne Wartezeit.</p>
                    <div className="mn-btns">
                      <span className="b1">Termin anfragen</span>
                      <span className="b2">☎ 0202 55 55 55</span>
                    </div>
                    <div className="mn-status">
                      <i /> Heute geöffnet · bis 18:00 Uhr
                    </div>
                  </div>
                  <div className="mn-right">
                    <div className="mn-photo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/friseur.png" alt="" />
                    </div>
                    <div className="mn-card">
                      <b>Öffnungszeiten</b>
                      <div>
                        <span>Di – Fr</span>
                        <span>9 – 18 Uhr</span>
                      </div>
                      <div>
                        <span>Samstag</span>
                        <span>9 – 14 Uhr</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mn-services">
                  <div className="mn-sv">
                    <b>Damen</b>
                    <span>Schnitt &amp; Styling</span>
                    <i>ab 34 €</i>
                  </div>
                  <div className="mn-sv">
                    <b>Herren</b>
                    <span>Schnitt &amp; Bart</span>
                    <i>ab 22 €</i>
                  </div>
                  <div className="mn-sv">
                    <b>Farbe</b>
                    <span>Färben &amp; Strähnen</span>
                    <i>ab 49 €</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="stamp s-n">Nachher</span>
        </div>

        <div className="ba-line" />
        <button
          className="ba-handle"
          ref={handleRef}
          aria-label="Vorher/Nachher-Vergleich verschieben"
        >
          48&thinsp;h
        </button>
      </div>
    </div>
  );
}
