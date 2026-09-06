# Phase 2 film — production notes

The two-minute Build What Moves India Phase 2 pitch film, rendered programmatically
from this repository. No screen recording and no editing timeline: the film is code,
so it can be regenerated exactly.

**Output:** `output/video/on-record-phase-2.mp4` — 118.50 s, 1920×1080, 24 fps,
H.264 High / AAC 48 kHz mono, ~18 MB, loudness −16 LUFS / −1.5 dBTP.
Alongside it: `on-record-phase-2.srt` (burned-in captions also appear in the picture)
and `poster.jpg`. `output/` is gitignored, so the render lives locally only.

## How it maps to the brief

| Brief | Film |
| --- | --- |
| Minute 1 — the problem, and the project in action | 0:00–0:31 the record-clarity problem with four sourced figures; 0:31–1:02 the real product, six captured states |
| Minute 2 — one feature that differentiates the build | 1:02–1:42 the Consent Fork: the three-moment split, asset-level nominee status, the seven-day cooling-off, the Consent Log; 1:38–1:42 owner account vs handover file |
| Close | 1:42–1:58 what On Record explicitly does not do, then the prevention statement |

## Pipeline

```bash
python scripts/video/1_voice.py       # narration + measured timings
node   scripts/video/2_capture.mjs    # real UI states from dist/
node   scripts/video/3_render.mjs     # 2,846 deterministic frames
python scripts/video/4_compose.py     # mux + captions + poster
```

`npm run build` first — `2_capture.mjs` serves `dist/`, not the dev server.
`node scripts/video/3_render.mjs --probe` renders fourteen stills instead of the
full sequence, for checking design changes in seconds rather than eight minutes.

Two design decisions carry the pipeline:

**Narration timing drives the picture, not the reverse.** `1_voice.py` synthesises
each sentence separately, measures its real duration with `ffprobe`, and writes
`build/timings.json`. Every scene in `film.html` reads its in and out points from
that file, so the "84%" card is on screen exactly while the word is spoken. The
narration bed is then assembled by placing each clip at its recorded offset with
`adelay` and mixing — never by concatenating — so the audio cannot drift from the
timings the picture was built against.

**Rendering is a pure function of time.** `film.html` exposes `window.__seek(t)`
and contains no CSS transitions, no `requestAnimationFrame`, and no randomness.
`3_render.mjs` seeks to each of the 2,846 frames and screenshots it. Frame *N* is
identical however it was reached, which is what makes the output reproducible and
free of the flicker a real-time capture would introduce.

## The screens are real

`2_capture.mjs` drives the built app through one browser session. Because `App`
state lives in the root component and hash routing keeps it mounted, the captures
show genuine consequences rather than staged mockups:

- Ananya's `/preview/demo-ananya-7f2` page shows exactly two records **because the
  script actually granted her existence-only access to the family home** a few
  steps earlier.
- The seven-day cooling-off card exists **because the script really requested a
  downgrade** on Arjun's life-cover access.
- The handover file lists real references, locations and nominee lines from
  `src/data.js`.

Capturing surfaced one product defect, fixed in `src/App.jsx`: the consent panel's
intro was a static string naming Ananya, so it read "Choose exactly what Ananya can
see" while viewing Arjun. It is now member-scoped.

## Narration

AI-generated (`edge-tts`, `en-IN-PrabhatNeural`, rate +57%, ≈176 wpm), disclosed
on screen for the whole film. Script and captions live in `narration.json`.

The supplied narrative ran ~440 spoken words — a 2:56 read that cannot fit two
minutes at any listenable pace. It was cut to 335 words. Every number, source
attribution, qualifier and boundary statement was kept; only connective padding
went, and the qualifiers judges need to read were moved into the picture. Nothing
was added that the source material does not support.

## Claims and sources

Each figure appears with a "what this shows / what it does not show" pair, so no
number can be read as more than it is.

| Figure | Used to show | Explicitly not claimed | Source |
| --- | --- | --- | --- |
| 84% | why property records carry so much weight | that 84% of property is disputed | RBI household-finance research (dvararesearch.com) |
| 66% | property dominates that civil caseload | a census of every civil case in India | CPR |
| ≈20 years | how long an unresolved land question can run | the average for every family property case | NITI Aayog |
| 5,18,49,083 / 1,12,94,941 | the queue a matter joins once filed | a fixed figure — it changes continuously | NJDG |
| 15 days | RBI settlement guidance, shown beside the nominee boundary | that a nominee becomes the owner | RBI deceased-depositor guidance |

The film states plainly that On Record does not make a will, decide ownership, or
replace a court, bank or authority, and that a nominee may receive funds as trustee
for the legal heirs. Every frame carries "synthetic case FC-001 · no login · no live
data · no government system contacted".
