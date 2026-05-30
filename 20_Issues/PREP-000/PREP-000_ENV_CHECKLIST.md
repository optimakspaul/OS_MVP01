# PREP-000 Environment Checklist

## .gitignore

```text
[ ] .env is ignored
[ ] .env.local is ignored
[ ] .env.*.local is ignored
[ ] .env.example is allowed
```

## .env.example

```text
[ ] Exists
[ ] Contains key names only
[ ] Contains no real values
[ ] Contains Supabase keys
[ ] Contains optional AI/email/maps/devops/future keys
```

## .env.local

```text
[ ] Exists locally
[ ] Contains local development values
[ ] Not committed
[ ] Not pasted into prompt
[ ] Not uploaded to ChatGPT/Codex/Antigravity
```

## Required MVP-01 Keys

```text
[ ] NEXT_PUBLIC_SUPABASE_URL
[ ] NEXT_PUBLIC_SUPABASE_ANON_KEY
[ ] SUPABASE_SERVICE_ROLE_KEY prepared but server-side only
[ ] NEXT_PUBLIC_APP_URL
[ ] APP_ENV
```

## Safety

```text
[ ] No service_role key in frontend
[ ] No API key starts with NEXT_PUBLIC unless intentionally public
[ ] No real secret in docs
[ ] No real secret in prompt
```
