# Deploying On Record

This is a zero-dependency static site. No build step, no `package.json`, no
framework. Deploy the repository root as-is. Routing is entirely
hash-based (`#/door1/add`, `#/handover`, ...), so no server-side rewrite
rules, `vercel.json`, or `_redirects` file are needed on any host.

Files that must ship together (everything the deployed site actually loads):

```
index.html
app.js
data/fixtures.js
styles.css
motion.css
functional.css
platform.css
hero-redesign.css
```

The other repo files (`CLAUDE.md`, `ON-RECORD-BUILD-PROMPT.md`, `docs/`,
`codex/`, `.claude/`, `.jez/`) are project documentation and dev tooling.
They are harmless to include but not required by the live page.

## Vercel (dashboard, no CLI)

1. Go to vercel.com, "Add New" then "Project".
2. Import this folder, or drag-and-drop it if given that option.
3. Framework preset: **Other**. Leave build command and output directory
   blank, root directory as `.`.
4. Deploy. No environment variables needed.

## Vercel (CLI)

```bash
npm i -g vercel
vercel --prod
```

Accept the defaults; it auto-detects a static project.

## Netlify (drag and drop)

1. Go to app.netlify.com/drop.
2. Drag the project folder in directly. No build settings needed.

## GitHub Pages

1. Push this repo to GitHub.
2. Settings, Pages, Deploy from a branch, pick `main` and `/ (root)`.
3. Wait for the Pages build to finish; the URL appears in the same settings
   panel.

## After deploying

Confirm on the live URL before recording the submission video:

- Home loads with no console errors.
- `#/handover` works as a direct deep link (paste the URL with that hash
  and hard-refresh) — this previously crashed before the Pass 15 fix in
  `codex/EVIDENCE-LOG.md`, so it is the one regression worth a manual check.
- `?lang=hi` toggles and round-trips through at least one door.
- No horizontal scroll on a phone-width viewport.

Then put that URL in `docs/SUBMISSION-KIT.md`'s judge path and in the
submission form.
