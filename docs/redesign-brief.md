# Site redesign — brief, audit and decisions

Branch: `redesign`. `main` auto-deploys to Cloudflare Pages — **never push to main**.
Stack: Astro 4.16, plain CSS in `src/styles/global.css`.

## Brief

**Goal:** modernise the design so it feels like a sharp research-technology company —
clean, scientific, confident — credible to funders (ARIA, NCEO, UKRI) and industry
clients. Must **not** look like a generic SaaS template.

### Hard constraints

- No changes to copy, links, routes, or `src/content/`.
- Don't touch `public/potree/` data or `public/media/`.
- Keep the hypsometric palette tokens in `src/styles/global.css` and the single ochre
  accent; shades may be refined for WCAG AA.
- Keep IBM Plex Mono for labels/data. Body: Hanken Grotesk → **Geist**. Headings:
  Fraunces vs Geist — Martin decides from a side-by-side comparison.
- Lucide icons only where they aid scanning. Respect `prefers-reduced-motion`.
  No heavy new dependencies.

### Process

1. Audit (done).
2. Design tokens as a local-only `/styleguide` page → **stop for Martin's approval**.
3. Home page only, with before/after screenshots → **stop for Martin's approval**.
4. Roll out to the other pages.

Throughout: `npm run build` must pass, no file over 25 MB, no horizontal scroll on
mobile, small separate commits.

## Step 1 audit — top problems

1. Ochre text fails AA (2.96:1 on paper).
2. Hero: mobile overlaps, unreadable eyebrow on bright sky, HUD feels gamey.
3. No type scale (34 distinct font sizes).
4. "Right now": two competing features, five card styles, empty equal-height cells.
5. Hover cues on non-clickable things, weak cues on real links.
6. Misaligned centred block on Home.
7. Publications overflows horizontally on mobile.
8. Ad-hoc spacing, 13 inline styles, 8,000px-tall mobile home.
9. Eight different radii; no Potree WebGL fallback.
10. Dated details (3px buttons, boxed footer links, tiny nav, heavy dark-green slabs).

## Decisions (Martin)

0. Baseline screenshots live in `.design-review/before/` (gitignored): 9 pages ×
   375/768/1440, plus `slices/`. If retaking: dev toolbar hidden, software WebGL on.
1. Fix now, as separate commits: Publications mobile overflow, and ochre contrast
   (keep `#BB7029` for fills; add a darker ochre **text** token passing AA on both papers).
2. Hero: keep the survey HUD but instrument-grade — static real coordinates (clearly
   marked placeholder until Martin supplies them), no REC blink, no random walk. Fix
   mobile overlaps; subtle scrim behind the eyebrow.
3. Right now: one featured card = the postdoc open call. Max two card variants. Every
   card is either a link with a visible affordance or visibly static.
4. Dark slabs: keep only the "Hire me" block on Collaborate; lighten the others.
5. Potree: click-to-load — poster image + "Explore in 3D" button that swaps in the
   iframe; the poster doubles as the no-WebGL fallback.

## Status log

- Step 1 audit — done.
- Decision 0 (baselines copied), decision 1 (overflow + ochre text token) — done.
- Step 2 styleguide — built. `npm run dev` → `/styleguide`. The page lives in
  `src/styleguide/Styleguide.astro` and is injected only under `astro dev`
  (`astro.config.mjs`), so production never builds it. New tokens are in
  `src/styles/tokens.css` and proposed components in `src/styles/components.css`;
  the live site imports neither yet. Recommended against Tailwind v4.
  **Awaiting Martin's approval**, including: heading face (Fraunces / Geist / hybrid),
  the new `--paper-0` card tint, swapping "→" in labels for a Lucide arrow, and the
  WebGL-fallback micro-copy.
