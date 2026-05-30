# ISSUE-003 Workpack

**Issue:** ISSUE-003  
**Title:** Next.js App Foundation  
**Project:** MVP01  
**Phase:** Phase 1 - Foundation  
**Constitution Version:** v1.7.9.4-project-baseline-governance  
**Status:** Ready for Codex Execution  
**Required Context Level:** Full  
**Execution Mode:** App Foundation Implementation  
**Depends On:** ISSUE-002  
**Previous Issue Status:** PASS WITH WARNINGS, Founder Accepted  
**Branch:** feature/issue-003-nextjs-app-foundation  

---

## 1. Purpose

ISSUE-003 creates the minimal Next.js application foundation for MVP01.

This issue may initialize the app foundation and basic developer scripts, but it must not create product features, database schema, Supabase client integration, auth, RLS, Vercel deployment setup, or tenant-specific business workflows.

ISSUE-003 establishes only:

1. Next.js app baseline.
2. TypeScript baseline.
3. Basic app route foundation.
4. Minimal styling foundation.
5. Build / lint validation baseline.
6. Environment placeholder compatibility with ISSUE-002.
7. Handoff notes for ISSUE-004.

---

## 2. Dependency Gate

ISSUE-003 may execute only after:

1. ISSUE-002 DONE Report exists.
2. ISSUE-002 Supabase Setup Notes exist.
3. ISSUE-002 Env Key Plan exists.
4. `.env.example` exists and contains placeholder-only variables.
5. ISSUE-002 is accepted by founder as PASS or PASS WITH WARNINGS.
6. ISSUE-003 workpack is created and approved.
7. ISSUE-003 runs on its own branch.

If founder acceptance for ISSUE-002 has not been recorded, Codex must stop and return:

```text
FAIL - Dependency gate not satisfied
```

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
03_Development_Standard/STD-DEV-038_CI_and_Automated_Validation_Gate_Standard.md
03_Development_Standard/STD-DEV-047_File_Ownership_and_Change_Boundary_Map.md
03_Development_Standard/STD-DEV-048_AI_Agent_Execution_Mode_Standard.md
03_Development_Standard/STD-DEV-049_MVP_Project_Baseline_and_Issue_Chain_Standard.md
03_Development_Standard/STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
03_Development_Standard/STD-SEC-001_Environment_Secrets_and_API_Key_Governance.md
03_Development_Standard/STD-DEPLOY-001_Preview_Staging_Production_Gate_Standard.md
03_Development_Standard/STD-DB-001_Database_Migration_and_RLS_Change_Control.md
12_Projects/MVP01/README_MVP01.md
12_Projects/MVP01/MVP01_SCOPE_BASELINE.md
12_Projects/MVP01/MVP01_PHASE_AND_ISSUE_BASELINE.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
12_Projects/MVP01/MVP01_CHANGE_CONTROL_LOG.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_DONE_Report.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Foundation_Assessment.md
20_Issues/MVP01/ISSUE-001-core-workspace-tenant-foundation/ISSUE-001_Workspace_Tenant_Model.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_DONE_Report.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Supabase_Setup_Notes.md
20_Issues/MVP01/ISSUE-002-supabase-client-environment-foundation/ISSUE-002_Env_Key_Plan.md
.env.example
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Workpack.md
```

---

## 4. Required Outputs

Codex must create or complete:

```text
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_App_Foundation_Notes.md
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Validation_Notes.md
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_DONE_Report.md
```

Codex may create the minimal app files required for a Next.js foundation.

Expected app foundation files may include, depending on the repo state and chosen Next.js setup:

```text
package.json
package-lock.json
next.config.*
tsconfig.json
eslint.config.* or .eslintrc.*
postcss.config.*
tailwind.config.* if Tailwind is initialized
src/app/layout.tsx or app/layout.tsx
src/app/page.tsx or app/page.tsx
src/app/globals.css or app/globals.css
public/
```

If the repo already has app foundation files, Codex must update only what is required and document the existing baseline.

---

## 5. App Foundation Requirements

The app foundation must be intentionally small:

1. Use Next.js App Router.
2. Use TypeScript.
3. Use a minimal root layout.
4. Use a minimal landing / placeholder home page.
5. Use CSS / Tailwind only if initialized by the chosen baseline.
6. Include scripts for dev, build, lint, and typecheck if practical.
7. Keep the UI generic and non-product-specific.
8. Avoid creating actual MVP01 modules.
9. Avoid creating client workspace, CRM, booking, job card, invoice, reminder, or portal features.
10. Avoid Supabase client initialization.

Recommended minimal home page content:

```text
Optimaks MVP01
App foundation initialized.
No client data, tenant data, Supabase integration, or product workflow is implemented in ISSUE-003.
```

---

## 6. Environment Contract Requirements

ISSUE-003 must preserve the ISSUE-002 environment contract:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=
```

Rules:

1. Do not add real values.
2. Do not create `.env.local`.
3. Do not expose server-only keys in app code.
4. Do not create a Supabase client.
5. Do not add extra environment variables unless clearly justified in the DONE Report.
6. If Next.js requires environment access later, document it only; do not wire Supabase integration in ISSUE-003.

---

## 7. Allowed Files

Codex may create or update only:

```text
package.json
package-lock.json
next.config.js
next.config.mjs
next.config.ts
tsconfig.json
eslint.config.js
eslint.config.mjs
.eslintrc.json
postcss.config.js
postcss.config.mjs
tailwind.config.js
tailwind.config.ts
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
app/layout.tsx
app/page.tsx
app/globals.css
public/
README.md
.env.example
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/README_ISSUE-003.md
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_App_Foundation_Notes.md
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Validation_Notes.md
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_DONE_Report.md
20_Issues/MVP01/ISSUE-003-nextjs-app-foundation/ISSUE-003_Open_Questions.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```

If the toolchain creates other standard Next.js files, Codex must justify them in the DONE Report and confirm they are foundation-only.

---

## 8. Forbidden Scope

Codex must not:

1. Create Supabase client source code.
2. Install Supabase packages unless strictly required by an existing create-next-app template; preferred result is no Supabase dependency in ISSUE-003.
3. Create database schema.
4. Create migrations.
5. Create RLS policies.
6. Create auth provider setup.
7. Create workspace, client, lead, booking, job, invoice, payment, reminder, or portal features.
8. Create API routes for business logic.
9. Create server actions for business logic.
10. Configure Vercel project settings.
11. Commit `.env.local`.
12. Commit real secrets.
13. Modify constitution files.
14. Modify templates.
15. Modify MVP01 scope baseline.
16. Modify MVP01 phase baseline.
17. Start ISSUE-004.

---

## 9. Success Criteria

ISSUE-003 is PASS only if:

1. ISSUE-002 founder acceptance is confirmed.
2. Next.js app foundation is created or verified.
3. TypeScript baseline exists.
4. Root page and layout compile.
5. `.env.example` remains placeholder-only.
6. No real secrets are committed.
7. No Supabase client, schema, migrations, auth, RLS, or feature code is created.
8. Build / lint / typecheck validation passes where scripts exist.
9. Issue Chain Register is updated for ISSUE-003 status / output / handoff.
10. DONE Report is completed with validation evidence.
11. ISSUE-004 handoff is clear.

ISSUE-003 is PASS WITH WARNINGS if:

1. App foundation is created, but minor framework warnings remain.
2. Lint or typecheck script differs from expected toolchain but build passes.
3. Some create-next-app generated files exist but remain foundation-only.
4. No forbidden scope was touched.

ISSUE-003 is FAIL if:

1. Dependency gate fails.
2. App does not build.
3. Real secrets are committed.
4. Supabase client, schema, RLS, auth, deployment setup, or product feature code is created.
5. ISSUE-004 cannot safely start.

---

## 10. Validation Plan

Codex must validate:

```text
PASS / FAIL - ISSUE-002 acceptance confirmed.
PASS / FAIL - ISSUE-003 dependency confirmed.
PASS / FAIL - Next.js app foundation created or verified.
PASS / FAIL - TypeScript baseline exists.
PASS / FAIL - Root layout exists.
PASS / FAIL - Root page exists.
PASS / FAIL - .env.example remains placeholder-only.
PASS / FAIL - No .env.local committed.
PASS / FAIL - No real secrets committed.
PASS / FAIL - No Supabase client source code created.
PASS / FAIL - No database schema or migration created.
PASS / FAIL - No RLS policy created.
PASS / FAIL - No auth provider setup created.
PASS / FAIL - No Vercel setup performed.
PASS / FAIL - No product feature implementation created.
PASS / FAIL - No constitution or template files modified.
PASS / FAIL - MVP01 scope and phase baselines not modified.
PASS / FAIL - Issue Chain Register updated only for ISSUE-003.
```

Run available validation commands after implementation:

```text
npm run lint
npm run build
npm run typecheck
```

If a script does not exist, document `NOT RUN` and why. If a script is added, it must be minimal and standard.

---

## 11. Required DONE Report Format

`ISSUE-003_DONE_Report.md` must include:

1. Final Status: PASS / PASS WITH WARNINGS / FAIL
2. Dependency gate result
3. Files read
4. Files created
5. Files changed
6. App foundation summary
7. Environment contract result
8. Secret handling result
9. Included scope
10. Forbidden scope confirmation
11. Validation command results
12. Risks / warnings
13. Issue Chain Register update result
14. Handoff to ISSUE-004
15. Whether ISSUE-004 can start

---

## 12. Handoff to ISSUE-004

ISSUE-004 may start only if ISSUE-003 provides:

```text
ISSUE-003_DONE_Report.md
ISSUE-003_App_Foundation_Notes.md
ISSUE-003_Validation_Notes.md
Updated MVP01_ISSUE_CHAIN_REGISTER.md
Working Next.js app foundation
placeholder-only .env.example
```

ISSUE-004 must use these outputs to begin Supabase P0 table planning / implementation without guessing app structure or environment rules.
