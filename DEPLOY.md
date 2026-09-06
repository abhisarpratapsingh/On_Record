# Deploying On Record

On Record is a Vite static build. The submission uses seeded synthetic data and
does not require Supabase, authentication, environment variables, or live
government integrations.

Build it with:

```bash
npm install
npm run build
```

Deploy the generated `dist/` directory. Vite uses relative asset paths, so the
build works on a project subpath such as GitHub Pages. Hash routes keep direct
navigation simple (`#/demo`, `#/records`, `#/family`, `#/handover`).

The other repo files (`CLAUDE.md`, `ON-RECORD-BUILD-PROMPT.md`, `docs/`,
`codex/`, `.claude/`, `.jez/`) are project documentation and dev tooling.
They are harmless to include but not required by the live page.

## Vercel (dashboard, no CLI)

1. Go to vercel.com, “Add New” then “Project”.
2. Import this repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy. No environment variables are needed.

## Vercel (CLI)

```bash
npx vercel --prod
```

Accept the defaults; it auto-detects a static project.

## Netlify (drag and drop)

1. Go to app.netlify.com/drop.
2. Run `npm install` and `npm run build` locally.
3. Drag the generated `dist/` directory into Netlify Drop.

## GitHub Pages

1. Push this repo to GitHub.
2. Add a Pages workflow that runs `npm ci` and `npm run build`.
3. Publish the `dist/` artifact with GitHub Pages.

## After deploying

Confirm on the live URL before recording the submission video:

- Home loads with no console errors.
- `#/demo`, `#/records`, `#/family`, and `#/handover` work as direct hash routes.
- A synthetic recipient route such as `#/preview/demo-ananya-7f2` is read-only.
- The guided demo and play-all demo both reach the handover release and reset.
- No horizontal scroll on a phone-width viewport.

Then put that URL in `docs/SUBMISSION-KIT.md`'s judge path and in the
submission form.
