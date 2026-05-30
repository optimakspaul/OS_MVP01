# Standard Development Process

| Field | Value |
|---|---|
| Document Code | STD-DEV-001 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define the standard end-to-end development workflow. |

---


## Standard Workflow

```text
需求 / 想法 / 客戶痛點
        ↓
整理成 Change Request
        ↓
建立 GitHub Issue
        ↓
影響範圍分析
        ↓
確認是否需要更新文件
        ↓
建立 Branch
        ↓
Codex / Antigravity 協助開發
        ↓
部署到 Staging / Vercel Preview
        ↓
手機測試 + 桌機測試
        ↓
QA Checklist
        ↓
通過後 Merge
        ↓
Deploy Production
        ↓
更新 Handover / Version Log / Documentation
```

## Rule

No function should move directly from idea to production code. At minimum, it should pass through:

1. Change Request
2. GitHub Issue
3. Development branch
4. Preview / Staging
5. QA
6. Merge
7. Production deployment
8. Documentation update when needed
