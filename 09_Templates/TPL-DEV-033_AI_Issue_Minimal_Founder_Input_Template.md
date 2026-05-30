# TPL-DEV-019 AI Issue Minimal Founder Input Template

Use this when asking Codex / Antigravity to run a single issue.

---

## Minimal Founder Input

```text
Use templates/AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md.

Run this issue:
ISSUE-XXX — <Issue Title>

Branch:
feature/issue-xxx-<short-name>

Issue workpack:
issue-workpacks/<path-to-issue-workpack>/01_PRE_START_STANDARD_PACKAGE.md

Special instruction:
<optional>

Important:
- Do not create a code zip.
- Keep code in branch / PR.
- Create or update 20_Issues/ISSUE-XXX/ISSUE-XXX_DONE.md.
- Report Ready to merge: Yes / No.
```

---

## Example

```text
Use templates/AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md.

Run this issue:
ISSUE-012 — Build Leads List Page

Branch:
feature/issue-012-leads-list-page

Issue workpack:
issue-workpacks/ISSUE-012_build-leads-list-page/01_PRE_START_STANDARD_PACKAGE.md

Special instruction:
Keep the first version simple. Use existing table/card components if available.

Important:
- Do not create a code zip.
- Keep code in branch / PR.
- Create or update 20_Issues/ISSUE-012/ISSUE-012_DONE.md.
- Report Ready to merge: Yes / No.
```
