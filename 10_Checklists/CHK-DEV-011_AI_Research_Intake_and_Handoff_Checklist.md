# CHK-DEV-011 AI Research Intake and Handoff Checklist

| Field | Value |
|---|---|
| Checklist Code | CHK-DEV-011 |
| Version | v1.5.4 Current Consolidated Release |
| Related Standard | STD-DEV-025 |
| Purpose | Checklist for deciding whether Gemini Research Intake is needed and whether the digest is ready for ChatGPT review. |

---

## 1. Research Intake Trigger

```text
[ ] Document is longer than 30 pages.
[ ] API documentation includes more than 5 endpoints.
[ ] Dataset includes more than 20 fields.
[ ] Research requires more than 3 websites or documents.
[ ] Source involves government open data.
[ ] Source involves third-party SaaS integration.
[ ] Source involves competitor / market research.
[ ] Source involves client SOPs or large existing codebase.
[ ] If none of the above applies, Gemini intake is optional and may be skipped.
```

---

## 2. Data Safety Check

```text
[ ] No .env file included.
[ ] No API key included.
[ ] No Supabase service role key included.
[ ] No client personal data included unless sanitized.
[ ] No real invoice / payment / contract details included.
[ ] Sample data is fake or anonymized.
```

---

## 3. Digest Quality Check

```text
[ ] Source list is documented.
[ ] Source dates or versions are included where possible.
[ ] Key facts are separated from assumptions.
[ ] API endpoints are summarized, if applicable.
[ ] Data fields are mapped, if applicable.
[ ] Risks are listed.
[ ] Unknowns are listed.
[ ] Questions for ChatGPT review are included.
```

---

## 4. ChatGPT Handoff Readiness

```text
[ ] Digest is short enough to review.
[ ] Digest is structured, not a raw dump.
[ ] ChatGPT review prompt is prepared.
[ ] Expected output from ChatGPT is clear.
[ ] Implementation has not started yet.
```

---

## 5. Post-Review Control

```text
[ ] ChatGPT converted digest into MVP scope / architecture / risks.
[ ] AI Context Package was created or updated.
[ ] GitHub Issue was created or updated.
[ ] Codex / Antigravity received only approved execution context.
[ ] CHANGELOG / docs updated if the research affects standard workflow.
```
