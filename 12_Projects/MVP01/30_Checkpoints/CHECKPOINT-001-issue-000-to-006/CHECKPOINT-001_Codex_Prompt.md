# CHECKPOINT-001 Codex Prompt

Copy and paste this entire prompt into Codex.

---

/goal
Complete CHECKPOINT-001 — MVP01 ISSUE-000 to ISSUE-006 Foundation Review only.

Context:
- Product: Optimaks MVP01
- Constitution Version: v1.7.9.4 AI Harness
- Checkpoint: CHECKPOINT-001
- Review Range: ISSUE-000 through ISSUE-006
- Next Issue Gate: ISSUE-007 RLS Helper Functions and Policies
- Execution Mode: Review / Audit Only
- Normalized checkpoint path: 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/

Purpose:
Review the completed MVP01 foundation before ISSUE-007 begins. Do not implement features, do not modify migrations, do not create RLS, and do not start ISSUE-007.

Required Tasks:
1. Read the checkpoint workpack:
   12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Review_Workpack.md
2. Review ISSUE-000 through ISSUE-006 outputs.
3. Confirm founder acceptance status for ISSUE-001 through ISSUE-006.
4. Confirm ISSUE-007 remains locked until workpack approval.
5. Confirm normalized paths are consistent.
6. Confirm migration sequence:
   - supabase/migrations/0001_create_p0_core_tables.sql
   - supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
   - supabase/migrations/0003_create_auth_profiles.sql
7. Confirm no real secrets are committed.
8. Confirm no RLS exists before ISSUE-007.
9. Confirm app validation remains healthy.
10. Create checkpoint reports:
   - CHECKPOINT-001_Findings_Report.md
   - CHECKPOINT-001_Risk_Register.md
   - CHECKPOINT-001_Go_No_Go_Decision.md

Required Validation:
Run if available:
- npm run lint
- npm run build
- npm run typecheck

If Supabase CLI is available, optionally validate SQL. If unavailable, document NOT RUN and perform static SQL review.

Allowed Files:
- 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/README_CHECKPOINT-001.md
- 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Review_Workpack.md
- 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Codex_Prompt.md
- 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Findings_Report.md
- 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Risk_Register.md
- 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Go_No_Go_Decision.md
- 12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Open_Questions.md

Forbidden Scope:
- Do not modify migrations.
- Do not modify app files.
- Do not modify package files.
- Do not modify .env.example.
- Do not create .env.local.
- Do not create RLS.
- Do not create RLS policies.
- Do not create Supabase client code.
- Do not create login UI.
- Do not create business tables.
- Do not create workspace membership tables.
- Do not modify issue DONE reports.
- Do not modify issue chain register.
- Do not modify constitution files.
- Do not modify templates.
- Do not start ISSUE-007.

Required Output:
1. Final checkpoint decision: GO / GO WITH WARNINGS / NO-GO
2. Findings summary
3. Risk register summary
4. Validation command results
5. Secret check result
6. Migration review result
7. ISSUE-007 readiness result
8. List of created checkpoint files
