# ISSUE-005 Index Notes

**Issue:** ISSUE-005  
**Title:** Indexes and updated_at Triggers  
**Project:** MVP01  
**Phase:** Phase 2 - Database Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Execution Mode:** Database Foundation Implementation  

---

## 1. Scope

ISSUE-005 adds only the approved P0 operational lookup indexes:

```text
idx_clients_status on public.clients(status)
idx_workspaces_status on public.workspaces(status)
idx_workspaces_plan_key on public.workspaces(plan_key)
```

No table, column, auth, RLS, membership, or business-feature change is included.

---

## 2. Index Decisions

| Index | Purpose |
|---|---|
| `idx_clients_status` | Supports client lifecycle-status lookup. |
| `idx_workspaces_status` | Supports workspace lifecycle-status lookup. |
| `idx_workspaces_plan_key` | Supports workspace plan lookup. |

The migration does not add an explicit `workspaces(client_id)` index. ISSUE-004 already created `unique(client_id)`, which provides the required unique index for the one-workspace-per-client baseline.

---

## 3. Deferred Work

```text
- No speculative compound indexes.
- No business-table indexes.
- No query-specific optimization beyond the approved P0 lookup set.
- Review future index additions only when later approved tables and query patterns exist.
```

Reference:

```text
https://supabase.com/docs/guides/database/query-optimization
https://www.postgresql.org/docs/current/sql-createindex.html
```
