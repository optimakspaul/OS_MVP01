# ISSUE-001 Workpack

**Issue:** ISSUE-001  
**Title:** Core Workspace and Tenant Foundation  
**Project:** MVP01  
**Phase:** Phase 1 - Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Status:** Ready for Codex Execution  
**Required Context Level:** Standard  
**Execution Mode:** Documentation + Foundation Design Only  
**Depends On:** ISSUE-000  
**Previous Issue Status:** PASS WITH WARNINGS, Founder Accepted  
**Branch:** feature/issue-001-core-workspace-tenant-foundation  

---

## 1. Purpose

ISSUE-001 defines the core workspace and tenant foundation for MVP01 before application, Supabase, RLS, or feature implementation begins.

This issue must clarify how MVP01 will represent:

1. Owner / founder workspace
2. Client workspace
3. Tenant boundary
4. User role boundary
5. Future multi-tenant SaaS migration path
6. What is included in MVP01 and what is reserved

This issue does not create application code.

---

## 2. Background

ISSUE-000 verified that the repository contains the required constitution, templates, governance standards, project baseline, issue chain register, and execution structure.

ISSUE-001 may start only after:

1. ISSUE-000 DONE Report exists.
2. ISSUE-000 is accepted as PASS WITH WARNINGS.
3. MVP01 Issue Chain Register records ISSUE-000 acceptance.
4. This ISSUE-001 workpack is created and approved.

---

## 3. Required Reference Documents

Codex must read these files before making changes:

```text
AGENTS.md
README.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
12_Projects/MVP01/README_MVP01.md
12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
20_Issues/ISSUE-000/ISSUE-000_DONE_Report.md
```

If `20_Issues/ISSUE-000/ISSUE-000_DONE_Report.md` was later moved into a project-scoped folder, Codex must use the actual merged repo path and report the path used in the DONE Report.

---

## 4. Required Outputs

Codex must create the following files:

```text
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
```

Optional if useful:

```text
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Open_Questions.md
```

---

## 5. Required Assessment Content

`ISSUE-001_Foundation_Assessment.md` must include:

1. Current MVP01 foundation assumptions
2. Whether workspace and tenant model is already defined
3. What is missing before Supabase setup
4. What decisions must be locked before ISSUE-002
5. Risks if tenant boundaries are unclear
6. Confirmation that no app code was created

---

## 6. Required Workspace / Tenant Model Content

`ISSUE-001_Workspace_Tenant_Model.md` must define:

1. Workspace concept
2. Tenant concept
3. Client concept
4. User concept
5. Owner / founder role
6. Client admin role
7. Staff / technician role
8. Lightweight customer access boundary
9. Reserved full customer portal boundary
10. MVP01 included vs reserved boundaries
11. Data ownership assumptions
12. Future RLS implications
13. Future Supabase table implications
14. Handoff requirements for ISSUE-002

---

## 7. Allowed Files

Codex may create or update only:

```text
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/README_ISSUE-001.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Open_Questions.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

---

## 8. Forbidden Scope

Codex must not:

1. Initialize Next.js.
2. Create app routes.
3. Create React components.
4. Create Supabase client code.
5. Create migrations.
6. Create database schema.
7. Create RLS policies.
8. Modify constitution files.
9. Modify templates.
10. Modify MVP01 scope baseline.
11. Add environment variables.
12. Add package dependencies.
13. Modify deployment settings.
14. Start ISSUE-002 or ISSUE-003.

---

## 9. Success Criteria

ISSUE-001 is PASS only if:

1. Foundation assessment is created.
2. Workspace / tenant model is created.
3. MVP01 included vs reserved boundaries are clear.
4. Future Supabase and RLS implications are documented.
5. ISSUE-002 handoff is clear.
6. No app code or infrastructure setup is created.
7. Issue Chain Register is updated for ISSUE-001 status.
8. DONE Report is created with validation evidence.

ISSUE-001 is PASS WITH WARNINGS if:

1. Required files are created, but some assumptions require founder confirmation.
2. Non-blocking open questions remain.
3. No forbidden scope was touched.

ISSUE-001 is FAIL if:

1. Required files are missing.
2. App code or infrastructure setup was created.
3. Constitution or scope baseline was changed without approval.
4. Workspace / tenant model is unclear.
5. ISSUE-002 cannot safely start.

---

## 10. Validation Plan

Codex must validate:

```text
PASS - Required reference documents were read.
PASS - ISSUE-000 acceptance was found.
PASS - ISSUE-001 files were created in the correct issue folder.
PASS - No app code was created.
PASS - No Supabase, Vercel, database, or Next.js setup was performed.
PASS - MVP01 scope baseline was not changed.
PASS - Constitution and templates were not changed.
PASS - Issue Chain Register was updated only for ISSUE-001 status / handoff.
```

No `npm run lint`, `npm run build`, or `npm run test` is required because this is documentation and architecture foundation only.

---

## 11. Required DONE Report Format

`ISSUE-001_DONE_Report.md` must include:

1. Final Status: PASS / PASS WITH WARNINGS / FAIL
2. Files read
3. Files created
4. Files changed
5. Summary of workspace / tenant model
6. Included scope
7. Reserved scope
8. Risks / warnings
9. Validation results
10. Issue Chain Register update result
11. Handoff to ISSUE-002
12. Whether ISSUE-002 can start

---

## 12. Handoff to ISSUE-002

ISSUE-002 may start only if ISSUE-001 provides:

```text
ISSUE-001_DONE_Report.md
ISSUE-001_Foundation_Assessment.md
ISSUE-001_Workspace_Tenant_Model.md
Updated MVP01_ISSUE_CHAIN_REGISTER.md
```

ISSUE-002 must use these outputs to prepare Supabase client and environment foundation without guessing tenant assumptions.
