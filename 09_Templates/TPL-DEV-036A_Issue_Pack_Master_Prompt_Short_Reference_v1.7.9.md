# TPL-DEV-036A Issue Pack Master Prompt Short Reference v1.7.9

Use this short version in ChatGPT after `TPL-DEV-036_Issue_Pack_Master_Prompt_v1.7.9.md` has been added to the repo.

---

## Short Reference Prompt

Issue: ISSUE-XXX — [Issue 名稱]

請使用：
`09_Templates/TPL-DEV-036_Issue_Pack_Master_Prompt_v1.7.9.md`

幫我產出 v1.7.9 AI Harness + Template-driven Issue Pack + Codex / Antigravity / Platform Routing 的 ready-to-paste Issue 文件包。

請只根據上面的 Issue ID / Issue 名稱自動產生所有檔案與路徑。

請直接生成：

1. `ISSUE-XXX_Workpack.md`
2. `ISSUE-XXX_Codex_Prompt.md`
3. `ISSUE-XXX_Antigravity_Prompt.md`
4. `ISSUE-XXX_DONE_Report.md`
5. `README_ISSUE-XXX.md`
6. `WHERE_TO_PASTE.md`
7. `COMMIT_MESSAGE.md`

請自動判斷：

- Codex 是否需要
- Antigravity 是否需要
- Supabase 是否需要 / Reserved / Not Required
- Vercel 是否需要 / Reserved / Not Required
- n8n 是否需要 / Reserved / Not Required

請在 Workpack 裡加入：

- Template References
- Tool / Platform Routing Decision
- Codex / Antigravity Routing Decision
- Supabase / Vercel / n8n Routing Decision
- Related Test Cases
- Harness Review References
- File Boundary
- Validation Plan

請在 Codex Prompt 裡內建 `/goal`。

請在 DONE Report 裡加入：

- Codex Result
- Antigravity Result
- Tool / Platform Execution Summary
- Supabase / Vercel / n8n Usage Summary
- Harness Review Notes
- Related Test Cases
- Changed-file summary
- Validation result
- Scope confirmation
- PASS / PASS WITH WARNINGS / FAIL

請不要手把手長篇教學。  
請不要叫我填很多欄位。  
請不要讓我手動修改每個檔案名稱。

最後只告訴我：

1. 這包要放到哪個 repo 路徑
2. 我貼給 Codex 的短 prompt 是什麼
3. 如果需要 Antigravity，我貼給 Antigravity 的短 prompt 是什麼
4. Codex / Antigravity 回傳後，我要貼哪幾段給你判斷 PASS / FAIL

Also include Issue Linkage / Handoff according to:

```text
STD-DEV-050_Issue_Linkage_and_Handoff_Standard.md
TPL-DEV-039_Issue_Linkage_and_Handoff_Insert.md
12_Projects/MVP01/MVP01_ISSUE_CHAIN_REGISTER.md
```
