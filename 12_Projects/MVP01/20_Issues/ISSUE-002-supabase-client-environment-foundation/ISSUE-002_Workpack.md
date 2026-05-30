# ISSUE-002 Workpack

**Issue:** ISSUE-002  
**Title:** Supabase Client and Environment Foundation  
**Project:** MVP01  
**Phase:** Phase 1 - Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Status:** Ready for Codex Execution  
**Required Context Level:** Standard  
**Execution Mode:** Documentation + Environment Contract Only  
**Depends On:** ISSUE-001  
**Previous Issue Status:** PASS WITH WARNINGS, Founder Acceptance Required Before Execution  
**Branch:** feature/issue-002-supabase-client-environment-foundation  

---

## 1. Purpose

ISSUE-002 prepares the Supabase client and environment foundation contract for MVP01 without creating the application, database schema, auth implementation, RLS policies, migrations, or deployment setup.

This issue must define:

1. Supabase environment variable names.
2. Which keys are allowed in repo documentation.
3. Which keys must never be committed.
4. How future app code should initialize Supabase safely.
5. How the ISSUE-001 workspace / tenant model affects future Supabase setup.
6. What ISSUE-003 needs before Next.js app foundation begins.

This issue is a foundation contract issue, not a feature implementation issue.

---

## 2. Dependency Gate

ISSUE-002 may execute only after:

1. ISSUE-001 DONE Report exists.
2. ISSUE-001 Foundation Assessment exists.
3. ISSUE-001 Workspace Tenant Model exists.
4. ISSUE-001 is accepted by founder as PASS or PASS WITH WARNINGS.
5. ISSUE-002 workpack is created and approved.
6. ISSUE-002 runs on its own branch.

If founder acceptance has not been recorded, Codex must stop and return `FAIL - Dependency gate not satisfied`.

---

## 3. Required Reference Documents

Codex must read these files before making changes:

```text
AGENTS.md
README.md
01_Constitution/CURRENT_CONSTITUTION.md
01_Constitution/ACTIVE_STANDARDS_INDEX.md
03_Development_Standard/STD-DEV-032_AI_Issue_Execution_and_DONE_Report_Standard.md
03_Development_Standard/STD-DEV-034_Client_Deployment_and_Environment_Provisioning_Standard.md
03_Development_Standard/STD-DEV-037_AI_Agent_Execution_Slimming_and_Context_Routing_Standard.md
03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
03_Development_Standard/STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
12_Projects/MVP01/README_MVP01.md
12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/MVP01_CHANGE_CONTROL_LOG.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Workpack.md
```

---

## 4. Required Outputs

Codex must create or complete these files:

```text
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Supabase_Setup_Notes.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Env_Key_Plan.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md
```

Optional if useful:

```text
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Open_Questions.md
```

Optional root file only if missing and allowed by repository convention:

```text
.env.example
```

If `.env.example` is created or updated, it must contain placeholder variable names only. No real secrets, project URLs, anon keys, service-role keys, JWT secrets, database passwords, connection strings, or client data may be committed.

---

## 5. Required Supabase Setup Notes Content

`ISSUE-002_Supabase_Setup_Notes.md` must include:

1. ISSUE-001 dependency summary.
2. Supabase project purpose for MVP01.
3. Environment variable naming contract.
4. Public browser-safe variables.
5. Server-only variables.
6. Forbidden secrets.
7. Local development handling.
8. Vercel environment handling reserved for later deployment issue.
9. Future Supabase client initialization assumptions.
10. Future auth and profile assumptions.
11. Future workspace isolation implications.
12. Handoff requirements for ISSUE-003.

---

## 6. Required Env Key Plan Content

`ISSUE-002_Env_Key_Plan.md` must include the approved environment key names:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=
```

Rules:

1. `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` may be referenced by frontend code in later issues.
2. `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_JWT_SECRET`, and `DATABASE_URL` are server-only / privileged.
3. No actual values may be committed.
4. `.env.local` must remain local and untracked.
5. `.env.example` may contain empty placeholders only.
6. Service-role key must never be exposed to client-side code.
7. Database URL must never be exposed to browser code.
8. Any additional key requires explicit justification in the DONE Report.

---

## 7. Allowed Files

Codex may create or update only:

```text
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/README_ISSUE-002.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Supabase_Setup_Notes.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Env_Key_Plan.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Open_Questions.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
.env.example
```

---

## 8. Forbidden Scope

Codex must not:

1. Initialize Next.js.
2. Create app routes.
3. Create React components.
4. Install npm packages.
5. Create package.json.
6. Create Supabase client source code.
7. Create database migrations.
8. Create database schema.
9. Create RLS helper functions.
10. Create RLS policies.
11. Configure auth providers.
12. Configure Vercel.
13. Commit `.env.local`.
14. Commit real Supabase URLs, keys, tokens, service-role keys, database URLs, passwords, or secrets.
15. Modify constitution files.
16. Modify templates.
17. Modify MVP01 scope baseline.
18. Modify MVP01 phase baseline.
19. Start ISSUE-003.

---

## 9. Success Criteria

ISSUE-002 is PASS only if:

1. ISSUE-001 founder acceptance is confirmed.
2. Supabase setup notes are created.
3. Env key plan is created.
4. `.env.example`, if touched, contains placeholders only.
5. No real secrets are committed.
6. No app code, packages, schema, migrations, auth, RLS, or Vercel setup is created.
7. Issue Chain Register is updated for ISSUE-002 status / output / handoff.
8. DONE Report is completed with validation evidence.
9. ISSUE-003 handoff is clear.

ISSUE-002 is PASS WITH WARNINGS if:

1. Required docs are created, but some production environment decisions remain open.
2. `.env.example` cannot be safely created due to repo convention uncertainty, but Env Key Plan is complete.
3. No forbidden scope was touched.

ISSUE-002 is FAIL if:

1. ISSUE-001 founder acceptance is missing.
2. Required files are missing.
3. Real secrets were committed.
4. App code, package setup, schema, RLS, migrations, or deployment setup was created.
5. ISSUE-003 cannot safely start.

---

## 10. Validation Plan

Codex must validate:

```text
PASS / FAIL - ISSUE-001 acceptance confirmed.
PASS / FAIL - ISSUE-002 dependency confirmed.
PASS / FAIL - Required Supabase setup notes created.
PASS / FAIL - Required Env Key Plan created.
PASS / FAIL - No real secrets committed.
PASS / FAIL - .env.local not committed.
PASS / FAIL - .env.example contains placeholders only if touched.
PASS / FAIL - No Next.js setup performed.
PASS / FAIL - No package.json or npm dependency setup created.
PASS / FAIL - No Supabase client source code created.
PASS / FAIL - No database schema or migration created.
PASS / FAIL - No RLS policies created.
PASS / FAIL - No Vercel setup performed.
PASS / FAIL - No constitution or template files modified.
PASS / FAIL - MVP01 scope and phase baselines not modified.
PASS / FAIL - Issue Chain Register updated only for ISSUE-002.
```

No `npm run lint`, `npm run build`, or `npm run test` is required because this is documentation and environment contract only.

---

## 11. Required DONE Report Format

`ISSUE-002_DONE_Report.md` must include:

1. Final Status: PASS / PASS WITH WARNINGS / FAIL
2. Dependency gate result
3. Files read
4. Files created
5. Files changed
6. Supabase setup summary
7. Environment variable plan summary
8. Secret handling result
9. Included scope
10. Forbidden scope confirmation
11. Risks / warnings
12. Validation results
13. Issue Chain Register update result
14. Handoff to ISSUE-003
15. Whether ISSUE-003 can start

---

## 12. Handoff to ISSUE-003

ISSUE-003 may start only if ISSUE-002 provides:

```text
ISSUE-002_DONE_Report.md
ISSUE-002_Supabase_Setup_Notes.md
ISSUE-002_Env_Key_Plan.md
Updated MVP01_ISSUE_CHAIN_REGISTER.md
Optional .env.example placeholder contract
```

ISSUE-003 must use these outputs to create the Next.js app foundation safely without guessing environment variable names or exposing secrets.
