# STD-DEV-018 UI Backend Parallel Development and AI Context Control Rule

Version: v1.4.3  
Owner: Optimaks Pte Ltd  
Status: Active Patch Rule  
Related Constitution: Optimaks Development Constitution v1.4.3 Integrated

---

## 1. Purpose

This standard defines how Optimaks should run UI / UX work and backend / architecture work in parallel without losing consistency.

The purpose is to allow faster development while preventing UI, backend, and AI-generated code from drifting apart.

---

## 2. Core Rule

UI and backend may be developed in parallel only after a shared context package exists.

The shared context package must include:

1. Project brief.
2. User flow.
3. Page map.
4. Component map.
5. Data model draft.
6. Field list.
7. Status logic.
8. Out-of-scope list.
9. Acceptance criteria.
10. Testing method.

---

## 3. Tool Role Separation

| Tool | Main Role | Should Avoid |
|---|---|---|
| ChatGPT | Thinking, requirement structuring, CR drafting, document drafting, prompt preparation | Direct code execution without project context |
| Antigravity | UI / UX, visual flow, layout, interaction, front-end review | Redefining backend data models alone |
| Codex | Implementation, refactor, data structure, API logic, test support | Expanding scope beyond issue or CR |
| GitHub | Source of truth, Issues, commits, diffs, changelog, documentation | Being used only as backup without review discipline |

---

## 4. UI First vs Backend First Rule

UI may start first when:

1. The workflow is still being explored.
2. A demo is needed for sales or client explanation.
3. The purpose is to validate user flow.
4. Mock data is enough.

Backend may start first when:

1. The data model is already clear.
2. The workflow depends on integration.
3. Security, auth, database, or API design is the main risk.
4. The feature affects production or client data.

For most Optimaks MVPs, UI and backend should be planned together, but implementation can be staged.

---

## 5. Reconciliation Rule

After parallel work, the outputs must be reconciled through:

1. File diff review.
2. Data field comparison.
3. Page behavior check.
4. Component responsibility check.
5. Acceptance criteria testing.
6. Documentation update.
7. Changelog entry.

A UI that cannot connect to the planned data model is not complete.

A backend that does not support the intended user flow is not complete.

---

## 6. AI Prompt Requirement

AI execution prompts must not be vague.

A proper execution prompt should include:

1. Goal.
2. Scope.
3. Files or modules to modify.
4. Files or modules not to modify.
5. Relevant constitution rules.
6. Relevant MVP documents.
7. Data model or mock data.
8. UI/page map.
9. Acceptance criteria.
10. Testing instructions.
11. Expected output summary.

---

## 7. Summary

Parallel development is allowed only when the shared context is clear.

Speed comes from controlled parallelism, not from letting different AI tools guess independently.
