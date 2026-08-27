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

### Pass 5 — 2026-08-27
**Prompt given:** Fix the old page rendering and change the design so the new Family Continuity narrative is unmistakable.
**What Codex produced:** Diagnosed the duplicate legacy router, added an explicit canonical `renderApp()` router, and added the civic-service visual redesign with responsive Prepare/Handover/Resolve cards.
**Before → after:** The old `home()` renderer could override the new `newHome()` renderer; the current route now deterministically renders the Family Continuity landing page and dedicated `/handover` route.

### Pass 6 — 2026-08-27
**Prompt given:** Make all three functions actually useful: record bank and other details, improve handover and resolve, fix button behavior, and make the front page feel like a platform rather than a document.
**What Codex produced:** Removed legacy-renderer interference from interaction handlers, stopped input re-renders from destroying focus, added synthetic record reference/document-location/note fields, added a handover intake and checklist state, and added functional form styling.
**Before → after:** Typing into a record could trigger a full-screen render and lose the user’s input focus; fields now persist on input without structural re-rendering, while the new handover route accepts a person and document status before generating next steps.

### Pass 7 — 2026-08-27
**Prompt given:** Ensure recorded bank and other asset details flow through the review and handover outputs instead of disappearing after entry.
**What Codex produced:** Added downstream reference/location visibility, expanded the handover share field list, and added a record metadata treatment for quick verification.
**Before → after:** Prepare captured extra details but the check/sheet views hid them; the same details now appear in review, handover, and share preview.

### Pass 8 — 2026-08-27
**Prompt given:** Rebuild the product as a practical government-style service platform, not a DigiLocker-like document vault, with an interconnected architecture and quieter service narrative.
**What Codex produced:** Added the shared Family Continuity workspace model, service rail, case summary, service workbench cards, connected service routes, and a restrained government-platform visual layer.
**Before → after:** The landing page behaved like a branded register/document; it now presents a task-led service home where Prepare, Handover, and Resolve are connected views of one family continuity case.

### Pass 3 — 2026-08-27
**Prompt given:** Run `/freeze` against the shipped build; fix any failing gate.
**What Codex produced:** Computed WCAG contrast ratios for every color token against the `--paper` background. `--seal` measured 3.15:1 on parchment, used at normal/small text sizes in `.eyebrow`, `.register-title`, `.step`, and `.confidence.possible` — below the 4.5:1 AA floor the spec explicitly calls out in §8. Darkened `--seal` from `#A8791F` to `#7A5A16` in `styles.css`, re-verified at 5.18:1 on parchment and 6.36:1 for the white-on-seal `.btn.brass` pairing.
**Before → after:** All other `/freeze` gates (consent, legal tone/facts, no dead ends, bilingual round-trip, no storage/analytics/network) passed on first check; contrast was the one code-level failure, now fixed. Deployment to a live public URL remains the other open gate, addressed in Pass 4.
### Pass 9 - 2026-08-27
**Prompt given:** Make the logo, hero, data proof, user experience, synthetic demo records, and government-service narrative clearly connect to the Family Continuity Services proposition.
**What Codex produced:** Replaced the square `OR` mark with a connected-nodes continuity mark, added a service lockup, rewrote the hero around recording, handover, and authority routing, added a preloaded fictional workspace with bank, property, and insurance records, added service summary metrics, evidence cards, and resettable demo data, and tightened the service-workbench styling.
**Before -> after:** The entry route felt like a document and the evidence content rendered as unstyled text; it now opens as a calm task-led public-service workspace with a clear user question, three connected actions, source-bounded figures, visible synthetic-data boundaries, and a usable demo path.
**Verification:** `node --check app.js` passed; `/`, `/app.js`, and `/platform.css` returned HTTP 200; the live browser opened the new homepage; Prepare -> Check, Handover -> Checklist -> simulated search, Resolve -> authority route, and Hindi -> English route round-trip all passed without losing state. The entry tab was left open at `http://127.0.0.1:4173/#/` for review.

### Pass 10 - 2026-08-27
**Prompt given:** Make the product feel impactful and meaningfully connected to public services, then prepare the final hackathon submission materials.
**Research basis:** Re-checked the official Builder Brief and FAQ, the Department of Financial Services announcement for the Common Landing Portal for Unclaimed Financial Assets, India.gov service patterns, and the NALSA service surface. The resulting positioning is a family handover layer that prepares context and routes citizens to existing services, not a government replacement or a generic document vault.
**What Codex produced:** Rebuilt the entry route around Meera's synthetic after-death case, a case reference, a situation-first start, a Prepare -> Handover -> Route timeline, official destination cards, source-bounded context cards, and a live demo path. Replaced the submission kit with a current 115-second script, 177-word summary, judge path, recording checklist, and research basis.
**Verification:** Fresh-load homepage shows the new hero and six official destination cards. Fresh-load Prepare shows three seeded synthetic records with editable details. The handover CTA opens the checklist, the checklist reaches simulated search, and Resolve still exposes four routing scenarios. Mobile-width overflow check passed. `node --check app.js` and `git diff --check` passed.
