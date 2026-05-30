# ISSUE-001 README

**Issue:** ISSUE-001  
**Title:** Core Workspace and Tenant Foundation  
**Project:** MVP01  
**Phase:** Phase 1 - Foundation  
**Branch:** feature/issue-001-core-workspace-tenant-foundation  

---

## Purpose

This issue defines the workspace, tenant, client, user, and role foundation for MVP01 before Supabase, database schema, RLS, Next.js app structure, or feature implementation begins.

---

## Why this issue exists

MVP01 must avoid building features before the data ownership and tenant boundary are clear.

This issue answers:

1. Who owns the workspace?
2. What is a tenant?
3. What is a client?
4. What is a user?
5. What role boundaries exist?
6. What is included in MVP01?
7. What is reserved for future versions?
8. What does ISSUE-002 need before Supabase setup?

---

## Expected Output

Codex should produce:

```text
ISSUE-001_Foundation_Assessment.md
ISSUE-001_Workspace_Tenant_Model.md
ISSUE-001_DONE_Report.md
```

Optional:

```text
ISSUE-001_Open_Questions.md
```

---

## Not Allowed

This issue must not create:

```text
Next.js app
React components
Supabase client
Database schema
RLS policies
Environment variables
Deployment setup
Feature implementation
```

---

## Handoff

If this issue passes, ISSUE-002 may use the workspace and tenant model to prepare Supabase client and environment foundation.
