# /bilingual-audit

Locate the single strings dictionary and compare its complete key set for `en` and `hi`. Fail on
missing, empty, fallback-only, or obviously machine-translated legalese values. Scan templates,
JS/TS, HTML, CSS-generated content, alerts, print views, and error handlers for hardcoded visible
strings outside the dictionary; distinguish code identifiers and test fixtures. Exercise the
`?lang=en`/`?lang=hi` toggle on every route and confirm state survives navigation and back/forward.
Report key, locale, route, and exact remediation for every issue.
