"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

function StatCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div className={"statcard" + (inView ? " in" : "")} ref={ref}>
      <div className="sc-top">
        <div className="sc-big">94%</div>
        <div className="sc-lbl">
          on&nbsp;time
          <br />
          geliefert
        </div>
      </div>
      <div className="sc-tags">
        <span className="chip accent">Web App</span>
        <span className="chip accent">iOS</span>
        <span className="chip accent">Backend</span>
      </div>
      <div className="sc-bar">
        <i />
      </div>
      <div className="sc-barlbl">
        <span>Launch in 8 Wo</span>
        <span>72% abgeschlossen</span>
      </div>
      <div className="sc-stack">
        <div className="sl">// Stack</div>
        <div className="sc-tags" style={{ marginTop: 0 }}>
          <span className="chip">Next.js</span>
          <span className="chip">React</span>
          <span className="chip">Supabase</span>
          <span className="chip">Vercel</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow">
            <span className="dot" /> Individuelle Software für Startups
          </span>
          <h1>
            Dein technischer <span className="hl">Mitgründer</span> auf Zeit.
          </h1>
          <p className="sub">
            Wir bauen individuelle Software und Apps für Startups – von der ersten
            Idee bis zum Launch.
          </p>
          <div className="btnrow">
            <a className="btn btn-primary" href="#kontakt">
              Projekt starten <span className="btn-arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#referenzen">
              Referenzen ansehen
            </a>
          </div>
          <div className="trust">
            <span className="pulse" /> Vertraut von Gründern in Köln · Berlin · München
          </div>
        </div>
        <StatCard />
      </div>
    </header>
  );
}
