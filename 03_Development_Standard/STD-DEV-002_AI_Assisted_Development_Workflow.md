# AI Assisted Development Workflow

| Field | Value |
|---|---|
| Document Code | STD-DEV-002 |
| Version | v1.5.4 Current Consolidated Release |
| Effective Date | 2026-05-16 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define ChatGPT, Gemini, Codex, Antigravity, VS Code, and GitHub roles in the Optimaks AI-assisted development workflow. |

---

## 1. Official AI Development Tooling

Optimaks uses multiple AI tools, but each tool has a different responsibility.

Primary tools:

```text
- ChatGPT
- Gemini, optional research intake tool
- Codex
- Antigravity
- VS Code
- GitHub
```

Gemini may be used as a standalone research and large-context digest tool when documents, APIs, datasets, market research, or codebases are too large or too messy to convert directly into an AI Context Package.

Gemini is **not** a direct implementation authority and must not bypass ChatGPT review, GitHub Issues, feature branches, PRs, or human approval.

---

## 2. Tool Roles

### Gemini — Research Intake / Large Context Digest

Used for:

```text
- long API documentation
- government open data documents
- third-party SaaS integration documents
- competitor / market research
- client SOP document sets
- large existing codebase digest
- long PDF / multi-source research summary
```

Gemini output must be structured as a Research Digest and reviewed by ChatGPT before implementation.

### ChatGPT — Governance Architect / Strategy Reviewer

Used for:

```text
- Change Request drafting
- GitHub Issue preparation
- architecture discussion
- risk and edge-case review
- documentation
- prompt writing
- converting Research Digest into AI Context Package
- constitution governance
```

### Codex — Implementation Engineer

Used for:

```text
- main implementation agent
- repository-level changes
- backend logic
- Supabase schema / migrations
- Auth / RLS / CRUD
- bug fixing
- refactoring
- tests
- PR / code change preparation
```

### Antigravity — UI / Agentic Execution Workspace

Used for:

```text
- UI iteration
- App Shell
- navigation
- shared components
- responsive design
- frontend review
- browser-based verification
- interactive debugging support
```

### VS Code + GitHub — Control Center / Evidence System

Used for:

```text
- Git diff review
- branch control
- commit and PR review
- issue traceability
- changelog and version history
- staging / preview evidence
- final human approval
```

---

## 3. AI Tooling Workflow

For normal development:

```text
GitHub Issue / Change Request
        ↓
AI Context Package
        ↓
Codex
Backend / data / logic / tests
        ↓
Antigravity
UI / layout / browser verification
        ↓
VS Code Git Diff Review
        ↓
Pull Request
        ↓
Vercel Preview / Staging
        ↓
Human Review
        ↓
Merge / Deploy
```

For large document or research-heavy development:

```text
Large document / API / dataset / market research
        ↓
Gemini Research Digest
        ↓
ChatGPT Architecture / Strategy / Risk Review
        ↓
AI Context Package
        ↓
GitHub Issue
        ↓
Codex / Antigravity Implementation
        ↓
VS Code + GitHub Review
```

---

## 4. AI Usage Rules

1. AI can propose solutions, but implementation must follow GitHub Issue and Change Request.
2. AI can modify code, but the change must go through Preview and testing.
3. AI cannot directly decide production deployment.
4. AI-generated changes must have commit, diff, testing steps, and rollback awareness.
5. Database/Auth/Permission changes require special review.
6. Gemini Research Digest must not be treated as implementation approval.
7. Research Digest must be reviewed by ChatGPT before Codex or Antigravity receives execution prompts.
8. GitHub remains the source of truth after work begins.

---

## 5. Relationship to v1.5.3 Governance

This workflow is strengthened by:

```text
STD-DEV-024 AI Collaboration and GitHub Execution Governance Standard
STD-DEV-025 AI Research Intake and Multi-Model Handoff Standard
```
