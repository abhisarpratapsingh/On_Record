# On Record — Build What Moves India, Phase 2 brief

**Live:** https://on-record-livid.vercel.app · **Repo:** https://github.com/abhisarpratapsingh/On_Record
**Demo video:** `output/video/on-record-phase-2.mp4` (English) · `on-record-phase-2-hi.mp4` (Hindi)

---

## The claim, stated precisely

On Record helps prevent avoidable family disputes by making ownership-related
facts, nominee status, consent, and handover instructions **findable before a
disagreement begins**.

It does not solve ownership and does not eliminate litigation. It reduces the
missing-records, conflicting-memory, and unclear-consent problems that make
official processes harder than they need to be.

## The problem

A family dispute rarely starts in court. It starts with a missing document, an
unclear nominee, or two people remembering the same property differently. By the
time anyone needs the facts, the person who knew them is often gone.

Four figures describe the pressure around that. Each is used for one purpose
only, and each is shown with what it does **not** prove.

| Figure | What it shows | What it does not show | Source |
| --- | --- | --- | --- |
| ~84% | Why a property record carries so much of a family's life | That 84% of property is disputed | [RBI household-finance research](https://dvararesearch.com/wp-content/uploads/2020/05/Household-Finance-in-India-Approaches-and-Challenges.pdf) |
| ~66% | Property disagreement dominates that civil caseload | A census of every civil case in India | [CPR](https://cprindia.org/understanding-land-conflict-in-india-and-suggestions/) |
| ~20 years | How long an unresolved land question can run | The average for every family property case | [NITI Aayog](https://www.niti.gov.in/node/296) |
| 5,18,49,083 pending district & taluka cases, incl. 1,12,94,941 civil | The queue a matter joins once filed | A fixed number — the dashboard changes continuously | [NJDG](https://njdg.ecourts.gov.in/njdg_v3/?p=home/index) |

Survey context: the 2026 1 Finance survey reported 84.8% of respondents had no
will and 30.5% reported an inheritance-related dispute. These are survey
findings, not national administrative counts.
([Business Standard](https://www.business-standard.com/finance/personal-finance/india-s-biggest-wealth-planning-problem-nearly-85-dont-have-a-will-126060300578_1.html))

## What the product does

A living owner records what exists across money, property, documents and wishes.
Everything starts private. The owner then decides, per person and per record,
one of three tiers: **private**, **existence-only**, or **full detail**. A
separate branch prepares a read-only handover file for later.

## Phase 2 differentiator — the Consent Fork

Most systems treat sharing as one irreversible decision. On Record separates
three moments that are usually collapsed into one:

1. **The owner's private living record** — nothing leaves it because someone was invited.
2. **What each person can see now** — chosen per person, per record, and revisable.
3. **What may be handed over later** — a separate read-only projection, never the account.

Four properties make that more than a UI:

- **Nominee status is an asset-level fact.** RBI explains a nominee may receive
  funds as trustee for the legal heirs, and sets 15 days to settle an eligible
  claim once proof of death and identification are given. On Record records the
  nomination and points at the institution that decides — it never treats a
  nominee as the owner. ([RBI](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=9862))
- **A visibility downgrade is enforced, not announced.** The pending change
  carries a real deadline; Apply stays disabled until it passes; the demo
  advances an explicit simulated clock that the Consent Log discloses.
- **Concerns are attributable.** A concern can only be raised from a member's own
  read-only view, about a record they can currently see, in words that member
  wrote. The owner cannot manufacture one on their behalf.
- **The handover file is actionable.** Each selected fact carries the authority
  and, where a vetted official link exists, a direct link to the process.

## Privacy model, and its honest boundary

Account references, document locations and nominee names are released only to the
owner or to a person granted full detail. Everyone else sees a mask plus a
**one-way SHA-256 fingerprint** — enough for two people to confirm they mean the
same record without either revealing it. The hash is verified against the NIST
vectors and `node:crypto` (`scripts/sha-check.mjs`).

**This is disclosure control, not secrecy.** The prototype has no backend and no
authentication, so the synthetic seed data ships inside the bundle. Real
confidentiality requires server-side storage, encryption and an authenticated
session. The architecture keeps that boundary explicit rather than implying a
guarantee it cannot make.

## What is real, and what is mocked

**Real:** the full frontend journey, bilingual UI, the private-first visibility
state machine, per-member perspectives, the Consent Log, the enforced cooling-off
with its simulated clock, tier-based field disclosure with fingerprints,
institution next-step links, the handover preview, and a resettable simulation.

**Mocked:** identity, authentication, invitation delivery, the death trigger,
institution APIs, document verification, legal entitlement, and any external
release. No login, no live data, no government system is contacted.

## What it explicitly does not do

Make a will. Decide ownership. Replace a court, a bank, or any authority.

## Judge path (about four minutes)

1. Open `/` — note the private-first promise and the five-action rail. Press **Play all**.
2. **Records** — seven synthetic records, all private. Add one; choose visibility *before* saving.
3. **People** — switch members, change one access tier *downward*. Note that Apply
   is disabled with time remaining, and that the owner has no way to raise a
   concern for someone else.
4. **Handover** — change the recipient, add the bank record, and read the
   "Where to start" block.
5. Open the recipient link for **Arjun** (`#/preview/demo-arjun-4k9`) — the
   provident-fund reference is masked to `••••••••208` with a fingerprint, while
   the life-cover policy he was granted in full is readable.
6. Raise a concern there. It requires your own words, and it cannot be sent empty.
7. Toggle **हिं** and back. Use the evidence rows to inspect every source.

## Tech

React 19 + Vite 8, no backend, no AI calls, no third-party analytics. Static
deploy. Hash routing so every route resolves from `index.html`. Dependencies are
pinned so the deployed bundle is reproducible — the production build is verified
byte-identical to the local one by content hash on every deploy.

The demo film is rendered programmatically rather than screen-recorded: narration
is synthesised per sentence and measured, those durations become the timeline, and
Playwright screenshots a deterministic `seek(t)` scene graph frame by frame. See
`scripts/video/README.md`.
