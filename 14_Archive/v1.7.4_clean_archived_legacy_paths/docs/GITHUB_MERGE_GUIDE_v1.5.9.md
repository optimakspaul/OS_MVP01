# GitHub Merge Guide — Constitution v1.5.9

## Recommended Placement

```text
docs/constitution/v1.5.9/
├── README.md
├── CHANGELOG.md
├── 00_Admin/
├── 03_Development_Standard/
├── 09_Templates/
└── 08_Preflight/

templates/
├── AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md
└── ISSUE_DONE_REPORT_TEMPLATE.md

20_Issues/PREP-000/
├── PREP-000_ENV_CHECKLIST.md
├── PREP-000_ACCESS_CHECKLIST.md
└── PREP-000_DONE.md
```

---

## Suggested Commit

```text
docs(constitution): add ai issue execution standard v1.5.9
```

---

## Suggested PR Description

```text
This PR upgrades Optimaks Document Library from v1.5.8 to v1.5.9.

Added:
- STD-DEV-032 AI Issue Execution and DONE Report Standard
- AI issue execution prompt template
- Issue DONE report template
- PREP-000 environment and access preparation
- Environment and access checklists

Purpose:
- Move repeated checklist/report/rollback instructions into standard prompts
- Let Codex / Antigravity produce DONE.md for each issue
- Reduce founder manual process work
```

---

## Merge Checklist

```text
[ ] STD-DEV-032 exists
[ ] AI prompt template exists
[ ] DONE report template exists
[ ] PREP-000 exists
[ ] No secrets included
[ ] No real client data included
[ ] No product scope changed
[ ] Founder accepts v1.5.9 workflow
```
