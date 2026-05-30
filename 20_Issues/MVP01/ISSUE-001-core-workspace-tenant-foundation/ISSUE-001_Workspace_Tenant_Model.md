# ISSUE-001 Workspace and Tenant Model

**Issue:** ISSUE-001
**Title:** Core Workspace and Tenant Foundation
**Project:** MVP01
**Model Status:** Proposed for founder acceptance
**Implementation Status:** Documentation only - no schema, auth, or RLS implementation

---

## 1. Core Model

```text
Optimaks Platform / Owner Console Basic
  -> manages client profiles and workspace activation

Client
  -> has one MVP01 workspace

Workspace
  -> represents one tenant isolation boundary
  -> contains tenant-scoped operational records
  -> receives plan, template, module, and launch configuration

User
  -> receives workspace access through a future membership boundary
  -> has a tenant-scoped role when operating inside a client workspace

Customer Contact
  -> belongs to client operations
  -> is not automatically an authenticated workspace user
```

---

## 2. Definitions

### Workspace

A workspace is the operational container for one client company in MVP01.

It is the future home for:

```text
- client configuration
- plan assignment
- industry template selection
- enabled modules and feature toggles
- launch status
- tenant-scoped users and memberships
- leads, customers, bookings, jobs, invoices, payments, reviews, reminders, and notifications
```

Every tenant-scoped operational record should belong to exactly one workspace when the database issues begin.

### Tenant

A tenant is the security and data-isolation boundary.

For MVP01:

```text
tenant boundary = workspace boundary
```

The model intentionally avoids requiring a separate `tenant_id` column. Future implementation should use `workspace_id` as the canonical tenant-scoping reference unless an approved change-control decision introduces a real multi-workspace tenant requirement.

### Client

A client is the SME or field-service company using Optimaks MVP01.

A client is the business identity linked to a workspace. `client_id` may identify the client profile and commercial / onboarding relationship, but it should not replace `workspace_id` as the operational authorization boundary.

### User

A user is an authenticated human identity when auth is introduced later.

Identity and workspace access should remain separate:

```text
user identity
  -> future workspace membership
  -> tenant-scoped role
```

This preserves a path for controlled multi-workspace access later without granting it by default.

---

## 3. Workspace and Client Relationship

MVP01 uses:

```text
one client company -> one active workspace -> one tenant boundary
```

Reserved future possibilities:

```text
- multiple workspaces for one client
- group-level tenant structures
- cross-workspace reporting
- broader multi-tenant SaaS administration
```

Those possibilities are not part of ISSUE-001 and must not be inferred into ISSUE-002.

---

## 4. Role Boundaries

| Role | Boundary | MVP01 Responsibility | Reserved / Not Allowed Yet |
|---|---|---|---|
| Optimaks Internal Admin / Founder | Platform-level internal operations | Create and manage client profile, workspace status, plan assignment, template selection, feature toggles, onboarding status, launch status, and support notes through Owner Console Basic. | Broad unaudited data bypass, autonomous production changes, or hidden cross-tenant access. |
| Client Owner | Tenant-bound workspace role | View and operate the client workspace at MVP01 depth, including leads, customers, bookings, jobs, invoice and payment status, reviews, and reminders. | Platform administration or access to another client's workspace. |
| Client Admin | Tenant-bound delegated role | Optional operational support boundary for approved Flow Basic depth. | Assumed full permissions or Command-level permission management. |
| Staff / Technician | Tenant-bound lightweight role | Receive task / job card information and update approved lightweight job status fields later. | Full technician portal, complex permissions, payroll, or advanced assignment automation. |
| Customer | Narrow workflow participant | Submit enquiry, confirm booking, pay through approved manual-assisted boundaries, review, and rebook. | General workspace access or a full customer portal. |

---

## 5. Lightweight Customer Access Boundary

Customer access in MVP01 is deliberately narrow.

Included boundary:

```text
- enquiry submission
- booking confirmation interaction
- payment reference or manual-assisted payment tracking interaction
- review request interaction
- maintenance reminder and rebooking interaction
```

Customer records are operational contacts first. They must not automatically become workspace members or receive broad access to tenant data.

### Reserved Full Customer Portal Boundary

Reserved for later approval:

```text
- authenticated customer dashboard
- broad service-history browsing
- document library access
- profile management
- complex account recovery
- multi-property account views
- self-service billing administration
```

---

## 6. MVP01 Included Boundaries

| Included Boundary | Meaning for ISSUE-001 |
|---|---|
| Core workspace and tenant foundation | One workspace is one tenant boundary. |
| Client workspace foundation | One client company maps to one controlled workspace. |
| Owner Console Basic | Optimaks internal admin manages workspace configuration and launch state. |
| Solo Complete + Flow Basic | The foundation supports approved MVP-depth workflows without Command expansion. |
| Manual-assisted operations | Manual setup, WhatsApp support, and payment tracking remain acceptable MVP mechanisms. |
| Lightweight customer access | Narrow workflow interactions only. |
| Technician lightweight task boundary | Task / job card interaction only. |
| Core PDF boundary | Limited invoice PDF behavior remains bounded by ISSUE-013. |

---

## 7. Reserved Future Boundaries

```text
- multiple workspaces per client
- group tenant hierarchy
- full multi-tenant SaaS automation
- full customer portal
- full technician portal and independent technician role system
- Command-level permissions and quality-control workflows
- WhatsApp API automation
- payment gateway automation
- full PDF automation
- advanced analytics, refund, suspension, tax, and multi-currency behavior
```

Reserved items require impact review, placement decision, change-control entry, and baseline update before implementation.

---

## 8. Data Ownership Assumptions

The following are product-operating assumptions for MVP01, not legal terms:

1. Client operational records belong to one client workspace.
2. One client workspace must not read another client's operational records.
3. Optimaks manages platform configuration, workspace provisioning, and support operations under explicit internal-admin controls.
4. Client owners and client admins operate only inside authorized workspaces.
5. Staff / technicians receive only the workspace data needed for approved task flows.
6. Customer contacts receive only the narrow data needed for approved customer interactions.
7. Real client data, credentials, and secrets must not be placed in repo documentation.

Founder / legal review should confirm production-facing data-processing language before production launch.

---

## 9. Future Supabase Implications

ISSUE-001 does not create tables. Later issues should treat the following as design inputs:

| Concept | Future Direction |
|---|---|
| `workspace_id` | Canonical tenant-scoping reference for operational records. |
| conceptual `tenant_id` | Represented by the workspace boundary in MVP01. Do not add a duplicate column without an approved requirement. |
| `client_id` | Links workspace configuration to the client company profile and onboarding / commercial record. |
| `user_id` | Identifies the authenticated user profile later. |
| workspace membership | Separates user identity from tenant-scoped access and role assignment. |
| customer record | Remains an operational contact unless a later approved access flow creates a narrow authenticated boundary. |
| internal admin access | Must be modeled explicitly and audited later; do not rely on accidental broad access. |

Potential future table names are intentionally not locked in ISSUE-001. Database design belongs to the approved database issue chain.

---

## 10. Future RLS Implications

ISSUE-001 does not create RLS functions or policies. Later RLS work must enforce:

```text
1. Tenant-scoped operational records filter by workspace_id.
2. Tenant-bound users require an authorized workspace membership.
3. Client owners and client admins cannot access another workspace.
4. Staff / technicians receive only approved task-level access.
5. Customer access is narrow and must not imply workspace membership.
6. Optimaks internal admin access is explicit, separately controlled, and auditable.
7. Service-role credentials are never exposed in frontend code.
```

---

## 11. L1-L5 Mapping

| Layer | ISSUE-001 Mapping |
|---|---|
| L1 Business Flow | Shared tenant boundary for the complete MVP01 business journey. |
| L2 Plan Flow | Shared Core Foundation for Solo Complete and Flow Basic. Command remains reserved. |
| L3 Role Flow | Optimaks Internal Admin, client Owner, client Admin boundary, Staff / Technician, and Customer lightweight access. |
| L4 Status Flow | No status transitions change. Later status-bearing records remain workspace-scoped. |
| L5 Module / Template Flow | Workspace Module and User Role Module foundation with future support for Plan Rule, Feature Toggle, Owner Console, and operational modules. |

---

## 12. Handoff Requirements for ISSUE-002

ISSUE-002 may prepare the Supabase client and environment foundation only after founder acceptance of ISSUE-001 and approval of the ISSUE-002 workpack.

ISSUE-002 must read:

```text
ISSUE-001_DONE_Report.md
ISSUE-001_Foundation_Assessment.md
ISSUE-001_Workspace_Tenant_Model.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

ISSUE-002 must preserve:

```text
- one client workspace = one tenant boundary
- workspace_id as the future canonical tenant-scoping key
- no schema, auth-role, or RLS implementation
- no real secrets in repo files
- no frontend exposure of privileged keys
- no ISSUE-003 execution
```
