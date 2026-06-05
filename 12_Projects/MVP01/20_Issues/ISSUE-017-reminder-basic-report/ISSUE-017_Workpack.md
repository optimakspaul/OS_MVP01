# ISSUE-017 Workpack

**Issue:** ISSUE-017  
**Title:** Reminder + Basic Report  
**Project:** MVP01  
**Phase:** Phase 5 — Admin Setting / Reminder / Report  
**Constitution Version:** MVP01 v1.7.9.4 AI Harness  
**Status:** Ready for Codex Execution  
**Execution Mode:** Frontend Implementation + Documentation  
**Depends On:** ISSUE-016  
**Previous Issue Status Required:** PASS or PASS WITH WARNINGS with Founder Acceptance recorded  
**Branch:** feature/issue-017-reminder-basic-report  
**Normalized Issue Path:** `12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/`

---

## Purpose

Create the basic Reminder + Basic Report layer for MVP01.

This continues the Starter flow:

```text
Admin Setting -> Reminder + Basic Report -> Optimaks OS Basic + Demo / Release Pack
```

This issue focuses only on:

```text
Reminder + Basic Report
```

---

## Product Boundary

Allowed:

```text
Frontend UI
Local component state
Static demo reminder/report data
Reminder status previews
Monthly value snapshot
Starter KPI preview cards
Manual-assisted reminder/report workflow copy
Documentation updates
Issue chain and change log updates
```

Forbidden:

```text
Database writes
Supabase client integration
API routes
Server actions
New migrations
New database tables
Seed data
RLS / policies
Auth / login
Real reminder automation
Scheduled jobs / cron
WhatsApp API
Email automation
SMS integration
Notification queue
Report generation engine
PDF / CSV export
Analytics database
Optimaks OS full admin console
Technician portal
ISSUE-018 files
ISSUE-018 demo/release implementation
```

---

## Required UX Scope

The Reminder + Basic Report flow should support:

```text
1. Reminder workspace section
2. Payment follow-up reminder preview
3. Maintenance reminder preview
4. Customer follow-up checklist
5. Reminder status preview
6. Basic monthly value report snapshot
7. Starter KPI summary
8. Manual report checklist
9. Clear demo / non-persistent boundary
10. Next step to Optimaks OS Basic + Demo / Release Pack
```

---

## Required Source Files

Codex must read if present:

```text
AGENTS.md
README.md
package.json
tsconfig.json
eslint.config.mjs
src/app/end-customer/page.tsx
src/app/workspace/page.tsx
src/app/globals.css
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_MODULE_LIBRARY_MATRIX.md
12_Projects/MVP01/00_Project_Baseline/MVP01_INDUSTRY_TEMPLATE_FOUNDATION.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_DONE_Report.md
12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Handoff_to_Reminder_Report.md
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Workpack.md
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Source_Alignment_Reference.md
```

---

## Required Outputs

Create:

```text
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Reminder_Report_Scope_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_UX_Flow_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Implementation_Notes.md
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Handoff_to_Demo_Release.md
```

Complete:

```text
12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_DONE_Report.md
```

Update:

```text
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
```

Codex may modify frontend files only within ISSUE-017 scope.

---

## Recommended Implementation

Preferred:

```text
Enhance src/app/workspace/page.tsx with Reminder + Basic Report sections.
```

Alternative if appropriate:

```text
src/app/workspace/reports/page.tsx
```

Recommended UI sections:

```text
Reminder panel
Payment follow-up reminders
Maintenance reminder preview
Customer follow-up checklist
Reminder status selector / preview
Basic monthly value report snapshot
Starter KPI cards
Manual report checklist
Next step to Demo / Release Pack
Demo boundary notice
```

---

## Validation

Run:

```text
npm run lint
npm run build
npm run typecheck
forbidden-scope audit
secret check for changed files
```

---

## Success Criteria

ISSUE-017 is PASS if:

```text
1. ISSUE-016 founder acceptance is confirmed.
2. Reminder + Basic Report flow exists in the client workspace.
3. Payment follow-up reminders, maintenance reminders, and monthly value snapshot are visible.
4. Starter KPI summary and manual report checklist are visible.
5. The flow remains Starter-depth / manual-assisted.
6. No backend persistence or forbidden implementation scope is created.
7. Documentation outputs are created.
8. Issue chain and change log are updated.
9. Validation passes.
10. ISSUE-018 handoff is clear.
```

ISSUE-018 may start only after ISSUE-017 founder acceptance, ISSUE-018 workpack approval, and execution on its own branch.
