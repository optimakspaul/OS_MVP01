# Mobile Assisted Development Workflow

| Field | Value |
|---|---|
| Document Code | STD-DEV-005 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define mobile and desktop roles by tool, not by day/night schedule. |

---


## Core Principle

This workflow is organized by **tool role**, not by work schedule. It should not depend on whether the work happens in the daytime, evening, or midnight.

## Mobile Role

Mobile is used for:

1. Recording new feature ideas
2. Recording bugs and UI problems
3. Recording client needs and test feedback
4. Using ChatGPT to draft Change Requests
5. Creating or updating GitHub Issues
6. Testing Vercel Preview / Staging links
7. Taking screenshots and reporting mobile problems
8. Adding acceptance feedback

Mobile is **not** the main coding environment.

## Desktop Role

Desktop is used for:

1. Reviewing GitHub Issues
2. Adding impact scope analysis
3. Creating branches
4. Main code implementation
5. Database schema / migration
6. Supabase RLS / authentication / permission changes
7. Merge conflict resolution
8. QA Checklist completion
9. Merge to main
10. Production deployment

## Control Principle

```text
Mobile is for capture, clarification, issue management, and preview testing.
Desktop is for implementation, integration, merge, and production release.
AI tools are for acceleration, but all changes must still pass GitHub Issue tracking, staging testing, and QA review.
```

## Mobile-Assisted Workflow

```text
Mobile
Idea / Bug / Client Feedback / Testing Feedback
        ↓
Mobile + ChatGPT
Draft Idea / Reason / Done When
        ↓
ChatGPT
Convert to Change Request
        ↓
GitHub
Create or update GitHub Issue
        ↓
Desktop
Review Issue + Impact Scope
        ↓
Desktop
Create Branch
        ↓
Codex / Antigravity
Implementation / Debug / UI Iteration
        ↓
Vercel Preview / Staging
Deploy test version
        ↓
Mobile + Desktop
Cross-device Testing
        ↓
GitHub Issue
Record Bugs / QA Notes / Acceptance Result
        ↓
Desktop
Fix / QA / Merge
        ↓
Production
Deploy official version
```

## Quick Mobile Capture Format

```text
Idea:
我想新增什麼？

Reason:
為什麼要做？

Done When:
怎樣算完成？
```
