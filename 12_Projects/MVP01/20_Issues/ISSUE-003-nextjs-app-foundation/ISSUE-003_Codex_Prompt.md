# ISSUE-003 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-003 — Next.js App Foundation only.

Context:
- Product: Optimaks MVP01
- Constitution Version: v1.7.9.4-project-baseline-governance
- Current Issue: ISSUE-003
- Phase: Phase 1 - Foundation
- Previous Issue: ISSUE-002
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Execution Mode: App Foundation Implementation

Priority Order:
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. 12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
5. 12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
6. 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
7. 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md
8. 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Supabase_Setup_Notes.md
9. 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Env_Key_Plan.md
10. .env.example
11. 20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Workpack.md

Required Reference Files:
- AGENTS.md
- README.md
- 01_Constitution/CURRENT_CONSTITUTION.md
- 01_Constitution/ACTIVE_STANDARDS_INDEX.md
- 03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
- 03_Development_Standard/STD-DEV-034_Client_Deployment_and_Environment_Provisioning_Standard.md
- 03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
- 03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
- 03_Development_Standard/STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
- 03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
- 03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
- 03_Development_Standard/STD-SEC-001_Environment_Secrets_and_API_Key_Governance.md
- 03_Development_Standard/STD-DEPLOY-001_Preview_Staging_Production_Gate_Standard.md
- 03_Development_Standard/STD-DB-001_Database_Migration_and_RLS_Change_Control.md
- 12_Projects/MVP01/README_MVP01.md
- 12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
- 12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/MVP01_CHANGE_CONTROL_LOG.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Supabase_Setup_Notes.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Env_Key_Plan.md
- .env.example
- 20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Workpack.md

Dependency Gate:
1. Confirm ISSUE-002 is PASS or PASS WITH WARNINGS.
2. Confirm Founder Acceptance for ISSUE-002 is recorded in the Issue Chain Register or ISSUE-002 DONE Report.
3. If founder acceptance is not recorded, stop and return FAIL - dependency gate not satisfied.
4. Do not proceed by assuming acceptance.

Required Tasks:
1. Confirm ISSUE-003 is pending and depends on ISSUE-002.
2. Create the ISSUE-003 issue folder if missing:
   20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/
3. Create or verify minimal Next.js App Router foundation.
4. Use TypeScript.
5. Create a minimal root layout and root page.
6. Preserve `.env.example` as placeholder-only.
7. Do not create Supabase client code.
8. Do not create DB schema, migrations, auth, RLS, Vercel setup, or product features.
9. Create ISSUE-003_App_Foundation_Notes.md.
10. Create ISSUE-003_Validation_Notes.md.
11. Complete ISSUE-003_DONE_Report.md.
12. Update 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md only for ISSUE-003 status, branch, output, and handoff.
13. Do not start ISSUE-004.

Recommended Minimal Page Content:
- Optimaks MVP01
- App foundation initialized.
- No client data, tenant data, Supabase integration, or product workflow is implemented in ISSUE-003.

Environment Contract:
- Preserve existing `.env.example`.
- Do not add real values.
- Do not create `.env.local`.
- Do not expose server-only keys.
- Do not wire Supabase integration in ISSUE-003.

Allowed Files:
- package.json
- package-lock.json
- next.config.js
- next.config.mjs
- next.config.ts
- tsconfig.json
- eslint.config.js
- eslint.config.mjs
- .eslintrc.json
- postcss.config.js
- postcss.config.mjs
- tailwind.config.js
- tailwind.config.ts
- src/app/layout.tsx
- src/app/page.tsx
- src/app/globals.css
- app/layout.tsx
- app/page.tsx
- app/globals.css
- public/
- README.md
- .env.example
- 20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/README_ISSUE-003.md
- 20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_App_Foundation_Notes.md
- 20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Validation_Notes.md
- 20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_DONE_Report.md
- 20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Open_Questions.md
- 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md

Forbidden Scope:
- No Supabase client source code
- No database schema
- No migrations
- No RLS policies
- No auth provider setup
- No workspace/client/lead/booking/job/invoice/payment/reminder/portal features
- No business API routes
- No business server actions
- No Vercel project setup
- No `.env.local` commit
- No real secrets
- No constitution changes
- No template changes
- No MVP01 scope baseline changes
- No MVP01 phase baseline changes
- No ISSUE-004 execution

Validation:
Run available validation commands:
- npm run lint
- npm run build
- npm run typecheck

If a script does not exist, document NOT RUN and why. If a script is added, keep it minimal and standard.

Required DONE Report:
Create or complete:
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_DONE_Report.md

The DONE report must include:
- Final Status: PASS / PASS WITH WARNINGS / FAIL
- Dependency gate result
- Files read
- Files created
- Files changed
- App foundation summary
- Environment contract result
- Secret handling result
- Included scope
- Forbidden scope confirmation
- Validation command results
- Risks / warnings
- Issue Chain Register update result
- Handoff to ISSUE-004
- Whether ISSUE-004 can start

Return:
1. Final status
2. Created files
3. Changed files
4. Validation command results
5. Secret check result
6. Warnings
7. Whether ISSUE-004 can start
