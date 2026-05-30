# STD-SEC-001 Environment Secrets and API Key Governance

## 1. Purpose

This standard defines how Optimaks protects environment variables, API keys, Supabase credentials, tokens and production secrets.

---

## 2. Core Principle

```text
Secrets must never enter Git, prompts, screenshots, frontend code, public demos or client-visible logs.
```

---

## 3. Secret Categories

### Public-Safe Configuration

Examples:

- public site URL
- public analytics ID if intended
- Supabase anon key when RLS is correctly enabled

May be used in frontend if intended.

### Sensitive Secrets

Examples:

- Supabase service role key
- OpenAI API key
- Gemini API key
- Google OAuth client secret
- WhatsApp API token
- Zoho / Signwell API key
- production database URL
- webhook signing secret

Must never be exposed.

---

## 4. File Rules

Allowed:

```text
.env.example
```

Not allowed in Git:

```text
.env
.env.local
.env.production
.env*.local
```

`.env.example` must use placeholders only:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=never-commit-real-value
```

---

## 5. AI Prompt Rule

Do not paste real secrets into:

- ChatGPT
- Codex
- Antigravity
- Gemini
- GitHub issue
- PR comment
- screenshot
- README

If debugging requires secret-related context, describe the variable name and behavior, not the value.

---

## 6. Supabase Rule

- `anon key` may be used in frontend only with correct RLS.
- `service_role key` must never be used in client/browser code.
- RLS must not be bypassed for convenience.
- Server-side privileged operations must be isolated and reviewed.

---

## 7. Vercel Rule

Production secrets should be managed in Vercel dashboard or secure environment management.

AI tools must not directly change production environment settings unless explicitly authorized and reviewed.

---

## 8. Secret Incident Rule

If a secret is accidentally committed:

1. Stop work.
2. Remove the secret from code.
3. Rotate the secret immediately.
4. Review Git history exposure.
5. Record incident in issue notes.
6. Do not assume deletion is enough.

---

## 9. Prohibited Behavior

Do not:

- commit `.env.local`
- paste API keys into AI prompts
- use service role key in frontend
- store secrets in README
- use real client tokens in demo data
- expose credentials in screenshots or logs
