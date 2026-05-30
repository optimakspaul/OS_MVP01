# Change Request Workflow

| Field | Value |
|---|---|
| Document Code | STD-DEV-004 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define Change Request policy and flow before code changes. |

---


## Purpose

Change Request is the official entry point for:

1. New feature
2. Feature modification
3. Bug fix
4. UI adjustment
5. Database change
6. Workflow change
7. Documentation update

## Required Questions

A Change Request must answer:

1. What needs to change?
2. Why does it need to change?
3. Who will use it?
4. Which modules are affected?
5. Does it affect database?
6. Does it affect auth / permission / RLS?
7. Does it affect UI / UX?
8. Does it affect existing customer data?
9. What means done?
10. Does documentation need updating?

## Standard CR Format

```text
CR Title:
Background / Purpose:
User Story:
Functional Requirements:
Impact Scope:
Database Impact:
UI/UX Impact:
Security / Permission Impact:
Testing Requirements:
Acceptance Criteria:
Priority:
Codex Development Prompt:
```

## Change Request Workflow

```text
新想法 / 新功能 / Bug / 客戶要求
        ↓
建立 Change Request
        ↓
填寫原因、目的、影響範圍
        ↓
判斷影響：
- UI
- Database
- API
- Auth / Permission
- Documentation
- Testing
        ↓
建立 GitHub Issue
        ↓
標記 Priority / Module / Status
        ↓
進入開發排程
        ↓
開 Branch
        ↓
AI / Codex 開發
        ↓
測試版部署
        ↓
驗收
        ↓
合併正式版
        ↓
更新 Version Log / Documentation
```

## High-Risk Change Rule

If a change affects Database, Auth, Permission, Billing, Customer Data, or Production Deployment, it is high-risk. It must not be completed only on mobile and must not skip desktop review.
