# ISSUE-001 Foundation Assessment

**Issue:** ISSUE-001
**Title:** Core Workspace and Tenant Foundation
**Project:** MVP01
**Phase:** Phase 1 - Foundation
**Classification:** Core Foundation
**Execution Mode:** Documentation + Foundation Design Only

---

## 1. Executive Summary

MVP01 has a clear project scope and issue chain, but it did not yet have a written operational definition for workspace, tenant, client, user, and role boundaries.

This assessment selects a small MVP01 foundation:

```text
One client company
-> one client workspace
-> one tenant isolation boundary
-> workspace-scoped memberships and operational records
```

For MVP01, the workspace is the tenant boundary. Future implementation should use `workspace_id` as the canonical isolation key instead of introducing a second competing `tenant_id` column. The term tenant remains useful as the security concept: a tenant is the data-isolation boundary represented by one workspace.

---

## 2. Dependency Check

| Check | Result | Evidence |
|---|---|---|
| ISSUE-000 DONE report exists | PASS | `20_Issues/ISSUE-000/ISSUE-000_DONE_Report.md` |
| ISSUE-000 status | PASS | `PASS WITH WARNINGS` |
| ISSUE-000 founder acceptance | PASS | Recorded as accepted in `12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md` |
| ISSUE-001 dependency | PASS | ISSUE-001 depends on ISSUE-000 |
| ISSUE-001 workpack | PASS | Present and approved for execution |
| ISSUE-001 branch | PASS | `feature/issue-001-core-workspace-tenant-foundation` |

---

## 3. Current MVP01 Foundation Assumptions

| Area | MVP01 Assumption |
|---|---|
| Application shape | One shared application and one repo serve MVP01. |
| Client delivery | Each client company receives one controlled workspace. |
| Tenant isolation | One workspace represents one tenant boundary in MVP01. |
| Internal operations | Optimaks founder / internal admin operates through Owner Console Basic and is not a normal client-workspace user. |
| Client operations | A client owner is the primary tenant-bound operator. A delegated client admin may be enabled later within approved MVP01 depth. |
| Technician use | Staff / technician access remains lightweight and task-focused. A full technician portal is reserved. |
| Customer use | Customer lightweight access supports narrow workflow interactions. A full customer portal is reserved. |
| Data isolation | Operational records must belong to exactly one workspace when database work begins. |
| Future growth | Membership-based access should preserve a path to controlled multi-workspace support later. |

---

## 4. Was the Model Already Defined?

**Partially.**

The MVP01 scope baseline and L1-L5 architecture already establish:

```text
- Core workspace and tenant foundation
- Client workspace foundation
- Owner Console Basic
- Optimaks Internal Admin, Owner, Admin, Technician, and Customer roles
- Client isolation via workspace_id / client_id separation and future RLS
```

The missing piece was a single written rule for how these concepts relate. Without that rule, later Supabase, schema, profile, and RLS work could introduce duplicate identifiers or inconsistent role boundaries.

---

## 5. Approaches Considered

### Approach A - Workspace Is the MVP01 Tenant Boundary

```text
client -> workspace -> operational records
```

Use `workspace_id` as the canonical future isolation key. Treat tenant as the security meaning of the workspace.

**Selected.** This is the smallest clear model and aligns with shared-app workspace isolation.

### Approach B - Separate Workspace and Tenant Identifiers Immediately

```text
client -> tenant -> workspace -> operational records
```

This can support multiple workspaces per tenant, but it adds an extra boundary before MVP01 needs it and creates a risk of conflicting filters.

**Not selected for MVP01.** Revisit only through change control if a real requirement appears.

### Approach C - Use Client ID as the Only Isolation Key

```text
client -> operational records
```

This is simple at first, but it mixes business identity with application isolation and makes future workspace configuration harder.

**Not selected.** `client_id` remains useful for client profile linkage, not as the canonical operational isolation key.

---

## 6. Decisions Locked Before ISSUE-002

1. A client workspace is the MVP01 tenant boundary.
2. Future tenant-scoped records should use `workspace_id` as the canonical isolation reference.
3. `tenant_id` is a conceptual alias for the workspace isolation boundary in MVP01, not a second required column.
4. `client_id` links a workspace to the client company profile; it is not the primary authorization boundary.
5. User identity and workspace access should remain separate concepts so future implementation can use workspace memberships.
6. Optimaks internal admin capability must be distinct from tenant-bound client roles.
7. Customer contact records must not automatically receive authenticated workspace access.
8. Full customer portal, full technician portal, and multi-workspace SaaS automation remain reserved.

---

## 7. What Is Still Missing Before Supabase Setup

ISSUE-002 may prepare the Supabase client and environment foundation after founder acceptance of ISSUE-001. It must not guess beyond this assessment.

ISSUE-002 must preserve these boundaries:

```text
- no database schema creation
- no RLS policy creation
- no auth-role implementation
- no service-role key exposure in frontend code
- no real secrets committed
- no duplicate workspace_id / tenant_id design without change control
```

The actual table structure belongs to the later database issue chain. The actual RLS functions and policies belong to the approved RLS issue.

---

## 8. Risks If Tenant Boundaries Are Unclear

| Risk | Impact | Control |
|---|---|---|
| Mixing `client_id`, `workspace_id`, and `tenant_id` as competing boundaries | Cross-client filtering mistakes and harder RLS design | Use `workspace_id` as the canonical future isolation key. |
| Treating Optimaks internal admin as an ordinary workspace member | Excessive or unclear cross-tenant privileges | Keep internal administration explicit, separate, and auditable in later issues. |
| Treating customer contacts as normal workspace users | Accidental exposure of client operations | Keep customer access narrow and purpose-specific. |
| Building full portal or multi-workspace features early | Scope expansion and delayed MVP delivery | Keep reserved boundaries explicit. |
| Locking legal ownership language too early | Product assumptions may be mistaken for legal terms | Treat data ownership wording as an MVP01 operating assumption pending founder / legal confirmation before production. |

---

## 9. MVP01 L1-L5 Mapping

| Layer | ISSUE-001 Mapping |
|---|---|
| L1 Business Flow | Cross-cutting foundation for Lead -> Customer -> Booking -> Job -> Completion -> Payment -> Review -> Maintenance Reminder -> Repeat Booking. |
| L2 Plan Flow | Core Foundation shared by Solo Complete and Flow Basic; Command remains reserved. |
| L3 Role Flow | Optimaks Internal Admin, client Owner, client Admin boundary, Staff / Technician, and Customer lightweight access. |
| L4 Status Flow | No status values change in ISSUE-001. Future records must remain scoped to one workspace. |
| L5 Module / Template Flow | Workspace Module and User Role Module foundation; supports Plan Rule, Feature Toggle, Owner Console, and operational modules later. |

---

## 10. Scope Confirmation

```text
PASS - No app code was created.
PASS - No Next.js setup was created.
PASS - No Supabase setup was created.
PASS - No database schema was created.
PASS - No RLS policy was created.
PASS - No constitution, template, scope baseline, or phase baseline file was modified.
PASS - ISSUE-002 was not started.
```
