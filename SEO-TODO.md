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
| Phase 1 – Quick Wins | 0 | 6 |
| Phase 2 – Strategisch | 0 | 7 |
| Phase 3 – Backlog | 0 | 3 |

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

## 🟠 Phase 1 – Quick Wins (diese Woche, je < 2 h)

- [ ] 🟠 **Meta-Description kürzen** (`lib/constants.ts:2`, `SITE_DESCRIPTION`)
  - Aktuell ~205 Zeichen → wird bei ~160 abgeschnitten. Keyword „Website auffrischen" + CTA nach vorn.
  - ✅ Akzeptanz: ≤160 Zeichen, Keyword + CTA im sichtbaren Teil · Impact: Mittel · Aufwand: 15 Min

- [ ] 🟠 **Tote Footer-Links entfernen** (`components/sections/Footer.tsx:29-34`, `lib/constants.ts:8-9`)
  - LinkedIn- & GitHub-Platzhalter (`linkedin.com/company/cofoundlabs`, `github.com/cofoundlabs`) sind wieder aktiv – im Juni bewusst entfernt. Entfernen oder auf echte Profile setzen.
  - ✅ Akzeptanz: nur echte Social-Links (Instagram) im Footer, keine 404 · Impact: Mittel · Aufwand: 10 Min

- [ ] 🟠 **`/leistungen` + `/blog` in die Navigation** (`lib/constants.ts:20`, `NAV_LINKS`)
  - Header verlinkt nur noch Startseiten-Anker; Money-Pages & Blog hängen nur im Footer → schwache interne Link-Equity.
  - ✅ Akzeptanz: Leistungen & Blog aus dem Header (oder klarer Sekundärnav) erreichbar · Impact: Hoch · Aufwand: 20 Min

- [ ] 🟡 **Demo-Seiten `noindex` + aus Sitemap** (`public/case-studies/*`, `app/sitemap.ts:33-41`)
  - Live in der Sitemap bestätigt, kein `noindex` → dünner Duplicate Content.
  - ✅ Akzeptanz: Demo-URLs nicht mehr in Sitemap, `noindex` gesetzt · Impact: Mittel · Aufwand: 30 Min

- [ ] 🟡 **`llms.txt` auf neue Positionierung umschreiben** (`public/llms.txt`)
  - Führt weiter mit „Software/MVPs für Startups", vergräbt das 199-€-Hero-Angebot, nennt Friseure/Gastro/Handwerk nicht.
  - ✅ Akzeptanz: Auffrischungs-Angebot + lokale Zielgruppe stehen oben; Software als Sekundärangebot · Impact: Mittel (GEO/AI) · Aufwand: 30 Min

- [ ] 🟢 **Home-Title auf ≤60 Zeichen straffen** (`app/layout.tsx:36`)
  - „Website-Auffrischung für 199 € – live in 48 Stunden | Cofound Labs" ~64 Z. → leichte SERP-Kürzung.
  - ✅ Akzeptanz: sichtbarer Title ≤60 Zeichen inkl. Marke · Impact: Niedrig · Aufwand: 10 Min

---

## 🏗️ Phase 2 – Strategische Investitionen (dieses Quartal)

- [ ] 🟠 **Landingpage „Website auffrischen / Relaunch"** — dein Kernangebot als eigene Seite
  - Ziel-Keywords: *website auffrischen lassen, website relaunch, website überarbeiten lassen, homepage auffrischen.*
  - Datengetrieben über `lib/services.ts` (Muster wiederverwenden): eigenes Keyword/Title/H1, Service-/Offer-(199 €)/Breadcrumb-/FAQ-Schema, Canonical, OG.
  - ✅ Akzeptanz: indexierbare Seite unter `/leistungen/website-auffrischen-lassen`, in Sitemap & Nav · Impact: **Hoch** · Aufwand: Halber Tag

- [ ] 🟠 **3 Branchen-Verticals** — exakt die genannte Zielgruppe
  - *Website für Friseure · für Gastronomie/Restaurants · für Handwerker.* Niedrige Difficulty, hohe Kaufabsicht.
  - Datengetrieben; jeweils eigenes Keyword/H1, passende Referenz(en), FAQ, Kontaktformular.
  - ✅ Akzeptanz: 3 Vertical-Seiten live, verlinkt & in Sitemap · Impact: **Hoch** · Aufwand: 1–2 Tage

- [ ] 🟠 **Preis-/Angebotslogik entwirren + Offer-Schema angleichen**
  - Heute widersprüchlich: 199 € = *pauschale Auffrischung in 48 h* (Startseite/FAQ) **vs.** *Startpreis Neubau, 1–3 Wochen* + *199 €/Monat Betreuung* (`lib/services.ts`, `website-erstellen-lassen`).
  - Zwei klar getrennte Angebote definieren; Offer-Schema je Seite konsistent zum sichtbaren Preis.
  - ✅ Akzeptanz: eindeutige Preise pro Seite, Schema stimmt mit Text überein · Impact: Hoch · Aufwand: Halber Tag

- [ ] 🟠 **Lokale Standortseite + Google Business Profile**
  - `LocalBusiness`-Schema ist da, sichtbares Standortsignal fehlt. Seite `/standort/wuppertal` (oder NRW) + GBP als größter lokaler Off-Site-Hebel.
  - ✅ Akzeptanz: lokale Seite live; GBP angelegt & verifiziert · Impact: Hoch · Aufwand: 1 Tag + laufend

- [ ] 🟡 **Blog auf lokale Website-Themen umlenken**
  - 6/10 Artikel sind Startup/MVP/App. Neu, näher am neuen Kunden: *„Was kostet eine neue Website für kleine Betriebe", „Website veraltet – 5 Zeichen für einen Relaunch", „Website selbst machen vs. machen lassen", „Website in 48 Stunden – wie das geht".*
  - Startup-Artikel bleiben für die Software-Sektion, treten aber in den Hintergrund.
  - ✅ Akzeptanz: 3–5 neue Artikel im Auffrischungs-/Local-Cluster, intern verlinkt · Impact: Mittel · Aufwand: laufend

- [ ] 🟡 **Echte KPIs & Testimonials in Referenzen** (`lib/case-studies.ts:2`)
  - Kennzahlen/Kundenstimmen sind aktuell Platzhalter („ausgedacht") → E-E-A-T-Risiko, wenn als echt ausgegeben.
  - ✅ Akzeptanz: echte Daten oder entschärfte, ehrliche Formulierung · Impact: Mittel (Trust) · Aufwand: abhängig von Kundendaten

- [ ] 🟡 **Core Web Vitals real messen** (PageSpeed Insights, nach Deploy)
  - ✅ Akzeptanz: LCP/INP/CLS im grünen Bereich dokumentiert · Impact: Mittel · Aufwand: 1 h

---

## 🗄️ Phase 3 – Backlog / Niedrig

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
