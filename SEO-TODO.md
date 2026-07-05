# SEO To-Do – Cofound Labs

> Lebendes Tracking-Dokument. **Neu aufgesetzt nach dem SEO-Audit vom 05.07.2026** –
> ausgerichtet auf die neue „Plakat"-Positionierung: **Website-Auffrischung, 199 € pauschal, live in 48 Stunden, für lokale Betriebe** (Friseure, Gastronomen, Handwerker).
> Live-Domain: **https://cofound-labs.de** · Stack: Next.js 16 (App Router) · Hosting: Vercel

**Letzte Aktualisierung:** 05.07.2026

---

## So nutzt du dieses Dokument

- **Status:** `[ ]` offen · `[~]` in Arbeit · `[x]` erledigt
- **Priorität:** 🔴 Kritisch · 🟠 Hoch · 🟡 Mittel · 🟢 Niedrig
- Jede Aufgabe hat: *Datei/Ort* · ✅ Akzeptanzkriterium · Impact / Aufwand
- 👤 = erfordert eine Aktion oder Entscheidung von dir (Georgios)

## Fortschritt

| Phase | Erledigt | Offen |
|---|---|---|
| Phase 0 – Kritisch (Deploy & Alignment) | 1 | 1 (in Arbeit) |
| Phase 1 – Quick Wins | 6 | 0 |
| Phase 2 – Strategisch | 5 | 3 |
| Phase 3 – Backlog | 2 | 3 |

---

## ⚠️ Kontext: Der Pivot

Die Seite wurde auf ein leichtes „Plakat"-Onepager-Konzept umgestellt:
**„Neue Website. 199 €. 48 Stunden."** für lokale Betriebe.
Der bisherige Unterbau (Leistungsseiten, 10 Blogartikel, `llms.txt`) zielt aber noch auf **Startups / MVPs / App-Entwicklung**. Diese Spaltung aufzulösen ist der rote Faden dieses Trackers.

**Status (05.07.2026):** Der Relaunch ist jetzt **live** (Commit `82ad0ba`, Vercel). Die Startseite zeigt live die neue H1 „Neue Website. 199 Euro. 48 Stunden." – der Deploy-Blocker ist gelöst. Damit ist der Pivot aber **sichtbar unvollständig**: Leistungsseiten, Blog und `llms.txt` zielen live weiter auf Startups/MVP – die Auflösung dieser Spaltung läuft über Phase 1 + 2.

---

## 🔴 Phase 0 – Kritisch (zuerst, blockiert alles Weitere)

- [x] 🔴 **Plakat-Relaunch auf Vercel deployen** *(05.07.2026 erledigt & live verifiziert)*
  - Der gesamte Relaunch lag uncommittet im Working Tree – nie committet, nie gepusht; die Live-Seite zeigte noch die alte Startup-H1.
  - Production-Build lokal grün (32 Seiten, TypeScript ok) → committet (`82ad0ba`) & auf `main` gepusht → Vercel-Auto-Deploy.
  - ✅ Verifiziert: `https://cofound-labs.de` liefert live H1 „Neue Website. 199 Euro. 48 Stunden.", neue Meta/Title, alte Startup-Hero weg (curl-geprüft, Vercel fra1 cache HIT). · Impact: **Sehr hoch**

- [~] 🔴 **Positionierung Startseite ↔ Unterbau angleichen** *(Leitplanke – wird in Phase 1 + 2 abgearbeitet)*
  - Startseite verkauft jetzt live *Website-Auffrischung für lokale Betriebe*; Leistungen/Blog/`llms.txt` zielen aber weiter auf *Startups/MVP/Apps*. Das exakte Startseiten-Angebot hat noch **keine eigene Landingpage**.
  - Konkrete Schritte: `llms.txt` + Nav (Phase 1) · Auffrischungs-Landingpage + Branchen-Verticals + Blog-Umlenkung (Phase 2).
  - ✅ Akzeptanz: roter Faden „199 € Website-Auffrischung / lokale Betriebe" zieht sich durch Startseite, Leistungen, Blog-Fokus & `llms.txt` · Impact: **Sehr hoch**

---

## 🟠 Phase 1 – Quick Wins ✅ (05.07.2026 erledigt, Build grün, im Preview verifiziert)

- [x] 🟠 **Meta-Description gekürzt** (`lib/constants.ts`, `SITE_DESCRIPTION`)
  - Neu (143 Z.): „Website auffrischen lassen für 199 € pauschal – alles inklusive, live in 48 Stunden. Für Friseure, Gastro & Handwerk. Jetzt kostenlos anfragen." Keyword + CTA vorn.

- [x] 🟠 **Tote Social-Links entfernt** (`components/sections/Footer.tsx` **+ `Team.tsx`**, `lib/constants.ts`)
  - LinkedIn/GitHub-Platzhalter aus Footer **und** Team-Sektion raus; ungenutzte Konstanten `LINKEDIN_URL`/`GITHUB_URL` gelöscht. Nur noch Instagram (im Preview bestätigt).

- [x] 🟠 **`/leistungen` + `/blog` in die Navigation** (`lib/constants.ts`, `NAV_LINKS`)
  - Beide jetzt im Header + Mobile-Menü: `Leistungen → /leistungen`, `Blog → /blog`. Money-Pages & Blog wieder prominent intern verlinkt.

- [x] 🟡 **Demo-Seiten aus dem Index** (`app/sitemap.ts`, `app/robots.ts`)
  - Demo-URLs aus der Sitemap entfernt (0 statt vorher; 6 echte `/referenzen/`-Seiten bleiben) **+** `Disallow: /case-studies/` in robots.txt. (Bewusst kein `noindex` in den ~9 statischen HTML-Dateien – robots-Disallow deckt alle inkl. Unterseiten in einer Zeile ab. Falls GSC später eine Demo als „indexiert" meldet: für diese Datei auf `noindex` umstellen.)

- [x] 🟡 **`llms.txt` neu geschrieben** (`public/llms.txt`)
  - Führt jetzt mit dem 199-€-Auffrischungs-Angebot + lokaler Zielgruppe (Friseure/Gastro/Handwerk); Software/MVP/Apps als Sekundärangebot; Referenzen nach lokalen Website-Projekten sortiert.

- [x] 🟢 **Home-Title auf 52 Zeichen gekürzt** (`app/layout.tsx`)
  - „Website auffrischen für 199 € in 48 h | Cofound Labs" (≤60, keine SERP-Kürzung, Keyword + Preis + Speed erhalten).

---

## 🏗️ Phase 2 – Strategische Investitionen (dieses Quartal)

- [x] 🟠 **~~Eigene Auffrischungs-Landingpage~~ – verworfen (Startseite IST bereits die LP)**
  - Die Startseite `/` dreht sich nach dem Plakat-Relaunch komplett um Website-Auffrischung 199 €/48 h und zielt seit Phase 1 direkt auf das Keyword (Title/Meta „Website auffrischen …"). Eine zweite Seite auf dasselbe Keyword würde die Startseite kannibalisieren. → **Kein eigenes `/leistungen/website-auffrischen-lassen`.**

- [ ] 🟡 **Statt neuer Seite: Startseiten-H1 fürs Keyword schärfen** (`components/sections/Hero.tsx`)
  - H1 ist „Neue Website. 199 Euro. 48 Stunden." – „auffrischen" steckt nur im `toplbl` darüber. Keyword näher an die H1 rücken, ohne die Plakat-Wirkung zu verlieren.
  - ✅ Akzeptanz: „Website auffrischen" semantisch in/an der H1 · Impact: Mittel · Aufwand: 30 Min

- [x] 🟠 **4 Branchen-Verticals** — exakt die genannte Zielgruppe *(05.07.2026 erledigt, im Preview verifiziert)*
  - **Friseure · Gastronomie · Handwerker · KMU** — datengetrieben über `lib/services.ts` (`group: "branche"`), gerendert über das bestehende SEO-Template `/leistungen/[slug]`.
  - Je Seite: keyword-reicher Title (≤60), Meta ≤160, eigenes H1 („Website für … – aufgefrischt für 199 €, live in 48 Stunden"), branchen-spezifische Features + 5 FAQs, Service-/**Offer (199 €)**-/Breadcrumb-/FAQPage-Schema, passende Referenzen, Kontaktformular.
  - Interne Verlinkung: neue **Branchen-Sektion auf der Startseite** (`components/sections/Branchen.tsx`, `#branchen`) + **Branchen-Hub auf `/leistungen`** + in Sitemap.
  - URLs: `/leistungen/website-fuer-{friseure|gastronomie|handwerker|kmu}` · Impact: **Hoch**

- [x] 🟠 **Preis-/Angebotslogik entwirrt** *(05.07.2026 erledigt)*
  - Kanonisches Modell: **199 € pauschal für die Auffrischung – Bedingung: es existiert bereits eine Website.** Kompletter Neubau = individuelles Festpreisangebot.
  - `website-erstellen-lassen` reframed (H1, Lede, Stats, Steps, FAQs): kein „Startpreis 199 € Neubau", kein „199 €/Monat Betreuung" mehr. Verticals + Startseite bereits konsistent. Offer-Schema überall 199 €.

- [ ] 🟠 **Lokale Standortseite + Google Business Profile**
  - `LocalBusiness`-Schema ist da, sichtbares Standortsignal fehlt. Seite `/standort/wuppertal` (oder NRW) + GBP als größter lokaler Off-Site-Hebel.
  - ✅ Akzeptanz: lokale Seite live; GBP angelegt & verifiziert · Impact: Hoch · Aufwand: 1 Tag + laufend

- [x] 🟡 **Blog auf Auffrischungs-Themen umgelenkt** *(05.07.2026 erledigt, im Preview verifiziert)*
  - **4 neue Artikel** im Auffrischungs-/Local-Cluster (je BlogPosting-/FAQPage-/Breadcrumb-Schema, Title ≤60, Meta ≤160, interne Links zu Verticals + Referenzen + verwandten Artikeln):
    - `website-auffrischen` (Pillar, kw „website auffrischen") · `website-in-48-stunden` · `website-selbst-machen-oder-machen-lassen` · `website-fuer-lokale-betriebe-checkliste`
  - Reihenfolge auf `/blog` umgestellt: die 4 neuen zuerst, dann „Was kostet eine Website", danach der Startup-/Software-Cluster. `/blog`-Meta & Lede von „Ratgeber für Startups" auf Website-Fokus umgeschrieben.
  - `was-kostet-eine-website` an das neue Preismodell angeglichen (kein „199 €/Monat Betreuung" mehr) + auf die neuen Artikel verlinkt. `llms.txt`-Ratgeber-Sektion um die 4 Artikel ergänzt.
  - Startup-Artikel (MVP/App/Tech-Stack) bleiben erhalten, treten aber in den Hintergrund. · Impact: Mittel

- [ ] 🟡 **Echte KPIs & Testimonials in Referenzen** (`lib/case-studies.ts:2`)
  - Kennzahlen/Kundenstimmen sind aktuell Platzhalter („ausgedacht") → E-E-A-T-Risiko, wenn als echt ausgegeben.
  - ✅ Akzeptanz: echte Daten oder entschärfte, ehrliche Formulierung · Impact: Mittel (Trust) · Aufwand: abhängig von Kundendaten

- [x] 🟡 **Core Web Vitals real gemessen** *(05.07.2026, Lighthouse gegen die Live-Seite, Mobile)*
  - **Ergebnis: alle Werte im grünen Bereich.** Gemessene reale Paints (Trace-observed):

    | Seite | Perf-Score | LCP (real) | CLS | TBT (INP-Proxy) |
    |---|---|---|---|---|
    | Startseite | 73* | **1,8 s** ✅ | 0 ✅ | 150 ms ✅ |
    | Vertical (Friseure) | 97 | 2,5 s ✅ | 0 ✅ | 80 ms ✅ |
    | Blog (Auffrischen) | 99 | 1,7 s ✅ | 0 ✅ | 100 ms ✅ |

  - *Der Startseiten-Score (73) und ein „LCP 8,9 s" waren ein **Lab-Artefakt** von Lighthouse/Lantern: Die **infinite CSS-Marquee** (`.mock-old .mo-marq`, `globals.css:146`) verhinderte, dass die simulierte LCP-Messung „einrastet". Der **echte** Paint im Browser-Trace lag bei **1,8 s**. → **Inzwischen behoben** (Marquee gated + Assets verkleinert): Startseiten-Score jetzt **95**, realer LCP **1,4 s** (siehe Backlog, beide erledigt).
  - **INP:** keine CrUX-Felddaten (zu wenig Traffic); Lab-Proxy TBT überall grün (80–150 ms).
  - Follow-ups siehe Backlog (Marquee-Artefakt + überdimensionierte Assets).

---

## 🗄️ Phase 3 – Backlog / Niedrig

- [x] 🟢 **Überdimensionierte Assets verkleinert** *(05.07.2026, via `sharp`)*
  - Favicon `app/icon.jpg`: 2048px/577 KB → **512px/14 KB**. `friseur.png` (1024px/1,3 MB) → **`friseur.webp` 700px/43 KB**, PNG entfernt.
  - Ergebnis: Startseiten-Gewicht **2.284 KiB → 446 KiB**.
- [x] 🟢 **Marquee-Lab-Artefakt entschärft** *(05.07.2026)*
  - Hero-Marquee läuft erst nach erster Nutzer-Interaktion (Klasse `.anim` auf `.ba`, `BeforeAfter.tsx`), respektiert weiter `prefers-reduced-motion`.
  - Ergebnis: Startseiten-**PSI-Score 73 → 95**, Lab-LCP 8,9 s → 3,0 s (realer LCP 1,4 s). Live nachgemessen.
- [ ] 🟢 **Case-Study-Hero-Bilder auf `next/image`** (`app/referenzen/[slug]/page.tsx`)
- [ ] 🟢 **Weitere lokale Städte-Seiten** (Köln/Düsseldorf/Essen) – erst wenn Wuppertal-Seite trägt
- [ ] 🟢 **Backlink-/Verzeichnis-Aufbau** für lokale Betriebe & Branchenportale – laufend

---

## 📌 Audit-Kontext (Kurzfassung, 05.07.2026)

- **Gesamturteil:** Starke technische Basis (Schema, Canonicals, OG, Sitemap, Apex-Domain). Das Problem ist die **Positionierungs-Spaltung**, nicht die Technik.
- **Kritisch:** (1) Relaunch nicht deployt, (2) Startseite ↔ Unterbau widersprechen sich, (3) `/leistungen` & `/blog` aus der Nav gefallen.
- **Top-Hebel:** **Deploy → Auffrischungs-Landingpage + Branchen-Verticals → Preislogik & Blog neu ausrichten.**
- **Neuer Keyword-Fokus:** *website auffrischen/überarbeiten/relaunch lassen, günstige website erstellen lassen, website für friseur/gastronomie/handwerker, website erstellen lassen Wuppertal.* Startup-Keywords (mvp/app entwickeln lassen) bleiben sekundär.
- **Keine SEO-Tools verbunden:** Für echte Suchvolumen/Difficulty/Rankings Ahrefs via MCP autorisieren (interaktive Session, `/mcp`).
