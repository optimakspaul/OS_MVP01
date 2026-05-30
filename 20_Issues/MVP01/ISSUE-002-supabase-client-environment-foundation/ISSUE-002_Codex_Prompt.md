# ISSUE-002 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-002 — Supabase Client and Environment Foundation only.

Context:
- Product: Optimaks MVP01
- Constitution Version: v1.7.9.4-project-baseline-governance
- Current Issue: ISSUE-002
- Phase: Phase 1 - Foundation
- Previous Issue: ISSUE-001
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Execution Mode: Documentation + Environment Contract Only

Priority Order:
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. 12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
5. 12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
6. 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
7. 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
8. 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
9. 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
10. 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Workpack.md

Required Reference Files:
- AGENTS.md
- README.md
- 01_Constitution/CURRENT_CONSTITUTION.md
- 01_Constitution/ACTIVE_STANDARDS_INDEX.md
- 03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
- 03_Development_Standard/STD-DEV-034_Client_Deployment_and_Environment_Provisioning_Standard.md
- 03_Development_Standard/STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md
- 03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
- 03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
- 03_Development_Standard/STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
- 03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
- 03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
- 12_Projects/MVP01/README_MVP01.md
- 12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
- 12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
- 12_Projects/MVP01/MVP01_CHANGE_CONTROL_LOG.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Workpack.md

Dependency Gate:
1. Confirm ISSUE-001 is PASS or PASS WITH WARNINGS.
2. Confirm Founder Acceptance for ISSUE-001 is recorded in the Issue Chain Register or ISSUE-001 DONE Report.
3. If founder acceptance is not recorded, stop and return FAIL - dependency gate not satisfied.
4. Do not proceed by assuming acceptance.

Required Tasks:
1. Confirm ISSUE-002 is pending and depends on ISSUE-001.
2. Create the ISSUE-002 issue folder if missing:
   20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/
3. Create ISSUE-002_Supabase_Setup_Notes.md.
4. Create ISSUE-002_Env_Key_Plan.md.
5. Complete ISSUE-002_DONE_Report.md.
6. Optionally create or update root `.env.example` with placeholder variable names only.
7. Update 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md only for ISSUE-002 status, branch, output, and handoff.
8. Do not create app code.
9. Do not initialize Next.js.
10. Do not install packages.
11. Do not create Supabase client source code.
12. Do not create schema, migrations, auth, RLS, or Vercel setup.

Required Environment Variable Names:
- NEXT_PUBLIC_SUPABASE_URL=
- NEXT_PUBLIC_SUPABASE_ANON_KEY=
- SUPABASE_SERVICE_ROLE_KEY=
- SUPABASE_JWT_SECRET=
- DATABASE_URL=

Secret Rules:
- Commit placeholder names only.
- Never commit real Supabase project URLs or keys.
- Never commit service-role keys.
- Never commit database URLs, passwords, JWT secrets, or tokens.
- Never commit `.env.local`.
- Never expose service-role or database credentials to browser-facing code.

Allowed Files:
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/README_ISSUE-002.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Supabase_Setup_Notes.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Env_Key_Plan.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md
- 20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Open_Questions.md
- 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
- .env.example

Forbidden Scope:
- No Next.js setup
- No app routes
- No React components
- No package.json creation
- No npm install
- No Supabase client source code
- No migrations
- No database schema changes
- No RLS policies
- No auth provider setup
- No Vercel setup
- No `.env.local` commit
- No real secrets committed
- No constitution changes
- No template changes
- No MVP01 scope baseline changes
- No MVP01 phase baseline changes
- No ISSUE-003 execution

Required DONE Report:
Create or complete:
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md

The DONE report must include:
- Final Status: PASS / PASS WITH WARNINGS / FAIL
- Dependency gate result
- Files read
- Files created
- Files changed
- Supabase setup summary
- Environment variable plan summary
- Secret handling result
- Included scope
- Forbidden scope confirmation
- Risks / warnings
- Validation results
- Issue Chain Register update result
- Handoff to ISSUE-003
- Whether ISSUE-003 can start

Return:
1. Final status
2. Created files
3. Changed files
4. Secret check result
5. Warnings
6. Whether ISSUE-003 can start
