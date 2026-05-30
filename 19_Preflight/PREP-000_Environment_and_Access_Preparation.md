# PREP-000 Environment and Access Preparation

**Document Code:** PREP-000  
**Version:** v1.5.9  
**Type:** Preflight Setup  
**Status:** Required before ISSUE-001  

---

## 1. Purpose

PREP-000 prepares the repo, environment, secrets boundary, and AI execution templates before MVP-01 implementation starts.

This is not a product feature issue.

---

## 2. Required Setup

PREP-000 prepares:

```text
GitHub repo access
local clone
Node / npm readiness
.gitignore safety
.env.example
.env.local local-only setup
Supabase keys
Vercel account/project readiness
AI issue execution prompt template
DONE report template
```

---

## 3. Required Files

```text
.env.example
.gitignore
templates/AI_ISSUE_EXECUTION_PROMPT_TEMPLATE.md
templates/ISSUE_DONE_REPORT_TEMPLATE.md
20_Issues/PREP-000/PREP-000_ENV_CHECKLIST.md
20_Issues/PREP-000/PREP-000_ACCESS_CHECKLIST.md
20_Issues/PREP-000/PREP-000_DONE.md
```

---

## 4. Do Not Do

```text
Do not build product pages
Do not create database schema
Do not modify RLS
Do not implement login
Do not deploy production
Do not commit .env.local
Do not commit secret values
```

---

## 5. Required .env.example Keys

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

WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_BUSINESS_ACCOUNT_ID=
WHATSAPP_VERIFY_TOKEN=
WHATSAPP_APP_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=
GOOGLE_CALENDAR_ID=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

ZOHO_CLIENT_ID=
ZOHO_CLIENT_SECRET=
ZOHO_REFRESH_TOKEN=
SIGNWELL_API_KEY=
```

---

## 6. Required .gitignore

```gitignore
.env
.env.local
.env.*.local
```

Only `.env.example` may be committed.

---

## 7. Completion Criteria

```text
[ ] GitHub repo is available
[ ] Repo can be cloned locally
[ ] npm install works
[ ] npm run dev works or limitation is documented
[ ] .gitignore protects .env.local
[ ] .env.example exists with key names only
[ ] .env.local exists locally but is not committed
[ ] Supabase URL prepared
[ ] Supabase anon key prepared
[ ] Supabase service role key prepared but not exposed
[ ] Vercel account/project ready
[ ] AI issue execution prompt template exists
[ ] DONE report template exists
[ ] No secret was committed
[ ] Ready for ISSUE-001
```
