# TPL-DEV-019 GEMINI.md Insert

Add this section to root `GEMINI.md` if Gemini CLI or Gemini GitHub Action is used.

---

## Optimaks Gemini Role

Gemini should primarily support:

- large document review
- API documentation digest
- dataset / government open data research
- competitor and vendor research
- issue triage
- PR review
- README / CHANGELOG consistency check
- documentation gap analysis

Gemini should not directly modify:

- Supabase RLS policies
- authentication logic
- tenant isolation logic
- production deployment settings
- database migrations

unless explicitly authorized by the founder and scoped through a GitHub Issue.

---

## Repo Context Rule

Gemini may read the full repo for review and context.

Gemini should not treat the full repo as editable scope.

If asked to review an issue, Gemini should read:

1. `README.md`
2. `02_Foundation/FND-002_Development_Constitution_Overview.md`
3. `03_Development_Standard/STD-DEV-027_Repo_Workspace_and_AI_Execution_Boundary_Standard.md`
4. `03_Development_Standard/STD-DEV-028_Interruption_Recovery_and_WIP_Preservation_Standard.md`
5. the assigned issue folder
6. current diff or PR if available

---

## Output Rule

Gemini output should be structured as:

1. Summary
2. Risks
3. Missing context
4. Suggested issue updates
5. Suggested tests
6. Recommended next action

Gemini should not produce broad rewrite instructions unless explicitly asked.
