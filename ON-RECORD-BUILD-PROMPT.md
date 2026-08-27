# On Record — Master Build Prompt

Paste this whole file into Codex as the opening message. It is self-contained. Every fact,
constraint, and acceptance test you need is inline. Do not invent anything not written here.

**"On Record" is the name and the product's core honesty rule at once.** The product never
tells anyone what they own, what they'll inherit, or who's entitled to what. It only ever
shows what is currently on record, an account, a nominee, a document, and helps people fix
what's missing or find what's been forgotten. Every claim on screen should be defensible as
"this is what's on record," nothing stronger. State that plainly in the video: the name is
the promise, not a slogan bolted on afterward.

**This is a hackathon prototype on mock data. It is not a law firm, not a government
product, and it never tells anyone they are legally entitled to anything. It shows people
what is currently on record and what to do next.**

---

## 0. Absolute rules — violating any of these fails the build

1. **Never invent a legal fact.** Every statute, section number, case name, percentage,
   rupee figure, and document requirement you need is in §5. If something is missing, emit
   `SPEC-GAP: <what>` and stop that sub-task. Do not reason your way to a plausible-sounding
   rule.
2. **Every legal/factual claim carries a `confidence` field**: `verified` (fetched from a
   primary or clearly reliable source this build cycle) or `verify` (well-sourced but should
   be re-confirmed before the video is recorded). Anything `verify` renders with a small
   "confirm before relying on this" marker in the UI. This is a feature, not a caveat, it is
   the same honesty mechanic that worked in the last build.
3. **The app never makes a legal determination.** It never says "you are eligible," "you
   will inherit," or "this is your share." It says "here is what is currently on record" and
   "here is the general rule that applies." Every page that touches entitlement carries the
   line: *This explains the general rule. It does not decide your specific case. Confirm
   with a lawyer or the relevant office.*
4. **No document in this app is ever legally executed.** The will-drafting tool produces a
   **draft only**. It is never called "sign," and the interface must say, next to every
   draft: *This is a draft to take to a lawyer or the Sub-Registrar. It has no legal effect
   until properly executed and, where applicable, registered.*
5. **Nobody can see or act on anybody else's data except the account owner, and only when
   the owner explicitly chooses to share.** There is no cross-user visibility, no "family
   member view," no "request access." A share action is always initiated by the person whose
   data it is, always shows exactly what will be shared before it's shared, and is always
   revocable in the mock model. This is the single most important design rule in the whole
   spec: it is what separates a tool that prevents family conflict from a tool that could be
   used to pressure someone. Treat any violation of this as a CRITICAL defect.
6. **Zero AI/LLM calls anywhere in the shipped product.** Every rule, checklist, and piece of
   routing logic is a deterministic lookup table or a plain conditional. Same inputs, same
   output, always, with no model call and no API key required to run the app. This satisfies
   the brief's "built with Codex or powered by an OpenAI model" requirement through the build
   process (Codex builds it), not through an in-product AI feature, which is a deliberate
   choice, not a limitation, and should be stated plainly in the video.
7. **Fully bilingual, English and Hindi, from a single toggle.** Every visible string in the
   product exists in both languages before the product is considered done. See §7.
8. **No auth, no OTP, no login, no localStorage, no cookies, no analytics, no database.**
   State lives in memory and the URL. The URL is the save file, which also makes every
   screen state shareable and lets a judge land on any step directly.
9. **No government logos, no Ashoka emblem, no claim of official status.** Name real
   portals and real laws in text only. The footer states plainly: *On Record is an
   independent prototype. It is not affiliated with any government department.*
10. **All money is integer rupees, formatted, never floats.**

---

## 1. Competition brief (frozen facts, source: buildwhatmovesindia.com/brief and /faq,
    confirmed live on 27 Aug 2026)

| Item | Value |
|---|---|
| Submission deadline | 28 Aug 2026, 20:00 IST. No grace period. |
| Problem selection | Free choice of any real public-service problem. There is no fixed list of 10; IRCTC/EPFO/Income Tax are named only as examples. |
| What to submit | (1) A live public link, opens in browser, no login wall, no app download. (2) One video, max 2 minutes: minute 1 = demo as a citizen, minute 2 = how it was built and why, including Codex's actual contribution. (3) A project summary under 250 words. (4) Partner's registered email if a team of two, blank if solo. |
| Judging axes, in this order | Problem · Working build · Usability · Product thinking · End-to-end thinking · Honesty |
| Explicit build requirements | Complete citizen journey, start to finish. Mock data/accounts/backend wherever real access is unsafe. Reviewers test the citizen experience, not an admin panel. Designed for mobile, slow connections, low digital literacy. |
| Explicit prohibitions | Do not touch a real government system. No real Aadhaar/PAN/OTP/payment/health data. Never present as an official government product. No logos implying endorsement. Not a reskin of an old project. |
| Stage 1 | Every submission reviewed 28 Aug – 1 Sep. Top 250 shortlisted. |
| Stage 2 | 250 get a week of mentorship (WhatsApp group, 5 mentors), resubmit improved build by 7 Sep. Top 10 announced 8–12 Sep, finale in Bengaluru 12 Sep. |
| Prizes | Top 10: year of Codex Pro + Codex Micro. Top 3: + MacBook. Winner: + trip to San Francisco. |
| Codex requirement | Prototype "built with Codex or powered by an OpenAI model." Codex must be a meaningful, evidenced part of the build, not bolted on for the submission. |

**Lesson from a prior similar hackathon (PACT, OpenAI x Outskill):** that submission scored
88/100 but only 9/20 on "Codex usage quality," with the official feedback: *"Codex evidence
is thin; include specific prompts, tasks, or examples showing how Codex accelerated the
work."* Every build pass in this project must append a real entry to
`codex/EVIDENCE-LOG.md` (prompt given, what Codex produced, what changed). This is a graded
artifact this time, not an afterthought.

---

## 2. What On Record is, in one paragraph

Most Indian families never write down what they own or who's supposed to get it, 84.8% of
Indians have no will, and 30.5% report having already lived through a family inheritance
dispute (1 Finance Magazine survey, cited BusinessToday and Outlook Money, June 2026).
Meanwhile roughly ₹1 lakh crore (government's own figure, Department of Financial Services,
May 2026) to as much as ₹1.8–2.2 lakh crore (broader independent estimates including EPF and
post office deposits) sits unclaimed across banks, insurance, shares, and mutual funds,
because nobody kept a record. The government's own May 2026 attempt to fix this,
unclaimedassetsportal.in, is not actually a unified search: it is a directory page that
sends you to five separate portals (UDGAM for banks, IEPF for shares, Bima Bharosa for
insurance, EPFO for provident fund, MF Central for mutual funds), each with its own login
and process. On Record is one place that helps a family get organised before a dispute or a
death happens, search for what may already be lost, and understand their rights, including
an elder's right to reclaim property, without ever deciding a legal question for them.

---

## 3. The three doors (one landing page, three complete journeys)

The landing page is framed as the first page of a family register, an index, not a
dashboard of cards. See §8 for the exact visual treatment.

**Door I — "Organise & Protect."** For someone who wants to make sure their own family never
ends up disorganised. Built fully.
**Door II — "Find What's Lost."** For someone who thinks a relative, living or dead, may have
money or assets nobody has claimed. Built fully.
**Door III — "Know Your Rights."** For someone confused about nomination vs. inheritance, or
an elder worried about pressure from family, or anyone who already has a dispute and needs
to know where to actually take it. Built fully, as an informational routing tool, never as
an adjudicator.

All three doors read and write the same underlying mock data model (§4), so a single demo
persona can walk through all three without the product feeling like three separate apps
stapled together. The video's minute 1 should walk one persona through all three doors in
sequence, this is the single continuous "citizen journey" the brief asks for.

---

## 4. Mock data model

```
FamilyProfile {
  id: string
  ownerName: string
  assets: Asset[]
  documents: DocumentRecord[]
}

Asset {
  id: string
  type: "bank" | "insurance" | "shares" | "mutual_fund" | "provident_fund" | "property"
  institution: string
  nominee: { name: string, relation: string, sharePercent: number }[] | null
  lastUpdated: string (ISO date)
  completeness: "complete" | "missing_nominee" | "outdated_nominee" | "unknown"
}

UnclaimedMatch {
  id: string
  registry: "UDGAM" | "IEPF" | "BimaBharosa" | "EPFO" | "MFCentral"
  approxAmount: number (paise, integer)
  matchConfidence: "strong" | "possible"
  requiredDocuments: string[]
}

WillDraft {
  testatorName: string
  beneficiaries: { name: string, relation: string, whatThey: string }[]
  witnessesNeeded: 2 (fixed, see §5.2)
  status: "draft_only"   // never any other value
}

ShareAction {
  fromProfileId: string
  toRecipient: string
  whatIsShared: string[]   // explicit field list, never "everything"
  sharedAt: string
  revoked: boolean
}
```

All sample data ships as static fixtures in `/data/fixtures/*.json`. No field here is ever
sourced from a live external system.

---

## 5. Domain content — every legal/factual claim used anywhere in the product

Mark every row `verified` or `verify` per §0 rule 2. `verify` rows still ship, they just
carry the on-screen confirmation marker.

### 5.1 Nomination vs. ownership (Door I and Door III)

| Rule | Detail | Confidence |
|---|---|---|
| A nominee is not automatically the owner | Supreme Court, *Shakti Yezdani v. Jayanand Salgaonkar* (2023): for most asset types a nominee is a caretaker who must pass the asset to the legal heirs, ownership is decided by a will or the applicable succession law, not by the nomination form. | verified |
| Life insurance is the one exception | Section 39(7), Insurance Act 1938 (as amended 2015): a nominee who is the policyholder's parent, spouse, or child gets a real beneficial entitlement, not just caretaker status. Non-family nominees do not get this. | verified |
| Bank accounts can now have multiple nominees | From November 2025, bank account holders can nominate up to 4 people, either simultaneously with specified percentage shares, or successively in order of priority. | verify |
| Which succession law applies depends on personal law | Hindu Succession Act 1956 (Hindus, Sikhs, Buddhists, Jains), Indian Succession Act 1925 (Christians, Parsis), Muslim personal law (Muslims). The app names which framework generally applies based on what the user selects, and never calculates an actual share. | verified |

### 5.2 Document checklists (Door I and Door II)

| Situation | Documents generally needed | Confidence |
|---|---|---|
| Claiming a deceased relative's bank/insurance/shares/PF | Death certificate; a legal heir certificate or surviving member certificate from the District Magistrate or revenue authority; a succession certificate from the district court (for higher-value or contested cases); proof of identity and address of the claimant; the original passbook/policy/folio document if available. | verified |
| Preparing a will | A written document naming an executor and beneficiaries, signed by the testator (the person making the will), attested by at least 2 witnesses. Registration at the Sub-Registrar's office is optional under Indian law but strongly reduces later disputes over authenticity. **The app never treats a draft as executed.** | verified |
| Updating a bank/insurance/PF nominee | Nomination form specific to the institution, identity proof, existing account/policy number. No court process needed, this is the single highest-leverage low-effort action the app can recommend. | verified |
| Elder reclaiming property transferred under a broken promise of care | Relief exists under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, which allows a senior citizen to have certain property transfers set aside if the transfer was conditional on being maintained and that condition was not honoured. **Route to a Maintenance Tribunal under this Act, do not attempt to file or adjudicate anything in-app.** | verify |

### 5.3 Where unclaimed money actually sits, and why the government's own portal doesn't
    solve it

| Registry | Covers | Approx. figure (cited, varies by source) | Confidence |
|---|---|---|---|
| RBI UDGAM (udgam.rbi.org.in) | Bank deposits inactive 10+ years | ~₹78,000 crore (DFS, May 2026); other cites range ₹42,270 cr (Mar 2023) to ₹72,000+ cr (2026), figures update over time | verified (figures are point-in-time, label as approximate) |
| IEPF (Investor Education and Protection Fund) | Unclaimed shares and dividends | ~₹89,000 crore (BusinessToday, Apr 2026); independent calc puts listed-company shares alone near ₹82,000–88,000 cr (Aug 2024 data) | verified |
| Bima Bharosa (IRDAI) | Unclaimed insurance maturity/claims | ~₹14,000–22,000 crore depending on source and year | verify |
| MF Central | Unclaimed mutual fund units | ~₹3,000–3,749 crore | verify |
| EPFO | Inoperative provident fund accounts | Official figure to Parliament ~₹10,000–11,000 crore; independent estimates suggest this is understated | verify |
| **unclaimedassetsportal.in** | The government's own May 29, 2026 "Common Landing Portal," launched by DFS Secretary M. Nagaraju under the "Mera Paisa, Mera Haq" campaign | **Does not itself search anything.** It is a links page that routes the user to whichever of the five portals above applies, each with a separate login, ID format, and process. | verified |

The pitch is precise: not "no government effort exists," but "the unification the
government announced three months ago is a signpost, not a search engine, and this is what
the real version looks like."

### 5.4 Where to actually take a dispute (Door III escalation, never handled in-app)

| Body | What it does | Confidence |
|---|---|---|
| Lok Adalat (National Legal Services Authority, under the Legal Services Authorities Act 1987) | Free, no court fee, binding settlement, no right of appeal against its award but parties can still go to a regular court if unresolved. Real scale: 2nd National Lok Adalat of 2026 alone settled over 2.07 crore cases. | verified |
| Senior Citizen Maintenance Tribunal (under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007) | Handles maintenance claims and property-transfer reversal claims from senior citizens against family members. | verified |
| A civil court / district court | For contested succession certificates, will validity challenges, and partition suits that Lok Adalat or the Tribunal can't resolve. | verified |

---

## 6. Screen-by-screen spec

### 6.1 Landing — "The Register" (shared entry point)
- Full-bleed ledger-page visual (see §8). Three index entries, each a title, one sentence,
  and a page-number-style link: "I. Organise & Protect .......... p.1", "II. Find What's
  Lost .......... p.2", "III. Know Your Rights .......... p.3".
- Language toggle top-right: `EN` / `हिं`, persisted as `?lang=hi` in the URL.
- No account creation. Selecting a door drops straight into that flow.

### 6.2 Door I — Organise & Protect
1. **Add your assets.** A simple repeatable form: asset type, institution name, whether a
   nominee is set, nominee name + relation if yes. Uses the fixture list as autocomplete
   suggestions (bank names, insurers) but accepts free text.
2. **Completeness check.** Deterministic rule table, not a model: no nominee set →
   `missing_nominee`; nominee set but `lastUpdated` more than 5 years ago → `outdated_nominee`
   (flag, don't block); otherwise `complete`. Each flagged asset shows the exact fix ("Add a
   nominee at your bank's branch or net-banking nomination page").
3. **Nominee vs. owner explainer**, shown inline the first time a user views any nominee
   field, pulled verbatim from §5.1, never paraphrased into a stronger legal claim than the
   source supports.
4. **Draft a will** (optional path from here). Guided form: beneficiaries and what they get,
   in plain language, no legal drafting language implied. Output is a downloadable/printable
   page headed, in large text, "DRAFT — NOT LEGALLY VALID UNTIL PROPERLY EXECUTED," followed
   by the §5.2 checklist for what execution actually requires.
5. **Generate the family handover sheet.** One printable page: every asset, its
   completeness status, the current nominee on record (facts only, phrased as "currently
   lists," never "will inherit"). A share button lets the owner send this to a named
   recipient; this is the only path by which anyone else ever sees this data, and the screen
   shows exactly what's about to be shared before confirming (§0 rule 5).

### 6.3 Door II — Find What's Lost
1. **Enter what you're looking for.** Name, approximate years, optional institution names,
   optional relation to you if you're searching on someone else's behalf.
2. **Mocked cross-registry search.** A visible "searching UDGAM… IEPF… Bima Bharosa…
   EPFO… MF Central…" sequence (fast, a few hundred ms per registry, not a fake multi-second
   spinner) against the fixture dataset, then results grouped by registry with
   `matchConfidence`.
3. **Per-match claim checklist.** Pulled from §5.2, specific to whether the match is a bank
   deposit, insurance policy, shares, PF, or mutual fund.
4. **Honesty panel**, permanently visible on this screen: "This search is simulated for this
   prototype. A real version would need direct, authorised data-sharing agreements with RBI,
   IRDAI, SEBI and EPFO, the same institutions the government's own portal already links out
   to." This is the brief's honesty axis, satisfied explicitly, not implied.

### 6.4 Door III — Know Your Rights
1. **"What's your situation?"** A short branching set of plain questions (not a chatbot, a
   fixed decision tree): lost a relative / worried about my own family's setup / feel
   pressured about my property / already in a dispute.
2. Each branch shows: the relevant explainer from §5.1, the relevant document checklist from
   §5.2, and, if a dispute is already in play, routes to §5.4 with a short, respectful
   explanation of what each body actually does and how to reach it (real, publicly listed
   contact paths, not invented ones, mark `verify` and leave the exact phone numbers/URLs to
   be re-confirmed before the video).
3. **No dead end.** Every branch ends on either a document checklist, an explainer, or an
   escalation path, never a blank "we can't help with that."

---

## 7. Bilingual system (English default, Hindi toggle)

- All UI copy lives in a single `strings.ts` (or `.json`) keyed dictionary:
  `{ key: { en: "...", hi: "..." } }`. No component ever hardcodes a visible string.
- The toggle sets `lang` in the URL query string and re-renders from the dictionary; it does
  not use `localStorage` (rule 8).
- Hindi copy is written in Devanagari, not transliterated Hinglish, and reviewed for plain,
  everyday language, not machine-translated legalese. Legal terms that don't have a common
  Hindi equivalent (e.g. "nominee") may keep the English term in Devanagari transliteration
  if that's how it's actually used in Indian banking forms, note this choice in the code
  comments so it isn't mistaken for an oversight.
- Numbers and dates follow Indian formatting (₹ with lakh/crore grouping) in both languages.

---

## 8. Design system

**Brief for this build:** a family register/ledger, not a fintech dashboard, not a
government portal pastiche. The product's core artifact is a document, so the whole
interface should feel like a well-kept official record book: calm, permanent, trustworthy,
never playful, never corporate-blue.

**Avoid the generic AI-design defaults**: no warm-cream-plus-terracotta palette, no
near-black-plus-neon-accent, no hairline-rule broadsheet columns. None of those fit a
ledger/register subject anyway.

**Color tokens**
- Ink (primary text, headers): `#1B2A4A` — deep indigo-navy, like old fountain-pen ink.
- Parchment (background): `#EFE7D8` — warm, slightly grey paper, not a bright cream.
- Seal (accent, primary actions, the stamp motif): `#A8791F` — aged brass/gold.
- Wax (alerts, the "missing nominee" flag): `#8C3A2B` — deep sealing-wax red-brown, not a
  bright warning red.
- Verified (completeness confirmed): `#4C6B4F` — muted sage green.

**Typography**
- Display (English): a serif with real character for headings, e.g. Source Serif 4 or
  Newsreader, set large, restrained weight variation.
- Display (Hindi): Tiro Devanagari Hindi, chosen specifically because it's a serif
  Devanagari with the same literary/ledger register as the English display face, they should
  read as siblings, not as two unrelated font choices bolted together.
- Body (English): Source Sans 3 or Inter, generous line height for legal/procedural copy.
- Body (Hindi): Noto Sans Devanagari.
- Utility/data (reference numbers, amounts, dates): IBM Plex Mono, this doubles as a nod to
  stamped file numbers in a real register.

**Signature element:** the landing page and the "generate handover sheet" moment both use a
literal ledger-page visual, faint ruled lines, a left margin column for entry numbers, and,
on confirmation actions (nominee saved, will draft generated, share sent), a small animated
wax-seal stamp lands with a soft thud and the word "दर्ज़ / RECORDED" appears beneath it
briefly. This is the one place motion is spent; everywhere else stays quiet and still.
Respect `prefers-reduced-motion`, when set, the stamp appears instantly with no animation.

**Layout:** the three-door landing page is the index page of the register (§6.1), not three
generic cards. Inside each door, single-column, generous margins, mobile-first at 360px,
large tap targets (minimum 44px), visible keyboard focus rings in the Seal color, no
horizontal scroll ever.

**Accessibility floor, non-negotiable:** works fully with keyboard only, all form fields
labelled, color is never the only signal (the completeness flags use an icon + text, not
just a colored dot), text resizes without breaking layout, contrast ratios meet WCAG AA at
minimum given the Ink-on-Parchment pairing (verify this in build, adjust Ink darkness if
needed rather than lightening Parchment).

---

## 9. Compliance guardrails — grep the codebase for these before every commit

Any hit is a build failure, not a warning:
- "you are eligible", "you will inherit", "your share is", "guaranteed"
- "sign" anywhere near the will-drafting flow (must be "draft", "prepare", never "sign" or
  "execute")
- Any section number, case name, percentage, or rupee figure not present in §5
- Any code path where one user's data becomes visible to another without an explicit,
  logged `ShareAction` (rule 5)
- `localStorage`, `document.cookie`, any analytics SDK, any external API call on the
  critical path

---

## 10. Codex evidence log

After every build pass, append one entry to `codex/EVIDENCE-LOG.md`:
```
### Pass N — <date/time>
**Prompt given:** <verbatim or close paraphrase of what was asked>
**What Codex produced:** <files touched, key logic added>
**Before → after:** <one or two concrete sentences, e.g. "completeness rule table had no
outdated-nominee case; Codex added the 5-year staleness check and the corresponding fixture
data">
```
This is the exact artifact that was thin last time and cost real points. Do not skip it, and
do not backfill it after the fact, write it as each pass actually happens.

---

## 11. Definition of done, mapped to the six judging axes

- **Problem:** the ₹1–2 lakh crore figure, the 84.8%-no-will figure, and the DFS portal's
  own May 2026 launch are all visible somewhere in the product or the video, correctly
  cited.
- **Working build:** all three doors complete a full journey with no dead ends, on a phone,
  cold, with no login.
- **Usability:** every screen passes the "can a first-time user read this and know what to
  do next in under 5 seconds" test; if not, the copy or layout gets simplified before
  anything else is added.
- **Product thinking:** the owner-only-sharing rule (§0.5) and the "draft, never signed"
  rule (§0.4) are both stated explicitly in the video, they are the two decisions that show
  real judgment, not just execution.
- **End-to-end thinking:** Door III's routing to Lok Adalat and the Maintenance Tribunal
  shows the product knows its own limits and connects to the real system that actually
  resolves disputes, rather than pretending to be that system.
- **Honesty:** the Door II "this search is simulated" panel, the `verify`-tagged facts
  visible in the UI, and the footer disclaimer are all first-class, visible product
  elements, not buried fine print.

---

## 12. Video and 250-word summary structure

**Video (2 min max):**
- 0:00–0:15 — the hook: "80% of Indians have no will. ₹1 to 2 lakh crore sits unclaimed. The
  government's own new portal just tells you to go check five other websites." (cite DFS,
  May 2026)
- 0:15–1:00 — one persona walks Door I (add an asset, see it flagged, generate the handover
  sheet) then Door II (find a lost match) in one continuous flow.
- 1:00–1:15 — Door III in ten seconds: the nominee-vs-owner explainer and the elder
  property-reversal routing.
- 1:15–2:00 — how it was built: name Codex explicitly, show one real before/after from
  `EVIDENCE-LOG.md` on screen, state the two deliberate design decisions from §11's "product
  thinking" line.

**250-word summary:** open with the problem (cited figures), state what changed (one
unified, deterministic, bilingual tool instead of five siloed portals and a signpost page),
name the two safety decisions (owner-only sharing, draft-never-signed), close with what's
mocked and why (Door II's simulated search, per §6.3.4).

