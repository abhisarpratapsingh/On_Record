# On Record — submission kit

## The one-line pitch

On Record is a bilingual family register that turns scattered records, possible unclaimed
assets, and rights questions into one honest next step—without pretending to decide ownership.

## 110-second video script

### 0:00–0:12 — Hook

“A family can have a bank account, insurance policy, shares, provident fund, and property—and
still have no single record of what is actually on file. When something is missing, people are
sent from one portal to another. On Record is a calmer starting point: what is currently on
record, and what to do next.”

### 0:12–0:25 — The promise

Show the landing page. Say: “The name is the product rule. We never say who owns something or
what someone will inherit. We show the record, the gap, and the next route. This is an independent
prototype with synthetic data.”

### 0:25–0:52 — Door I: organise

Click **Start walkthrough** or Door I. Show the seeded bank record flagged **Missing nominee**,
then the recorded insurance example. Say: “A deterministic completeness check finds what needs
attention. It does not make a legal conclusion.” Open the nominee explainer, then the handover
sheet. Open **Share this sheet**, show the exact fields and recipient confirmation, then confirm.

### 0:52–1:10 — Door II: find

Go to Door II. Enter synthetic text, start search, and let all five registry labels appear. Open
the UDGAM result and show the document checklist plus the permanent **simulated search** panel.
Say: “This is mocked intentionally. A production version needs authorised agreements with the
relevant institutions.”

### 1:10–1:25 — Door III: route

Open Door III → property pressure. Show the `verify` marker and Maintenance Tribunal route.
Say: “The product knows its limit: it routes a dispute to the body that handles it; it does not
adjudicate inside the app.”

### 1:25–1:50 — How Codex contributed

Show the repo and `codex/EVIDENCE-LOG.md`. Say: “Codex built the static citizen journey, then
helped me attack it with fact, consent, tone, bilingual, judge, and freeze audits. One concrete
change was the owner-confirmed share preview with exact fields and revocation.” Show the audit
command names briefly.

### 1:50–2:00 — Close

“The two deliberate choices are simple: owner-only sharing, and draft-never-executed. The result
is not a new government portal. It is a trustworthy first page for a family register.”

## Project summary (under 250 words)

On Record is a bilingual family register for a problem many households face: important records
are scattered across accounts, policies, shares, provident funds and property papers, while a
possible unclaimed asset may require several separate portals and processes. The prototype
turns that uncertainty into one clear citizen journey: organise what is currently on record,
search a simulated index for possible matches, and route rights questions to the appropriate
next body.

The product is deliberately honest. It never decides ownership, inheritance or eligibility. It
labels facts that need confirmation, distinguishes a recorded nominee from an ownership decision,
and marks every will output as a draft with no legal effect until properly executed and, where
applicable, registered. Sharing is owner-initiated only: the person sees the exact fields before
confirming and can revoke the mock share.

The build is a zero-dependency static prototype created and hardened with Codex. It uses synthetic
fixtures, deterministic rules, URL language state, and no live government integrations. Door II
is explicitly simulated because real access would require authorised data-sharing agreements.
The interface is mobile-first, keyboard-friendly, and available in English and Hindi.

## Judge path

1. Open the public link cold on mobile.
2. Click **Start walkthrough →**.
3. Show the missing-nominee flag and nominee explainer.
4. Open handover sheet → share preview → confirm.
5. Open Door II → run mock search → UDGAM checklist.
6. Open Door III → property pressure → Maintenance Tribunal.

## Final freeze checklist

- Public URL opens without login/access request.
- Main path works on a fresh mobile session.
- Every feature shown in the video works live.
- `verify` markers are visible at point of use.
- Share preview names exact fields and supports revocation.
- Draft output remains explicitly draft-only.
- Hindi toggle works on every route without state loss.
- Video is under two minutes and summary is under 250 words.
- Evidence log contains the real prompts and before→after changes.
