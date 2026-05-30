# CHK-SEC-001 Secrets and ENV Safety Checklist

Use before merge, deployment, or sharing screenshots/logs with AI.

## Files

- [ ] `.env.local` not committed.
- [ ] `.env` not committed.
- [ ] `.env.production` not committed.
- [ ] `.env.example` contains placeholders only.
- [ ] `.gitignore` excludes local env files.

## Supabase

- [ ] Service role key not used in frontend.
- [ ] Anon key only used with RLS enabled.
- [ ] RLS not bypassed for convenience.
- [ ] Sensitive admin operations are server-side.

## AI Prompt Safety

- [ ] No API keys pasted into AI prompts.
- [ ] No tokens in screenshots.
- [ ] No production secrets in GitHub 20_Issues.
- [ ] No client-sensitive data pasted unredacted.

## Deployment

- [ ] Vercel env configured in dashboard.
- [ ] Production env not modified by AI without approval.
- [ ] Preview env separated from production when required.

## Incident

If a secret was exposed:

- [ ] Stop work.
- [ ] Remove secret from code.
- [ ] Rotate secret.
- [ ] Review Git history exposure.
- [ ] Record incident in issue notes.
