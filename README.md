# M&M Fufffel Consulting AB

> We turn ambiguity into alignment, alignment into slides, and slides into further ambiguity.

A **fictional, satirical** consulting website for **M&M Fufffel Consulting AB** — a send-up of
consulting language, AI hype, governance, estimation and collective confusion. Polished and premium
at first glance; increasingly absurd on closer reading. Powered by **Convincing Nonsense™** and the
flagship **Meta-ETA™**.

Everything here is invented. No real company, product, advice or affiliation is implied.

## Stack

Dependency-light **vanilla HTML, CSS and JavaScript**. No framework, no build step, no external
fonts or trackers. A small hash-routed, data-driven single-page experience with a no-JS fallback.

```text
index.html            # semantic shell, nav, meta/OG, inline favicon, no-JS fallback
styles.css            # design tokens + all shared components (dark, print-safe)
app.js                # hash router + data-driven rendering, mug wall, CTA dialog
content/services.js   # THE service data model (window.MMF) — add offerings here
.kiro/steering/mm-fufffens-design-system.md   # reusable Kiro steering guidance
.kiro/skills/mm-fufffens/SKILL.md             # equivalent Kiro skill
```

## Run it

No build required. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

Direct links and refresh work on every route because routing is hash-based
(e.g. `http://localhost:8000/#/service/meta-eta`).

## Test / verify

There is no test framework (nothing to compile). Verify manually:

```bash
python3 -m http.server 8000
```

Then check:

- The home page loads with **no console errors**.
- Every service is reachable from the nav and the portfolio cards.
- Service detail views work on **refresh** and via **direct URL** (`#/service/<slug>`).
- Layout works from **320px** to large desktop.
- **Keyboard focus** is visible; the CTA dialog traps and restores focus; `Esc` closes it.
- **Reduced motion**: enable "Reduce motion" in the OS — the marquee and mug rotation stop.
- **Print/PDF** (Cmd/Ctrl+P): the background stays dark and text stays light.
- Spelling: **"Fufffel" has exactly three f's** everywhere; ™ and ² symbols intact.

A quick spelling guard:

```bash
# There should be NO "Fuffel" (two f) or "Fuffffel" (four f), and no leftover "Fufffens".
grep -rnE "Fuffel|Fuffffel|Fufffens" --include="*.html" --include="*.js" --include="*.css" . \
  && echo "SPELLING ERROR" || echo "spelling ok"
```

## Add a new service

Do **not** duplicate markup. Add offerings through the central data model:

1. Append a service object to `SERVICES` in `content/services.js`
   (`slug`, `name`, `eyebrow`, `headline`, `description`, `accent`, three `modules`, one `quote`,
   and a `disclaimer` if the topic could be mistaken for real advice).
2. Mirror it as a card in the `<noscript>` fallback grid in `index.html`.
3. That's it — `app.js` auto-lists, routes and links the new service.

See `.kiro/steering/mm-fufffens-design-system.md` for the full design system and rules.

## Disclaimers

- **Fictional company.** M&M Fufffel Consulting AB, its services, trademarks and metrics are
  invented for satire. Nothing here is real advice or affiliated with any real organisation.
- **Responsible drinking.** The "Afterwork" offering is fictional. Enjoy alcohol responsibly, only
  if of legal drinking age, and never drink and drive. No health or performance benefits are implied.
- **Not legal/employment/union advice.** The Union Alignment Nonsense Engine™ is satire.

## License

No license granted; internal humour project. Do not present as a real service.
