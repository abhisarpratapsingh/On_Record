# /tone-audit

Read every user-facing string in both `en` and `hi`, including fixtures rendered as copy, errors,
empty states, buttons, print/download output, titles, tooltips, and fallback text. Flag any legal
determination or implication such as “you are eligible”, “you will inherit”, “your share is”,
“guaranteed”, or “this is valid”, plus softer equivalents. Cross-check the §9 grep list and
inspect will-flow uses of `sign`/`execute`. Require fact-on-record/general-rule wording, the
non-determination disclaimer on entitlement screens, and the draft-only disclaimer beside every
will draft. Report exact string, locale, location, risk, and replacement copy.
