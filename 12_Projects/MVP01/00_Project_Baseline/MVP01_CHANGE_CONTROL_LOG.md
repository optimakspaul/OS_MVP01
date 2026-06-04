# MVP01_CHANGE_CONTROL_LOG.md

## 1. Purpose

This log records all changes to MVP01 scope, phase baseline, issue baseline, issue chain, reserved feature status, and project execution baseline.

## 2. Change Control Log

| Change ID | Date | Request | Request Type | Affected Project / Phase / Issue | Impact Review | Decision | Status | Files Updated | Follow-up Required |
|---|---|---|---|---|---|---|---|---|---|
| CR-MVP01-001 | 2026-05-30 | Establish v1.7.9.4 project baseline contract files for MVP01 | Constitution / Standard Change | MVP01 / all phases / all issues | Required by STD-DEV-049; fixes missing project baseline files | Approved | Closed | README_MVP01.md; MVP01_SCOPE_BASELINE.md; MVP01_PHASE_AND_ISSUE_BASELINE.md; MVP01_ISSUE_CHAIN_REGISTER.md; MVP01_CHANGE_CONTROL_LOG.md | Founder to update issue status after each PASS / FAIL review |
| CR-MVP01-002 | 2026-06-04 | Align MVP01 to v0.3 Flow package as Starter Complete + Optimaks OS Basic | Scope Clarification | MVP01 / Phase 0-7 / ISSUE-000-018 | Replaces old DB/RLS-centered post-ISSUE-006 chain with Starter Complete + Optimaks OS Basic architecture, Phase 0-7, ISSUE-007 Architecture Alignment, and ISSUE-008 Module Library Foundation | Approved by ISSUE-007 workpack and founder execution request | Closed | README_MVP01.md; MVP01_SCOPE_BASELINE.md; MVP01_PHASE_AND_ISSUE_BASELINE.md; MVP01_ISSUE_CHAIN_REGISTER.md; MVP01_CHANGE_CONTROL_LOG.md; ISSUE-007 alignment notes; ISSUE-007_DONE_Report.md | Founder review of ISSUE-007; ISSUE-008 workpack approval before Module Library Foundation execution |
| CR-MVP01-003 | 2026-06-04 | Establish MVP01 Module Library Foundation and Starter / Grow / Pro plan-depth matrix | Scope Clarification | MVP01 / Phase 2 / ISSUE-008 | Documents canonical module list, Starter-depth MVP01 included modules, MVP02-MVP05 reserved depths, and plan-depth vs data-isolation boundary without implementation | Approved by ISSUE-008 workpack and founder execution request | Closed | MVP01_MODULE_LIBRARY_MATRIX.md; MVP01_ISSUE_CHAIN_REGISTER.md; MVP01_CHANGE_CONTROL_LOG.md; ISSUE-008 module notes; ISSUE-008_DONE_Report.md | Founder review of ISSUE-008; ISSUE-009 workpack approval before Industry Template Foundation execution |
| CR-MVP01-004 | 2026-06-04 | Establish MVP01 Aircon / Home Service Starter Industry Template Foundation | Scope Clarification | MVP01 / Phase 2 / ISSUE-009 | Documents one primary Starter-depth industry template, template-to-module mapping, End Customer / Client Workspace / Optimaks OS Basic flow handoff, and reserved template boundaries without implementation | Approved by ISSUE-009 workpack and founder execution request | Closed | MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md; MVP01_ISSUE_CHAIN_REGISTER.md; MVP01_CHANGE_CONTROL_LOG.md; ISSUE-009 industry template notes; ISSUE-009_DONE_Report.md | Founder review of ISSUE-009; ISSUE-010 workpack approval before End Customer Interface Basic execution |
| CR-MVP01-005 | 2026-06-05 | Establish MVP01 End Customer Interface Basic for Aircon / Home Service Starter Template | Existing Issue Clarification | MVP01 / Phase 3 / ISSUE-010 | Creates a local, non-persistent customer request interface for Request -> Quote Estimate -> Booking -> Payment Status -> Reminder and documents Client Workspace handoff without backend persistence or forbidden integrations | Approved by ISSUE-010 workpack and founder execution request | Closed | src/app/end-customer/page.tsx; src/app/globals.css; MVP01_ISSUE_CHAIN_REGISTER.md; MVP01_CHANGE_CONTROL_LOG.md; ISSUE-010 notes; ISSUE-010_DONE_Report.md | Founder review of ISSUE-010; ISSUE-011 workpack approval before Client Workspace Basic execution |

## 3. Request Types

Use one of:

```text
Scope Clarification
Scope Expansion
Scope Reduction
Issue Split
Issue Merge
New Issue
New Phase
Phase Reorder
Issue Reorder
Reserved Feature Unlock
Move to Next MVP
Reject / Not Aligned
Constitution / Standard Change
```

## 4. Decision Rule

No baseline file may be updated until the change-control entry is marked Approved.

## 5. AI Rule

If AI detects a conflict with the project baseline, it must propose a change-control entry instead of modifying the baseline directly.
