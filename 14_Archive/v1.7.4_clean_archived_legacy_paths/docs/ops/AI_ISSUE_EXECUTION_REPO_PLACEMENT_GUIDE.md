# AI Issue Execution Repo Placement Guide

**Version:** v1.5.9  

---

## 1. Required Repo Files

Place these files in the repo:

```text
templates/AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md
templates/ISSUE_DONE_REPORT_TEMPLATE.md
20_Issues/_TEMPLATE/ISSUE-XXX_DONE.md
```

Optional constitution library placement:

```text
03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
09_Templates/TPL-DEV-017_AI_Issue_Execution_Prompt_Template.md
09_Templates/TPL-DEV-018_Issue_DONE_Report_Template.md
09_Templates/TPL-DEV-019_AI_Issue_Minimal_Founder_Input_Template.md
```

---

## 2. Per-Issue Output Location

For every issue:

```text
20_Issues/ISSUE-XXX/ISSUE-XXX_DONE.md
```

Only add evidence when useful:

```text
qa/evidence/ISSUE-XXX/
```

---

## 3. Code Location

Code stays in:

```text
feature/issue-xxx-branch
Pull Request
commit history
```

Do not create:

```text
ISSUE-XXX_code.zip
```

---

## 4. When to Update docs/

Update `docs/` only when stable specifications change:

```text
architecture
schema
workflow
RLS/security rule
deployment flow
delivery scope
```

Do not put daily issue completion notes inside `docs/`.
