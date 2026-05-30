# PREP-000 Environment & Access Preparation

**Task ID:** PREP-000  
**Purpose:** Prepare environment, access, secrets, and AI execution templates before ISSUE-001 starts.  
**Status:** Required before implementation  

---

## 1. Goal

Prepare the repo so the founder can run later 20_Issues by only giving prompts to Codex / Antigravity.

---

## 2. Required Outputs

```text
.env.example
.gitignore
templates/AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md
templates/ISSUE_DONE_REPORT_TEMPLATE.md
20_Issues/PREP-000/PREP-000_DONE.md
20_Issues/PREP-000/PREP-000_ENV_CHECKLIST.md
20_Issues/PREP-000/PREP-000_ACCESS_CHECKLIST.md
```

---

## 3. Required .env.example Keys

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_APP_URL=
APP_ENV=

OPENAI_API_KEY=
OPENAI_MODEL=

GEMINI_API_KEY=
GEMINI_MODEL=

RESEND_API_KEY=
EMAIL_FROM=

GOOGLE_MAPS_API_KEY=
GOOGLE_PLACES_API_KEY=

GITHUB_TOKEN=
GITHUB_OWNER=
GITHUB_REPO=

VERCEL_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=
```

Future version keys may be listed but should be marked as not required for MVP-01.

---

## 4. Do Not Do

```text
Do not commit .env.local
Do not include real secret values
Do not deploy production
Do not implement app features
Do not modify database schema
Do not modify RLS/auth policies
Do not use service_role key in frontend
Do not create code zip
```

---

## 5. Founder Manual Actions

```text
[ ] Create GitHub repo
[ ] Clone repo locally
[ ] Prepare Supabase project
[ ] Store real env values in local .env.local
[ ] Prepare Vercel account
[ ] Confirm .env.local is ignored
[ ] Confirm templates exist
```

---

## 6. Ready for ISSUE-001

```text
Yes / No
```
