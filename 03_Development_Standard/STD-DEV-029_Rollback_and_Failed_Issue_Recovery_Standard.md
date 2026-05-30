# STD-DEV-029 Rollback and Failed Issue Recovery Standard

## 1. Purpose

This standard defines what Optimaks should do when an AI-assisted issue is implemented incorrectly, breaks existing behavior, modifies forbidden files, or becomes too risky to merge.

v1.5.8 preserved interrupted work.  
v1.5.8 defines how to recover from failed work.

---

## 2. Core Principle

```text
Bad AI work should not be fixed blindly.
It must be classified, contained, and recovered through a controlled path.
```

---

## 3. Failure Types

### Type A — Minor Implementation Defect

Examples:

- UI spacing issue
- small TypeScript error
- missing import
- typo
- simple responsive bug

Recovery:

```text
Allow the same tool to fix once or twice within the same issue branch.
```

### Type B — Scope Violation

Examples:

- AI modifies unrelated files
- AI rewrites shared components without permission
- AI changes app shell when not authorized
- AI touches files outside allowed list

Recovery:

```text
Stop implementation.
Review git diff.
Revert unauthorized files.
Update issue prompt.
Continue only after scope is restored.
```

### Type C — Build / Runtime Failure

Examples:

- app cannot build
- route crashes
- broken import tree
- hydration error
- Supabase client misuse

Recovery:

```text
Ask Codex to repair only the failing area.
Do not add new features while repairing.
```

### Type D — Security / Data Isolation Failure

Examples:

- RLS weakened
- auth bypassed
- tenant isolation changed
- service role key exposed
- production env touched

Recovery:

```text
Stop immediately.
Do not ask AI to continue freely.
Founder review required.
Revert branch or create isolated security repair issue.
```

### Type E — Architecture Drift

Examples:

- duplicate layout system
- duplicate auth context
- duplicate Supabase client
- incompatible route structure
- new framework pattern not approved

Recovery:

```text
Do not merge.
Either discard branch or split into controlled refactor issue.
```

---

## 4. Recovery Options

### Option 1 — Repair

Use when failure is small and localized.

```text
Same branch.
Small targeted fix.
No feature expansion.
```

### Option 2 — Revert Specific Files

Use when AI modified unauthorized files.

```bash
git checkout -- path/to/file
```

or review diff and manually restore.

### Option 3 — Revert Commit

Use when a commit is clearly bad.

```bash
git revert <commit-sha>
```

### Option 4 — Discard Branch

Use when the branch is too risky.

```text
Close branch.
Create a new issue branch.
Carry forward only lessons learned.
```

### Option 5 — Split Issue

Use when original issue was too large.

```text
Break into smaller ISSUE-XXXA / ISSUE-XXXB / ISSUE-XXXC tasks.
```

---

## 5. Required Failed Issue Report

If an issue is stopped, reverted, discarded or split, create:

```text
20_Issues/ISSUE-XXX/ISSUE-XXX_FAILED_RECOVERY_REPORT.md
```

Required contents:

- failure type
- modified files
- root cause
- recovery action
- lessons learned
- new issue split if needed
- decision: repair / revert / discard / split

---

## 6. Prohibited Behavior

Do not:

- let AI keep fixing blindly after repeated failures
- merge a branch with unknown scope changes
- fix security/RLS/auth 20_Issues through ad hoc prompt
- restart from scratch without recording why
- hide failed work from CHANGELOG or issue notes if it affected release readiness
