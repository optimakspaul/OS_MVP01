# STD-DEV-047 File Ownership and Change Boundary Map

**Document Code:** STD-DEV-047  
**Version:** v1.7.9  
**Status:** Active  
**Applies To:** Every issue that reads, edits, generates, or deletes repo files  

---

## 1. Purpose

This standard defines which files and folders AI agents may read, modify, or must not modify without explicit approval.

It converts the v1.7.8 principle:

```text
Full repo is readable.
Only assigned issue scope is editable.
```

into a more executable file boundary map.

---

## 2. Core Rule

```text
Full repo is readable.
Only assigned issue scope is editable.
High-risk files require explicit approval.
Critical files are read-only by default.
```

---

## 3. File Risk Categories

| Area | Risk | Default AI Permission | Notes |
|---|---:|---|---|
| `01_Constitution/` | Critical | Read-only unless constitution issue | Do not modify active constitution casually |
| `01_Constitution/Amendments/` | High | Edit only for approved governance issue | New amendments require version entry |
| `01_Constitution/ACTIVE_STANDARDS_INDEX.md` | Critical | Edit only for standard activation/deactivation | Must remain concise |
| `03_Development_Standard/` | High | Edit only for governance / standard issue | Avoid duplicated standards |
| `04_Governance_Standard/` | High | Edit only for governance issue | Change control applies |
| `09_Templates/` | Medium / High | Edit only when template issue requires it | Avoid breaking active workflow templates |
| `10_Checklists/` | Medium | Edit when validation/checklist issue requires it | Keep checklist practical |
| `12_Projects/` | Medium / High | Edit when project scope issue requires it | Project context may influence MVP scope |
| `13_Roadmap/` | High | Edit only for roadmap / MVP planning issue | Cross-MVP impact review required |
| `16_Product_Strategy/` | Medium / High | Edit for product strategy issue | Client feedback / pricing impact may apply |
| `.github/` | Medium / High | Edit only for CI / PR / repo workflow issue | CI and PR gates may be affected |
| `supabase/migrations/` | Critical | Edit only for DB-approved issue | DB / RLS checklist required |
| RLS / Auth source files | Critical | Edit only with DB/RLS/Auth approval | Tenant isolation must be validated |
| `.env*` | Critical | Never commit or edit secrets | Only `.env.example` may be updated if explicitly required |
| production deployment config | Critical | Edit only with deploy approval | Preview/staging/production gate applies |
| `src/app/` | Medium | Edit if assigned UI/page issue | Respect route and feature scope |
| `src/components/` | Medium | Edit if assigned component issue | Avoid broad component refactors |
| `src/lib/` | High | Edit only with approved logic/integration issue | May affect many modules |
| `README.md` / `CHANGELOG.md` | Low / Medium | Edit when issue requires documentation update | Keep changes traceable |

---

## 4. Escalation Rule

AI must stop and report before modifying:

```text
- Constitution
- Locked Architecture
- Active Standards Index
- DB schema
- RLS policies
- Auth logic
- Production deployment config
- Environment files
- Payment / billing logic
- Cross-MVP roadmap files
- Client data governance rules
```

---

## 5. Allowed / Forbidden Boundary Requirement

Every implementation issue must define:

```text
Allowed files / folders:
Forbidden files / folders:
Escalation files / folders:
```

If the issue workpack does not define these, AI must use **Read-only Scan** or **Suggest Patch** mode until the boundary is clarified.

---

## 6. Surgical Change Requirement

Every changed file must satisfy this traceability chain:

```text
Issue Requirement
→ Allowed Scope
→ Allowed File Boundary
→ Changed File
→ Validation Evidence
```

If the traceability chain cannot be established, the file must not be changed.

---

## 7. PR Boundary Check

Every PR must confirm:

```text
- Changed files are within allowed scope
- No forbidden files were modified
- No hidden architecture change was introduced
- No future MVP feature was unlocked
- No DB / RLS / Auth change occurred unless explicitly approved
- No env / secret / production config was changed unless explicitly approved
```

---

## 8. Relationship to Other Standards

This standard extends:

```text
STD-DEV-027 Repo Workspace and AI Execution Boundary Standard
STD-DEV-032 AI Issue Execution and DONE Report Standard
STD-DEV-046 AI Harness Agent Behavior and Skills Standard
STD-DEV-048 AI Agent Execution Mode Standard
```
