# STD-DEV-038 CI and Automated Validation Gate Standard

**Document Code:** STD-DEV-038  
**Version:** v1.6.1  
**Status:** Active  
**Owner:** Optimaks Pte Ltd  
**Purpose:** Define minimum automated validation expectations for AI-assisted implementation.

---

## 1. Purpose

AI-generated code must not be treated as complete only because the code was written.

Every implementation issue must include evidence that the change was validated at the correct level.

---

## 2. Minimum MVP Validation

For normal MVP-stage implementation, AI must attempt or document these checks:

```text
npm run lint
npm run build
npm run test, if available and relevant
no .env / secret committed
changed files are within allowed scope
DONE.md exists and is complete
```

If a command does not exist, fails because dependencies are missing, or cannot be run in the current environment, record the reason in DONE.md.

---

## 3. Validation Levels

```text
Level 0: Documentation-only check
Level 1: Static / lint check
Level 2: Build check
Level 3: Unit / component check
Level 4: Workflow / preview check
Level 5: Deployment / production gate check
```

Use the lowest level that safely proves the issue is complete.

---

## 4. Suggested GitHub CI Gate

When the repo is ready, the following checks should be added to GitHub Actions:

```text
checkout
setup node
npm ci
npm run lint
npm run build
npm run test --if-present
secret scan / forbidden pattern check
verify DONE.md for issue branch when possible
```

This standard does not require production deployment automation.

---

## 5. Secret and Safety Check

The following must never be committed:

```text
.env
.env.local
.env.production
Supabase service role key
Vercel token
Google API secret
WhatsApp API secret
private client credentials
real client payment details
```

AI must record a no-secret confirmation in DONE.md.

---

## 6. Deployment Gate

Production deployment requires founder approval.

AI may prepare deployment configuration or preview instructions, but must not treat production deployment as automatic completion.

---

## 7. DONE.md Validation Section

Every DONE.md should include:

```text
Validation Level Used:
Commands Run:
Results:
Commands Not Run and Why:
Secret Check:
Scope Check:
Preview / Workflow Notes:
Ready for Merge: Yes / No / Conditional
```
