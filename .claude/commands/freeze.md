# /freeze

Run the complete release gate and refuse to pass on any failure. Verify: all three doors complete
with no dead ends; `/consent-audit` is clean; every `verify` fact renders with a visible marker;
production returns HTTP 200 in a private mobile view; `?lang=hi` and back/forward round-trip on
every screen without losing in-memory/URL state; every build pass has a real entry in
`codex/EVIDENCE-LOG.md`; no §9 forbidden copy, data leak, auth, storage, analytics, or critical-
path external API. Include mobile keyboard/accessibility, reduced motion, integer rupee formatting,
download/print draft wording, and footer disclaimer. Report PASS/FAIL per gate and, on failure,
give the shortest path to green ordered by risk: consent first, legal facts/tone second, all else
afterward. Never call a failing build frozen.
