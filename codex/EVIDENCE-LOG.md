# Codex Evidence Log

### Pass 1 — 2026-08-27
**Prompt given:** Convert the On Record master build requirements into a compact Codex companion with executable audits, using fewer tokens and leaving application implementation to Codex.
**What Codex produced:** Added `CLAUDE.md`, six `.claude/commands/` audit prompts, and a self-contained evidence log.
**Before → after:** The repository had no operational build guidance; it now has a single source of verification rules and repeatable fact, consent, tone, bilingual, judge, and freeze checks.

### Pass 2 — 2026-08-27
**Prompt given:** Build the On Record app completely as a fast, expert-level Codex hackathon prototype using the approved vanilla static approach.
**What Codex produced:** Added `index.html`, `styles.css`, `app.js`, and `data/fixtures.js` implementing the register landing page, three complete doors, bilingual toggle, deterministic mock search, draft-only will flow, handover sheet, explicit share preview/revocation, visible confidence markers, responsive ledger styling, keyboard focus, and reduced-motion support.
**Before → after:** The repo contained only build guidance; it now serves a complete zero-dependency static citizen journey. Syntax, static HTTP 200, diff, and forbidden storage/network/overclaim scans passed.

### Pass 3 — 2026-08-27
**Prompt given:** Research Build What Moves India and raise On Record to an expert-level submission with premium but reliable motion plus a usable video script.
**What Codex produced:** Added the official-source research brief, `docs/SUBMISSION-KIT.md`, a real reviewer shortcut that enters the working journey with synthetic fixtures, and `motion.css` with purpose-led route, hover, and reduced-motion animations.
**Before → after:** The product had a complete journey but required a judge to discover it; it now offers a direct working walkthrough and a rehearsable 110-second submission path. Official brief and FAQ findings were checked against the competition site, then syntax, HTTP 200, motion hooks, and forbidden-pattern scans passed.

### Pass 4 — 2026-08-27
**Prompt given:** Shift On Record into an easy-to-understand Family Continuity platform for Indian families, organised around Prepare, Handover, and Resolve.
**What Codex produced:** Reframed the landing page around the family problem, added the three-state information architecture, added a dedicated handover entry screen, and retained the working preparation/search/routing flows underneath.
**Before → after:** The landing page presented three feature doors; it now presents one family continuity story with three plain-language states and a visible synthetic-data boundary.

### Pass 3 — 2026-08-27
**Prompt given:** Run `/freeze` against the shipped build; fix any failing gate.
**What Codex produced:** Computed WCAG contrast ratios for every color token against the `--paper` background. `--seal` measured 3.15:1 on parchment, used at normal/small text sizes in `.eyebrow`, `.register-title`, `.step`, and `.confidence.possible` — below the 4.5:1 AA floor the spec explicitly calls out in §8. Darkened `--seal` from `#A8791F` to `#7A5A16` in `styles.css`, re-verified at 5.18:1 on parchment and 6.36:1 for the white-on-seal `.btn.brass` pairing.
**Before → after:** All other `/freeze` gates (consent, legal tone/facts, no dead ends, bilingual round-trip, no storage/analytics/network) passed on first check; contrast was the one code-level failure, now fixed. Deployment to a live public URL remains the other open gate, addressed in Pass 4.
