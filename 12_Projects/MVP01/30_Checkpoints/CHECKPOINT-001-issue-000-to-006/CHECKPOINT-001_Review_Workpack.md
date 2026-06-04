# CHECKPOINT-001 Review Workpack

**Checkpoint:** CHECKPOINT-001  
**Title:** MVP01 ISSUE-000 to ISSUE-006 Foundation Review  
**Project:** MVP01  
**Constitution Version:** v1.7.9.4 AI Harness  
**Status:** Ready for Codex Review  
**Required Context Level:** Full  
**Execution Mode:** Review / Audit Only  
**Review Range:** ISSUE-000 through ISSUE-006  
**Next Gate:** ISSUE-007 RLS Helper Functions and Policies  
**Branch:** checkpoint/checkpoint-001-issue-000-to-006-review  
**Normalized Path:** `12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/`

---

## 1. Purpose

CHECKPOINT-001 reviews the MVP01 foundation before starting ISSUE-007.

ISSUE-007 is the first major security boundary issue because it will introduce RLS helper functions and policies. Before that begins, the project must confirm that the foundation from ISSUE-000 through ISSUE-006 is consistent, accepted, safe, and ready.

This checkpoint is not an implementation issue.

It must not add product features, rewrite migrations, alter schema, create RLS, create app code, or start ISSUE-007.

---

## 2. Review Scope

Review all completed work from:

```text
ISSUE-000 through ISSUE-006
```

Focus areas:

```text
1. Issue chain continuity
2. Founder acceptance status
3. Normalized path consistency
4. Migration order and boundaries
5. Supabase environment contract
6. Next.js foundation health
7. Database foundation boundaries
8. Auth / profile boundary
9. Forbidden-scope leakage
10. Readiness for ISSUE-007
```

---

## 3. Required Reference Files

Codex must read these files if present:

```text
AGENTS.md
README.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
03_Development_Standard/STD-DB-001_Database_Migration_and_RLS_Change_Control.md
03_Development_Standard/STD-SEC-001_Environment_Secrets_and_API_Key_Governance.md
12_Projects/MVP01/00_Project_Baseline/README_MVP01.md
12_Projects/MVP01/00_Project_Baseline/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/00_Project_Baseline/MVP01_CHANGE_CONTROL_LOG.md
12_Projects/MVP01/00_Project_Baseline/MVP01_ISSUE_CHAIN_REGISTER.md
.env.example
package.json
tsconfig.json
eslint.config.mjs
supabase/migrations/0001_create_p0_core_tables.sql
supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
supabase/migrations/0003_create_auth_profiles.sql
```

Codex must also inspect normalized issue folders where present:

```text
12_Projects/MVP01/20_Issues/ISSUE-000*
12_Projects/MVP01/20_Issues/ISSUE-001*
12_Projects/MVP01/20_Issues/ISSUE-002*
12_Projects/MVP01/20_Issues/ISSUE-003*
12_Projects/MVP01/20_Issues/ISSUE-004*
12_Projects/MVP01/20_Issues/ISSUE-005*
12_Projects/MVP01/20_Issues/ISSUE-006*
```

If some historical files remain in legacy paths, Codex must report this as a finding instead of silently moving files.

---

## 4. Required Outputs

Codex must create or complete:

```text
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Findings_Report.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Risk_Register.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Go_No_Go_Decision.md
```

Optional:

```text
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Open_Questions.md
```

---

## 5. Review Checklist

### 5.1 Issue Chain

Confirm:

```text
ISSUE-000 exists / status known
ISSUE-001 accepted
ISSUE-002 accepted
ISSUE-003 accepted
ISSUE-004 accepted
ISSUE-005 accepted
ISSUE-006 accepted
ISSUE-007 locked until workpack approval
```

### 5.2 Path Normalization

Confirm:

```text
Project baseline path:
12_Projects/MVP01/00_Project_Baseline/

Issue path:
12_Projects/MVP01/20_Issues/

Checkpoint path:
12_Projects/MVP01/30_Checkpoints/
```

Report any remaining legacy path residue.

### 5.3 Supabase Environment Contract

Confirm `.env.example` contains placeholder-only values and no real secrets:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=
```

Confirm `.env.local` is not committed.

### 5.4 App Foundation

Run if available:

```text
npm run lint
npm run build
npm run typecheck
```

Confirm app foundation has not accidentally gained product feature scope before ISSUE-007.

### 5.5 Migration Review

Confirm migration sequence:

```text
0001_create_p0_core_tables.sql
0002_add_indexes_and_updated_at_triggers.sql
0003_create_auth_profiles.sql
```

Confirm:

```text
clients table exists
workspaces table exists
profiles table exists
updated_at function / triggers exist
required indexes exist
profiles links to auth.users
profiles.workspace_id links to workspaces
```

### 5.6 Security Boundary

Confirm:

```text
RLS not yet enabled before ISSUE-007
No RLS policies created before ISSUE-007
No production Data API exposure should happen before ISSUE-007
Service role key not exposed to client
DATABASE_URL not exposed to browser
```

### 5.7 Forbidden Scope Leakage

Confirm no unexpected:

```text
business feature tables
customer portal tables
workspace membership tables
Supabase client integration
login UI
auth provider setup
API routes
server actions
Vercel production setup
real secrets
```

---

## 6. Decision Rules

Checkpoint status must be one of:

```text
GO
GO WITH WARNINGS
NO-GO
```

Use `GO` only if no blocking issues exist and ISSUE-007 can begin safely.

Use `GO WITH WARNINGS` if non-blocking warnings exist, such as Supabase CLI not available, static SQL review only, or legacy path residue that does not affect ISSUE-007 execution.

Use `NO-GO` if any blocking issue exists, such as missing founder acceptance, missing migration, real secret exposure, unclear profile/auth boundary, broken build, or issue chain inconsistency.

---

## 7. Allowed Files

Codex may create or update only:

```text
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/README_CHECKPOINT-001.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Review_Workpack.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Codex_Prompt.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Findings_Report.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Risk_Register.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Go_No_Go_Decision.md
12_Projects/MVP01/30_Checkpoints/CHECKPOINT-001-issue-000-to-006/CHECKPOINT-001_Open_Questions.md
```

This checkpoint should not modify the issue chain register unless the founder explicitly requests a checkpoint record later.

---

## 8. Forbidden Scope

Codex must not:

```text
Modify migrations
Modify app files
Modify package files
Modify .env.example
Create .env.local
Create RLS
Create RLS policies
Create Supabase client code
Create login UI
Create business tables
Create workspace membership tables
Modify issue DONE reports
Modify issue chain register
Modify constitution files
Modify templates
Start ISSUE-007
```

---

## 9. Required Handoff

The Go / No-Go decision must clearly state:

```text
Can ISSUE-007 start?
Reason:
Blocking issues:
Non-blocking warnings:
Required fixes before ISSUE-007:
```
