# ISSUE-005 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-005 — Indexes and updated_at Triggers only.

Context:
- Product: Optimaks MVP01
- Constitution Version: v1.7.9.4-project-baseline-governance
- Current Issue: ISSUE-005
- Phase: Phase 2 - Database Foundation
- Previous Issue: ISSUE-004
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Execution Mode: Database Foundation Implementation
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/

Priority Order:
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. 12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
5. 12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
6. 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
7. 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DONE_Report.md
8. 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_DB_Table_Notes.md
9. 12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/ISSUE-004_Migration_Notes.md
10. supabase/migrations/0001_create_p0_core_tables.sql
11. 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Workpack.md

Dependency Gate:
1. Confirm ISSUE-004 is PASS or PASS WITH WARNINGS.
2. Confirm Founder Acceptance for ISSUE-004 is recorded.
3. Confirm ISSUE-004 migration exists: supabase/migrations/0001_create_p0_core_tables.sql
4. Confirm normalized project baseline path exists: 12_Projects/MVP01/00_Project_Baseline/
5. Confirm normalized issue path exists: 12_Projects/MVP01/20_Issues/
6. If founder acceptance, migration, or normalized paths are not present, stop and return FAIL - dependency gate not satisfied.

Required Tasks:
1. Confirm ISSUE-005 is pending and depends on ISSUE-004.
2. Create `supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql`.
3. Add a generic `public.set_updated_at()` trigger function.
4. Add updated_at triggers for `public.clients` and `public.workspaces`.
5. Add indexes:
   - `idx_clients_status` on `public.clients(status)`
   - `idx_workspaces_status` on `public.workspaces(status)`
   - `idx_workspaces_plan_key` on `public.workspaces(plan_key)`
6. Create `ISSUE-005_Index_Notes.md`.
7. Create `ISSUE-005_Trigger_Notes.md`.
8. Complete `ISSUE-005_DONE_Report.md`.
9. Update `12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md` only for ISSUE-005 status, branch, output, and handoff.
10. Do not start ISSUE-006.

Allowed Files:
- supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
- 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/README_ISSUE-005.md
- 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Index_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Trigger_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Open_Questions.md
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
- No business feature tables
- No new columns
- No table rename
- No seed data
- No API routes
- No server actions
- No Vercel setup
- No constitution changes
- No template changes
- No MVP01 scope baseline changes
- No MVP01 phase baseline changes
- No ISSUE-006 execution

Validation:
Run available app validation commands:
- npm run lint
- npm run build
- npm run typecheck

If Supabase CLI is available, optionally validate SQL. If not available, document NOT RUN and perform static SQL review.

Required DONE Report:
Create or complete:
12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_DONE_Report.md

Return:
1. Final status
2. Created files
3. Changed files
4. Migration summary
5. Validation command results
6. Secret check result
7. Warnings
8. Whether ISSUE-006 can start
