# ISSUE-008 Workpack

**Issue:** ISSUE-008  
**Title:** Module Library Foundation  
**Project:** MVP01  
**Phase:** Phase 2 — Module Foundation  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** Architecture / Documentation Alignment  
**Depends On:** ISSUE-007 Architecture Alignment  
**Previous Issue Status:** PASS WITH WARNINGS, Founder Accepted  
**Branch:** feature/issue-008-module-library-foundation  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/`

---

## 1. Purpose

ISSUE-008 establishes the MVP01 Module Library Foundation.

This issue translates the v0.3 architecture package into a canonical MVP01 module list and Starter / Grow / Pro plan-depth matrix.

It is not a coding issue and not a database implementation issue.

ISSUE-008 must define:

```text
1. Canonical module list
2. Starter / Grow / Pro depth mapping
3. MVP01 included modules
4. MVP02–MVP05 reserved modules
5. Included / reserved rule
6. Boundary between plan-depth and data isolation
7. Handoff to ISSUE-009 Industry Template Foundation
```

---

## 2. Architecture Alignment

ISSUE-008 must preserve the ISSUE-007 architecture alignment:

```text
MVP01 = Starter Complete + Optimaks OS Basic
Phase Range = Phase 0 through Phase 7
Issue Range = ISSUE-000 through ISSUE-018
ISSUE-007 = Architecture Alignment
ISSUE-008 = Module Library Foundation
ISSUE-009 = Industry Template Foundation
```

ISSUE-008 must not revert to the older RLS-centered issue chain.

---

## 3. Dependency Gate

Codex must stop with `FAIL - Dependency gate not satisfied` unless all are true:

```text
1. ISSUE-007 status is PASS or PASS WITH WARNINGS.
2. ISSUE-007 Founder Acceptance is recorded as Accepted.
3. MVP01 baseline says MVP01 = Starter Complete + Optimaks OS Basic.
4. MVP01 phase map includes Phase 0 through Phase 7.
5. ISSUE-008 is listed as Module Library Foundation in Phase 2.
6. ISSUE-008 workpack exists and is approved.
7. ISSUE-008 runs on its own branch.
```

---

## 4. Required Reference Files

Codex must read these if present:

```text
AGENTS.md
README.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Architecture_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Phase_Issue_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Flow_Alignment_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-007-architecture-alignment/ISSUE-007_Reserved_Boundary_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Source_Alignment_Reference.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Workpack.md
```

---

## 5. Required Outputs

Create or complete:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Module_Library_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Plan_Depth_Matrix_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Included_Reserved_Rules.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_Handoff_to_Industry_Template.md
12_Projects/MVP01/20_Issues/ISSUE-008-module-library-foundation/ISSUE-008_DONE_Report.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Optional updates if needed and strictly documentation-only:

```text
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
```

---

## 6. Canonical Module Matrix

Use this module matrix as the source of truth:

| Module | Starter | Grow | Pro | MVP 建議 |
|---|---|---|---|---|
| Lead Module | Basic | Full | Full | MVP01 起 |
| Customer Module | Basic | Full | Full | MVP01 起 |
| Quote Module | Estimate | Full | Approval | MVP01 / MVP02 / MVP03 |
| Booking Module | Manual | Calendar | Branch / Technician Scheduling | MVP01 / MVP02 / MVP03 |
| Payment Module | Status | Reminder | Advanced View | MVP01 / MVP02 / MVP03 |
| Reminder Module | Basic | Full | Workflow-based | MVP01 / MVP02 / MVP03 |
| Report Module | Basic | Monthly | Dashboard | MVP01 / MVP02 / MVP03 |
| Team Module | Reserved | Basic | Advanced | MVP02 起 |
| Service History Module | Reserved / Basic | Full | Full | MVP02 起 |
| Job Card Module | Reserved | Optional | Full | MVP03 起 |
| Technician Module | Reserved | Reserved / Optional | Full | MVP03 起 |
| Branch Module | Reserved | Reserved | Full | MVP03 起 |
| Workflow Template Module | Reserved | Reserved / Basic | Full | MVP03 起 |
| Approval Module | Reserved | Reserved / Optional | Full | MVP03 起 |
| Client Lifecycle Module | Reserved | Reserved | Reserved / Basic | MVP04 起 |
| Plan / Module Control | Reserved | Reserved | Reserved / Basic | MVP04 起 |
| Template Library | Reserved | Reserved | Reserved / Basic | MVP04 起 |
| Billing Module | Reserved | Reserved | Reserved | MVP04 起 |
| Support Tracker | Reserved | Reserved | Reserved | MVP04 起 |
| Platform Analytics | Reserved | Reserved | Reserved | MVP04 起 |
| AI Copilot | Future | Future | Future | MVP05 |
| Automation Engine | Future | Future | Future | MVP05 |
| Integration Ecosystem | Future | Future | Future | MVP05 |

---

## 7. MVP01 Included Module Rule

MVP01 includes only Starter-depth foundation for:

```text
Lead Module = Basic
Customer Module = Basic
Quote Module = Estimate
Booking Module = Manual
Payment Module = Status
Reminder Module = Basic
Report Module = Basic
```

MVP01 may document these modules, but must not fully implement all future depths.

---

## 8. Reserved Boundary Rule

ISSUE-008 must clearly mark the following as reserved:

```text
Grow complete collaboration
Pro technician / branch management
Full payment gateway
Full automation
Full SaaS billing
Full Optimaks Platform
AI copilot
Automation engine
Integration ecosystem
```

---

## 9. Plan-depth vs Data-isolation Boundary

ISSUE-008 must make this boundary explicit:

```text
Plan depth decides which modules/features are available.
Workspace / tenant boundary decides which data a user can access.
Plan depth must not be treated as RLS or data isolation.
```

This prevents Starter / Grow / Pro from being incorrectly implemented as security policies.

---

## 10. Forbidden Scope

Codex must not:

```text
Create migrations
Create or modify database tables
Create module tables
Create template tables
Create entitlement tables
Create RLS
Create RLS policies
Modify app source code
Modify package files
Modify env files
Create UI
Create Supabase client code
Implement plan gating in code
Start ISSUE-009
```

---

## 11. Success Criteria

ISSUE-008 is PASS if:

```text
1. ISSUE-007 founder acceptance is confirmed.
2. Module library matrix is documented in baseline.
3. MVP01 included modules are clearly marked.
4. Grow / Pro / Platform / AI / Automation / Integration are clearly reserved.
5. Plan-depth vs data-isolation boundary is clear.
6. ISSUE-009 handoff is clear.
7. No forbidden-scope files are modified.
8. Validation / forbidden-scope audit passes.
```

ISSUE-008 is PASS WITH WARNINGS if non-blocking documentation residue or pre-existing baseline drift remains.

ISSUE-008 is FAIL if it creates database schema, app code, module tables, template tables, RLS, or ISSUE-009 work.

---

## 12. Handoff to ISSUE-009

ISSUE-009 may start only if ISSUE-008 provides:

```text
MVP01_MODULE_LIBRARY_MATRIX.md
ISSUE-008_Module_Library_Notes.md
ISSUE-008_Plan_Depth_Matrix_Notes.md
ISSUE-008_Included_Reserved_Rules.md
ISSUE-008_Handoff_to_Industry_Template.md
ISSUE-008_DONE_Report.md
Updated MVP01_ISSUE_CHAIN_REGISTER.md
```

ISSUE-009 should use the module library to define the first industry template without changing the module matrix itself unless explicitly approved.
