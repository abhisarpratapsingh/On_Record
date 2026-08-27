# On Record: submission kit

## One-line pitch

On Record is a family handover service that turns scattered records after a death into one clear case, one checklist, and the right official next step.

## The 115-second video script

### 0:00-0:10: The problem

“When a family member dies, the paperwork becomes a second crisis. A family may know there is a bank account, a property paper, or an insurance policy, but not what is recorded, what is missing, or where to begin.”

### 0:10-0:20: The product

Show the home screen. “This is On Record, an independent prototype for Family Continuity Services. It creates one clear family case around the public services that already exist.”

### 0:20-0:40: Prepare

“This demo follows Meera as she organises her father’s records. The family records a bank account, a property record, an insurance policy, the nominee currently listed, and where each document is kept.”

Show the missing nominee flag. “The app identifies a gap. It does not decide ownership or inheritance.”

### 0:40-1:00: Handover

Open Handover. “After a death, Meera records what is known about the death certificate and any will or draft. On Record turns that into a practical first checklist and carries the same case forward.”

Open the simulated search. “Possible registry matches are clearly labelled as simulated. No government system is contacted.”

### 1:00-1:15: Route

Open Resolve and select property pressure. “If something is contested, the app gives a neutral explanation and routes the person toward the appropriate authority, such as legal aid, Lok Adalat, a tribunal, or a court pathway.”

### 1:15-1:45: How it was built

Show the repository and `codex/EVIDENCE-LOG.md`. “Codex helped build and harden the complete journey. I used deterministic rules, synthetic fixtures, bilingual state, consent checks, legal-tone checks, and a freeze checklist. The same case model connects Prepare, Handover, and Resolve.”

### 1:45-1:55: Honest boundary

“This is not an official government portal, legal advice, or a document vault. It prepares the context and points people to the public service that handles the next step.”

### 1:55-2:00: Close

“The goal is simple: fewer families starting from scattered papers, guesswork, and conflict.”

## Project summary, 177 words

On Record is an independent family handover service for a difficult public-service problem: after a death, families often do not know what records exist, what information is missing, or which authority handles the next step.

The prototype creates one clear family case around existing public services. A citizen can record synthetic bank, insurance, property, nominee, and document-location details; review missing or outdated information; create a handover checklist; inspect simulated cross-registry matches; and route a contested situation toward legal aid, Lok Adalat, a Maintenance Tribunal, or a court pathway.

The product never decides ownership, inheritance, eligibility, or legal validity. It distinguishes recorded facts from simulated results, marks information that needs confirmation, and shows an explicit boundary before any official destination. Sharing is owner-initiated only and previews the exact fields before confirmation.

The build uses Codex, deterministic flows, synthetic fixtures, bilingual interaction, URL state, and no live government integrations. It is designed for mobile users and people who need a clear first step rather than another complex portal.

## Judge path

1. Open the deployed public URL on mobile.
2. Read the Meera case card and click **Start the demo case**.
3. Create the handover checklist.
4. Open the simulated registry search.
5. Return home and open **Prepare records**.
6. Show the three synthetic records and the missing nominee signal.
7. Open **Resolve**, choose property pressure, and show the authority route.
8. Toggle Hindi, then English, to demonstrate state preservation.

## Submission facts

- Deadline: August 28, 2026 at 8:00 PM IST, with no grace period.
- Required: public link, video of no more than two minutes, summary under 250 words, and partner email only if working as a team of two.
- The first minute must show the citizen journey. The second minute must explain how the build was made and why.
- Every feature shown in the video must work.

## Recording checklist

- Record at 1280x720 or 1920x1080, with browser zoom at 100 percent.
- Use a clean private window and the deployed public URL.
- Keep the cursor visible and pause briefly after each successful state change.
- Do not type real names, IDs, account numbers, OTPs, or documents.
- Show the synthetic-data boundary and simulated-search boundary on screen.
- End with the repository evidence and live link, not a static mockup.

## Research basis

- [Official Builder Brief](https://buildwhatmovesindia.com/brief)
- [Official FAQ](https://buildwhatmovesindia.com/faq)
- [Department of Financial Services common landing portal announcement](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2266714&lang=1&reg=3)
- [National Legal Services Authority](https://nalsa.gov.in/)
