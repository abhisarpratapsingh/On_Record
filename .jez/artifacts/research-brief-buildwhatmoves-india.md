# Research Brief: Build What Moves India — On Record upgrade

**Depth:** focused/wide
**Date:** 2026-08-27

## Executive summary

The official competition brief says the build must solve one clearly defined public-service
problem, complete the main citizen journey, be easier for real Indian users on mobile/slow
connections, and make mocked dependencies obvious. Judges score Problem, Working build,
Usability, Product thinking, End-to-end thinking, and Honesty—in that order of emphasis in the
brief. On Record is directionally strong, but the next advantage is not more features: it is a
sharper first 30 seconds, a guided judge path, stronger proof of what works, and a restrained
motion language that reinforces “recorded” moments.

## Official findings

| Finding | Build implication |
|---|---|
| Pick one real problem and build a simpler, clearer solution | Frame On Record around the single problem: family records are fragmented and hard to hand over safely; the three doors are one continuous response, not three unrelated products. |
| Main journey must work end-to-end; static design is insufficient | Provide a visible demo path with functional add/check/share, simulated search/checklist, and rights routing. Never demo an unimplemented control. |
| Real Indian users include mobile, slow connections, limited digital experience | Keep static delivery, no external critical-path calls, 360px layout, plain labels, large targets, and no login wall. |
| Honesty about mock data, dependencies, and limits matters | Surface “mock data”, “simulated search”, independent prototype, confidence markers, and draft-only language at the moment of use. |
| Codex must be meaningfully involved and explained | Maintain the evidence log and show one actual before→after plus the audit prompts in minute two of the video. |
| Submission requires public link, ≤2 minute video, <250-word summary, partner email if applicable | Prepare a submission kit and rehearse a 90–110 second path so the final seconds are not rushed. |
| The brief says every demoed feature must work | Add a pre-recorded smoke checklist and freeze gate; cut anything that cannot be reliably demonstrated. |

## Current build assessment

### Strong

- Zero-dependency static architecture is appropriate for cold start, uptime, and slow networks.
- The three doors, URL hash routes, Hindi toggle, visible simulated-search panel, verify tags,
  draft-only warning, and explicit share preview map cleanly to the brief.
- The ledger visual identity is memorable and coherent without government branding.

### Highest-leverage gaps

1. Landing page needs an even faster “problem → promise → first action” explanation for a tired
   judge who does not read the full register.
2. The three-door architecture risks feeling broad unless the handoff between doors is presented
   as one family record journey.
3. “Built with Codex” is currently a label; the video needs visible evidence: prompt, output,
   audit, and a concrete changed behavior.
4. Awwwards-level motion should be limited to page-load/reveal, focused hover/tap response, and
   the recorded stamp. Avoid smooth-scroll libraries or large dependencies in this deadline build.
5. The current state is session-only, so the video must explain that the URL is the save/share
   surface and never imply production persistence.

## Recommended upgrade path

### Option A — Keep vanilla static + premium CSS/WAAPI motion (recommended)

Add a two-step hero reveal, index-entry hover/tap choreography, route transition using opacity/
transform, and a single “RECORDED” stamp moment. Use CSS/WAAPI, `requestAnimationFrame` only for
short effects, and `prefers-reduced-motion`. No new dependency, no new cold-start risk.

### Option B — Migrate to React + GSAP/Lenis

This enables richer sequencing and matches the Awwwards skill’s React-first examples, but adds
dependency installation, bundle and deployment risk, and conflicts with the current static
deadline strategy. It is a post-hackathon path, not the submission path.

### Option C — Add a full “presentation mode” microsite

A cinematic opening could be memorable, but it creates a second experience judges might enter
instead of the working product. Only use a minimal judge-mode banner/path inside the real app.

## Proposed next build pass

1. Add a “1-minute walkthrough” affordance that starts at the real Door I route, not a fake demo.
2. Add a compact “why this exists / what is mocked / what Codex changed” panel on the landing page.
3. Add purposeful route and stamp motion using transform/opacity only, with reduced-motion fallback.
4. Add a compact submission kit: 110-second video script, <250-word summary, and judge smoke path.
5. Run consent, tone, bilingual, fact-check, judge simulation, and freeze audits. Record every pass.

## Sources

- [Official Build What Moves India home](https://buildwhatmovesindia.com/)
- [Official Builder Brief](https://buildwhatmovesindia.com/brief)
- [Official FAQ](https://buildwhatmovesindia.com/faq)
- [OpenAI developer meetups / Codex community](https://developers.openai.com/community/meetups)
