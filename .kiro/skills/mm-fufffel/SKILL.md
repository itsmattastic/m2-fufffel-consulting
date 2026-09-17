---
name: mm-fufffel
description: Design-system and content rules for the fictional M&M Fufffel Consulting AB satire website. Use when creating, editing or extending the M&M Fufffel site (services, cards, hero, CTA, print styles) so the visual language, three-f "Fufffel" spelling, and data-driven service model stay consistent.
---

# M&M Fufffel design system skill

Operational guidance for the fictional **M&M Fufffel Consulting AB** website. This is a
dependency-light vanilla HTML/CSS/JS static site. The full source of truth also lives in
`.kiro/steering/mm-fufffens-design-system.md` in the site repo — keep the two aligned.

## Non-negotiables

- **"Fufffel" has three f's, always.** Company name is exactly **M&M Fufffel Consulting AB**.
- **Convincing Nonsense™** is the foundational capability; **Meta-ETA™** is the flagship concept.
- Tone: official at first glance, ridiculous on closer inspection. Affectionate, non-targeted.
- No real company logos, no implied official affiliation, no real-company performance claims.
- Everything is fictional satire — keep disclaimers visible where the subject could be mistaken
  for legal, employment, health, financial, alcohol or official-company advice.

## Architecture (reuse, do not duplicate)

- `content/services.js` — the **central data model** (`window.MMF`). Add offerings HERE.
- `app.js` — hash router + data-driven rendering of hero, cards, detail, mug wall, CTA dialog.
- `styles.css` — design tokens (`--bg`, `--ink`, `--ink-muted`, `--acid`, `--amber`, `--accent`)
  and every shared component. Per-service colour = inline `--accent`; add no bespoke CSS for it.
- `index.html` — semantic shell, nav, meta/OG, inline favicon, and a no-JS fallback list.

## To add a service

1. Append a service object to `SERVICES` in `content/services.js` with:
   `slug`, `name`, `eyebrow`, `headline`, `description`, `accent`, three `modules` `{h,p}`,
   one `quote` `{text,cite}`, and a `disclaimer` when needed. Optional: `badge`, `foundational`,
   `points`, `formula`, `ladder`, `isMugWall`.
2. Add a matching card to the `<noscript>`/fallback grid in `index.html`.
3. Do nothing else for routing/linking — `app.js` auto-lists, routes (`#/service/<slug>`) and links it.

## Verify after every change

- `python3 -m http.server 8000`, open the site: no console errors.
- All services reachable from nav + cards; detail views survive refresh and direct URLs.
- Three-f "Fufffel" everywhere; ™/² symbols intact.
- 320px → desktop; visible keyboard focus; `prefers-reduced-motion` honoured; PDF print stays dark.

Keep this file concise and operational — do not turn it into README-style documentation.
