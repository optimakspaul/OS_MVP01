# ISSUE-018 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-018 — Optimaks OS Basic + Demo / Release Pack only.

Context:
- Product: Optimaks MVP01
- Constitution Version: MVP01 v1.7.9.4 AI Harness
- Current Issue: ISSUE-018
- Current Issue Type: Frontend Implementation + Documentation
- Previous Issue: ISSUE-017 Reminder + Basic Report
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Current MVP01 Definition: Starter Complete + Optimaks OS Basic
- Primary MVP01 Template: Aircon / Home Service Starter Template
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/

Critical Instruction:
ISSUE-018 is Optimaks OS Basic + Demo / Release Pack.
It may create a static Optimaks OS Basic preview and demo/release documentation, but must not create backend persistence, migrations, database tables, Supabase client writes, API routes, server actions, RLS, auth, real Optimaks OS admin console, real client management backend, tenant provisioning, billing/subscription management, deployment automation, module entitlement logic, MVP02 files, or MVP02 execution.

Required Tasks:
1. Read the ISSUE-018 workpack.
2. Confirm ISSUE-017 is PASS or PASS WITH WARNINGS and Founder Acceptance is Accepted.
3. Confirm MVP01 is aligned as Starter Complete + Optimaks OS Basic.
4. Inspect existing /end-customer and /workspace implementation.
5. Create or enhance Optimaks OS Basic + Demo / Release Pack UI.
6. The interface must show:
   - Optimaks OS Basic overview
   - Sample client list
   - Client / plan status card
   - Onboarding status card
   - Workspace link card
   - Demo pack checklist
   - Release pack checklist
   - MVP01 flow summary
   - Included / reserved boundary card
   - MVP01 closeout notice
   - Demo / non-persistent boundary
7. Create ISSUE-018 notes:
   - Optimaks OS Basic Scope Notes
   - Demo Pack Notes
   - Release Pack Notes
   - MVP01 Closeout Notes
8. Update ISSUE-018 DONE report.
9. Update MVP01 issue chain register for ISSUE-018 status, branch, outputs, and MVP01 final checkpoint handoff.
10. Update MVP01 change control log.
11. Do not start MVP02.

Preferred implementation:
- Create src/app/optimaks-os/page.tsx

Alternative acceptable:
- src/app/demo/page.tsx
- Enhance src/app/workspace/page.tsx with final demo/release section

Allowed:
- Frontend route / page enhancement
- Local component state
- Static demo client data
- Static plan status / onboarding status previews
- Static workspace link preview
- Demo checklist
- Release checklist
- MVP01 flow summary
- Included / reserved boundary summary
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
- No real Optimaks OS admin console
- No real client management backend
- No tenant provisioning
- No billing/subscription management
- No role-based admin permissions
- No deployment automation
- No module entitlement logic
- No MVP02 files
- No MVP02 execution
- No package/env changes unless absolutely required; if required, stop and ask.

Required Documentation Output Files:
- 12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Optimaks_OS_Basic_Scope_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Demo_Pack_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_Release_Pack_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_MVP01_Closeout_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-018-optimaks-os-basic-demo-release-pack/ISSUE-018_DONE_Report.md
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
5. Optimaks OS Basic summary
6. Demo / Release Pack summary
7. MVP01 closeout summary
8. Validation results
9. Forbidden-scope result
10. Warnings
11. Whether MVP01 final checkpoint can start
