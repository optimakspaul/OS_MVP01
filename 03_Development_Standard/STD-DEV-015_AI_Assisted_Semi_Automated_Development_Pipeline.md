> **v1.6.1 Status Notice:** Superseded / Reference Only. Use `STD-DEV-020`, `STD-DEV-032`, and `STD-DEV-037` for active AI execution rules.

---

# STD-DEV-015 AI-Assisted Semi-Automated Development Pipeline

Version: v1.4.1  
Owner: Optimaks Pte Ltd  
Status: Active Patch Rule  
Related Constitution: Optimaks Development Constitution v1.4  
Applies to: Optimaks OS, Aircon OS, ACRA Radar, MVP-01, internal tools, client workflow automation projects, and AI-assisted development workflows.

---

## 1. Purpose

This standard defines the Optimaks AI-assisted semi-automated development pipeline.

The purpose is to accelerate development while keeping Paul in control of:

1. Direction
2. Scope
3. Business priority
4. Client value
5. Version control
6. Production approval
7. Core system decisions

This document is a v1.4.1 patch because the main concept already exists in v1.4, but this document makes the development pipeline more explicit and repeatable.

---

## 2. Core Principle

Optimaks uses AI to accelerate development, but AI must not replace governance.

The principle is:

```text
Paul decides direction.
AI accelerates execution.
GitHub records the truth.
Staging verifies safety.
Production changes only after review.
```

中文原則：

```text
Paul 負責方向與決策。
AI 負責加速整理、拆解、產出與實作。
GitHub 負責留下真相。
Staging 負責驗證安全。
Production 必須經過審查後才可更新。
```

---

## 3. Standard Pipeline

The standard Optimaks AI-assisted semi-automated development pipeline is:

```text
Idea
↓
Project Brief
↓
User Flow
↓
Architecture Diagram
↓
UI Screen List
↓
Data Model Draft
↓
Issue Breakdown
↓
AI Execution Prompt
↓
Codex / Antigravity Implementation
↓
Testing Checklist
↓
GitHub Diff Review
↓
Changelog / Development Log
```

This pipeline should be used for new modules, MVPs, workflow automation features, and meaningful system changes.

---

## 4. Pipeline Stages

## 4.1 Idea

An idea is not yet a task.

An idea should first be captured and classified under v1.4 rules.

Possible classifications:

1. Capture Only
2. Mini Issue
3. Issue
4. Change Request
5. Full Change Request
6. Backlog
7. Reject

An idea should not be sent directly to Codex or Antigravity.

---

## 4.2 Project Brief

The Project Brief defines:

1. Project purpose
2. Problem statement
3. Target user
4. In scope
5. Out of scope
6. Success criteria
7. Business value

The Project Brief prevents overbuilding.

---

## 4.3 User Flow

The User Flow defines how the user actually uses the system.

It should describe:

1. Main workflow
2. Trigger
3. Steps
4. Required fields
5. Optional fields
6. Result
7. Boundary

User Flow should be written before UI and backend decisions.

---

## 4.4 Architecture Diagram

The Architecture Diagram defines:

1. Main modules
2. Page structure
3. Data flow
4. Technical boundary
5. Future integration points
6. Current development decision

This can be a text-based diagram in Markdown.

---

## 4.5 UI Screen List

The UI Screen List translates architecture into screens.

It should define:

1. Screen name
2. Purpose
3. Fields
4. Buttons
5. Empty state
6. User action
7. Next screen

UI Screen List should be created before UI implementation.

---

## 4.6 Data Model Draft

The Data Model Draft defines possible data entities and fields.

It should be created after user flow and UI screen planning, not before.

This reduces the risk of designing database tables too early.

The Data Model Draft is not automatically a Supabase schema.

Supabase schema changes require CR-level review when they affect production data, auth, RLS, or future client workflows.

---

## 4.7 Issue Breakdown

Issue Breakdown converts planning documents into executable work.

Each item should be classified as:

1. Mini Issue
2. Issue
3. CR
4. Full CR
5. Backlog

The issue breakdown should include:

1. Task title
2. Scope
3. Related document
4. Acceptance criteria
5. AI tool to use
6. Risk level

---

## 4.8 AI Execution Prompt

The AI Execution Prompt is the instruction given to Codex or Antigravity.

It must include:

1. Project purpose
2. Scope
3. Out of scope
4. Required files or modules
5. Expected output
6. Testing requirement
7. Instruction not to expand scope

AI should not receive vague prompts such as:

```text
Build a CRM.
Make this better.
Create the whole system.
```

AI should receive structured prompts based on approved documents.

---

## 4.9 Codex / Antigravity Implementation

Codex and Antigravity should only execute based on approved scope.

Codex is mainly used for:

1. Code implementation
2. Component creation
3. Routing
4. Mock data
5. Tests
6. Refactoring based on clear instructions

Antigravity is mainly used for:

1. UI skeleton
2. UI review
3. Debugging
4. Layout improvement
5. Interaction refinement
6. Visual implementation support

---

## 4.10 Testing Checklist

Testing Checklist should verify whether the output matches the original documents.

It should include:

1. Screen checks
2. User flow checks
3. Acceptance criteria
4. Mobile layout check
5. Console error check
6. Data behavior check
7. Scope control check

Testing should happen before production deployment.

---

## 4.11 GitHub Diff Review

GitHub diff review is required before merging meaningful changes.

Review should check:

1. Unexpected file changes
2. Scope expansion
3. Broken structure
4. Risk areas
5. Documentation updates
6. Test result

GitHub remains the official source of truth.

---

## 4.12 Changelog / Development Log

Every meaningful development cycle should update one or more of:

1. CHANGELOG
2. VERSION_HISTORY
3. Development Log
4. Project README
5. Related Issue / CR

The purpose is to preserve decision history.

---

## 5. Context Inheritance Rule

Every development step must inherit the previous approved documents.

AI should not restart from zero or guess requirements.

Standard context inheritance:

```text
Step 1 uses Constitution.
Step 2 uses Constitution + Step 1 documents.
Step 3 uses Constitution + Step 1 + Step 2 documents.
Step 4 uses Constitution + implementation output + testing checklist.
Backend / Supabase uses Constitution + approved UI + data model + CR.
```

The goal is:

```text
Each step extends previous confirmed context.
No step should recreate requirements from imagination.
```

---

## 6. What to Attach for Each Step

## 6.1 Step 1 - Architecture and Workflow Definition

Attach:

1. Relevant v1.4 constitution rule
2. Project idea or requirement

Produce:

1. README
2. Project Brief
3. User Flow
4. Architecture Diagram

---

## 6.2 Step 2 - UI Planning and Execution Preparation

Attach:

1. Relevant v1.4 / v1.4.1 rules
2. README
3. Project Brief
4. User Flow
5. Architecture Diagram

Produce:

1. UI Screen List
2. Data Model Draft
3. Issue Breakdown
4. Codex / Antigravity Prompt
5. Testing Checklist

---

## 6.3 Step 3 - UI Skeleton Implementation

Attach:

1. Relevant AI Execution Rule
2. Project Brief
3. User Flow
4. Architecture Diagram
5. UI Screen List
6. Data Model Draft
7. Issue Breakdown
8. AI Execution Prompt

Produce:

1. UI skeleton
2. Mock data
3. Component structure
4. Basic routes
5. Implementation summary
6. Testing notes

---

## 6.4 Step 4 - Testing and Refinement

Attach:

1. Testing Checklist
2. UI Screen List
3. Issue Breakdown
4. Current code diff
5. Bug list or screenshots if available

Produce:

1. Bug fix 20_Issues
2. Updated testing result
3. Development log
4. Changelog update

---

## 6.5 Step 5 - Backend / Supabase Planning

Attach:

1. v1.4 CR Rule
2. Project Brief
3. User Flow
4. Architecture Diagram
5. UI Screen List
6. Data Model Draft
7. UI skeleton result
8. Testing result

Produce:

1. Backend CR
2. Supabase schema draft
3. RLS / auth decision
4. API plan
5. Migration plan
6. Backend testing checklist

Backend and Supabase work should be treated as CR-level work when it affects data, auth, RLS, production, or client-facing functionality.

---

## 7. What AI Can Do

AI may assist with:

1. Drafting documents
2. Structuring ideas
3. Creating user flows
4. Creating architecture diagrams
5. Breaking down 20_Issues
6. Writing prompts
7. Implementing code
8. Creating UI skeletons
9. Preparing tests
10. Summarizing changes
11. Updating changelog drafts

---

## 8. What AI Must Not Decide Alone

AI must not independently decide:

1. Business priority
2. Final scope
3. Client value judgment
4. Pricing
5. Version upgrade
6. Production release
7. Core system direction
8. Database architecture for production
9. Legal / PDPA commitments
10. Client-facing service promises

These remain Paul’s decisions.

---

## 9. When This Pipeline Is Required

Use this pipeline when:

1. Creating a new MVP
2. Creating a new module
3. Creating a new workflow automation feature
4. Changing a system workflow
5. Preparing a feature for AI implementation
6. Moving from idea to GitHub Issue
7. Creating reusable client-facing functionality

---

## 10. When This Pipeline Can Be Simplified

The full pipeline may be simplified for:

1. Typo fixes
2. Small content changes
3. Minor UI spacing fixes
4. Small checklist updates
5. Low-risk Mini Issues

However, even simplified work should still follow GitHub commit and review discipline.

---

## 11. v1.4.1 Relationship to v1.4

v1.4 already defines self-management, AI-assisted execution, and client value control.

v1.4.1 does not change the main version stage.

v1.4.1 only clarifies how Optimaks should operate the semi-automated development pipeline in practice.

Therefore:

```text
v1.4 = Governance layer
v1.4.1 = Pipeline clarification patch
```

---

## 12. Final Rule

Every step should make the next step easier.

If a document, prompt, or code output does not help the next step become clearer, it should be simplified or rewritten.
