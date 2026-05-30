# ISSUE-006 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete ISSUE-006 — Auth and Profiles only.

Context:
- Product: Optimaks MVP01
- Constitution Version: v1.7.9.4-project-baseline-governance
- Current Issue: ISSUE-006
- Phase: Phase 2 - Database Foundation
- Previous Issue: ISSUE-005
- Required Previous Status: PASS or PASS WITH WARNINGS with Founder Acceptance recorded
- Execution Mode: Database Foundation Implementation
- Normalized issue path: 12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/

Priority Order:
1. AGENTS.md
2. 01_Constitution/CURRENT_CONSTITUTION.md
3. 01_Constitution/ACTIVE_STANDARDS_INDEX.md
4. 12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
5. 12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
6. 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
7. 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_DONE_Report.md
8. 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Index_Notes.md
9. 12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/ISSUE-005_Trigger_Notes.md
10. supabase/migrations/0001_create_p0_core_tables.sql
11. supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
12. 12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Workpack.md

Dependency Gate:
1. Confirm ISSUE-005 is PASS or PASS WITH WARNINGS.
2. Confirm Founder Acceptance for ISSUE-005 is recorded.
3. Confirm migrations exist:
   - supabase/migrations/0001_create_p0_core_tables.sql
   - supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
4. Confirm normalized project baseline path exists: 12_Projects/MVP01/00_Project_Baseline/
5. Confirm normalized issue path exists: 12_Projects/MVP01/20_Issues/
6. If founder acceptance, migrations, or normalized paths are not present, stop and return FAIL - dependency gate not satisfied.

Required Tasks:
1. Confirm ISSUE-006 is pending and depends on ISSUE-005.
2. Create `supabase/migrations/0003_create_auth_profiles.sql`.
3. Create `public.profiles` linked to `auth.users(id)`.
4. Add nullable `workspace_id` referencing `public.workspaces(id)`.
5. Add role and status constraints.
6. Add allowed profile lookup indexes.
7. Add profiles updated_at trigger using existing `public.set_updated_at()` if present.
8. Create `ISSUE-006_Profile_Model_Notes.md`.
9. Create `ISSUE-006_Auth_Boundary_Notes.md`.
10. Complete `ISSUE-006_DONE_Report.md`.
11. Update `12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md` only for ISSUE-006 status, branch, output, and handoff.
12. Do not start ISSUE-007.

Required profile model:
- id uuid primary key references auth.users(id) on delete cascade
- workspace_id uuid null references public.workspaces(id)
- display_name text
- email text
- role text not null default 'client_admin'
- status text not null default 'pending'
- created_at timestamptz not null default now()
- updated_at timestamptz not null default now()

Allowed roles:
- platform_owner
- client_admin
- staff
- technician

Allowed statuses:
- pending
- active
- inactive
- archived

Boundary rules:
- platform_owner may have workspace_id null.
- client_admin, staff, and technician should be tenant-bound with workspace_id not null.
- Do not create workspace membership tables.
- Do not create customer portal membership.
- Do not enable RLS or create RLS policies.

Allowed Files:
- supabase/migrations/0003_create_auth_profiles.sql
- 12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/README_ISSUE-006.md
- 12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Profile_Model_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Auth_Boundary_Notes.md
- 12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_DONE_Report.md
- 12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_Open_Questions.md
- 12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md

Forbidden Scope:
- No app source changes
- No package file changes
- No .env changes
- No real secrets
- No Supabase client source code
- No login UI
- No auth provider setup
- No RLS enablement
- No RLS policies
- No workspace membership tables
- No customer portal tables
- No business feature tables
- No API routes
- No server actions
- No Vercel setup
- No constitution changes
- No template changes
- No MVP01 scope baseline changes
- No MVP01 phase baseline changes
- No ISSUE-007 execution

Validation:
Run available app validation commands:
- npm run lint
- npm run build
- npm run typecheck

If Supabase CLI is available, optionally validate SQL. If not available, document NOT RUN and perform static SQL review.

Required DONE Report:
Create or complete:
12_Projects/MVP01/20_Issues/ISSUE-006-auth-and-profiles/ISSUE-006_DONE_Report.md

Return:
1. Final status
2. Created files
3. Changed files
4. Migration summary
5. Validation command results
6. Secret check result
7. Warnings
8. Whether ISSUE-007 can start
