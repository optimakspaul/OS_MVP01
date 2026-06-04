# ISSUE-011 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-011 — Client Workspace Basic only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-011
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-010 End Customer Interface Basic
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/

Critical Instruction:
ISSUE-011 is Client Workspace Basic.
It may create a basic frontend workspace interface, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, payment gateway, WhatsApp API, Optimaks OS UI, technician portal, or ISSUE-012 work.

Required Tasks:
1. Read the ISSUE-011 workpack.
2. Confirm ISSUE-010 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect the existing Next.js app structure before choosing the route.
5. Create a basic client workspace interface for the Aircon / Home Service Starter Template.
6. The interface must show:
   - Workspace header / company context
   - Starter workflow overview
   - Lead / customer intake overview
   - Quote estimate status
   - Booking status
   - Payment status
   - Reminder / follow-up status
   - Manual action queue
   - Basic report snapshot
   - Demo / non-persistent boundary
7. Create ISSUE-011 notes:
   - Workspace Scope Notes
   - Client Workspace UX Notes
   - Implementation Notes
   - Handoff to Lead / Customer Flow
8. Update ISSUE-011 DONE report.
9. Update MVP01 issue chain register for ISSUE-011 status, branch, outputs, and ISSUE-012 handoff.
10. Update MVP01 change control log.
11. Do not start ISSUE-012.

Preferred route if compatible:
- app/workspace/page.tsx

Alternative acceptable routes:
- app/client-workspace/page.tsx
- app/demo/workspace/page.tsx
- app/(app)/workspace/page.tsx

Allowed:
- Frontend route / page
- Local component state
- Static demo data
- Accessible workspace panels
- Non-persistent action toggles / filters / previews
- Manual-assisted action copy
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
- No payment gateway
- No WhatsApp API
- No Optimaks OS UI
- No technician portal
- No ISSUE-012 files
- No ISSUE-012 lead/customer persistence
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Workspace_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Client_Workspace_UX_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Implementation_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_Handoff_to_Lead_Customer_Flow.md
- 12_Projects/MVP01/20_Issues/ISSUE-011-client-workspace-basic/ISSUE-011_DONE_Report.md
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
5. Workspace flow summary
6. Documentation summary
7. Validation results
8. Forbidden-scope result
9. Warnings
10. Whether ISSUE-012 can start
