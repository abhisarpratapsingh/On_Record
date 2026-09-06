# On Record

**Make family facts findable before a disagreement begins.**

A family dispute rarely starts in court. It starts with a missing document, an
unclear nominee, or two people remembering the same property differently. On
Record gives a living owner one private place to record what exists, decide
exactly what each person can see, and prepare a read-only handover for later.

🔴 **[Live demo](https://on-record-livid.vercel.app)** · 📄 **[Phase 2 brief](docs/PHASE-2-BRIEF.md)** · 🎬 **[How the demo film is built](scripts/video/README.md)**

Built for **Build What Moves India**, Phase 2.

---

## What it is, stated precisely

On Record helps prevent avoidable family disputes by making ownership-related
facts, nominee status, consent, and handover instructions findable **before** a
disagreement begins.

It does **not** make a will, decide ownership, or replace a court, bank or
authority. It reduces the missing-records, conflicting-memory and unclear-consent
problems that make those official processes harder than they need to be.

## The Consent Fork

Most systems treat sharing as one irreversible decision. On Record separates
three moments that are usually collapsed into one:

| | |
| --- | --- |
| **The private living record** | The owner's own copy. Nothing leaves it because someone was invited. |
| **What each person sees now** | Chosen per person, per record — private, existence-only, or full detail — and revisable. |
| **What may be handed over later** | A separate read-only file, prepared in advance. Never the account. |

What makes that more than a UI:

- **Nominee ≠ owner.** Nomination is recorded as an asset-level fact. RBI explains
  a nominee may receive funds *as trustee for the legal heirs*, so On Record
  stores the nomination and points at the institution that decides.
- **Downgrades are enforced, not announced.** A visibility downgrade carries a
  real deadline. Apply stays disabled until it passes; the demo advances an
  explicit simulated clock that the Consent Log discloses.
- **Concerns are attributable.** They can only be raised from a member's own
  read-only view, about a record they can see, in words that member wrote. The
  owner cannot manufacture one on their behalf.
- **The handover file is actionable.** Each fact carries the authority to
  approach and, where a vetted official link exists, a direct link.

## Privacy model — and its boundary

Account references, document locations and nominee names are released only to the
owner or a full-detail grant. Everyone else sees a mask plus a one-way **SHA-256
fingerprint**, so two people can confirm they mean the same record without either
revealing it. The hash is verified against the NIST vectors and `node:crypto`
(`npm run check:sha`).

**This is disclosure control, not secrecy.** With no backend and no
authentication, the synthetic seed data ships inside the bundle. Real
confidentiality needs server-side storage, encryption, and an authenticated
session. That boundary is kept explicit rather than implied away.

## Run it

```bash
npm install
npm run dev
```

```bash
npm run build && npm run preview
```

No login, no live data, no government system is contacted. All records are
synthetic (case `FC-001`). Add `?lang=hi` for Hindi.

## Judge path

1. `/` → **Play all** to watch the five-action rail run end to end.
2. **Records** → add one; choose visibility *before* saving.
3. **People** → downgrade an access tier. Apply is disabled with time remaining.
4. **Handover** → add the bank record, read the "Where to start" block.
5. `#/preview/demo-arjun-4k9` → the provident-fund reference is masked with a
   fingerprint; the life-cover policy granted in full is readable.

## Layout

```
src/
  App.jsx        views, routing, the consent state machine
  data.js        synthetic seed: records, members, grants, institution processes
  domain.js      audit events and grant-filtered projections
  privacy.js     SHA-256, masking, tier-based disclosure
scripts/video/   the programmatic demo film (narration → capture → render → mux)
docs/            Phase 2 brief, submission kit, design notes
```

## Tech

React 19 · Vite 8 · no backend, no AI calls, no analytics. Static deploy with
hash routing. Dependencies are pinned, and each deploy is verified byte-identical
to the local build by content hash.

The demo film is rendered programmatically, not screen-recorded: narration is
synthesised per sentence and measured, those durations become the timeline, and
Playwright screenshots a deterministic `seek(t)` scene graph frame by frame.

## Licence & status

Independent prototype. Not a government service. Not a will-maker. Not an
ownership decision.
