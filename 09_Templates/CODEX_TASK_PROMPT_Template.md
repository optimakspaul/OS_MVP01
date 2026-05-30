# Codex Task Prompt Template

| Field | Value |
|---|---|
| Document Code | TPL-002 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Reusable prompt template for Codex tasks. |

---


```text
Context:
[Describe project, repo, current module, and relevant file/document references.]

Issue / Change Request:
[Paste GitHub Issue or CR.]

Task:
[Describe exactly what Codex should do.]

Constraints:
[Files not to touch, features not to break, risk areas, style rules.]

Expected Output:
[Code changes, tests, explanation, migration, docs.]

Testing:
[Ask Codex to provide test steps and expected result.]

Important:
For large or high-risk changes, first inspect the current project structure and propose an implementation plan before editing files.
```
