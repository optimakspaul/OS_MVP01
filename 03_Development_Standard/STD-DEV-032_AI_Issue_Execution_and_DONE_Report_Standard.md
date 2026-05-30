# STD-DEV-032 AI Issue Execution and DONE Report Standard

**Document Title:** AI Issue Execution and DONE Report Standard  
**Document Code:** STD-DEV-032  
**Version:** v1.5.9  
**Category:** Development Standard  
**Status:** Active  

---

## 1. Purpose

All AI-assisted implementation work must follow a standard issue execution prompt.

The founder should not manually rewrite checklist, completion report, rollback plan, changed-file summary, or merge readiness instructions for every issue.

The core operating principle is:

```text
Founder chooses the issue.
Founder provides the standard prompt.
Codex / Antigravity executes only that issue.
AI creates or updates DONE.md.
Founder reviews, tests, and decides merge.
```

---

## 2. Standard Rule

For every implementation issue, the founder only needs to provide:

```text
- ISSUE ID
- Issue title
- Branch name
- Related issue workpack
- Any special instruction
```

The AI tool must follow:

```text
templates/AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md
```

---

## 3. Required AI Tool Behavior

Codex / Antigravity must:

```text
- read docs/constitution/CURRENT_CONSTITUTION.md or 01_Constitution/CURRENT_CONSTITUTION.md
- read required repo documents
- read the related issue workpack
- implement only the assigned issue
- keep the diff small and reviewable
- avoid scope expansion
- avoid future-version features
- avoid secrets and real client data
- check acceptance criteria
- record changed files
- record tests run
- document assumptions and risks
- document rollback plan
- create or update ISSUE-XXX_DONE.md
- report merge readiness honestly
```

---

## 4. Required Output

Every implementation issue must create or update:

```text
20_Issues/ISSUE-XXX/ISSUE-XXX_DONE.md
```

The DONE report must include:

```text
1. What was done
2. Changed files
3. Tests run
4. Acceptance criteria check
5. Scope check
6. Secrets / real client data check
7. Risks / notes
8. Rollback plan
9. Constitution version used
10. Constitution change impact
11. Ready to merge: Yes / No
```

---

## 5. Code Handling Rule

AI tools must not create code zip files for each issue.

Code must remain in:

```text
Git branch
Pull Request
commit history
```

Issue records must remain in:

```text
20_Issues/ISSUE-XXX/
```

Testing evidence, if needed, must remain in:

```text
qa/evidence/ISSUE-XXX/
```

---

## 6. Founder Responsibility

The founder is responsible for:

```text
- choosing the next issue
- providing the standard issue prompt
- providing required platform access manually where needed
- reviewing ISSUE-XXX_DONE.md
- testing the main workflow or preview
- approving or rejecting merge
```

The founder is not responsible for:

```text
- manually writing repeated checklists
- manually writing completion reports
- manually listing changed files
- manually drafting rollback plans
- manually recreating prompt rules every time
```

---

## 7. Merge Rule

An issue can be merged only when:

```text
- DONE.md exists
- acceptance criteria are checked
- scope check is passed
- no secrets are committed
- no real client data is used
- rollback plan is documented
- constitution version used is recorded
- founder approves merge
```

For database, RLS, auth, deployment, export, or client-data 20_Issues, stricter review is required.

---

## 8. Minimum Founder Workflow

```text
1. Choose issue
2. Open or assign branch
3. Paste standard prompt
4. Wait for AI result
5. Review DONE.md
6. Test preview / main workflow
7. Merge or request fix
```

---

## 9. When to Require Extra Evidence

Normal 20_Issues only require `DONE.md`.

Extra checklist / screenshots / evidence are required for:

```text
RLS / security
database migration
auth logic
production deployment
monthly report / export
cross-client data access
final QA
high-risk client data workflow
```

Evidence path:

```text
qa/evidence/ISSUE-XXX/
```

---

## 10. Prohibited Behavior

AI tools must not:

```text
- commit .env.local
- expose secret values
- use service_role key in frontend
- use real client data
- modify DB/RLS/Auth unless issue explicitly allows it
- deploy production without founder approval
- create code zip per issue
- silently expand scope
- silently change constitution rules
```

---

## 11. Constitution Version Requirement

Every issue DONE report must include:

```text
## Constitution Version Used
v1.5.9

## Constitution Change Impact
- No impact
- Applied new rule
- Requires follow-up
- Blocked by constitution change
```

AI tools must flag any conflict between the assigned issue and the current constitution.
