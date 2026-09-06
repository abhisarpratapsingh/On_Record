# On Record: Phase 2 submission kit

## One-line pitch

On Record helps a living owner record family assets and wishes privately, choose exactly what each person can see, and prepare a read-only handover before a dispute begins.

## Product position

This is a family continuity and consent layer, not a will-maker, legal decision-maker, government replacement, or ownership registry. It records what the owner says exists, preserves the history of changes, and points future users toward the institution or authority that must handle the official process.

## Two-minute screen recording

### 0:00–0:30 — The problem

Open the homepage. Show the evidence cards and say: families often discover scattered records, unclear nominee status, and conflicting memories only after a death or property disagreement. The figures shown are sourced context, with their limitations visible.

### 0:30–1:15 — The working journey

Open **See how it works** and use **Play all**. The continuous demo shows private records, a family member seeing only existence, full detail for a selected record, a concern, a seven-day cooling-off period, a handover bundle, and a simulated read-only release. Use **Replay** or **Reset** at the end.

### 1:15–2:00 — The differentiator

Pause the demo and open **My records**, **Family access**, and **Handover**. Add or expand a synthetic record, choose visibility before saving, change the nominee status, switch to Ananya or Arjun, open the synthetic recipient link, raise a concern, then select a different handover recipient. Point out that the owner sees the Consent Log, recipients do not get account access, and nothing is released in Living Mode.

## Project summary

On Record is a private-first family continuity workspace for the moment before a family dispute and the handover after it. An owner records what exists across money, property, documents, and wishes; records start private; and every save, visibility change, nominee update, concern, handover selection, and release simulation leaves a Consent Log entry. Family members receive only the access the owner explicitly chooses: nothing, existence-only, or full detail. A visibility downgrade enters a simulated seven-day cooling-off period. A future nominee or handover recipient gets a separate read-only view, never the owner’s account.

The product does not make a will, decide ownership, or promise that a nominee is the final beneficiary. It records the current nomination status and explains that institution rules, valid instruments, and succession law still govern entitlement. It uses synthetic data, no login, no live government APIs, and no AI calls, so the journey is immediately reviewable from a static deployment. The architecture leaves a repository boundary for a later authenticated backend and authorised institution integrations.

## Judge path

1. Open `/` and notice the private-first promise, seeded family case, and sourced evidence.
2. Open **See how it works**, click **Play all**, and let the 10-step story reach simulated release.
3. Click **Reset**, then inspect **My records** and expand the bank account to see the missing-nominee state.
4. Open **Family access**, switch between the three synthetic family members, and change one visibility tier.
5. Open the recipient link. Confirm existence-only records reveal no sensitive detail and that a recipient can raise a concern without editing.
6. Open **Handover**, change the recipient, adjust the read-only bundle, simulate release, then reset.
7. Toggle Hindi and return to English. Use the source cards to inspect the research basis.

## Recording checklist

- Use a clean browser at 100% zoom and record 1280×720 or 1920×1080.
- Use only the seeded synthetic family. Do not enter real names, IDs, account numbers, OTPs, or documents.
- Keep the cursor visible and pause after each important state change.
- Show **Reset demo** near the end so the simulation is visibly reversible.
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

Real: the frontend journey, bilingual core UI, visibility state machine, recipient perspectives, audit events, cooling-off interaction, handover preview, resettable simulation, and source links.

Mocked: identity, authentication, invitation delivery, death trigger, institution APIs, document verification, legal entitlement, and any external release. The shipped build is deliberately safe for a public demo and keeps the future integration point explicit.
