# On Record — Connected Case Flow Design

**Date:** 2026-09-06  
**Status:** Approved for implementation
**Scope:** Phase 2 frontend and screen-recordable product demo

## Product intent

On Record is a private-first family continuity record for a living owner. It helps a person record what exists across money, property, documents, and wishes; make deliberate visibility decisions; preserve a trace of every material change; and prepare a scoped, read-only handover for a later authorised situation.

It does not make a will, decide ownership, validate title, guarantee settlement, verify death, or replace a court, institution, lawyer, or government service.

## Core design decision

The product and the demo are one connected case flow. There is no separate animated explainer and no dashboard-first landing screen. A single synthetic case remains visible while each completed action activates the next action box:

```text
[01 Record privately] → [02 Choose visibility] → [03 See the member view]
                                      ↓
                         [04 Fork a handover bundle] → [05 Read-only release]
```

Each box shows four things: what the owner is doing, the exact record or person involved, the immediate result, and the next available action. Completed boxes remain visible as proof. Future boxes are present but muted. The Consent Log is a persistent activity rail that records the state transition without becoming a second dashboard.

The flow is inspired by the reference site's section discipline and data-driven live previews, not by its brand assets or palette. The supplied workflow image is used only as a spatial reference for connected boxes.

## Narrative surfaces

### Entry narrative

The page opens with one problem statement, one sentence explaining the service, and one primary action to start the case. A quiet evidence strip supports credibility below the start action, without competing with the journey.

### Connected case rail

The main experience is a full-width, responsive rail of five action cards. Desktop uses a horizontal sequence with connector lines. Mobile uses a vertical sequence or a horizontal snap rail when the viewport is narrow. Each card has a stable number, short title, status, one focal object, and one primary action.

### Perspective surface

The family-view step uses a person switcher for Ananya, Arjun, and Rhea. Selecting a person updates the same preview surface to show exactly what that person can see. It does not navigate away or expose the owner's full record list.

### Handover fork

The handover step visibly branches from Living Mode. It allows the owner to select records and a recipient, then creates a read-only projection. The branch is labelled as a preview and never mutates live visibility.

### Activity rail

The Consent Log is always scoped to the active case. Owner view sees all events. A recipient view sees only events concerning that recipient. The activity rail updates immediately after each action and uses neutral language for concerns and pending changes.

## Action-card state machine

The domain state has one source of truth:

- `case`: owner, synthetic case id, language, and current mode.
- `records`: factual records with category, location, completeness, nominee status, and private-by-default visibility.
- `members`: three synthetic family members with separate non-sensitive preview tokens.
- `grants`: per-member record visibility of `none`, `existence`, or `full`.
- `concerns`: private member note plus neutral owner/member status.
- `coolingOff`: pending seven-day visibility downgrades with cancel/apply controls.
- `handover`: recipient, selected record ids, preview status, and simulated release status.
- `events`: append-only Consent Log entries.

The five cards expose deterministic commands:

1. `createRecord(record)` creates an owner-private record and logs creation.
2. `setVisibility(member, record, tier)` records an explicit access decision.
3. `openPerspective(member)` changes only the viewing lens.
4. `raiseConcern(member, record)` stores the private explanation and neutral flag.
5. `requestDowngrade`, `cancelDowngrade`, and `applyDowngrade` manage the simulated cooling-off state.
6. `selectHandoverRecord(record)` and `setHandoverRecipient(member)` update the separate handover projection and log both changes.
7. `simulateRelease()` opens read-only handover mode; `resetDemo()` returns to seeded Living Mode.

The guided demo invokes these same commands. A demo step must never display a visual state that the real controls cannot produce.

## Record and nominee model

Records use four user-facing categories: Money, Property, Documents, and Wishes. Each record independently displays:

- Recorded or incomplete
- Nominee current, missing, needs review, minor nominee, or not applicable
- Private, existence-only, or full-detail visibility
- Selected or not selected for handover
- Concern raised or no concern

The interface states that for many financial assets a nominee helps an institution release or transfer an asset after death, while final entitlement may depend on a valid instrument and applicable succession law. On Record records what is listed and does not decide ownership.

## Privacy and access architecture

- All records begin owner-only.
- Saving a new record requires a visibility choice before the action completes.
- An invitation or synthetic token does not reveal records by itself.
- Existence-only sharing is explicit and selected per person.
- Full detail is a separate, stronger grant.
- Recipients cannot edit, release, or view the complete Consent Log.
- Handover is a separate read-only projection, not account access.
- Visibility downgrades begin a simulated seven-day cooling-off period and are immediately logged.
- Reset is visually obvious and restores the seeded synthetic case.

## Visual direction

The visual system follows the reference site's discipline: editorial pacing, high contrast, confident grotesk display type, restrained monospace metadata, thin dividers, large whitespace, and alternating dark/light sections. It does not copy the reference site's identity.

The On Record palette is deliberately distinct:

- Ink black for primary narrative sections
- Warm bone for light sections
- Muted indigo/ultramarine for progress and action
- Blue-grey for secondary surfaces
- Terracotta for warnings and concerns
- Red only for destructive/error states
- No green anywhere in the new visual system

Surfaces are dark or bone-toned with subtle opacity, not generic gradient glass cards. Radius is restrained. Visual hierarchy comes from spacing, scale, dividers, and active-state contrast rather than card quantity.

## Motion direction

Motion explains the case flow:

- Hero lines enter in a short stagger.
- Action cards reveal as the user reaches them.
- Connector lines and status marks progress from one card to the next.
- A visibility choice travels into the next preview and the Consent Log.
- Recipient preview content changes in place.
- Handover records assemble into a paper-like read-only projection.
- Chat-like micro-previews, where useful, use a short typing-to-result sequence.

Motion uses transforms and opacity, has reduced-motion fallbacks, avoids layout thrashing, and never hides required content behind animation. Smooth scrolling is optional and must not be required for comprehension.

## Responsive and accessibility requirements

- One primary action per active card.
- Minimum 44px touch targets.
- Keyboard focus and visible labels for all controls.
- Sound-off comprehension: every step has readable text and status.
- 360px minimum width with no horizontal overflow.
- Hindi core journey remains understandable and does not rely on untranslated labels for safety states.
- Low-end performance: no video backgrounds, no canvas-heavy effects, no large blur stacks, no network dependency for the demo.

## Demo script

The screen-recordable route starts in the same connected rail and progresses through:

1. Meera records the family home privately.
2. The owner chooses existence-only visibility for Ananya.
3. The next box becomes Ananya's exact read-only perspective.
4. Ananya raises a concern; the owner sees a neutral status and the log records it.
5. The owner previews a handover fork, selects facts, and chooses a recipient.
6. The release step opens a synthetic read-only result.
7. The owner resets to Living Mode.

The viewer should understand the complete product without narration. A secondary “inspect the real system” action may open the detailed record, consent, or handover surfaces after the main story is complete.

## Non-goals

- No real authentication or identity verification in this submission.
- No death verification or automated release trigger.
- No government or institution API calls.
- No legal-document drafting or will preparation.
- No ownership, inheritance-share, eligibility, title, or dispute-outcome prediction.
- No persistent personal data storage in the static demo.
