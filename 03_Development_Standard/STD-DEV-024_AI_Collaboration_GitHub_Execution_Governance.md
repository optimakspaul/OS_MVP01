# STD-DEV-024 AI Collaboration and GitHub Execution Governance Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-024 |
| Version | v1.5.6 One-Person Team Operating Model Patch |
| Effective Date | 2026-05-15 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define how Gemini Research Intake, ChatGPT, Codex, Antigravity, GitHub Issues, Git branches, pull requests, Vercel Preview, Supabase and founder review must work together during AI-assisted development. |

---

## 1. Purpose

This standard strengthens the Optimaks Development Constitution for AI-assisted implementation.

It exists because Optimaks now uses multiple AI development agents and needs a repeatable governance rule for moving AI-generated code into GitHub safely.

This standard applies to:

```text
- Optimaks OS
- Aircon OS
- ACRA Radar
- Internal tools
- Client workflow automation systems
- MVP-01 and all future MVPs
```

---

## 2. Core Rule

No AI-generated code should directly enter `main`.

Every meaningful code change must pass through:

```text
Research Digest + ChatGPT Review, if needed
↓
GitHub Issue
↓
Feature Branch
↓
AI Implementation
↓
Local Test
↓
Git Diff Review
↓
Pull Request
↓
Vercel Preview / Staging Test
↓
Human Approval
↓
Merge to main
↓
Changelog / Documentation Update
```

---

## 3. One Issue / One Branch / One PR Rule

Each implementation task must follow this structure:

```text
One GitHub Issue
= One feature branch
= One pull request
= One scoped review
```

### Required Branch Naming

```text
feature/issue-001-nextjs-project-setup
feature/issue-002-supabase-client
feature/issue-006-auth-profiles-client-workspace
feature/issue-008-app-shell-layout
fix/issue-xxx-short-description
docs/issue-xxx-document-update
```

### Not Allowed

```text
main direct edits
test
final
new-code
paul-update
aircon-all
```

---

## 4. Codex / Antigravity Tool Boundary Rule

Codex and Antigravity must not be treated as interchangeable tools.

### Codex Primary Responsibilities

```text
- Backend logic
- Supabase schema and migrations
- Auth implementation
- RLS helper functions and policies
- CRUD logic
- Workflow actions
- Report and export logic
- Refactoring and bug fixing
- Test support
```

### Antigravity Primary Responsibilities

```text
- UI layout
- App Shell
- Navigation
- Shared components
- Responsive design
- Browser-based UI verification
- Visual iteration
- Frontend usability review
```


### Gemini Research Intake Responsibilities

```text
- Large document digest
- API documentation summary
- Dataset field dictionary
- Competitor / market research digest
- Client SOP summary
- Existing codebase architecture digest
```

Gemini must not directly instruct Codex or Antigravity to implement.

Gemini output must be reviewed by ChatGPT and converted into an approved AI Context Package before implementation.

### ChatGPT Primary Responsibilities

```text
- Scope control
- Change Request drafting
- Issue refinement
- Prompt preparation
- QA checklist preparation
- Documentation update
- Constitution governance
```

### Boundary Rule

```text
Codex should not redesign UI without an approved UI issue.
Antigravity should not rewrite database, auth, or RLS logic without an approved backend/security issue.
Both tools must read the same approved context package before implementation. If Gemini was used, both tools must use the ChatGPT-reviewed context package, not the raw Gemini digest.
```

---

## 4A. One-Person Team and AI Role Boundary Rule

Optimaks is founder-led and AI-assisted. AI tools, platforms and external partners are support layers, not decision makers.

### Role Boundary Summary

```text
Founder = decision, scope, sales, delivery and final quality gate
ChatGPT = strategy, documentation, constitution review, scope control and prompt design
Gemini = market research, vendor research and competitor digest
Codex = code implementation based on approved GitHub 20_Issues
Antigravity = UI prototyping and app page generation based on approved scope
GitHub = source of truth for code, documents, 20_Issues, versions and decisions
Vercel = preview, demo, staging and production deployment gate
Supabase = database, authentication, backend and data-security foundation
External partners = execution / lead-source / design / development support only
```

### Non-Delegation Rule

The following responsibilities must remain under founder review:

```text
- final company positioning
- client selection
- pricing decision
- package scope
- product roadmap priority
- production release approval
- client delivery acceptance
- whether an AI or partner output is accepted
```

AI-generated or partner-generated work must not be accepted, merged, deployed or delivered unless reviewed against the Optimaks Constitution.

---

## 5. Research-to-Implementation Handoff Rule

When Gemini or any research tool is used, the following handoff is required:

```text
Gemini Research Digest
↓
ChatGPT Review
↓
AI Context Package
↓
GitHub Issue
↓
Codex / Antigravity Execution Prompt
```

Raw research notes, long summaries, or competitor tables should not be pasted directly into Codex or Antigravity without scope control.

---

## 6. AI Code Human Review Rule

Any code generated by Codex, Antigravity, or another AI agent must pass human review before merge.

Minimum review checklist:

```text
- Review changed files
- Review git diff
- Confirm issue scope
- Run local tests
- Confirm no secrets committed
- Confirm no service role key exposed
- Confirm no scope expansion
- Confirm Vercel Preview or staging test result
```

---

## 7. Batch Scope Boundary Rule

Each batch must do only its approved scope.

Example:

```text
Next.js setup batch
= Do not add Supabase schema, Auth, or CRUD.

Supabase DB foundation batch
= Do not add Auth UI or RLS policy complexity.

Auth + Profiles batch
= Do not add business workflow modules.

RLS batch
= Do not add new business features.

App Shell batch
= Do not add Lead / Customer / Quote / Job CRUD.
```

If an AI tool adds out-of-scope work, that work must be removed, rejected, or converted into a separate Change Request.

---

## 8. Client Workspace Data Isolation Rule

All client-owned operational records must include `client_id`.

Required MVP tables include:

```text
leads
customers
quotes
jobs
follow_up_notes
activities
monthly_reports
```

The system must use:

```text
profiles
clients
client_users
client_id
RLS policies
```

to determine which records each logged-in user may access.

This rule applies before full SaaS billing or complex multi-tenant commercial features are introduced.

---

## 9. Preview Before Production Rule

All implementation branches must be verified through Vercel Preview or local staging before production merge.

Production may only receive code that has passed:

```text
- Local test
- Pull request review
- Preview / staging test
- QA checklist
- Human approval
```

Direct untested production replacement is not allowed.

---

## 10. Issue / Changelog Traceability Rule

Each completed issue must leave evidence.

Required evidence:

```text
- GitHub Issue status updated
- Pull Request linked to issue
- Test notes added to PR
- Changelog updated when functionality, architecture, security, or workflow changes
- Related docs updated if process or system behavior changes
```

If the change affects repeated development behavior, review whether the constitution should be updated under `STD-DEV-014`.

---

## 11. Conflict Prevention Rule

Codex and Antigravity should not modify the same files at the same time.

Recommended sequence for mixed tasks:

```text
Codex implements data / logic layer
↓
Commit and push
↓
Antigravity pulls latest branch
↓
Antigravity implements UI layer
↓
Commit and push
↓
Human reviews combined diff
```

If both tools need to touch the same component, the task must be split into sub-20_Issues or clearly sequenced.

---

## 12. Required PR Template Controls

Every PR should answer:

```text
- Which issue does this close?
- What is included?
- What is excluded?
- What was tested?
- Was Vercel Preview checked?
- Were secrets avoided?
- Was client_id / RLS respected where applicable?
- Was CHANGELOG updated if needed?
```

Use `09_Templates/TPL-DEV-012_Pull_Request_Review_Template.md` or `.github/pull_request_template.md`.

---

## 13. Done Definition

An issue is not done when AI says the code is done.

An issue is done only when:

```text
- Acceptance criteria pass
- Local test passes
- Git diff is reviewed
- PR is created
- Preview / staging test passes where applicable
- Human approval is given
- Documentation and changelog are updated if needed
```

---

## 14. Relationship to Existing Standards

This standard strengthens, but does not replace:

```text
STD-DEV-002 AI Assisted Development Workflow
STD-DEV-006 Branch Commit Push Workflow
STD-DEV-007 Staging Preview Production Workflow
STD-DEV-008 Document Update Workflow
STD-DEV-009 QA and Security Standard
STD-DEV-011 Codex Prompt Standard
STD-DEV-014 Constitution Upgrade Trigger Rule
STD-DEV-020 AI Context Package and Semi-Automated Execution Standard
STD-DEV-025 AI Research Intake and Multi-Model Handoff Standard
```
