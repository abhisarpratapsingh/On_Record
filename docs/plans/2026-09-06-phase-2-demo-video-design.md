# Phase 2 demo video design

## Goal

Produce a two-minute judging video for Build What Moves India Phase 2. The first minute establishes the record-clarity problem and shows the working product. The second minute focuses on the Consent Fork as the differentiator.

## Narrative architecture

1. **0:00–0:22 — Stakes.** Editorial statistic cards establish why record clarity matters, without claiming the product resolves ownership or litigation.
2. **0:22–1:00 — Product proof.** Real captured UI follows Mihir recording facts, selecting Ananya's existence-only access, previewing her separate view, and preparing a handover.
3. **1:00–1:48 — Differentiator.** A three-state visual explains private living record → current visibility → future handover. Product captures show asset-level nominee status, the seven-day visibility-downgrade cooling-off period, Consent Log, and a separate read-only recipient file.
4. **1:48–2:00 — Boundary and close.** The film explicitly says On Record does not make a will, decide ownership, or replace authorities, then lands the prevention-focused close.

## Visual system

- 16:9, 1920×1080, 24 fps.
- Ink/navy, bone, terracotta, and muted lavender aligned to the existing app.
- Quiet editorial motion: fine rules, paper-like cards, large numeric typography, restrained easing.
- Live frontend screens are contained in a rounded browser frame; graphically animated evidence cards bridge the product scenes.

## Production pipeline

1. Serve and capture the local Vite frontend at key states with Playwright.
2. Generate an AI voiceover from the supplied script, paced to approximately 120 seconds; disclose it as AI narration.
3. Compose still captures, text animations, evidence cards, and source footers with FFmpeg.
4. Render MP4/H.264 plus a caption file and a concise production README.

## Quality checks

- Exact legal/product boundaries retained in spoken and on-screen copy.
- Every number matches its qualified source and use case.
- At least one actual in-product screen proves each critical workflow claim.
- Verify duration, audio presence, and final rendered frames.
