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

## Landscape analysis: existing services

### Government services already cover pieces, not the family continuity journey

| Existing service | What it does | What remains outside its job |
|---|---|---|
| DigiLocker | Stores, issues, shares, and verifies digital documents with citizen consent; its official site describes issued documents and user-uploaded documents as separate concepts. | It is a document wallet, not a family preparation workflow, will-readiness flow, deceased-person handover, or dispute router. |
| eCourts | Searches case status and history using CNR, case/filing number, party, advocate, FIR, act, and other fields. | It assumes a case already exists; it does not help a family prepare records or choose a safe first route before litigation. |
| NGDRS / state registration portals | Support registration-related document search and state-specific services such as mutation, substitution, or property certificates. | Coverage, terminology, and workflows vary by state; no single family-level continuity record connects property, nominees, documents, death workflow, and dispute routing. |
| Unclaimed-asset portals and institution portals | Point users toward specific registries and claim processes. | They solve discovery or claim initiation for a category, not the family’s cross-asset preparation and handover problem. |

This is a product-positioning inference from the official service descriptions, not a claim that
no other government initiative exists. The opportunity is the **orchestration layer** across
already-existing services, with consent and clear boundaries.

### Private products already validate demand

Several Indian private products now market overlapping capabilities: asset inventories, nominee
mapping, encrypted document storage, digital-legacy or will preparation, family briefings, and
handover/recovery workflows. Examples include [Sort My Legacy](https://www.sortmylegacy.com/),
[Lineage](https://lineage.money/), [Heritance](https://heritance.in/),
[Uttaradhikari](https://www.uttaradhikari.com/about), and [eKosha](https://ekosha.co.in/).

Their existence is important: the problem is not imaginary. It also means “one secure family
vault” is not a differentiated hackathon pitch. The differentiator should be **public-service
neutrality and dispute prevention**: explain what is recorded, what is missing, what the user can
do next, and which public authority handles the contested step. Competitor feature and outcome
claims above are self-published marketing claims and should not be reused as factual evidence.

## Narrative recommendation

Do not say: “We are building a portal for every Indian asset.” That sounds like a vague dashboard,
an impossible integration promise, and a direct overlap with private legacy-vault products.

Say:

> “India has document services, land-record services, case-status services, and asset-specific
> claim portals. The missing layer is what a family needs between them: a continuity record that
> helps people prepare before a death, assemble the right handover after one, and reach the right
> authority before confusion becomes a dispute.”

For the user, the first screen should ask one emotionally legible question:

> **If something happened in your family tomorrow, would the right person know what exists and
> what to do first?**

The answer is not a legal verdict. It is a Family Continuity Packet with three states:

1. **Prepare** — record people, property, money, nominees, documents, and declared wishes.
2. **Handover** — after a death, turn the record into a document-and-institution checklist.
3. **Resolve** — if something is contested, produce a neutral evidence summary and route to the
   appropriate authority.

## Judge articulation

The 20-second explanation:

> “We are not replacing DigiLocker, land records, or eCourts. We are building the missing family
> continuity layer between them. On Record helps a family prepare a record before a crisis, use
> it to organise the handover after a death, and reach the right authority when the record is
> contested. The prototype uses synthetic data and makes every limitation visible.”

The proof sequence:

1. Start with a missing nominee/document, not a dashboard.
2. Show the system produce a concrete next step.
3. Switch to the after-death handover state and show the checklist.
4. Introduce a property dispute and route it; do not pretend to resolve it in-app.
5. Explain how a future government version could use consent-based verified documents, state land
   services, and eCourts links without centralising more data than necessary.

## Claims discipline

- The “66.2%” land/property statistic is from a 2015–16 access-to-justice survey and must be
  labelled as such, not presented as a current universal statistic.
- Do not use “8 out of 10 Indians think they are in a will” until a reliable source and exact
  wording are confirmed.
- Do not say On Record will reduce disputes as a measured fact. Say it is designed to reduce
  preventable confusion and improve routing; treat impact as a hypothesis until tested.
- Do not imply government adoption. The official FAQ says there is no promise of adoption.
