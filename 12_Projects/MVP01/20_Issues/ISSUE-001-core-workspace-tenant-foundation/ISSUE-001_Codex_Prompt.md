# ISSUE-001 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-001 — Core Workspace and Tenant Foundation only.

Context:
- Product: Optimaks MVP01
- Constitution Version: v1.7.9.4-project-baseline-governance
- Current Issue: ISSUE-001
- Phase: Phase 1 - Foundation
- Previous Issue: ISSUE-000
- Previous Issue Status: PASS WITH WARNINGS, Founder Accepted
- Execution Mode: Documentation + Foundation Design Only

Priority Order:
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. 12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
5. 12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
6. 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
7. 20_Issues/ISSUE-000/ISSUE-000_DONE_Report.md
8. 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workpack.md

Required Reference Files:
- AGENTS.md
- README.md
- 01_Constitution/CURRENT_CONSTITUTION.md
- 01_Constitution/ACTIVE_STANDARDS_INDEX.md
- 03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
- 03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
- 12_Projects/MVP01/README_MVP01.md
- 12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
- 12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
- 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
- 20_Issues/ISSUE-000/ISSUE-000_DONE_Report.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workpack.md

If the ISSUE-000 DONE Report path differs because of repo cleanup, locate the actual merged ISSUE-000 DONE Report and state the path used.

Required Tasks:
1. Confirm ISSUE-000 was accepted as PASS WITH WARNINGS.
2. Confirm ISSUE-001 is pending and depends on ISSUE-000.
3. Create the ISSUE-001 issue folder if missing:
   20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/
4. Create ISSUE-001_Foundation_Assessment.md.
5. Create ISSUE-001_Workspace_Tenant_Model.md.
6. Create ISSUE-001_DONE_Report.md.
7. Update 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md only for ISSUE-001 status, branch, output, and handoff.
8. Do not create app code.
9. Do not initialize Next.js.
10. Do not create Supabase setup.
11. Do not modify constitution, templates, scope baseline, or phase baseline.

Required Workspace / Tenant Model:
Define:
- workspace
- tenant
- client
- user
- owner / founder role
- client admin role
- staff / technician role
- lightweight customer access boundary
- reserved full customer portal boundary
- included MVP01 boundary
- reserved future boundary
- data ownership assumptions
- future Supabase implications
- future RLS implications
- handoff requirements for ISSUE-002

Allowed Files:
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/README_ISSUE-001.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
- 20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Open_Questions.md
- 12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md

Forbidden Scope:
- No Next.js setup
- No app routes
- No React components
- No Supabase client code
- No migrations
- No database schema changes
- No RLS policies
- No environment variable changes
- No dependency changes
- No Vercel setup
- No constitution changes
- No template changes
- No MVP01 scope baseline changes
- No ISSUE-002 execution

Required DONE Report:
Create:
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md

The DONE report must include:
- Final Status: PASS / PASS WITH WARNINGS / FAIL
- Files read
- Files created
- Files changed
- Workspace / tenant model summary
- Included boundaries
- Reserved boundaries
- Risks / warnings
- Validation results
- Issue Chain Register update result
- Handoff to ISSUE-002
- Whether ISSUE-002 can start

Validation:
- Confirm no app code was created.
- Confirm no Supabase setup was created.
- Confirm no Next.js setup was created.
- Confirm no constitution or template files were modified.
- Confirm scope baseline was not modified.
- Confirm issue-chain register was updated only for ISSUE-001.

Return:
1. Final status
2. Changed files
3. Created files
4. Warnings
5. Whether ISSUE-002 can start
