# /consent-audit

Grep and manually trace the entire codebase, routes, fixtures, URL state, render paths, and share
handlers. Find every path where FamilyProfile, Asset, WillDraft, or derived data for one profile
can become reachable from a different profile session or route. The only allowed exception is an
explicit, user-confirmed ShareAction containing `fromProfileId`, recipient, exact `whatIsShared`,
timestamp, and revocation. Report every violation as `CRITICAL`, with file/route, trigger, data
exposed, and a minimal fix. Also check direct URL manipulation and back/forward navigation. Clean
means no unresolved cross-profile path and no unlogged implicit share.
