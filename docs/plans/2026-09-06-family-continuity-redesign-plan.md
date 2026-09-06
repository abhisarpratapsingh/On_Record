# Plan: On Record Connected Case Flow

**Generated:** 2026-09-06  
**Estimated complexity:** High
**Implementation mode:** React/Vite static prototype, synthetic state only

## Overview

Replace the current dashboard-style prototype with one screen-recordable, Veritus-inspired long-form case narrative. The centrepiece is a connected action rail in which the owner completes one action, the next card becomes active, and every result is carried forward into the next preview and the Consent Log.

The redesign preserves the product boundary: private-first records, explicit per-member visibility, nominee status without ownership claims, read-only handover, simulated release, and reset. Supabase, SQLite, auth, live APIs, and persistent personal data remain out of scope for this submission.

## Prerequisites

- Existing React/Vite project in `C:\Users\ASUS\OneDrive\Documents\ChatGPT\On Record`.
- Existing seeded synthetic data and domain event helpers may be reused only after they fit the new case model.
- Reference visual constraints documented in `docs/plans/2026-09-06-family-continuity-redesign-design.md`.
- No external runtime dependency is required for the first implementation pass. Prefer platform CSS, native scrolling, and lightweight observers; add an animation library only if a measured interaction cannot be implemented cleanly without it.

## Sprint 1: Rebuild the case narrative shell

**Goal:** Make the entry route one coherent long-form case story with the connected action rail as the primary product surface.

### Task 1.1: Replace route-first entry architecture

- **Location:** `src/App.jsx`, `src/main.jsx`
- **Description:** Make the primary route render the case narrative. Keep detailed owner/family/handover views as secondary inspection surfaces reachable after or from the rail, not as competing entry points.
- **Dependencies:** None.
- **Acceptance criteria:** Fresh load starts with one case id, one owner, one primary CTA, and a visible five-stage flow. No abstract orbit or dashboard strip remains.
- **Validation:** Load `/` at desktop and 360px widths; verify the primary story is understandable without opening another route.

### Task 1.2: Create the connected action-card component

- **Location:** `src/App.jsx` or new `src/components/CaseFlow.jsx`
- **Description:** Render five numbered cards with connector lines, active/completed/locked states, one focal record/person, one action, and a result summary. Keep the DOM content-first so the flow remains usable without animation.
- **Dependencies:** Task 1.1.
- **Acceptance criteria:** Cards are visually connected on desktop, readable as a sequence on mobile, and completed cards preserve their result.
- **Validation:** Render seeded state; verify the cards have no horizontal overflow and maintain order after resize.

### Task 1.3: Add a single case state model

- **Location:** `src/data.js`, `src/domain.js`
- **Description:** Consolidate case, active step, spotlight record, selected member, grants, concerns, cooling-off, handover, and events into one deterministic state shape. Add pure transition helpers for each action.
- **Dependencies:** Task 1.2.
- **Acceptance criteria:** The rail, preview, and Consent Log read from the same state. No demo-only visual state can diverge from the actual domain state.
- **Validation:** Exercise each transition with seeded data and inspect resulting state objects.

### Sprint 1 demo/validation

- The homepage shows the five connected cards.
- The first card can be completed without navigation.
- The next card becomes active and visibly contains the previous result.
- Existing detailed routes still open as secondary inspection views.

## Sprint 2: Build the live action sequence

**Goal:** Make the first three cards demonstrate the owner action, consent decision, and exact family perspective in place.

### Task 2.1: Implement private record action

- **Location:** `src/App.jsx`, `src/components/CaseFlow.jsx`, `src/data.js`
- **Description:** Create a focused synthetic record action for the family home. Require title/location/institution and an explicit visibility choice before completion. Show the record as private by default.
- **Dependencies:** Sprint 1.
- **Acceptance criteria:** Completing the action creates the record, displays Recorded/Incomplete and nominee status independently, and appends a Consent Log event.
- **Validation:** Test valid, incomplete, cancel, and reset states.

### Task 2.2: Implement consent decision card

- **Location:** `src/App.jsx`, `src/domain.js`
- **Description:** Add a compact three-tier selector for Ananya: Private, Existence-only, Full detail. Start with Private and require an explicit owner action to grant access.
- **Dependencies:** Task 2.1.
- **Acceptance criteria:** Only the selected member and record change. The decision appears in the next card and is logged immediately.
- **Validation:** Verify no other member gains access, and the event scope is correct.

### Task 2.3: Implement perspective preview card

- **Location:** `src/App.jsx`, `src/components/RecipientPreview.jsx`
- **Description:** Render the exact selected member view in the same rail. Include a member switcher for the three synthetic members, visible record count, hidden detail treatment, and read-only badge.
- **Dependencies:** Task 2.2.
- **Acceptance criteria:** Existence-only reveals existence but not institution/location/detail. Full detail reveals only the granted record. Private records remain hidden.
- **Validation:** Compare owner state with Ananya, Arjun, and Rhea previews; test a concern action without edit access.

### Sprint 2 demo/validation

- Complete card 1, watch card 2 activate, choose existence-only, and watch card 3 update.
- Switch member perspective and confirm the preview is exact.
- Refresh/reset and verify the story returns to the private start state.

## Sprint 3: Add the handover fork and Consent Log

**Goal:** Make the later handover a visible branch from Living Mode, with audit history and safety states carried forward.

### Task 3.1: Add concern and cooling-off transitions

- **Location:** `src/domain.js`, `src/App.jsx`
- **Description:** Add neutral concern state, private member note, request/cancel/apply downgrade actions, and a seven-day cooling-off display within the flow.
- **Dependencies:** Sprint 2.
- **Acceptance criteria:** Concerns never expose private notes to another member. Downgrade starts pending, can be cancelled, and is logged at each material transition.
- **Validation:** Reproduce the concern and downgrade path for Ananya and confirm member-scoped visibility.

### Task 3.2: Build handover fork card

- **Location:** `src/App.jsx`, `src/components/HandoverCard.jsx`
- **Description:** Add a visible branch from the living case to a selected read-only bundle. Allow record selection, recipient selection, and a paper-like preview using the same seeded records.
- **Dependencies:** Task 3.1.
- **Acceptance criteria:** Handover selection does not modify live grants. Recipient changes and bundle changes append owner-only events.
- **Validation:** Change recipient, add/remove a record, return to family preview, and confirm Living Mode is unchanged.

### Task 3.3: Add read-only release and reset

- **Location:** `src/App.jsx`, `src/components/HandoverCard.jsx`
- **Description:** Simulate a future authorised release with a clear read-only state, synthetic token link, owner boundary, and one obvious reset action.
- **Dependencies:** Task 3.2.
- **Acceptance criteria:** Release shows only the selected bundle, cannot edit records, does not imply legal entitlement, and reset restores all seeded state.
- **Validation:** Simulate release, open recipient preview, attempt unavailable edits, then reset and verify every card returns to its initial state.

### Sprint 3 demo/validation

- A concern and cooling-off state visibly appear in the flow.
- The handover fork clearly branches without changing Living Mode.
- Simulated release opens a read-only result and reset works.

## Sprint 4: Apply the Veritus-inspired presentation system

**Goal:** Give the connected product a deliberate visual and motion system without copying the reference brand or using green.

### Task 4.1: Rebuild the visual tokens and layout

- **Location:** `src/styles.css`
- **Description:** Replace the current glass-lite dashboard styling with restrained ink/bone sections, muted indigo progress/action accents, blue-grey secondary surfaces, terracotta warnings, and red-only destructive states. Remove green completely.
- **Dependencies:** Sprint 1.
- **Acceptance criteria:** No green color token or green status remains. Typography, dividers, whitespace, and section pacing resemble the reference discipline while the product remains visibly On Record.
- **Validation:** Search source for green tokens and inspect screenshots at 1280px and 360px widths.

### Task 4.2: Add meaningful motion choreography

- **Location:** `src/styles.css`, `src/App.jsx`, optional `src/motion.js`
- **Description:** Add hero line entrance, scroll reveals, connector progression, active-card emphasis, preview updates, message/result sequencing, and handover assembly. Use transforms/opacity, reduced-motion fallbacks, and no animation-dependent content.
- **Dependencies:** Task 4.1 and Sprint 3 state transitions.
- **Acceptance criteria:** Motion explains state changes, is interruptible, has no layout-jank on low-end widths, and remains understandable with reduced motion.
- **Validation:** Run browser performance checks, resize during transitions, enable reduced motion, and verify all text remains available.

### Task 4.3: Add the continuous screen-recordable mode

- **Location:** `src/App.jsx`, `src/components/CaseFlow.jsx`
- **Description:** Add Next, Back, Play all, Pause, Replay, and Reset controls that invoke the same domain commands as the live actions. Keep the step status and activity rail visible.
- **Dependencies:** Sprint 3 and Task 4.2.
- **Acceptance criteria:** A sound-off viewer can follow the story. Play all reaches release; Replay and Reset are reversible.
- **Validation:** Record a full run at 1280×720 and 360px; verify no route jumps or disconnected scenes.

### Sprint 4 demo/validation

- The flow looks like one authored case narrative, not a dashboard.
- All interactions remain comprehensible with sound off.
- No green appears anywhere in the UI.

## Sprint 5: Language, evidence, and release readiness

**Goal:** Make the final prototype safe, honest, bilingual at its core, and ready for static deployment.

### Task 5.1: Align bilingual safety and action copy

- **Location:** `src/App.jsx`, `src/data.js`
- **Description:** Translate the core journey, action labels, visibility tiers, read-only states, nominee caveat, cooling-off state, and reset controls. Keep evidence limitations explicit.
- **Dependencies:** Sprint 4.
- **Acceptance criteria:** English/Hindi switching preserves state and does not leave safety-critical controls ambiguous.
- **Validation:** Toggle languages at every card state and test deep links.

### Task 5.2: Run privacy, legal, and evidence scans

- **Location:** whole repository; record in `codex/EVIDENCE-LOG.md`
- **Description:** Scan for storage, analytics, live API calls, overclaim language, ownership/inheritance claims, accidental green tokens, and real-looking credentials. Check every fact card source and limitation.
- **Dependencies:** Task 5.1.
- **Acceptance criteria:** Synthetic boundary and nominee caveat are visible; no prohibited claims or sensitive examples remain.
- **Validation:** `rg` scans, `git diff --check`, browser console scan, and manual reviewer path.

### Task 5.3: Build and deployment verification

- **Location:** `package.json`, `DEPLOY.md`, `docs/SUBMISSION-KIT.md`
- **Description:** Run production build, verify static routes and assets, update the recording script and deployment steps, and leave the browser on the main demo route.
- **Dependencies:** Task 5.2.
- **Acceptance criteria:** `npm run build` passes; `dist/` works from static hosting; hash routes and synthetic recipient links resolve.
- **Validation:** Vite build, static preview, responsive check, direct route check, clean git status.

### Sprint 5 demo/validation

- Full two-minute recording path is documented.
- Browser and build checks are clean.
- Repository can deploy without Supabase, SQLite, authentication, or environment variables.

## Testing strategy

- **Unit/domain:** pure state transitions, visibility filtering, event scoping, cooling-off behavior, handover isolation, reset.
- **Component:** action-card active/completed/locked states, recipient preview, nominee statuses, read-only release, bilingual labels.
- **Browser journey:** fresh load, complete full flow, member perspective switch, concern, downgrade, handover, release, reset.
- **Responsive:** 1280px, 820px, 390px, and 360px widths; no horizontal overflow.
- **Accessibility:** keyboard navigation, focus visibility, semantic buttons, readable status text, reduced motion.
- **Honesty/privacy:** no storage/network/analytics in critical path, synthetic data only, no legal overclaiming.

## Potential risks and gotchas

- A horizontal desktop rail can become unreadable on phones. Use a vertical connected sequence or a snap rail below the mobile breakpoint.
- A demo that merely changes labels will repeat the current failure. Every step must call the same domain command as the live control.
- Too much state inside one card can recreate the dashboard. Keep one focal decision per card and move secondary detail into a short “inspect” surface.
- Indigo must not be used for destructive actions or confused with warning status. Keep terracotta and red semantic roles distinct.
- Scroll-linked motion can cause jank on low-end devices. Prefer CSS/IntersectionObserver, transform/opacity, modest durations, and no large blur/canvas effects.
- Recipient preview must never use owner-scoped counts or event labels. Filter records and events by member before rendering.
- Handover selection must remain separate from live grants. Test this explicitly after every bundle change.
- The nominee field must remain a recorded fact, not a beneficiary or ownership conclusion.

## Rollback plan

The redesign is isolated in the committed React/Vite replacement. If a sprint introduces a regression, revert to the previous commit `091b95a` or restore the last passing sprint commit without deleting the design and plan documents. Preserve the new domain tests and evidence log for the next iteration.
