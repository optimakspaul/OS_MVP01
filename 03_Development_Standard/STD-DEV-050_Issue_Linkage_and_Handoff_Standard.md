# STD-DEV-050 Issue Linkage and Handoff Standard

**Document Code:** STD-DEV-050  
**Version:** v1.7.9.1-issue-linkage-handoff  
**Status:** Active  
**Applies To:** All MVP / Phase / Issue workpacks, DONE reports, PRs, branch naming, GitHub issue links, and multi-issue development handoff  
**Related Active:** STD-DEV-046, STD-DEV-047, STD-DEV-048, TPL-DEV-029, TPL-DEV-032, TPL-DEV-036
**Active Related:** STD-DEV-049
**Future Review References:** CHK-DEV-020

---

## 1. Purpose

This standard defines how Optimaks 20_Issues must be connected to each other through dependency, output, handoff, and traceability records.

It exists to prevent disconnected issue execution, missing prerequisites, duplicated work, and hidden carry-over risk.

---

## 2. Core Principle

```text
Every issue must know:
1. What it depends on.
2. What previous outputs it must read.
3. What it produces for the next issue.
4. Whether it is safe to proceed to the next issue.
```

Issue linkage must be recorded in files, not memory.

---

## 3. Required Linkage Locations

Issue linkage must exist in four layers:

```text
1. ISSUE-XXX_Workpack.md
   → Issue Linkage section

2. ISSUE-XXX_DONE_Report.md
   → Handoff to Next Issue section

3. 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
   → MVP-level issue dependency and status register

4. GitHub Issue / PR / branch / commit message
   → External traceability and merge history
```

---

## 4. Workpack Requirement

Every `ISSUE-XXX_Workpack.md` must include:

```markdown
## Issue Linkage

### Previous Issue Dependency

Depends On:
-

Required Previous Outputs:
-

Dependency Status:
- [ ] PASS
- [ ] PASS WITH WARNINGS accepted
- [ ] BLOCKED
- [ ] Not applicable

### This Issue Outputs

This issue must produce:
-

### Next Issue Handoff

Potential Next Issue:
-

Handoff Notes:
-
```

If the issue has no dependency, it must explicitly state:

```text
Depends On: None
Reason: This issue is an entry / foundation / verification issue.
```

---

## 5. DONE Report Requirement

Every `ISSUE-XXX_DONE_Report.md` must include:

```markdown
## Handoff to Next Issue

Next Issue:
-

Ready for next issue?
- [ ] Yes
- [ ] Yes, with warnings
- [ ] No

Required Follow-up Before Next Issue:
-

Files / Decisions Next Issue Should Read:
-

Risks Carried Forward:
-
```

If the issue is not ready for the next issue, the next issue must not start unless a human reviewer explicitly accepts the risk.

---

## 6. MVP Issue Chain Register Requirement

Each MVP must maintain an issue chain register.

For MVP01, the required register is:

```text
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

The register must track:

```text
Issue ID
Issue Name
Depends On
Required Previous Outputs
Output For Next Issue
Status
PR / Branch / Commit
Warnings
Next Action
```

---

## 7. GitHub Linkage Requirement

When using GitHub Issues and PRs, issue and PR descriptions should include:

```markdown
## Linked Issues

Depends on:
-

Blocks:
-

Related:
-

## PR Link

Closes:
-
```

PR descriptions should include:

```markdown
## Issue Link

Closes ISSUE-XXX / GitHub issue number

## Depends On
-

## Handoff
This PR prepares:
-
```

---

## 8. Branch Naming Rule

Branches should include the issue ID:

```text
feature/issue-001-core-workspace-tenant-foundation
feature/issue-002-supabase-client-env-foundation
feature/issue-003-nextjs-app-foundation
```

---

## 9. Commit Message Rule

Commit messages should include the issue ID:

```text
ISSUE-003: Add Next.js app foundation
```

or:

```text
Add ISSUE-003 Next.js app foundation
```

---

## 10. Merge Dependency Rule

Do not merge or start a dependent issue if the required previous issue is:

```text
FAIL
BLOCKED
Missing DONE Report
Missing changed-file summary
Missing validation result
Missing handoff notes
```

A dependent issue may proceed after `PASS WITH WARNINGS` only if:

```text
- warnings are explicitly accepted
- risks are recorded
- follow-up issue is created if needed
- no security / tenant / RLS / production risk is unresolved
```

---

## 11. Harness Review Rule

After 3–5 20_Issues, the `MVP01_ISSUE_CHAIN_REGISTER.md` should be used to support the Harness Review.

Review should identify:

```text
Repeated warnings
Missing test cases
File boundary problems
Validation gaps
Tool routing mistakes
Automation candidates related to STD-DEV-049
Checklist updates for CHK-DEV-020
```

---

## 12. Scope Boundary

This standard does not define the actual dependencies of every issue. Actual dependencies must be recorded in:

```text
- each issue workpack
- each DONE report
- MVP01_ISSUE_CHAIN_REGISTER.md
- GitHub issue / PR links when available
```

The constitution and this standard define the rule. The project layer stores the actual issue chain.
