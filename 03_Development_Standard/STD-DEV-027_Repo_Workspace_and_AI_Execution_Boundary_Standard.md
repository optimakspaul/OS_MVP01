# STD-DEV-027 Repo Workspace and AI Execution Boundary Standard

## 1. Purpose

This standard defines how Optimaks AI development tools should access the project repository and how their modification scope must be controlled.

It prevents:

- stale ZIP context
- duplicated implementation
- uncontrolled refactoring
- broken dependency links between 20_Issues
- accidental modification of unrelated files
- confusion between background context and execution scope

---

## 2. Core Principle

```text
Full repo is readable.
Only the assigned issue scope is editable.
```

AI tools need full repo context to understand:

- previous 20_Issues
- existing components
- routing
- app shell
- shared UI
- Supabase client structure
- authentication
- workspace / tenant context
- database schema
- current file structure

However, AI tools must not treat the whole repo as editable scope.

---

## 3. Repo as Central Source of Truth

The GitHub repo is the official central source of truth.

It should contain the latest approved version of:

- constitution
- MVP scope
- issue files
- product architecture
- AI workflow rules
- source code
- migrations
- README
- CHANGELOG
- acceptance checklists

ZIP files are not the primary daily development source.

---

## 4. ZIP Usage Rule

ZIP files are allowed for:

- archive
- backup
- handover
- batch review
- fallback when repo access is unavailable

ZIP files should not be used for:

- daily issue implementation
- replacing repo context
- transferring WIP state between AI tools when Git is available
- hiding Git diff / branch history
- bypassing issue-scoped execution

Summary:

```text
Repo = daily development source of truth
ZIP = archive / handover / backup / review / fallback
```

---

## 5. Clone / Pull Rule

Clone is only needed once per workspace.

```bash
git clone <repo-url>
cd <repo-name>
```

After that, updates should be synchronized with:

```bash
git pull
```

A constitution update does not require a new clone.

A new clone is only required when:

- using a new machine
- the local workspace is corrupted
- a clean independent workspace is intentionally needed
- git configuration is broken

---

## 6. Branch Rule

Each implementation issue should use a dedicated branch.

Recommended format:

```text
feature/issue-XXX-short-description
fix/issue-XXX-short-description
docs/issue-XXX-short-description
```

Example:

```text
feature/issue-012-customer-dashboard-ui
```

---

## 7. Required Pre-Implementation Scan

Before editing files, the AI tool must identify:

1. Files to inspect
2. Previous issue dependencies
3. Existing components / routes / utilities to reuse
4. Files expected to be modified
5. Files that must not be modified
6. Database / RLS / auth / tenant isolation impact
7. Testing requirements
8. Documentation update requirement

The AI tool must report the scan before making significant changes.

---

## 8. Allowed Tool Access Model

### ChatGPT

Reads repo through GitHub connector or provided files.

Main role:

- strategy
- documentation
- constitution review
- issue decomposition
- prompt writing
- governance review

### Codex

Reads repo through local workspace or Codex Web.

Main role:

- backend implementation
- Supabase
- API
- auth
- business logic
- bug fix
- test improvement

### Antigravity

Reads repo through local workspace.

Main role:

- UI
- layout
- app shell
- page prototype
- dashboard
- responsive design
- browser verification

Antigravity must not modify:

- Supabase RLS
- database schema
- tenant isolation
- auth logic
- production deployment settings

unless the issue explicitly authorizes it.

### Gemini

Reads repo through Gemini CLI or GitHub Action.

Main role:

- research
- digest
- PR review
- docs consistency check
- issue triage

Gemini should not become the default implementer for sensitive backend, RLS, or auth changes.

---

## 9. Standard Prompt Requirement

Every AI implementation prompt should include:

```md
You have access to the full repository for context.

Implement ISSUE-XXX only.

Before implementation:
1. Read AGENTS.md.
2. Read docs / constitution governance files.
3. Read the issue starter pack.
4. Perform a pre-implementation scan.

Rules:
- Do not modify unrelated files.
- Do not refactor existing architecture unless required.
- Do not change database schema, RLS, auth, or tenant isolation unless explicitly required.
- Keep the diff small and reviewable.
- Report inspected files, modified files, test steps, risks, and assumptions.
```

---

## 10. Prohibited Behavior

AI tools must not:

- treat the full repo as editable scope
- rewrite unrelated files
- duplicate existing components
- bypass existing shared components
- modify schema / RLS / auth without authorization
- restart an issue without checking current branch and progress log
- hide large changes inside a single unexplained diff
- use old ZIP files as if they are current source of truth
