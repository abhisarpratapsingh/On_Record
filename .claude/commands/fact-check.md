# /fact-check

Read `ON-RECORD-BUILD-PROMPT.md` §5 and inventory every legal/factual row used by the app.
For each `verify` row, attempt re-confirmation against a primary or clearly reliable source.
Promote only when the source genuinely supports the exact claim, date, figure, and scope. Never
strengthen wording. Leave unresolved rows tagged `verify`, ensure the UI visibly renders the
“confirm before relying on this” marker beside every occurrence, and report source, result,
changed confidence, and remaining gaps. Any claim outside §5 is a build failure or `SPEC-GAP`.
