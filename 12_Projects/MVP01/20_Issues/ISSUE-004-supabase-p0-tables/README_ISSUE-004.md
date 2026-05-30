# ISSUE-004 README

**Issue:** ISSUE-004  
**Title:** Supabase P0 Tables  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Branch:** feature/issue-004-supabase-p0-tables  
**Normalized Path:** `12_Projects/MVP01/20_Issues/ISSUE-004-supabase-p0-tables/`

## Purpose

Create the minimal Supabase P0 database table foundation for MVP01.

## Expected Output

```text
supabase/migrations/0001_create_p0_core_tables.sql
ISSUE-004_DB_Table_Notes.md
ISSUE-004_Migration_Notes.md
ISSUE-004_DONE_Report.md
```

## Not Allowed

```text
Supabase client source code
Auth profile tables
Workspace membership tables
RLS enablement or policies
updated_at triggers
Business feature tables
Seed data
App feature code
Vercel setup
Real secrets
```

## Handoff

If this issue passes, ISSUE-005 may create indexes and updated_at triggers under its own approved workpack.
