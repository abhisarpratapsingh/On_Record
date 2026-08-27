# On Record — Codex build companion

Codex builds from `ON-RECORD-BUILD-PROMPT.md`; this file governs verification and hardening.
Do not write application code from this file unless the user explicitly asks. Produce precise
specs, acceptance tests, and attack the returned implementation. Optimise for the 28 Aug 2026,
20:00 IST deadline and a tired reviewer: legible in 30 seconds, mobile-first, no cold start.

## Non-negotiable product rule

Never ship an invented legal fact or a claim stronger than its source. Every statute, case,
percentage, and rupee figure must trace to §5 of the build prompt with its confidence intact.
`verified` means re-confirmed from a primary or clearly reliable source this build cycle;
`verify` remains `verify` until genuinely re-confirmed and must render a visible “confirm before
relying on this” marker. An unmarked `verify` fact is a build failure.

The prototype is mock-data only: no legal determination, no executed will, no government
affiliation, no real government-system access, and zero in-product AI/LLM calls. No auth, OTP,
login, localStorage, cookies, analytics, database, or external API on the critical path. State
lives in memory and the URL. All money is integer rupees with Indian formatting.

## Highest-risk acceptance rules

- Only a profile owner can see or act on that profile’s FamilyProfile, Asset, or WillDraft.
  Cross-profile access exists only through an explicit, confirmed, logged ShareAction with an
  exact field list and revocation.
- The will feature says `DRAFT` and `NOT LEGALLY VALID UNTIL PROPERLY EXECUTED`; never call it
  signed or executed. Every entitlement page includes: “This explains the general rule. It does
  not decide your specific case. Confirm with a lawyer or the relevant office.”
- All three doors have complete journeys and no dead ends. Door II visibly says its search is
  simulated. The footer says On Record is an independent prototype, not affiliated with a
  government department.
- One dictionary contains every visible string in both `en` and `hi`; no hardcoded UI copy.
  Hindi is Devanagari and plain. `?lang=hi` round-trips through every route without losing state.
- Mobile starts at 360px, tap targets are at least 44px, keyboard and focus work, no horizontal
  scroll, WCAG AA contrast, and reduced motion removes stamp animation.

## Required workflow

After every build pass, append a real entry to `codex/EVIDENCE-LOG.md` containing the prompt,
what Codex produced, and a concrete before→after. Run `/consent-audit` after every Door I or
data-model change. Run `/freeze` only after all gates pass; it must report the shortest path to
green ordered: consent, legal tone/facts, then everything else.

Use the commands in `.claude/commands/` as the canonical audit protocol:

- `/fact-check` — walk every §5 row; re-confirm `verify` rows from reliable sources, promote only
  on real evidence, and check the visible marker.
- `/consent-audit` — inspect every route and data path for cross-profile reachability; report
  every non-ShareAction path as `CRITICAL`.
- `/tone-audit` — read all English and Hindi UI strings; flag legal determinations and softer
  overclaims, cross-checking §9.
- `/bilingual-audit` — verify dictionary parity, non-empty values, plain Hindi, and no hardcoded
  visible strings outside the dictionary.
- `/judge-sim` — cold-open a private mobile viewport, report what is understood in eight seconds,
  quote only visible text, and name the single shortlist screenshot or `None`.
- `/freeze` — run all acceptance gates, including production HTTP 200 in private mobile view,
  language/state round-trip, consent, visible verify markers, and evidence-log coverage.

When requirements are missing, emit `SPEC-GAP: <what>` and stop that sub-task. Cut half-working
features before shipping. Never mark frozen with an open consent question or unmarked `verify`.
