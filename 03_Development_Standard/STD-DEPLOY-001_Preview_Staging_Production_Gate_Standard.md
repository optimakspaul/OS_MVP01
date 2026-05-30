# STD-DEPLOY-001 Preview Staging Production Gate Standard

## 1. Purpose

This standard defines the boundary between local development, Vercel preview, staging and production.

---

## 2. Environment Definitions

### Local

Used for active development and quick testing.

Can be unstable.

### Preview

Usually branch or PR deployment.

Used to review issue-level work.

Can contain incomplete work if clearly marked.

### Staging

Used for founder review, demo preparation or pre-client testing.

Should be stable enough for guided demo.

### Production

Client-facing or public-facing live environment.

Must be stable and controlled.

---

## 3. Gate Rules

### Local to Preview

Requires:

- app starts locally
- no obvious build errors
- issue branch pushed

### Preview to Staging

Requires:

- acceptance checklist pass
- no secret exposure
- no hardcoded real client data
- major flows tested
- founder review

### Staging to Production

Requires:

- explicit founder approval
- rollback plan
- environment variable check
- no unresolved P0/P1 bugs
- deployment checklist pass

---

## 4. AI Restriction

AI tools may help prepare deployment notes.

AI tools must not directly alter production deployment settings unless explicitly authorized.

---

## 5. Production Freeze Rule

Before a client demo, pilot or production release:

```text
Avoid major feature changes within the final preparation window.
Allow only targeted bug fixes.
```

---

## 6. Prohibited Behavior

Do not:

- deploy directly from an unreviewed AI branch to production
- use preview as production
- expose staging data publicly without review
- let AI change production secrets
- demo a branch with unknown diff or broken flows
