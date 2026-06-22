# Martin Mokros — personal site

Your website, built with [Astro](https://astro.build). This guide takes you from a folder
on your laptop to a live site at **martinmokros.com**, and shows you how to edit everything
afterwards. No prior web-dev experience assumed — follow it top to bottom once, then you'll
only ever touch the "Editing" section.

---

## 0. The mental model (read this first)

Three things make up the site, and you only ever edit these three:

| You want to change… | You edit… |
|---|---|
| Words on a page (Research, Collaborate, Join us, About, Publications) | the matching file in `src/pages/` |
| A **project** (add / edit / reorder) | a Markdown file in `src/content/projects/` |
| A **field note / blog post** | a Markdown file in `src/content/notes/` |
| A photo, the hero video, a scan clip | a file in `public/media/` |

Everything else (layout, colours, fonts, the nav) is wired up for you and you can ignore it.

The flow once you're set up is always the same:

```
edit a file  →  see it instantly on your laptop  →  save to GitHub  →  site updates live
```

---

## 1. One-time setup

### 1a. Install Node.js
Astro needs Node.js. Install the **LTS** version from <https://nodejs.org> (just click the big
green LTS button and run the installer). To check it worked, open a terminal and run:

```bash
node -v
```

You should see a version number like `v20.x` or `v22.x`. Anything 18 or higher is fine.

> **Terminal?** On Mac: open **Terminal** (Cmd+Space, type "terminal"). On Windows: open
> **PowerShell** (Start menu, type "powershell").

### 1b. Get the project onto your laptop
Unzip the project folder somewhere sensible, e.g. `Documents/martin-mokros-site`.

### 1c. Open the folder in the terminal
```bash
cd Documents/martin-mokros-site
```
(Change the path to wherever you unzipped it.)

### 1d. Install the dependencies (one time)
```bash
npm install
```
This downloads Astro into a `node_modules/` folder. Takes a minute. You only do this once
(and again only if you move to a new computer).

---

## 2. Run it on your laptop

```bash
npm run dev
```

You'll see a line like `Local: http://localhost:4321/`. Open that address in your browser.
That's your site, running live. **Leave this running while you edit** — every time you save a
file, the browser updates by itself.

To stop it: press `Ctrl + C` in the terminal.

---

## 3. Editing — the parts you'll actually touch

### Add or edit a PROJECT
Each project is one file in `src/content/projects/`. Copy an existing one and change the top
section (between the `---` lines). Example — `scanning-together.md`:

```markdown
---
title: "Scanning Together"
tag: "Tropics · field"
order: 2                # lower number = higher up the page
meta:
  - "FUNDER: National Centre for Earth Observation (NCEO) · 12-month project"
  - "PARTNERS: Forest Research · CWMAC (Tanzania) · Univ. of SAVA (Madagascar)"
  - "RESEARCH: low-cost sensing · 3D forest structure"
---
The paragraph that describes the project goes here, in plain text.
```

- To make a project the **big featured block** (like 3DTreePrint): add `featured: true`,
  and optionally `eyebrow:` and `subtitle:`.
- To show the **interactive point-cloud slot**: add `scan: true` (see section 8).
- To link out to an external project site: add `externalUrl:` and `externalLabel:`.

Save the file → it appears on `/projects` automatically.

### Add a FIELD NOTE (blog post)
Each post is one file in `src/content/notes/`. Copy an existing one:

```markdown
---
title: "Your headline"
date: 2026-07-01           # year-month-day; newest shows first
tag: "FIELDWORK"           # short label
summary: "One sentence that shows in the list."
---
Write the post here. Plain paragraphs. Leave a blank line between them.

## You can use subheadings

And [links](https://example.com) like this.
```

Save → it appears on `/notes` and the newest three show on the home page automatically.

### Edit page text
Open the file in `src/pages/` (e.g. `collaborate.astro`, `about.astro`). The editable text
sits in lists near the top or in the HTML below. Change the words between the tags, save.

### Swap a photo, the hero video, or add a scan clip
Drop files into `public/media/`, then point to them:
- **Hero video:** replace `public/media/hero.mp4` (keep the same name = nothing else to change).
  Keep it compressed — aim for under ~5 MB, 1080p or smaller, no audio.
- **Home reel:** edit the list at the top of `src/components/Reel.astro` to add clips/photos.
- **Portrait:** drop `portrait.jpg` in `public/media/`, then in `about.astro` follow the comment
  to swap the placeholder box for an `<img>`.
- **CV:** drop `cv.pdf` in `public/`, then link to `/cv.pdf` in `about.astro`.

### Update the citation count
It's a placeholder in `src/pages/publications.astro` (`2,600+`). Change it to your real
Scholar number.

### Change colours or fonts
All colours are at the top of `src/styles/global.css` (the `:root` block). Fonts are loaded in
`src/layouts/Base.astro`.

---

## 4. Put it on GitHub

GitHub stores your code and is what the live site deploys from.

1. Install Git from <https://git-scm.com> if you don't have it (`git -v` to check).
2. Make a free account at <https://github.com> and create a **new empty repository** (no
   README, no licence) called e.g. `martin-mokros-site`.
3. In your terminal, in the project folder, run these once:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/martin-mokros-site.git
git push -u origin main
```

(Replace `YOUR-USERNAME`. GitHub will ask you to log in the first time.)

---

## 5. Deploy on Cloudflare Pages (free)

1. Make a free account at <https://dash.cloudflare.com>.
2. **Workers & Pages → Create → Pages → Connect to Git**, and pick your repo.
3. Set the build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. After a minute you get a live URL like
   `martin-mokros-site.pages.dev`.

From now on, **every push to GitHub auto-deploys**. You don't touch Cloudflare again except
for the domain (next step).

> Netlify and Vercel work identically with the same three build settings, if you prefer one of
> those.

---

## 6. Connect your domain (martinmokros.com)

1. Buy the domain — **Cloudflare Registrar** (inside the same dashboard) or
   [Porkbun](https://porkbun.com) are cheapest, ~£10–13/year. No add-ons needed.
2. In your Pages project: **Custom domains → Set up a custom domain →** type `martinmokros.com`.
3. Cloudflare walks you through the DNS records. If you bought the domain at Cloudflare it's
   basically automatic; if elsewhere, you add the records it shows you at your registrar.
4. Add `www.martinmokros.com` too and let it redirect to the bare domain.

Update the `site:` line in `astro.config.mjs` to your real domain and push, so links/SEO use it.

---

## 7. Your everyday workflow

After the one-time setup, changing the site is just:

```bash
# (optional) preview locally first
npm run dev

# then publish:
git add .
git commit -m "Add new field note about Madagascar trip"
git push
```

Within ~1 minute the live site updates. That's it.

---

## 8. Adding real point clouds (Potree)

The project pages have a slot for an interactive point cloud (turned on with `scan: true` in a
project's Markdown). Web browsers can't open a raw multi-million-point `.las/.laz` directly, so
you convert it once with **Potree**, which streams it smoothly even on a phone.

1. Install **PotreeConverter** (<https://github.com/potree/PotreeConverter>).
2. Convert your scan:
   ```bash
   PotreeConverter yourscan.las -o public/clouds/treeprint
   ```
   This makes a folder of streamable tiles under `public/clouds/treeprint/`.
3. Host the Potree viewer (the converter can output a ready viewer page), then in the project's
   `scan-embed` area put an `<iframe>` pointing at it. Ping me and I'll wire the exact embed
   once you have one scan converted.

For the **home reel**, don't use Potree — use a short *video* of a scan spinning (record your
screen in CloudCompare or Potree for ~8–10 s, export MP4, drop it in `public/media/` and add it
to the reel list). Looks great, loads instantly.

---

## 9. Troubleshooting

- **`npm run dev` errors about a missing module** → you skipped `npm install`. Run it.
- **Changes don't show** → make sure `npm run dev` is still running, and hard-refresh the
  browser (Cmd/Ctrl + Shift + R).
- **Build fails on Cloudflare** → check the build command is `npm run build` and output is
  `dist`. Read the error log; it usually names the file.
- **A Markdown note won't appear** → check the `date:` is a real date (`YYYY-MM-DD`) and every
  field above the second `---` is filled in.

---

## What's still a placeholder (search the code for `EDIT`)

- Citation count on the Publications page
- The "human paragraph" and portrait on About, and the CV link
- Postdoc fellowship links on Join us
- Real point clouds and scan clips
- Confirm the NCEO "Fellow" wording is how you want it (UCL's news page says "member")

Questions on any step — send me where you got stuck and the exact error text.
