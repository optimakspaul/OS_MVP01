# ISSUE-016 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-016 — Admin Setting Basic only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-016
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-015 Payment Basic
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/

Critical Instruction:
ISSUE-016 is Admin Setting Basic.
It may enhance the frontend workspace flow, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real tenant settings, GST compliance engine, PayNow QR generation/upload, payment gateway settings, reminder automation, report generation, Optimaks OS UI, technician portal, or ISSUE-017 work.

Required Tasks:
1. Read the ISSUE-016 workpack.
2. Confirm ISSUE-015 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect existing /end-customer and /workspace implementation.
5. Create or enhance Admin Setting Basic UI.
6. The interface must show:
   - Admin setting panel
   - Business information card
   - GST setting preview / toggle
   - Static PayNow instruction setting
   - Payment terms preview
   - Default reminder setting preview
   - Basic report preference preview
   - Manual admin setup checklist
   - Next step to Reminder + Basic Report
   - Demo / non-persistent boundary
7. Create ISSUE-016 notes:
   - Admin Setting Scope Notes
   - UX Flow Notes
   - Implementation Notes
   - Handoff to Reminder + Basic Report
8. Update ISSUE-016 DONE report.
9. Update MVP01 issue chain register for ISSUE-016 status, branch, outputs, and ISSUE-017 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-017.

Preferred implementation:
- Enhance src/app/workspace/page.tsx

Alternative acceptable route:
- src/app/workspace/admin-settings/page.tsx

Allowed:
- Frontend route / page enhancement
- Local component state
- Static demo business settings
- Accessible setting toggles / previews
- Static GST setting preview
- Static PayNow instruction setting
- Static payment terms preview
- Default reminder/report preference preview
- Manual-assisted admin workflow copy
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
- No real tenant settings
- No role-based admin permissions
- No GST compliance engine
- No PayNow QR generation / upload storage
- No payment gateway settings
- No reminder automation
- No report generation
- No Optimaks OS UI
- No technician portal
- No ISSUE-017 files
- No ISSUE-017 reminder/report implementation
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Admin_Setting_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_UX_Flow_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_Handoff_to_Reminder_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-016-admin-setting-basic/ISSUE-016_DONE_Report.md
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
5. Admin Setting flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-017 can start
