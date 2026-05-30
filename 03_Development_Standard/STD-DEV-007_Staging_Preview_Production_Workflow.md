# Staging Preview Production Workflow

| Field | Value |
|---|---|
| Document Code | STD-DEV-007 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define staging, preview, production and post-deploy check rules. |

---


## Principle

No untested feature should be pushed directly to production.

## Environment Roles

- **Preview**: feature validation, mobile testing, client demo.
- **Staging**: integration testing close to production.
- **Production**: only for versions that passed QA.

## Deployment Flow

```text
Branch
  ↓
Development
  ↓
Vercel Preview / Staging
  ↓
Mobile Test
  ↓
Desktop Test
  ↓
QA Checklist
  ↓
Issue Acceptance
  ↓
Merge to main
  ↓
Production Deploy
  ↓
Post-Deploy Check
```

## Post-Deploy Check

After production deployment, check:

1. Homepage and core pages load.
2. Login and permissions work.
3. Forms work.
4. Data is not abnormal.
5. CTA / WhatsApp / Email links work.
6. No obvious UI breakage.
7. No major console/runtime errors.


---

## v1.5.2 Governance Addendum

This staging workflow is strengthened by `STD-DEV-024`, which requires Vercel Preview or staging validation before production merge for AI-assisted implementation work.
