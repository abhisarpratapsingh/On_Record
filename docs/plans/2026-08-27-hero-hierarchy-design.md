# Hero hierarchy redesign

## Decision

Rebuild the entry route as a government-style service start page. The first viewport will answer one question, provide one primary action, and establish the working journey before introducing Meera's synthetic case as evidence.

## Why

The previous hero gave equal visual weight to the service promise and Meera's case dossier. That split attention and made the product identity harder to understand in a fast judge scan. The official hackathon criteria emphasise a clear problem, a working end-to-end journey, usability, product thinking, and honest scope. Government service guidance similarly recommends making the purpose clear before a user starts, using a clear start action, and avoiding competing navigation.

## Chosen composition

1. Service start hero: `Prepare a family handover before it becomes a dispute.`
2. Supporting explanation: organise family financial and property facts, identify missing details, and reach the right official service.
3. Primary action: `Start the demo case`.
4. Secondary action: a low-emphasis `See how the service works` link.
5. Compact proof rail: `Before a dispute`, `After a death`, `When help is needed` mapped to Prepare, Handover, and Route.
6. Meera proof band: synthetic case FC-001 with records found, attention required, and next action.
7. Official destination cards after the working journey.

## Interaction and accessibility

- Existing routes and state remain unchanged.
- Primary action opens the existing Handover journey.
- Meera proof links to the same case journey without creating a second product path.
- Secondary navigation is visually quieter but remains keyboard accessible.
- The composition stacks at narrow widths and keeps body text at readable sizes.
- No claim is presented as a legal determination; demo and source boundaries remain visible.

## Sources

- https://buildwhatmovesindia.com/brief
- https://buildwhatmovesindia.com/faq
- https://www.gov.uk/service-manual/design/introduction-designing-government-services
- https://design-system.service.gov.uk/patterns/start-using-a-service/
