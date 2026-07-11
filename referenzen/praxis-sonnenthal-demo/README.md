# Praxis Sonnenthal — Konzept-/Demo-Website

Premium-Demo für eine **fiktive** dermatologische Praxis (Dermatologie · Ästhetik · Longevity).
Portfolio-Arbeit: Praxis, Ärztin, Adresse, Bewertungen und Preise sind frei erfunden.

**Live:** https://praxis-sonnenthal-demo.vercel.app

**Stack:** Statisches HTML + CSS + Vanilla JS. Keine Build-Tools, keine Abhängigkeiten,
keine Tracker. Lokal per Doppelklick auf `index.html` lauffähig.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Long-Scroll-Startseite: Hero, USP-Band, Leistungen, Ärztin, Ablauf, Testimonials, FAQ, Kontakt/Terminanfrage |
| `leistungen.html` | Muster-Detailseite (Ästhetische Dermatologie) — Vorlage für alle Service-Seiten |
| `longevity.html` | Longevity-Konzept + mehrstufige Anamnese (5 Schritte, Demo) |
| `impressum.html` / `datenschutz.html` | Rechtstext-Platzhalter |
| `styles.css` | Design-System (alle Tokens in `:root`) |
| `script.js` | Navigation, Scroll-Reveals, Akkordeon, Demo-Formulare, Anamnese-Wizard, Consent-Hinweis |

## 1) Deploy auf Vercel

Kein Build nötig — das Verzeichnis ist direkt deploybar.

**Variante A — CLI:**

```bash
npm i -g vercel      # einmalig
cd derma-demo
vercel               # Fragen bestätigen, "Output Directory" leer lassen
vercel --prod        # Produktions-Deploy
```

**Variante B — Dashboard:** Repo zu GitHub pushen → [vercel.com/new](https://vercel.com/new) →
Repo importieren → Framework-Preset **„Other"**, Build Command leer, Output Directory leer → Deploy.

Hinweis: Alle Seiten stehen auf `noindex, nofollow`. Für einen echten Livegang die
`<meta name="robots">`-Zeile in jedem `<head>` entfernen.

## 2) Echte CI einsetzen (Swap-Punkte)

**Farben & Typografie** — ausschliesslich in `styles.css`, Block `:root` (oberste ~40 Zeilen):

- `--paper / --cream / --sand*` → Neutraltöne der CI
- `--sage / --sage-deep / --sage-tint` → Primärakzent
- `--gold` → Sekundärakzent (Hairlines, Sterne, Kicker)
- `--font-display` / `--font-body` → Schriften. Der Google-Fonts-`<link>` steht in jedem
  `<head>` (kommentiert mit `CI-SWAP-PUNKT`). Für Livegang empfohlen: Fonts self-hosten
  (`@font-face`) — DSGVO/DSG-sauberer und schneller.

**Bilder** — alle Platzhalter sind Inline-SVGs in `<figure class="media" data-swap="…">`.
Suche nach `data-swap` bzw. dem Kommentar `CI-SWAP-PUNKT`:

| `data-swap` | Motiv-Empfehlung | Format |
|---|---|---|
| `hero-bild` | Ruhiges Praxis-/Behandlungsfoto, warmes Licht | ca. 4:5 |
| `karte-klassisch/-aesthetik/-longevity` | Leistungs-Motive | 3:2 |
| `portrait-aerztin` | Porträt, Hochformat | 4:5 |
| `detail-stimmung`, `longevity-stimmung` | Stimmungsbilder | 4:5 |
| `karte` | Karten-Embed (erst nach Consent laden!) | 600×280 |

Swap: SVG durch `<img src="…" alt="…" loading="lazy" width="…" height="…">` ersetzen,
`figcaption.media__tag` löschen. Rundungen/Bogen kommen aus dem CSS (`.media`, `.media--arch`).

**Texte** — Vita der Ärztin, Beispielpreise (`(Beispiel)`), Testimonials
(als Platzhalter gekennzeichnet), Adresse/Telefon (`+41 44 000 00 00`, `wa.me`-Link)
und die Rechtstexte ersetzen. Formular-`action` anbinden (aktuell `data-demo`, kein Versand).

## 3) Elementor-Entsprechungen je Sektion

Für eine spätere WordPress/Elementor-Umsetzung:

| Demo-Sektion | Elementor-Entsprechung |
|---|---|
| Header + Sticky-Nav | Theme Builder → Header-Template, „Sticky: Top", Nav-Menu- + Button-Widget |
| Hero (Text + Bogen-Bild) | Section 2 Spalten; Heading-, Text-Editor-, Button-Widgets; Bild mit Custom-Border-Radius (`999px 999px 26px 26px`) |
| USP-Band | Icon-Box-Widgets in 3 Spalten, Trennlinien via Spalten-Border |
| Leistungs-Karten | Loop-Grid / Posts-Widget mit Custom-Skin, alternativ 3× Icon-Box in Cards |
| Ärztin (Split + Timeline) | Section 2 Spalten; Timeline über Icon-List-Widget mit Custom-CSS |
| Ablauf (nummerierte Steps) | Icon-Box-Grid; Nummern als Counter-Widget oder Pseudo-Element (Custom-CSS) |
| Testimonials | Testimonial-Carousel- oder Loop-Grid-Widget, Sterne via Star-Rating-Widget |
| FAQ-Akkordeon | Accordion-Widget (nativ) |
| Kontakt + Formular | Elementor Pro Form-Widget (DSGVO-Checkbox als Acceptance-Field) + Icon-List für Praxisdaten |
| Floating CTA | Button-Widget mit „Fixed"-Positionierung + Scroll-Trigger (Custom-JS oder Plugin) |
| Consent-Hinweis | Popup-Template (Trigger „Page Load", „Show once") oder Consent-Plugin |
| Longevity-Wizard | Elementor Pro Multi-Step-Form (Schritte 1:1 übertragbar; Zusammenfassung via Form-Hook) |
| CTA-Band (dunkelgrün) | Section mit Hintergrundfarbe `--sage-deep`, zentrierte Widgets |
| Footer | Theme Builder → Footer-Template, 4 Spalten |

Design-Tokens lassen sich in Elementor unter **Site Settings → Global Colors / Global Fonts**
1:1 aus `:root` übernehmen.
