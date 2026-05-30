# Codex Prompt Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-011 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define the standard format for giving tasks to Codex. |

---


## Rule

Do not tell Codex only: "help me do this". Large changes should first ask Codex to analyze before modifying.

## Standard Prompt Format

```text
Context:
這是什麼專案？目前模組是什麼？

Issue / Change Request:
貼上 GitHub Issue 或 CR 內容。

Task:
請明確說明要做什麼。

Constraints:
不要破壞哪些既有功能？不要改哪些檔案？是否需要先分析？

Expected Output:
要產出哪些變更？程式碼？測試？說明？

Testing:
請提供測試步驟。
```

## Example Prompt

```text
Please implement the Customer Health Report Generator for Optimaks OS based on this Change Request.
First inspect the current project structure, identify affected modules, propose a small implementation plan,
then modify only the necessary files.
Do not break existing CRM functions.
Add comments where needed and provide testing steps after implementation.
```

## High-Risk Prompt Rule

For database, auth, permission, billing, or production deployment changes, ask Codex to:

1. inspect current structure
2. list affected files
3. identify risks
4. propose a plan
5. wait for confirmation before implementation, when practical
