# On Record — implementation design

## Goal

Ship a fast, static hackathon prototype that helps a person organise recorded assets,
look for possible unclaimed matches, and route rights questions to the appropriate next
step without making legal determinations.

## Architecture

- Plain HTML, CSS, and JavaScript; no runtime dependency or build step.
- `index.html` is the only entry route and uses hash routes for every screen.
- State is held in memory and mirrored into a compact URL query/hash snapshot when useful;
  there is no auth, storage, cookie, database, analytics, or network call.
- `data/fixtures.js` contains only mock records and the domain confidence-tagged copy.
- `strings.js` is the only source for visible UI text, with `en` and `hi` for every key.
- `app.js` owns routing, rendering, deterministic transitions, forms, share confirmation,
  printable views, and URL language state.

## User journeys

1. Landing register → Door I add assets → completeness check → optional draft → handover
   sheet → explicit share preview → confirmed/revocable share.
2. Landing register → Door II search → visible registry sequence → grouped matches → typed
   claim checklist and permanent simulation honesty panel.
3. Landing register → Door III situation selector → general-rule explainer/checklist or
   escalation routing to Lok Adalat, Senior Citizen Maintenance Tribunal, or civil/district
   court.

## Safety and correctness

- `confidence: verify` content always renders a visible marker.
- Entitlement content always includes the non-determination disclaimer.
- Draft output is labelled draft-only and includes the exact execution disclaimer.
- Share preview lists exact fields and has cancel/confirm/revoke paths; no recipient view
  exists without an explicit ShareAction.
- All factual content is drawn from §5; unsupported claims are omitted.

## UX and visual system

Ledger/register visual language: indigo ink, parchment, brass seal, wax-red alerts, sage
completion. Serif headings, sans body, monospace reference data. Mobile-first at 360px,
44px controls, keyboard focus, no horizontal overflow, strong contrast, and reduced-motion
support. The first screen states the product promise and the three doors immediately.

## Verification

- Static smoke test every route and every door action.
- Search source for forbidden legal overclaims, storage, analytics, and network calls.
- Exercise English/Hindi on every route and ensure state survives toggling.
- Check print/download output and share confirmation/revocation.
- Run the six repository audits, then record the pass in `codex/EVIDENCE-LOG.md`.
