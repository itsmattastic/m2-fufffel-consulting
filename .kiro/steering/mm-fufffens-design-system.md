# M&M Fufffens design system for Kiro

Use this steering guidance whenever creating, editing or extending the fictional
**M&M Fufffens Consulting AB** website in this repository.

## Brand rules

- Write **M&M Fufffens Consulting AB** exactly. **"Fufffens" has three f's** — always.
- Treat **Convincing Nonsense™** as the foundational capability, not generic filler.
- Keep **Meta-ETA™** as the trademarked flagship concept.
- Tone: premium, concise and almost credible at first glance, absurd on closer reading.
- Use consulting/AI language knowingly: alignment, orchestration, resilience, narrative,
  governance, confidence, transformation, momentum.
- Keep humour affectionate and non-targeted. Make no claims about real people or the
  performance of any real company.
- Never imply official Ericsson (or any real company) affiliation; never add real logos or
  protected brand assets.

## Visual system

- Deep black/charcoal canvas, warm off-white text, muted grey secondary text, one acid
  accent (`--acid`) and one warm amber accent (`--amber`).
- Large editorial headlines, compact mono labels, rounded cards, thin borders, restrained shadows.
- Add subtle technical texture only when it does not reduce readability or performance.
- **Reuse the existing tokens and shared components in `styles.css` before inventing new ones.**
  Per-service colour is set with an inline `--accent` on the card/detail wrapper — do not add
  bespoke component CSS for it.
- Keep the dark background in print/PDF: `print-color-adjust: exact` plus the
  `-webkit-` vendor equivalent. Do not regress the `@media print` block.
- Respect `prefers-reduced-motion` and keep visible keyboard focus (`:focus-visible`).

## Adding a new service (do this, do not duplicate markup)

Add every offering through the central data model in `content/services.js`. Never fork a page
or hand-write service markup. Each service object should contain:

- `slug` — url-safe, unique
- `name`, `eyebrow`, `headline`, `description`
- `accent` — one hex colour
- `modules` — exactly **three** short `{ h, p }` items unless there is a strong reason otherwise
- `quote` — one memorable, spot-on `{ text, cite }`
- `disclaimer` — include when the subject could be mistaken for legal, employment, health,
  financial, alcohol or official-company advice
- optional: `badge`, `foundational`, `points`, `formula`, `ladder`, `isMugWall`

Good quote examples: "An ETA for your ETA", "Teamwork makes the dream work",
"None of us are so confused as all of us together."

## Extension workflow

1. Inspect the existing tokens and components (`styles.css`) and the data model (`content/services.js`).
2. Add the service object to `SERVICES` in `content/services.js`.
3. Reuse the shared hero, service-card, module-list, quote, ladder, CTA and footer components
   already rendered by `app.js`. The service is auto-listed, routed (`#/service/<slug>`) and
   linked from the home grid — no routing changes needed.
4. Mirror the new card in the `<noscript>`/fallback list in `index.html` so it works without JS.
5. Add only the minimum CSS needed for a service-specific accent (prefer inline `--accent`).
6. Run the checks below, then manually verify mobile, keyboard focus, reduced motion and PDF print.
7. Keep the fictional-satire disclaimer visible where appropriate.

## Assets, logo & "Some of our work"

- Ship only **web-optimized** copies under `assets/` (JPEG via `sips`). Keep raw originals in
  `res/` (gitignored). Logo: `assets/logo.jpg` (+ `assets/logo-sm.jpg`). Merch/candy photos:
  `assets/merch.jpg`, `assets/candy.jpg`.
- The **logo** is the blue M² circle with the peeling "FUFFFEL" sticker; it appears in the hero
  lockup with the `Active-active with absolute redundancy since 2026.` caption (`BRAND.tagline2`).
  Note: the merch/logo artwork reads "FUFFEL/FUFFFEL" — that is the visual identity; **all text on
  the site stays "Fufffens" (three f's)**.
- **"Some of our work"** lives in the `WORK` array in `content/services.js`: each item has a
  `cover` (a PDF page preview under `assets/work/`), a `pdf` link (`assets/pdf/`), `client`,
  `blurb`, optional `service` slug and `accent`. Generate covers from a PDF's first page with
  `qlmanage -t -s 1000 -o <dir> <pdf>` then `sips` to JPEG; crop ~42px top / 34px bottom to remove
  browser print chrome. Add both the data entry AND a matching `<noscript>` fallback card.
- Merch/candy showcase = `SHOWCASE` array; fictional client quotes = `BRAND.testimonials`.

## Guardrails
- Keep the "official at first glance, ridiculous on closer inspection" tone.
- Do not introduce a framework, font provider, tracker or new design language without a
  repository-level reason. This is dependency-light vanilla HTML/CS/JS.
- Do not add real company logos or imply official affiliation.
- Do not duplicate an entire page to add one offering.

## Checks after each change

- `python3 -m http.server 8000` then open `http://localhost:8000/` — no console errors.
- Every service reachable from nav and cards; detail views survive refresh and direct links.
- Verify **"Fufffens" has exactly three f's** and trademarked names keep their ™/² symbols.
- Mobile (320px) to desktop; visible keyboard focus; reduced-motion honoured.
- Print/PDF keeps the dark background and readable light text.
