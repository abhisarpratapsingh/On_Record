# Plan: On Record Family Continuity Redesign

**Generated:** 2026-09-06  
**Estimated Complexity:** High

## Overview

Rebuild the current static prototype into a calm, mobile-first family continuity product with a real consent architecture and a continuous guided/play-all demo. The redesign will use React/Vite-style components, an explicit domain state model, backend-ready repository boundaries, synthetic token previews, and lightweight motion optimized for low-end devices.

The highest-value submission feature is the privacy proof: an owner creates a private record, deliberately shares different visibility levels, previews each family member’s view, sees every change in an append-only log, and prepares a scoped read-only handover without changing Living Mode.

## Prerequisites

- Preserve the current repository and existing submission materials until the new journey is verified.
- Use only synthetic records and fictional family members.
- Confirm the final fact sources and wording before publishing copy.
- Decide whether Supabase is configured for a later adapter; the local demo must not depend on it.

## Sprint 1: Clean foundation and domain model

**Goal:** Replace residue-prone route logic with a maintainable component/state foundation.

**Demo/Validation:** The app loads on mobile and desktop, the seeded case opens, and each new route renders without console errors.

### Task 1.1: Inventory and isolate existing behavior

- **Location:** `app.js`, `index.html`, `styles.css`, `platform.css`, `functional.css`, `motion.css`, `data/fixtures.js`
- **Description:** Map existing routes, strings, fixtures, legal copy, and interactions. Identify code to preserve, rewrite, or remove. Keep a rollback copy through git history rather than duplicating dead files.
- **Dependencies:** None.
- **Acceptance Criteria:** A route/component inventory exists in the design notes; no current user journey is silently removed without a replacement.
- **Validation:** `node --check app.js`; manual route sweep.

### Task 1.2: Add React/Vite application shell

- **Location:** `package.json`, `index.html`, `src/main.*`, `src/App.*`
- **Description:** Introduce the new frontend entry point and preserve static deployment compatibility.
- **Dependencies:** Task 1.1.
- **Acceptance Criteria:** A production build runs; the app opens at `/`; no live API or authentication is required.
- **Validation:** `npm run build`; open the built output with a local static server.

### Task 1.3: Define domain types and pure rules

- **Location:** `src/domain/types.*`, `src/domain/rules.*`, `src/domain/fixtures.*`
- **Description:** Define Owner, Member, Record, NomineeStatus, VisibilityGrant, ConsentEvent, Concern, HandoverBundle, and DemoState. Implement pure nominee, completeness, visibility, and cooling-off rules.
- **Dependencies:** Task 1.1.
- **Acceptance Criteria:** Rules have no DOM dependencies; each record has independent record, nominee, concern, visibility, and handover signals.
- **Validation:** Unit tests for all rule branches.

### Task 1.4: Create seeded case with three family members

- **Location:** `src/domain/fixtures.*`
- **Description:** Create one owner and a realistic synthetic dataset across money, property, documents, and wishes. Include current, missing, stale, minor, and not-applicable nominee examples.
- **Dependencies:** Task 1.3.
- **Acceptance Criteria:** The demo has enough records to show filtering, privacy boundaries, nominee states, and handover selection without overwhelming the first screen.
- **Validation:** Fixture integrity test and manual content review.

## Sprint 2: Calm owner workspace

**Goal:** Make recording and reviewing information simple for low-literacy and mobile users.

**Demo/Validation:** A first-time user can add a record, see nominee status, choose visibility, and understand the next action without opening a dense settings screen.

### Task 2.1: Build responsive AppShell and navigation

- **Location:** `src/components/AppShell.*`, `src/styles/tokens.*`, `src/styles/layout.*`
- **Description:** Build compact primary navigation for Home, Records, Family, and Handover with responsive mobile behavior.
- **Dependencies:** Sprint 1.
- **Acceptance Criteria:** No permanent multi-column service rail; no horizontal scroll at 360px; keyboard focus is visible.
- **Validation:** Responsive browser test at 360px, 768px, and desktop widths.

### Task 2.2: Build owner home and evidence context

- **Location:** `src/routes/Home.*`, `src/components/EvidencePanel.*`, `src/content/facts.*`
- **Description:** Add one primary action, record summary, family summary, handover readiness, and expandable evidence panel with source/date context.
- **Dependencies:** Tasks 1.3, 1.4, 2.1.
- **Acceptance Criteria:** Evidence never competes with the primary action; unsupported claims are absent; live NJDG figures display retrieval context if used.
- **Validation:** Copy audit against the evidence table in the design document.

### Task 2.3: Build record list and progressive disclosure

- **Location:** `src/routes/Records.*`, `src/components/RecordList.*`, `src/components/RecordRow.*`
- **Description:** Replace boxy cards with readable rows and expandable detail panels.
- **Dependencies:** Task 2.1.
- **Acceptance Criteria:** Each row answers what exists, whether it is complete, who can see it, and what happens next.
- **Validation:** Five-second comprehension test with seeded records.

### Task 2.4: Build record editor and nominee status

- **Location:** `src/components/RecordEditor.*`, `src/components/NomineeStatus.*`
- **Description:** Add category-specific fields, document location, factual notes, nominee name/relation/status, review date, minor flag, and institution process note.
- **Dependencies:** Tasks 1.3, 2.3.
- **Acceptance Criteria:** Visibility must be selected before save; property records do not imply a bank-style nominee; nominee copy clearly separates nomination from ownership.
- **Validation:** Form keyboard test, validation test, and nominee-rule unit tests.

## Sprint 3: Consent architecture

**Goal:** Make privacy and consent visible, explicit, and testable.

**Demo/Validation:** The owner invites three members, publishes a reviewed existence-only set, grants full detail selectively, and sees all changes in the log.

### Task 3.1: Add repository/state adapter boundary

- **Location:** `src/data/repository.*`, `src/state/CaseProvider.*`
- **Description:** Separate UI from local seeded state and expose backend-ready operations for records, members, grants, events, concerns, and handover.
- **Dependencies:** Sprint 1.
- **Acceptance Criteria:** The UI does not directly mutate fixture objects; a future Supabase adapter can replace the local adapter without changing components.
- **Validation:** State transition tests.

### Task 3.2: Build Family Access workspace

- **Location:** `src/routes/Family.*`, `src/components/FamilyMemberList.*`, `src/components/VisibilityPicker.*`
- **Description:** Add fictional members, neutral invitations, empty accepted workspaces, reviewed existence-only sets, and full-detail grants.
- **Dependencies:** Task 3.1.
- **Acceptance Criteria:** Invitation alone reveals no records; owner reviews the existence-only set before publishing; full detail requires an explicit action.
- **Validation:** Visibility matrix tests across owner and three members.

### Task 3.3: Build append-only Consent Log

- **Location:** `src/components/ConsentLog.*`, `src/domain/events.*`
- **Description:** Render owner-complete events and member-scoped events with no private-record leakage.
- **Dependencies:** Tasks 3.1, 3.2.
- **Acceptance Criteria:** Every state-changing consent operation emits exactly one appropriate event; event display is filtered by viewer.
- **Validation:** Event-count and leakage tests.

### Task 3.4: Build concern and request flows

- **Location:** `src/components/ConcernPanel.*`, `src/components/AccessRequest.*`
- **Description:** Let a member acknowledge, request access, privately explain a concern, and create a neutral visible concern status.
- **Dependencies:** Tasks 3.2, 3.3.
- **Acceptance Criteria:** The app never adjudicates; private notes remain scoped; visible state says only “Concern raised.”
- **Validation:** Member-view and owner-view walkthrough.

### Task 3.5: Build seven-day downgrade simulation

- **Location:** `src/domain/coolingOff.*`, `src/components/CoolingOffNotice.*`
- **Description:** Add explicit confirmation, pending downgrade, neutral member notice, cancel, apply, and event logging.
- **Dependencies:** Tasks 3.2, 3.3.
- **Acceptance Criteria:** A downgrade cannot silently take effect; reset restores the seeded state; copy does not imply legal protection.
- **Validation:** Fake-clock or deterministic simulated-time tests.

## Sprint 4: Handover and recipient previews

**Goal:** Solve post-death discoverability without giving anyone account access or edit power.

**Demo/Validation:** The owner selects a handover recipient, previews the bundle, opens a non-sensitive read-only token, and simulates release without changing Living Mode.

### Task 4.1: Build handover recipient model

- **Location:** `src/domain/handover.*`, `src/components/HandoverRecipient.*`
- **Description:** Distinguish institution nominee from app-level handover recipient and support a read-only release contact.
- **Dependencies:** Task 1.3.
- **Acceptance Criteria:** A nominee may be selected as recipient but is not automatically granted living-mode access.
- **Validation:** Role-separation tests.

### Task 4.2: Build Handover Builder and preview

- **Location:** `src/routes/Handover.*`, `src/components/HandoverBuilder.*`, `src/components/HandoverPreview.*`
- **Description:** Assemble selected records, contacts, nominee facts, document locations, first actions, and official destinations.
- **Dependencies:** Tasks 3.1, 4.1.
- **Acceptance Criteria:** Preview is read-only and does not mutate live visibility; private records cannot be selected accidentally.
- **Validation:** Bundle-diff test before/after preview.

### Task 4.3: Build synthetic token recipient route

- **Location:** `src/routes/RecipientPreview.*`, `src/data/tokens.*`
- **Description:** Create non-sensitive synthetic tokens that open a read-only recipient view.
- **Dependencies:** Task 4.2.
- **Acceptance Criteria:** Token view exposes only the selected bundle and clearly labels synthetic/read-only status; no sensitive data appears in the token.
- **Validation:** Token scope and direct-route tests.

### Task 4.4: Build reversible simulated release

- **Location:** `src/components/ReleaseSimulation.*`, `src/state/demoReducer.*`
- **Description:** Add Preview handover, Simulate release, Reset demo, and explicit simulated-release labels.
- **Dependencies:** Tasks 4.2, 4.3.
- **Acceptance Criteria:** Simulation changes only demo projection state; reset restores Living Mode exactly.
- **Validation:** State snapshot comparison.

## Sprint 5: Continuous guided/play-all demo

**Goal:** Make the product itself recordable as the submission video.

**Demo/Validation:** Play-all completes the full story smoothly; guided mode allows pausing, backtracking, replaying, and resetting.

### Task 5.1: Build shared demo state machine

- **Location:** `src/demo/steps.*`, `src/demo/demoReducer.*`
- **Description:** Define the ten-step demo sequence using the same domain operations as the actual product.
- **Dependencies:** Sprints 2–4.
- **Acceptance Criteria:** Demo cannot show a visual state that the product’s domain state could not produce.
- **Validation:** Step transition tests.

### Task 5.2: Build guided controls

- **Location:** `src/routes/Demo.*`, `src/components/DemoController.*`
- **Description:** Add Next, Back, Pause, Replay, Reset, progress, and optional explanation toggles.
- **Dependencies:** Task 5.1.
- **Acceptance Criteria:** Controls are clear on mobile; users can exit the demo at any step; no forced narration.
- **Validation:** Keyboard and mobile interaction test.

### Task 5.3: Build play-all choreography

- **Location:** `src/demo/timeline.*`, `src/styles/motion.*`
- **Description:** Add interruptible transform/opacity transitions for record creation, sharing, log entry, perspective change, concern, cooling-off, and handover.
- **Dependencies:** Task 5.2.
- **Acceptance Criteria:** Play-all is smooth on a low-end-device profile; pause stops pending transitions; reduced-motion mode is immediate but legible.
- **Validation:** Performance trace, reduced-motion test, and recorded screen walkthrough.

### Task 5.4: Add restrained family-visibility visualization

- **Location:** `src/components/VisibilityMap.*`
- **Description:** Add an optional, accessible visualization showing owner, three members, and record visibility without replacing the list view.
- **Dependencies:** Task 3.2.
- **Acceptance Criteria:** The visualization is supplemental, keyboard-accessible, and never the only way to understand permissions.
- **Validation:** Screen-reader and mobile test.

## Sprint 6: Hardening and submission readiness

**Goal:** Verify the complete journey and prepare the live submission.

**Demo/Validation:** A cold reviewer can use the site without login, complete the journey, and understand what is real versus simulated.

### Task 6.1: Accessibility and low-end performance pass

- **Location:** all frontend files
- **Description:** Verify contrast, focus, target sizes, text resizing, reduced motion, network-light behavior, and no horizontal overflow.
- **Dependencies:** Sprint 5.
- **Acceptance Criteria:** Mobile-first accessibility floor passes; no blocking animation; no unnecessary network requests.
- **Validation:** Lighthouse/manual keyboard/screen-reader checks and throttled network profile.

### Task 6.2: Legal and evidence copy audit

- **Location:** `src/content/*`, `docs/*`
- **Description:** Audit nominee wording, evidence attribution, disclaimers, no-will language, and authority routing.
- **Dependencies:** Sprint 5.
- **Acceptance Criteria:** No ownership, inheritance-share, eligibility, guarantee, or unsupported-statistic claims.
- **Validation:** Pattern scan plus human review against the evidence model.

### Task 6.3: End-to-end journey verification

- **Location:** automated browser tests and verification notes
- **Description:** Test owner, three member previews, access changes, concern flow, cooling-off, handover, token route, reset, and language behavior if bilingual support remains.
- **Dependencies:** Tasks 6.1, 6.2.
- **Acceptance Criteria:** Every feature intended for the video works from a cold load; no console errors or dead ends.
- **Validation:** Browser journey script and manual recording rehearsal.

### Task 6.4: Submission package

- **Location:** `docs/SUBMISSION-KIT.md`, `DEPLOY.md`, `codex/EVIDENCE-LOG.md`
- **Description:** Update the two-minute screen-recording route, summary, build explanation, mocked/real disclosure, and evidence log.
- **Dependencies:** Task 6.3.
- **Acceptance Criteria:** The recorded path fits two minutes, uses only working interactions, and includes the privacy differentiator.
- **Validation:** Timed rehearsal and public-link test.

## Testing strategy

- Pure unit tests for nominee, completeness, visibility, concern, cooling-off, and handover rules.
- State-transition tests for every consent event.
- Privacy leakage tests for owner/member/recipient views.
- Responsive tests at 360px, 768px, and desktop widths.
- Keyboard and reduced-motion tests.
- Low-end performance and throttled-network checks.
- Cold-load browser journey from owner record through recipient preview and reset.
- Evidence and legal-copy scan before every submission build.

## Potential risks and gotchas

- Confusing an institution nominee with an app handover recipient. Keep them separate in data and copy.
- Exposing private-record existence through counts, log text, or hidden labels. Filter all derived metadata.
- Presenting the RBI 15-day rule as a guarantee. Always include proof/identification conditions.
- Presenting survey or research figures as universal administrative facts. Preserve sample/context wording.
- Overusing glassmorphism. Use blur only as a low-cost accent; test on low-end devices.
- Letting the demo state diverge from product state. Both must use the same reducer/domain operations.
- Keeping old will-drafting and legacy routes alive. Remove them only after replacement routes are verified.
- Introducing Supabase before the local journey works. The adapter is a scale path, not a demo dependency.

## Rollback plan

Keep the current implementation available in git until the new app passes the full journey. If migration blocks deployment, retain the current static entry point and ship the redesigned journey behind a controlled route while fixing the build. Do not delete the old route or fixtures until the new route has passed the end-to-end verification checklist.

