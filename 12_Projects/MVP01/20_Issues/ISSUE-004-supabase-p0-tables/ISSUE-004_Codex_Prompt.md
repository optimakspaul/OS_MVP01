# ISSUE-004 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-004 — Supabase P0 Tables only.

Context:
- Product: Optimaks MVP01
- Constitution Version: v1.7.9.4-project-baseline-governance
- Current Issue: ISSUE-004
- Phase: Phase 2 - Database Foundation
- Previous Issue: ISSUE-003
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Execution Mode: Database Foundation Implementation
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/

Priority Order:
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. 12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
5. 12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
6. 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
7. 12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_DONE_Report.md
8. 12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_App_Foundation_Notes.md
9. 12_Projects/MVP01/20_Issues/ISSUE-003-nextjs-app-foundation/ISSUE-003_Validation_Notes.md
10. 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Workpack.md

Dependency Gate:
1. Confirm ISSUE-003 is PASS or PASS WITH WARNINGS.
2. Confirm Founder Acceptance for ISSUE-003 is recorded.
3. Confirm normalized project baseline path exists:
   12_Projects/MVP01/00_Project_Baseline/
4. Confirm normalized issue path exists:
   12_Projects/MVP01/20_Issues/
5. If founder acceptance or normalized paths are not present, stop and return FAIL - dependency gate not satisfied.

Required Tasks:
1. Confirm ISSUE-004 is pending and depends on ISSUE-003.
2. Create `supabase/migrations/0001_create_p0_core_tables.sql`.
3. Create `ISSUE-004_DB_Table_Notes.md`.
4. Create `ISSUE-004_Migration_Notes.md`.
5. Complete `ISSUE-004_DONE_Report.md`.
6. Update `12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md` only for ISSUE-004 status, branch, output, and handoff.
7. Do not start ISSUE-005.

Required P0 Tables:
- clients
- workspaces

Required relationship:
- workspaces.client_id references clients.id

Required tenant model:
- one client company -> one workspace -> one tenant isolation boundary
- workspace_id is the future canonical tenant-scoping key
- client_id is the client profile / onboarding link

Migration file:
- supabase/migrations/0001_create_p0_core_tables.sql

Allowed Files:
- supabase/migrations/0001_create_p0_core_tables.sql
- 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/README_ISSUE-004.md
- 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DB_Table_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Migration_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Open_Questions.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md

Forbidden Scope:
- No app source changes
- No package file changes
- No .env changes
- No real secrets
- No Supabase client source code
- No auth profile tables
- No workspace membership tables
- No RLS enablement
- No RLS policies
- No updated_at trigger functions
- No updated_at triggers
- No extra indexes beyond PK / unique / required FK constraints
- No lead/customer/booking/job/invoice/payment/reminder/review/portal tables
- No API routes
- No server actions
- No Vercel setup
- No constitution changes
- No template changes
- No MVP01 scope baseline changes
- No MVP01 phase baseline changes
- No ISSUE-005 execution

Validation:
Run available app validation commands:
- npm run lint
- npm run build
- npm run typecheck

If Supabase CLI is available, optionally validate SQL. If not available, document NOT RUN and perform static SQL review.

Required DONE Report:
Create or complete:
12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DONE_Report.md

The DONE report must include:
- Final Status: PASS / PASS WITH WARNINGS / FAIL
- Dependency gate result
- Files read
- Files created
- Files changed
- P0 table summary
- Migration summary
- Tenant boundary result
- Secret handling result
- Forbidden scope confirmation
- Validation command results
- Risks / warnings
- Issue Chain Register update result
- Handoff to ISSUE-005
- Whether ISSUE-005 can start

Return:
1. Final status
2. Created files
3. Changed files
4. Migration summary
5. Validation command results
6. Secret check result
7. Warnings
8. Whether ISSUE-005 can start
