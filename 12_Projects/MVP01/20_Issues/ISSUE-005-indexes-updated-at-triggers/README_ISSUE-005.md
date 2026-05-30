# ISSUE-005 README

**Issue:** ISSUE-005  
**Title:** Indexes and updated_at Triggers  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Branch:** feature/issue-005-indexes-updated-at-triggers  
**Normalized Path:** `12_Projects/MVP01/20_Issues/ISSUE-005-indexes-updated-at-triggers/`

## Purpose

Add minimal indexes and updated_at automation for the P0 `clients` and `workspaces` tables.

## Expected Output

```text
supabase/migrations/0002_add_indexes_and_updated_at_triggers.sql
ISSUE-005_Index_Notes.md
ISSUE-005_Trigger_Notes.md
ISSUE-005_DONE_Report.md
```

## Not Allowed

```text
RLS
auth/profile tables
workspace membership tables
business feature tables
Supabase client source code
app feature code
real secrets
ISSUE-006 execution
```

## Handoff

If this issue passes, ISSUE-006 may create auth and profiles under its own approved workpack.
