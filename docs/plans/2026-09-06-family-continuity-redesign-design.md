# On Record — Family Continuity Redesign

**Date:** 2026-09-06  
**Status:** Approved design direction  
**Scope:** Phase 2 submission redesign

## Product intent

On Record is a privacy-first family continuity record for a living owner. It helps a person record financial assets, property, important documents, nominee details, contacts, and wishes; decide what each person may see; preserve a trace of every consent decision; and prepare a scoped, read-only handover for a future situation.

The product reduces avoidable uncertainty and administrative friction. It does not decide inheritance, validate title, make a will, guarantee settlement, or replace a court, institution, lawyer, or government service.

## Evidence model

The product may use carefully attributed contextual evidence:

- 84.8% of respondents in a 2026 1 Finance survey reported having no will; 62.5% reported no plans to make one; 30.5% reported an inheritance dispute. These are survey findings, not population-wide administrative counts.
- The RBI Household Finance Committee finding that about 84% of average household wealth was held in real estate and other physical assets is a wealth-composition statistic, not a property-dispute statistic.
- The Daksh litigant survey found 66.2% of surveyed civil matters were land/property-related. This must not be presented as a census of every civil case.
- CPR reports approximately 20 years for a land-acquisition dispute from origin to Supreme Court resolution. This must not be presented as the average duration of every family property dispute.
- NJDG figures are live and changing; the interface must show the retrieval date and link to NJDG rather than hard-code an unqualified permanent number.
- RBI guidance says eligible deceased-depositor claims should be settled within 15 days after required proof of death and satisfactory identification. The product must include that qualification.

No claim may say that 84% of family wealth is disputed property, that every property dispute takes 15–20 years, or that On Record itself reduces court cases. The defensible causal claim is that better records, deliberate consent, and clearer handover context can reduce avoidable ambiguity and repeated administrative work.

## Domain architecture

### Roles

- **Owner:** controls the case while alive, records facts, sets visibility, manages members, prepares handover, and sees the complete audit log.
- **Family member:** receives deliberately shared records, acknowledges them, requests access, and raises concerns. They never receive access merely by invitation.
- **Institution nominee:** the nominee currently recorded with an institution for a specific asset. This is an asset field, not an automatic On Record account role.
- **Handover recipient:** an app-level, read-only release contact who may receive a selected handover bundle later. This can be the institution nominee but does not have to be.
- **Future verifier:** a production-scale role for verified death or legal-authority triggers. The submission simulates this trigger and never claims to verify death.

### Record types

Records are grouped into four user-facing categories:

- **Money:** bank, insurance, shares/demat, mutual fund, provident fund.
- **Property:** land, home, tenancy, title or mutation-related documents.
- **Documents:** identity/supporting documents, certificates, folios, policies, and locations.
- **Wishes:** factual owner-authored notes about important contacts, care preferences, document locations, and what to find first. This is not a will and does not allocate property.

### Per-record signals

The app keeps independent signals so no single badge becomes a legal verdict:

- **Record:** Recorded / Incomplete.
- **Nominee:** Current / Missing / Needs review / Minor nominee / Not applicable.
- **Concern:** No concern / Concern raised.
- **Visibility:** Private / Existence-only / Full detail.
- **Handover:** Not selected / Selected / Needs review.

For many financial assets, the product explains that a nominee helps an institution release or transfer an asset after death, while final entitlement may depend on a valid will and applicable succession law. The app records what is listed and does not decide ownership. Asset-specific procedures remain institution-dependent.

## Consent and privacy architecture

### Defaults

- Every record is private by default.
- The owner must select visibility before saving or sharing a record.
- An invitation reveals no records.
- An accepted invitation opens an empty family workspace.
- Existence-only is available only after the owner explicitly includes a record in a reviewed share set.
- Full detail is an additional explicit grant.

### Audit log

The log is append-only in the domain model. Events include record creation, edits, nominee updates, invitations, grants, upgrades, downgrade requests, cooling-off state changes, acknowledgements, requests, concerns, handover selection, release preview, and resettable demo events.

The owner sees the full log. A family member sees only events involving that member. Private records never leak through event labels, counts, or timestamps.

### Downgrade safety

A visibility downgrade enters a simulated seven-day cooling-off state:

1. The owner sees the exact access being removed.
2. The owner confirms the downgrade.
3. The pending change is logged immediately.
4. The affected member receives only a neutral pending-change notice.
5. The owner may cancel during the simulated period.
6. The owner may apply the change after the simulated period.

This is a product safety mechanism, not a claim of legal protection.

## Handover architecture

Living Mode remains the source of truth. Handover is a separate read-only projection.

- **Preview handover:** assembles a selected bundle without changing live visibility.
- **Simulate release:** opens a reversible simulated Handover Mode for the demo.
- **Recipient preview:** opens through a non-sensitive synthetic token and shows only the selected bundle.
- **Reset:** returns to Living Mode and restores the seeded demo state.

The bundle can contain selected records, document locations, nominee details, key contacts, first actions, and authority destinations. It cannot change records, reveal private items, or imply that the recipient is an heir or legal decision-maker.

## Frontend architecture

The redesign uses a React/Vite-style component architecture with an explicit domain state layer and repository boundary. A backend adapter may later use Supabase, but the submission remains instantly demoable with seeded synthetic state and no authentication.

Primary routes/surfaces:

- `/` — calm entry and evidence context.
- `/demo` — guided/play-all continuous demo using the same state machine as the product.
- `/records` — owner record workspace.
- `/family` — members, reviewed share sets, and perspective preview.
- `/handover` — recipient selection and read-only handover preview.
- `/preview/:token` — synthetic, read-only recipient view.

Core components:

- `AppShell`
- `ProgressRail`
- `RecordList`
- `RecordRow`
- `RecordEditor`
- `NomineeStatus`
- `VisibilityPicker`
- `ConsentLog`
- `FamilyMemberList`
- `PerspectivePreview`
- `ConcernPanel`
- `HandoverBuilder`
- `HandoverPreview`
- `DemoController`
- `EvidencePanel`

The component layer must not contain legal logic or duplicate domain rules. Rules live in pure functions and are tested independently.

## Visual architecture

The approved visual language is a calm, rounded, low-cost “glass-lite” utility:

- light neutral base;
- deep readable text;
- one active accent;
- restrained semantic colors for status;
- rounded surfaces with subtle borders and low-cost shadows;
- translucent overlays only for focused panels;
- no large blur stacks or video backgrounds;
- no dense card wall or permanent multi-column dashboard;
- mobile-first, one dominant action per view;
- progressive disclosure for evidence, legal context, and audit details.

Typography is a highly legible sans-serif pairing with a Devanagari companion, generous line-height, and mono only for synthetic references and timestamps. The design must work at 360px width, with 44px minimum targets, visible focus, and no horizontal scrolling.

Motion is explanatory: records enter lists, visibility grants travel into the log, previews update, cooling-off state progresses, and handover bundles assemble. Animations use transforms and opacity where possible, are interruptible, and have reduced-motion fallbacks.

## Continuous demo

One fictional owner and three family members use a larger synthetic record set across money, property, documents, and wishes.

Guided mode provides Next, Back, Pause, Replay, and Reset. Play-all mode advances through the same real state transitions. The demo sequence is:

1. Create a private record.
2. Show nominee status and an incomplete record.
3. Review and publish an existence-only set.
4. Grant full detail to one member for one record.
5. Show the audit event.
6. Open a read-only recipient preview through a synthetic token.
7. Raise a private concern and visible neutral concern status.
8. Request a visibility downgrade and show the cooling-off state.
9. Build a scoped handover bundle.
10. Simulate release, inspect the read-only result, and reset.

The demo must be understandable with sound off and must not depend on narration to explain the permissions.

## Safety and honesty

- Synthetic data only.
- No real credentials, OTPs, Aadhaar, PAN, account numbers, or sensitive documents.
- No live government API calls in the submission.
- Government and institutional links are destinations only.
- No government logo or implied endorsement.
- No legal ownership, inheritance-share, eligibility, guarantee, or title-verification claims.
- All fact cards show source, date/context, and confidence where needed.

