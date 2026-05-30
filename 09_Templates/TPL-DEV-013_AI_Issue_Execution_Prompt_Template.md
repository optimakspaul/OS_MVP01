# TPL-DEV-013 AI Issue Execution Prompt Template

| Field | Value |
|---|---|
| Template Code | TPL-DEV-013 |
| Version | v1.5.4 Current Consolidated Release |
| Purpose | Standard prompt format for sending a GitHub Issue to Codex, Antigravity, or another AI development tool. |

---

## Prompt Template

```text
You are working on the repository: [repo name].

Current issue:
ISSUE-___: [Issue title]

Branch:
[feature/issue-xxx-short-name]

Read these documents first:
- [doc 1]
- [doc 2]
- [doc 3]

Research / handoff context, if applicable:
- Gemini Research Digest used: [Yes / No]
- ChatGPT review completed: [Yes / No]
- Do not use raw Gemini digest as implementation scope. Use only the approved AI Context Package and GitHub Issue.

Constitution rules:
- Small Core First
- Workflow First
- One Core + Industry Template
- No scope expansion without Change Request
- Staging Test before Production Deploy
- No AI-generated code directly into main
- No raw Research Digest directly into implementation
- No secrets / client sensitive data in AI prompts

Scope:
[Clearly list what this issue should do.]

Do not do:
[Clearly list excluded features and files / modules that should not be changed.]

Acceptance criteria:
[Paste acceptance criteria from GitHub Issue.]

Testing required:
[List commands and manual tests.]

After implementation, return:
- changed files
- commands run
- test result
- assumptions
- unresolved risks
- whether CHANGELOG / docs need update
```

---

## Tool Boundary Reminder

```text
Codex: backend, database, auth, RLS, CRUD, logic.
Antigravity: UI, layout, navigation, shared components, responsive, browser verification.
Gemini: research intake / large document digest only.
ChatGPT: scope, CR, research review, issue refinement, prompt, QA, documentation.
```


---

## v1.6.1 Required Scope Fields

Before implementation, confirm or infer:

```text
Required Context Level: Mini / Standard / Full
Allowed Files / Directories:
Forbidden Files / Directories:
Validation Level:
```

Use `AGENTS.md` first. Do not load strategy, sales, ISO, grant, archive, or example documents unless required by the issue.

DONE.md must record the context level used, scope check, validation result, secret check, and rollback plan.
