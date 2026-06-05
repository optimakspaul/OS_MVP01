# ISSUE-017 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-017 — Reminder + Basic Report only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-017
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-016 Admin Setting Basic
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/

Critical Instruction:
ISSUE-017 is Reminder + Basic Report.
It may enhance the frontend workspace flow, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real reminder automation, scheduled jobs, WhatsApp API, email automation, SMS integration, report generation engine, exports, analytics database, Optimaks OS full admin console, technician portal, or ISSUE-018 work.

Required Tasks:
1. Read the ISSUE-017 workpack.
2. Confirm ISSUE-016 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect existing /end-customer and /workspace implementation.
5. Create or enhance Reminder + Basic Report UI.
6. The interface must show:
   - Reminder panel
   - Payment follow-up reminder preview
   - Maintenance reminder preview
   - Customer follow-up checklist
   - Reminder status preview
   - Basic monthly value report snapshot
   - Starter KPI summary
   - Manual report checklist
   - Next step to Optimaks OS Basic + Demo / Release Pack
   - Demo / non-persistent boundary
7. Create ISSUE-017 notes:
   - Reminder Report Scope Notes
   - UX Flow Notes
   - Implementation Notes
   - Handoff to Demo / Release
8. Update ISSUE-017 DONE report.
9. Update MVP01 issue chain register for ISSUE-017 status, branch, outputs, and ISSUE-018 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-018.

Preferred implementation:
- Enhance src/app/workspace/page.tsx

Alternative acceptable route:
- src/app/workspace/reports/page.tsx

Allowed:
- Frontend route / page enhancement
- Local component state
- Static demo reminder/report data
- Accessible reminder status controls / previews
- Static monthly value snapshot
- Starter KPI preview cards
- Manual-assisted reminder/report workflow copy
- Documentation updates
- Issue chain and change log updates

Forbidden:
- No migrations
- No database tables
- No seed data
- No Supabase client integration
- No API route submission
- No server action submission
- No RLS
- No RLS policies
- No auth/login
- No real reminder automation
- No scheduled jobs / cron
- No WhatsApp API
- No email automation
- No SMS integration
- No notification queue
- No report generation engine
- No PDF / CSV export
- No analytics database
- No Optimaks OS full admin console
- No technician portal
- No ISSUE-018 files
- No ISSUE-018 demo/release implementation
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Reminder_Report_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_Handoff_to_Demo_Release.md
- 12_Projects/MVP01/20_Issues/ISSUE-017-reminder-basic-report/ISSUE-017_DONE_Report.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md

Validation:
Run:
- npm run lint
- npm run build
- npm run typecheck
- forbidden-scope audit
- secret check for changed files

Required Final Response:
1. Final status
2. Created files
3. Changed files
4. Route / UI summary
5. Reminder + Basic Report flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-018 can start
