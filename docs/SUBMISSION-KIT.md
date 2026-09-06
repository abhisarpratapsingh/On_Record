# On Record: Phase 2 submission kit

## One-line pitch

On Record helps a living owner record family facts privately, choose exactly what each person can see, and prepare a read-only handover before a dispute begins.

## Product position

This is a family continuity and consent layer, not a will-maker, legal decision-maker, government replacement, or ownership registry. It records what the owner says exists, preserves the history of changes, and points future users toward the institution or authority that must handle the official process.

## Two-minute screen recording

### 0:00–0:30 — The problem

Open the homepage. Show the four problem signals and say: families often discover scattered records, unclear nominee status, and conflicting memories only after a death or property disagreement. On Record starts while the owner is alive, when facts and consent can still be reviewed.

### 0:30–1:15 — The working journey

Click **Start the case** and use **Play all**. The connected rail moves through five visible actions: record privately, choose visibility, see the member view, fork a handover, and simulate a read-only release. Pause on the member view to show that Ananya sees existence-only records while sensitive details remain hidden. Use **Reset case** to make the reversibility obvious.

### 1:15–2:00 — The differentiator

Replay manually. Change the consent tier, switch between Ananya, Arjun, and Kavya, raise a private concern, select a handover recipient, remove one fact from the bundle, then open the synthetic recipient link. Point out the Consent Log, the seven-day cooling-off concept on the detailed access view, nominee status as an asset-level field, and the separate read-only recipient view. Nothing releases an owner account and nothing decides legal entitlement.

## Project summary

On Record is a private-first family continuity workspace for the moment before a family dispute and the handover after it. A living owner records what exists across money, property, documents, and wishes; records start private; and every save, visibility change, nominee update, concern, handover selection, and release simulation leaves a Consent Log entry. Family members receive only the access the owner explicitly chooses: nothing, existence-only, or full detail. A visibility downgrade enters a simulated seven-day cooling-off period. A future nominee or handover recipient gets a separate read-only view, never the owner’s account.

The product does not make a will, decide ownership, or promise that a nominee is the final beneficiary. It records nomination status and explains that institution rules, valid instruments, and succession law still govern entitlement. It uses synthetic data, no login, no live government APIs, and no AI calls, so the journey is immediately reviewable from a static deployment. The architecture leaves a clear boundary for a later authenticated backend and authorised institution integrations.

## Judge path

1. Open `/` and notice the private-first promise, seeded family case, and connected five-action rail.
2. Click **Start the case**, then **Play all**. Let the state reach simulated release.
3. Click **Reset case**, open **Records**, and add a synthetic record. Choose visibility before saving it.
4. Open **People**, switch among the three family members, and change one access tier. Review the member-scoped Consent Log.
5. Open **Handover**, change the recipient and selected facts, then open the synthetic recipient link.
6. Raise a concern from the recipient view. Confirm that the recipient can flag an issue but cannot edit the owner record.
7. Toggle Hindi and return to English. Use the source rows to inspect the research basis.

## Recording checklist

- Use a clean browser at 100% zoom and record 1280×720 or 1920×1080.
- Use only the seeded synthetic family. Do not enter real names, IDs, account numbers, OTPs, or documents.
- Keep the cursor visible and pause after each important state change.
- Show **Reset case** near the end so the simulation is visibly reversible.
- If deploying to GitHub Pages, publish the `dist/` folder and use the hash routes described in `DEPLOY.md`.

## Evidence basis

- [Build What Moves India brief](https://buildwhatmovesindia.com/brief) and [FAQ](https://buildwhatmovesindia.com/faq): submission and judging context.
- [Reserve Bank of India deceased-depositor guidance](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=9862): nominee payment may be made as trustee for legal heirs, and eligible claims should be settled within 15 days after required proof and identification.
- [RBI public nominee explainer](https://rbikehtahai.rbi.org.in/nomination-and-settlement-sms.html): nominee and succession framing.
- [EPFO claim forms](https://www.epfindia.gov.in/site_en/WhichClaimForm.php/index.php) and [SEBI transmission FAQ](https://www.sebi.gov.in/sebi_data/faqfiles/jan-2026/1767611333081.pdf): institution-specific process boundaries.
- [CPR land-conflict research](https://cprindia.org/understanding-land-conflict-in-india-and-suggestions/) and [NITI Aayog](https://www.niti.gov.in/node/296): land-dispute context and limitations.
- [NJDG](https://njdg.ecourts.gov.in/njdg_v3/?p=home%2Findex): live pending-case context; figures change over time.
- [1 Finance survey reporting](https://www.business-standard.com/amp/finance/personal-finance/india-biggest-wealth-planning-problem-nearly-85-dont-have-a-will-126060300578_1.html): survey findings on planning and inheritance disputes, not universal population counts.

## What is real and what is mocked

Real: the frontend journey, bilingual core UI, private-first visibility state machine, recipient perspectives, audit events, an enforced seven-day cooling-off with an explicit simulated clock, tier-based field disclosure with SHA-256 fingerprints, institution next-step links on the handover file, handover preview, resettable simulation, and source links.

Concerns are attributable: they can only be raised from a member's own read-only view, about a record they can currently see, and only with words that member wrote. The owner cannot create one on their behalf.

Field disclosure is a UI control, not secrecy. Account references, document locations and nominee names are released only to the owner or to a person granted full detail; everyone else sees a mask plus a one-way fingerprint that confirms two people mean the same record without revealing it. Because the prototype has no backend or authentication, the synthetic seed data still ships in the bundle. Real confidentiality requires server-side storage, encryption, and an authenticated session.

Mocked: identity, authentication, invitation delivery, death trigger, institution APIs, document verification, legal entitlement, and any external release. The shipped build is deliberately safe for a public demo and keeps the future integration point explicit.
