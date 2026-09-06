# Phase 2 demo video design

Status: built. See `scripts/video/README.md` for the as-built pipeline and
`output/video/on-record-phase-2.mp4` for the render.

## Goal

A two-minute judging film for Build What Moves India Phase 2. Minute one
establishes the record-clarity problem and shows the working product. Minute two
focuses on the Consent Fork as the differentiator.

## Narrative architecture

1. **0:00–0:31 — Stakes.** Four sourced figures, each carrying a "what this shows /
   what it does not show" pair, so no number is inflated beyond its evidence. The
   film never claims On Record resolves ownership or reduces litigation.
2. **0:31–1:02 — Product proof.** Six captured states of the real frontend follow
   Mihir recording facts, granting Ananya existence-only access, her separate
   read-only view, and the prepared handover file.
3. **1:02–1:42 — Differentiator.** An animated fork separates the private living
   record, what each person can see now, and what may be handed over later. Then
   asset-level nominee status with the RBI trustee framing, the seven-day
   cooling-off on a real pending downgrade, and the Consent Log.
4. **1:42–1:58 — Boundary and close.** Three struck-through claims — no will, no
   ownership decision, no replacement for a court, bank or authority — then the
   prevention statement.

## Visual system

- 16:9, 1920×1080, 24 fps.
- Ink, bone, indigo and terracotta tokens taken directly from `src/styles.css`, so
  the film and the product read as one system.
- Quiet editorial motion: hairlines, large condensed numerals, restrained easing.
- Live frontend captures sit in a rounded browser frame with a slow pan that
  reveals the part of each screen proving the claim; graphic scenes bridge them.

## Production pipeline

1. Synthesise the narration per sentence, measure real durations, emit `timings.json`.
2. Capture real UI states by driving the built app through one Playwright session.
3. Render `film.html` deterministically via `window.__seek(t)`, one screenshot per frame.
4. Mux frames and the narration bed with FFmpeg; emit MP4, SRT and poster.

## Quality checks

- Duration 118.50 s, under the two-minute limit.
- Audio verified present and continuous at −16.5 dB mean, −1.5 dB peak.
- Caption cues verified non-overlapping.
- Every number matches its qualified source and stated use.
- Each critical workflow claim is backed by an actual in-product screen whose state
  was produced by really performing the action, not staged.
