# Document Update Workflow

| Field | Value |
|---|---|
| Document Code | STD-DEV-008 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define when and how documentation should be updated. |

---


## When to Update Documentation

Documentation must be updated when there are changes to:

1. Functionality
2. Process
3. Architecture
4. Tools
5. Pricing
6. Delivery method
7. Legal documents
8. Deployment method
9. Security / permissions

## Workflow

```text
Change Request or Feature Change
        ↓
Check affected documents
        ↓
Update relevant markdown/doc files
        ↓
Commit documentation changes
        ↓
Update CHANGELOG
        ↓
If major, bump version number
        ↓
Tag / release if needed
```

## Principles

1. Do not rewrite the entire library for every small change.
2. Small changes update relevant files only.
3. Major changes may generate a new full package.
4. Use a branch before uploading to GitHub so diff can be reviewed.
5. Do not overwrite without reviewing changes.

## Version Guidance

- v1.0: initial constitution.
- v1.1: document and project structure.
- v1.2: Change Request, staging, test version first.
- v1.3: Mobile-Assisted Workflow, AI tool correction, Codex + Antigravity roles.
