# On Record: submission kit

## One-line pitch

84.8 percent of Indian families have no will, and the government's own May 2026 fix for unclaimed money is just a page of five separate logins. On Record is the independent prototype of what a real, unified version looks like: one family case that prepares, hands over, and routes, without ever deciding who owns what.

## Video

Live link: https://drive.google.com/file/d/14FJakb7odbgSuYYmYcsFCNz0bpykGi7m/view?usp=sharing
(112.6 seconds, matches `on-record-demo-SYNCED.mp4`, real narration audio, under the 120-second cap)

## The video script

Structure follows the brief's own instruction verbatim: minute one demos
the project as a citizen, minute two explains how it was built and why.
Narrated with the creator's own voice throughout, matched line-by-line to
on-screen captions.

### 0:00-0:44, PART 1: live walkthrough, as a citizen

Opens cold on the live homepage, no branding preamble. Scrolls through the
hero, the "why On Record is different" panel, and the official destination
cards, then walks Prepare (adding records, the missing-nominee flag),
Handover (intake, checklist, simulated search), and Resolve (the
property-pressure routing path). Full line-by-line narration lives in
`TTS-SCRIPT.md` and `NARRATION-SCRIPT.md`.

### 0:44-1:44, PART 2: how it was built, and why

An animated sequence, no website visible: the 84.8 percent stat, the
₹1-2 lakh crore unclaimed figure, the five-portal fragmentation problem,
On Record as the unified answer, the three pillars (Prepare / Handover /
Resolve), the two safety decisions (owner-initiated sharing, nothing ever
signed), and Built with Codex, 17 real logged build passes, zero AI calls
in the shipped product.

### 1:44-1:52, close

"On Record. One family case, instead of five logins and a guess."

## Project summary, under 250 words (248 words)

On Record fixes a public-service gap that is already a slow-motion emergency: 84.8 percent of Indian families have no will, nearly a third have already lived through an inheritance dispute, and one to two lakh crore rupees sit unclaimed in banks, insurance, shares, and provident funds because nobody kept a record. In May 2026 the government shipped its own fix, a Common Landing Portal. It searches nothing. It just redirects citizens to five separate logins and leaves them to figure out the rest alone.

On Record is what the unified front door should have been. One family case lets you prepare records before a crisis, turn scattered documents into a handover checklist after a death, and route a dispute to the right authority, without ever deciding who owns what. Every legal claim carries a source and a confidence marker. Every draft will says, visibly, that it has no legal effect until properly executed. Every share is owner-initiated and named field by field before it happens.

Built entirely with Codex across 17 real, logged build passes, from the first working prototype through a full consent-integrity audit that closed cross-profile leaks a share panel could have exposed, the shipped product makes zero AI calls. Every rule is deterministic, auditable, and reproducible, in both English and Hindi, with no login and no cold start.

This is not a mockup of a good idea. It is a working front door for the paperwork nobody wants to think about until it's too late.

## Judge path

1. Open the deployed public URL. Read the 84.8 percent headline and the "Why On Record is different" panel beside it, both visible without scrolling.
2. Click **Start the demo case**.
3. Fill the short intake and create the handover checklist.
4. Open the simulated registry search and note the "no live data" boundary.
5. Return home, scroll to the official destination cards, and to "What is real, what is mocked, and how this could scale."
6. Open **Prepare**, review the three synthetic records and the missing nominee flag.
7. Open **Resolve**, choose the property-pressure path, and see the authority routing.
8. Toggle Hindi, then English, on any screen to confirm state survives the switch.

## Submission facts

Quoted from the official "What to submit" instructions:

- Deadline: August 28, 2026 at 8:00 PM IST. No grace period after the form closes.
- A live public link that opens in a browser without requesting access. Reviewers will not download a mobile app. Include mock consumer login credentials if the project requires them.
  - On Record has no login anywhere in the product (CLAUDE.md forbids it on the critical path), so this line does not apply; the deployed URL opens straight to the working app.
- One video, no longer than two minutes. First minute demos the project as a citizen; second minute explains how it was built and why those choices were made. Both teammates may present.
- A project summary under 250 words explaining what it is and why it is better than the current solution.
- Partner's registered email if a team of two; leave blank if solo. Both teammates must register and submit each other's registered email.
- Every link must work without requesting access.

Pre-submit check: open the live URL and the video link in a private/incognito
window (logged out of any account) to confirm neither prompts for access.
- Judging axes, in order: problem, working build, usability, product thinking, end-to-end thinking, honesty.

## Recording checklist

- Record at 1280x720 or 1920x1080, browser zoom at 100 percent.
- Use a clean private window and the deployed public URL, not localhost.
- Keep the cursor visible and pause briefly after each state change.
- Do not type real names, IDs, account numbers, OTPs, or documents.
- Show the synthetic-data boundary and the simulated-search boundary on screen, not just in narration.
- End on the repository evidence log and the live link, not a static mockup.

## Research basis

- Official Builder Brief, buildwhatmovesindia.com/brief.
- Official FAQ, buildwhatmovesindia.com/faq.
- Department of Financial Services Common Landing Portal announcement, cited in `ON-RECORD-BUILD-PROMPT.md` section 5.3.
- National Legal Services Authority, nalsa.gov.in.
- 1 Finance survey on the no-will and dispute figures, cited by BusinessToday and Outlook Money, June 2026.
