# Numidea Labs — landing page with 4 selectable layouts

Zero-dependency static landing page (hand-written HTML/CSS/vanilla JS, no build
step) implementing the four design directions from the
*Landing page & portfolio improvements* handoff. All four ship together and are
selectable with the **LAYOUT** switcher pinned bottom-right — the choice is
saved in `localStorage` and can be deep-linked with `?layout=2a|2b|2c|2d`.

| Key | Layout | Signature |
|-----|--------|-----------|
| `2a` | **Proof-First Cinema** | featured work IS the hero: auto-rotating project frame, case strips (PROBLEM → BUILT → RESULT), case-file modal, services accordion, inline résumé |
| `2b` | **Story Scroll** | 5 chapters (Idea → Build → Proof → Builder → Your Turn) with a gold scroll-progress bar and a horizontal scroll-snap film strip |
| `2c` | **Gallery-First** | compact hero, filterable bento portfolio grid, in-page case-study panel with "next case" cycling |
| `2d` | **Atelier Split** | sticky identity rail (brand + founder + CTA always visible) with scrollspy, full-bleed project plates on the right |

## Files

```
index.html            all four layouts + the layout switcher
links.html            personal linktree page (previous home page, preserved)
assets/styles.css     Arcanum theme tokens + shared components + per-layout styles
assets/app.js         switcher + all interactions (rotation, modal, accordions,
                      progress bar, filters, scrollspy, mailto form handoff)
assets/covers/*.svg   Arcanum-style placeholder covers — replace with real
                      screenshots (assets/previews/*.webp) as projects go live
assets/cv_yasser_hamisse_2026.pdf   résumé linked from every layout
```

## Design tokens

Defined once at the top of `assets/styles.css` as CSS custom properties, per
the handoff: `--void #0A1420`, `--navy #0F1E30`, gold `#E6B450` / hover
`#F4D27A`, teal `#34D0E8`, ice `#EAF1F8`, muted `#9DB2C6`. Typography:
**Cinzel** (display) · **Geist** (body) · **Geist Mono** (kickers, badges,
meta) via Google Fonts.

## Honest content rules (from the handoff — keep them)

- **LIVE badge only when a project is genuinely live** (currently only
  almaflowclim.fr). Everything else stays SOON.
- Testimonial cards are marked `SAMPLE` — replace with real client quotes or
  hide them before promoting the page.
- Stats are real: 5 projects · 4 specialists · 3 languages · <24h · 544,634
  visa requests analyzed. Don't invent metrics.

## Known gaps / next steps

- **Form delivery**: the contact forms are front-end only — submitting opens a
  prefilled email to hello@numidealabs.com. Wiring a real backend (Formspree,
  Worker, etc.) is the highest-priority functional gap.
- **i18n**: copy is English; production is meant to be trilingual FR/EN/AR
  (IBM Plex Sans Arabic + RTL for ع). The FR·EN·ع pill is currently visual.
- **Images**: swap the SVG covers for real screenshots as each project ships;
  founder photo is a placeholder monogram.

## Deploy

GitHub Pages: **Settings → Pages → Deploy from a branch**, root folder. No
build step required.
