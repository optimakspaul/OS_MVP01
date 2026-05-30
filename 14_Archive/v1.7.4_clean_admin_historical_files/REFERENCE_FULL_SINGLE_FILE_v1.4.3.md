# Optimaks Development Constitution v1.4.3 Integrated Reference



---

# File: 02_Foundation/FND-002_Development_Constitution_Overview.md

# FND-002 Development Constitution Overview

| Field | Value |
|---|---|
| Document Code | FND-002 |
| Version | v1.4.3 Integrated |
| Effective Date | 2026-05-14 |
| Owner | Optimaks Pte Ltd |
| Status | Active Integrated Constitution |
| Purpose | Provide the master overview of Optimaks development constitution from v1.3 to v1.4.3. |

---

## 1. Document Control

| Item | Value |
|---|---|
| Document Name | Optimaks Development Constitution / Optimaks 開發憲法 |
| Current Version | v1.4.3 Integrated |
| Effective Date | 2026-05-14 |
| Owner | Optimaks Pte Ltd |
| Applicable Scope | Optimaks OS, Aircon OS, ACRA Radar, internal tools, MVP/prototype systems, client workflow automation systems, AI-assisted development workflows |

---

## 2. Purpose

This constitution establishes a repeatable, traceable, reviewable, deliverable, and scalable AI-era development standard for Optimaks.

This is not merely a programming note. It is the operating standard for:

1. Idea capture and triage.
2. New features and bug fixes.
3. MVP decomposition and dependency control.
4. AI-assisted development execution.
5. UI / backend parallel development.
6. GitHub Issue and Change Request governance.
7. QA, staging, release, and documentation control.
8. Client delivery, monthly value, and maintenance governance.
9. Internal system development and future commercial delivery scaling.

---

## 3. Version Lineage

| Version | Role | Summary |
|---|---|---|
| v1.3 | Baseline governance | Established GitHub Markdown document library, mobile-assisted workflow, Codex + Antigravity architecture, CR flow, staging-before-production, QA, PDPA, ISO-ready and grant-ready structure. |
| v1.4 | Self-management and value control | Added idea triage, Mini Issue / Issue / CR / Full CR classification, daily priority rule, client value gate, AI execution control, and constitution upgrade trigger rule. |
| v1.4.1 | AI semi-automated pipeline patch | Added standard pipeline from idea to project brief, user flow, architecture, UI screen list, data model draft, issue breakdown, AI prompt, implementation, testing, GitHub diff, and changelog. |
| v1.4.2 | MVP decomposition patch | Added large-project decomposition, dependent vs independent MVP rule, MVP dependency map, and layered project documentation logic. |
| v1.4.3 | Small Core First and integrated operating patch | Integrates all previous versions and adds Small Core First Rule, document-as-AI-input rule, UI/backend parallel control, internal-vs-client delivery separation, layered MVP inheritance, monthly value rule, and version discipline. |

---

## 4. Highest Operating Principle

Any change should be traceable from:

```text
Idea
↓
Capture / Triage
↓
Issue / CR / MVP Document
↓
AI Execution Prompt
↓
Branch / Implementation
↓
Testing
↓
GitHub Diff Review
↓
Changelog / Documentation Update
↓
Staging
↓
Production Release
```

No idea should directly become code.

No large project should directly become a full product.

No AI tool should restart from zero when approved documents already exist.

---

## 5. Document Library Principle

The official source of truth should be Markdown files in GitHub.

```text
Markdown 分檔 = 正式原始文件
Word / PDF = 對外輸出或備份版本
GitHub diff = 版本比對證據
Issues / CR = 需求與變更證據
Staging = 安全驗證環境
Production = 審查後才可更新
```

Documents are not only records. Documents are development inputs.

Before AI-assisted implementation, the relevant constitution, MVP documents, project brief, data structure, page structure, constraints, acceptance criteria, and testing method must be provided as context.

---

## 6. Small Core First Principle

Optimaks projects must begin with a small, understandable, testable, and extendable core.

The first version of any internal or client system should avoid unnecessary complexity.

The first version should normally avoid, unless explicitly required:

1. Multi-tenant architecture.
2. Payment integration.
3. E-sign integration.
4. Full client portal.
5. Complex permission model.
6. Complete ERP scope.
7. Full reporting engine.
8. Production-grade automation across all modules.

The purpose is to make the first version stable, explainable, testable, and useful before expanding.

---

## 7. AI-Assisted Semi-Automated Development Principle

Optimaks uses AI to accelerate development, but AI must not replace governance.

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

## 8. MVP Layering Principle

Every meaningful MVP must have its own document package.

Dependent MVPs must inherit previous decisions, data assumptions, UI patterns, and accepted constraints.

Independent MVPs may prepare documents in parallel, but if they later integrate into Optimaks OS or a shared product platform, they must be reviewed as dependent modules.

```text
Large Idea
↓
MVP Decomposition
↓
Dependency Classification
↓
Step Documents
↓
AI Execution
↓
Review / Test / Merge
```

---

## 9. UI / Backend Parallel Development Principle

UI / UX and backend may run in parallel only when they share the same approved context.

The minimum shared context should include:

1. Project brief.
2. User flow.
3. Page map.
4. Component map.
5. Data model draft.
6. Field list.
7. Constraints and non-goals.
8. Acceptance criteria.

Antigravity may focus on UI, UX, layout, visual flow, and interaction. Codex may focus on code structure, data model, API logic, refactor, tests, and implementation quality.

Both outputs must be reconciled through GitHub diff and documentation update.

---

## 10. Internal Version vs Client Delivery Version Principle

Internal MVPs may be intentionally simple.

Client delivery versions must be more controlled.

| Area | Internal MVP | Client Delivery Version |
|---|---|---|
| Auth | May be omitted | Required when client or user data exists |
| Payment | Usually omitted | Required only if included in scope |
| E-sign | Usually omitted | Requires CR and client workflow review |
| Multi-tenant | Omitted | Requires Full CR / architecture review |
| Invoice | May be manual or omitted | Requires defined workflow and handover |
| QA | Basic testing | Formal QA checklist required |
| PDPA | Basic awareness | Formal PDPA/data protection review required |
| Handover | Not required | Required |
| Maintenance | Internal note | Monthly maintenance/value report required when monthly fee exists |

---

## 11. Monthly Value Principle

If Optimaks charges a monthly maintenance or system fee, the system or service should produce visible value evidence.

This may include:

1. System health check.
2. Uptime or deployment status.
3. Lead count.
4. Follow-up count.
5. Proposal status.
6. Issue / bug fix log.
7. Backup or maintenance record.
8. Content update record.
9. SEO / Google Maps / landing page performance indicators when applicable.
10. Monthly value summary for client communication.

This is a client delivery and maintenance governance rule. Specific implementation details should remain in the relevant project files.

---

## 12. Constitution Review Principle

The constitution should be reviewed only when a new rule affects repeated operations, AI execution, delivery governance, client promises, risk control, or company stage maturity.

```text
One-time idea → capture note / backlog / project file
Single feature → Issue or CR
Repeated operating rule → Constitution candidate
Company stage change → Major constitution upgrade
```

The constitution is not a notebook. It is the operating system of Optimaks.



---

# File: 03_Development_Standard/STD-DEV-013_Self_Management_AI_Client_Value_Control_Rule.md

# STD-DEV-013 Self-Management, AI-Assisted Execution, and Client Value Control Rule

Version: v1.4  
Owner: Optimaks Pte Ltd  
Status: Active  
Applies to: Optimaks OS, Aircon OS, ACRA Radar, internal tools, MVP/prototype projects, customer-facing automation projects.

---

## 1. Purpose

This standard defines how Paul should manage ideas, priorities, AI-assisted execution, and client value before development begins.

The purpose is to prevent:

1. Too many ideas becoming active tasks at the same time.
2. AI tools modifying the system without proper scope.
3. Unclear distinction between Mini Issue, Issue, CR, and Full CR.
4. Features being built without business value.
5. Production being changed without review.

---

## 2. Core Rule

No idea should directly become code.

Every idea must pass through:

```text
Capture
    ↓
Triage
    ↓
Issue size classification
    ↓
Client value check
    ↓
Execution route decision
```

---

## 3. Daily Priority Rule

Each working day should have:

```text
1 Primary Priority
2 Secondary Tasks
3 Capture-only Ideas
```

A Primary Priority should normally be connected to at least one of the following:

1. Revenue creation.
2. Client delivery.
3. Product foundation.
4. Demo or sales enablement.
5. Risk reduction.
6. Maintenance value.
7. Documentation foundation.

---

## 4. Idea Capture Rule

Ideas may be captured anytime, including by mobile phone.

However, captured ideas are not automatically active tasks.

Each captured idea should include:

1. Title.
2. Problem.
3. Target user.
4. Value type.
5. Urgency.
6. Possible affected module.
7. Suggested route: Mini Issue / Issue / CR / Full CR / Backlog.

---

## 5. Issue Size Classification

### 5.1 Mini Issue

Small, safe, clear, low-risk work.

Examples:

1. Text fix.
2. Button label update.
3. Minor UI spacing.
4. Small checklist item.
5. Static content update.

### 5.2 Issue

Normal scoped work that requires development and testing but does not significantly change system behavior.

Examples:

1. Add a small dashboard component.
2. Add a field to a non-critical form.
3. Improve layout of a module.
4. Create a small export feature.

### 5.3 Change Request

Formal change that affects workflow, system behavior, data, permissions, client delivery, or production risk.

Examples:

1. Monthly health report generator.
2. E-sign integration.
3. Booking flow change.
4. Customer profile data model change.
5. Invoice process change.

### 5.4 Full Change Request

Large change that affects architecture, core product direction, multiple modules, or future scalability.

Examples:

1. Multi-tenant architecture.
2. Full client portal.
3. Multi-industry template engine.
4. Major data model redesign.

---

## 6. AI Tool Role Control

### 6.1 ChatGPT

Used for:

1. Thinking partner.
2. Requirement structuring.
3. Issue and CR drafting.
4. Documentation drafting.
5. Prompt preparation.
6. Impact analysis.

### 6.2 Codex

Used for:

1. Implementing clear GitHub Issues.
2. Modifying code.
3. Creating tests.
4. Producing implementation summaries.

Codex should not be given vague ideas.

### 6.3 Antigravity

Used for:

1. UI support.
2. Debugging.
3. Review.
4. Refactoring support.
5. Visual improvement.

### 6.4 GitHub

GitHub is the official source of truth for Issues, branches, commits, pull requests, diffs, changelog, and final documentation.

---

## 7. AI Execution Control

AI tools must follow these rules:

1. Do not directly modify production.
2. Do not expand scope without approval.
3. Do not modify database, auth, RLS, billing, customer data, or production deployment without CR-level review.
4. Explain affected files or modules before significant changes.
5. Provide testing instructions after implementation.
6. Output must be reviewed in GitHub diff before merge.
7. Final decisions must be reflected in GitHub documents, Issues, or CRs.

---

## 8. Client Value Control

Every meaningful task should be tagged with at least one value type:

1. Internal Value.
2. Client Value.
3. Maintenance Value.
4. Sales Value.
5. Risk Reduction Value.
6. Platform Foundation Value.

If no value type can be identified, the task should be clarified, backlogged, or rejected.

---

## 9. Client Value Gate Questions

Before development, ask:

1. Who benefits from this?
2. What problem does this solve?
3. Can this help Optimaks sell, deliver, maintain, or scale?
4. Can this be shown in a demo, proposal, report, or client conversation?
5. If the client cannot see it directly, does it still improve internal efficiency or platform foundation?

---

## 10. Route Decision

Each item must be routed to one of:

```text
Capture Only
Documentation Update
Mini Issue
Issue
Change Request
Full Change Request
Backlog
Reject
```

---

## 11. Completion Rule

A task should not be considered complete until:

1. The work was classified correctly.
2. The value type was identified.
3. AI output was reviewed if AI was used.
4. Staging or preview was tested if applicable.
5. Documentation or changelog was updated if applicable.



---

# File: 03_Development_Standard/STD-DEV-014_Constitution_Upgrade_Trigger_Rule.md

# STD-DEV-014 Constitution Review and Upgrade Trigger Rule

Version: v1.4  
Owner: Optimaks Pte Ltd  
Status: Active  
Applies to: All Optimaks governance documents and future constitution updates.

---

## 1. Purpose

This standard defines when Optimaks should review, modify, or upgrade its Development Constitution.

The constitution should not be modified for every new thought, feature idea, or one-time discussion.

It should be modified only when a new rule affects repeated operations, AI execution, delivery governance, client promises, risk control, or company stage maturity.

---

## 2. Core Rule

The constitution is not a notebook.

The constitution is the operating system of Optimaks.

Therefore:

```text
One-time idea → capture note / backlog / project file
Single feature → Issue or CR
Repeated operating rule → Constitution candidate
Company stage change → Major constitution upgrade
```

---

## 3. Constitution Review Triggers

A constitution review should be triggered when at least one condition is met:

1. The same confusion happens three times or more.
2. A rule is being repeated across multiple projects or conversations.
3. A workflow gap causes rework, delay, risk, or unclear responsibility.
4. AI tools repeatedly need the same instruction to avoid mistakes.
5. A new operating pattern becomes part of daily or weekly execution.
6. A new client-facing promise is about to be made.
7. A new product module affects multiple future projects.
8. A tool change affects the development workflow.
9. A legal, security, data, payment, or production risk appears.
10. Optimaks enters a new business stage.

---

## 4. When Not to Modify the Constitution

Do not modify the constitution when:

1. The topic is a one-time idea.
2. The topic only affects one project.
3. The topic is only a small feature.
4. The topic is still experimental.
5. The topic has not been used in actual workflow.
6. The topic belongs in a project file, Issue, CR, checklist, or template.

---

## 5. Patch / Minor / Major Upgrade Rule

### 5.1 Patch Version

Use patch version such as v1.4.1 for:

1. Typo fixes.
2. Broken link fixes.
3. Minor wording clarification.
4. Example additions.
5. Formatting updates.
6. Small checklist refinement.

### 5.2 Minor Version

Use minor version such as v1.5 when:

1. A new formal operating rule is added.
2. A repeatable workflow is added.
3. A governance chapter is added.
4. AI execution or client delivery control changes.
5. The system needs a new formal standard but the company stage is still v1.x.

### 5.3 Major Version

Use major versions such as v2.0, v3.0, or v4.0 only when Optimaks enters a new operating stage.

```text
v1.x = One-person AI-assisted development governance
v2.x = Commercial client delivery governance
v3.x = Multi-client and multi-industry template governance
v4.x = Team-based, ISO-ready, scalable governance
```

---

## 6. Required Evidence for Constitution Update

Every constitution update must include:

1. Reason for change.
2. Trigger condition.
3. Affected files.
4. New or revised rules.
5. Version number.
6. GitHub commit.
7. Changelog entry.
8. Version history entry.

---

## 7. Decision Table

| Situation | Action |
|---|---|
| New idea only | Capture note |
| Single feature | Issue |
| System behavior change | CR |
| Architecture/product direction change | Full CR |
| Repeated workflow rule | Constitution review |
| New client promise | Constitution review or v1.5 trigger |
| Formal commercial delivery starts | v2.0 trigger |
| Multi-industry template scaling starts | v3.0 trigger |
| Team/contractor/ISO-ready scaling starts | v4.0 trigger |

---

## 8. Conclusion

Yes, this trigger rule must be part of v1.4.

Reason:

v1.4 is about self-management, AI-assisted execution, and client value control. Without a rule that defines when the constitution itself should be reviewed, Paul may either update the constitution too often or delay updates when a real governance gap appears.

This rule protects the constitution from becoming either too loose or too heavy.



---

# File: 03_Development_Standard/STD-DEV-015_AI_Assisted_Semi_Automated_Development_Pipeline.md

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



---

# File: 03_Development_Standard/STD-DEV-016_MVP_Decomposition_and_Dependency_Rule.md

# STD-DEV-016 MVP Decomposition and Dependency Rule

Version: v1.4.2  
Owner: Optimaks Pte Ltd  
Status: Active Patch Rule  
Related Constitution: Optimaks Development Constitution v1.4  
Previous Patch: v1.4.1 AI-Assisted Semi-Automated Development Pipeline Rule

---

## 1. Purpose

This standard defines how Optimaks should break large ideas, products, or client systems into smaller MVPs or modules before AI-assisted development begins.

The purpose is to prevent large projects from becoming unclear, overbuilt, or unstable when handed to ChatGPT, Codex, Antigravity, or any other AI-assisted development tool.

---

## 2. Core Rule

A large project must not go directly into code.

A large project must first be decomposed into MVPs or modules.

Each MVP or module must then be classified as either:

```text
Dependent MVP / Module
Independent MVP / Module
```

Dependent MVPs must follow sequence and inherit previous decisions.

Independent MVPs may prepare documents in parallel, as long as they do not affect the core system or other MVPs.

---

## 3. Why This Rule Exists

Optimaks development involves many possible directions, including:

1. Optimaks OS.
2. Aircon OS.
3. Internal CRM.
4. Proposal Builder.
5. Monthly Value Report.
6. E-sign workflow.
7. ACRA Radar.
8. Ebook Organizer.
9. Landing Page Demo Builder.
10. Client Workflow Automation modules.

Without decomposition, a single idea may quickly expand into CRM, ERP, e-sign, invoice, client portal, monthly report, automation, and multi-tenant features at the same time.

This rule ensures every large idea becomes a controlled development sequence.

---

## 4. Classification Levels

Before creating documents or code, classify the work item.

## 4.1 Single Issue

A single task with limited scope.

Examples:

1. Add one field.
2. Fix one UI issue.
3. Update copy.
4. Add one component.

Route:

```text
GitHub Issue or Mini Issue
```

## 4.2 MVP

A small usable version of a product or workflow.

Examples:

1. MVP-01 Internal CRM.
2. MVP-02 Proposal Builder.
3. MVP-03 Monthly Value Report.

Route:

```text
MVP Project Folder + Step Documents
```

## 4.3 Module

A functional part of a larger system.

Examples:

1. Lead Management Module.
2. Proposal Status Module.
3. Follow-up Module.
4. Issue / CR Reference Module.

Route:

```text
Module Brief + Parent MVP Reference
```

## 4.4 Large Project

A project containing multiple MVPs or modules.

Examples:

1. Optimaks OS.
2. Aircon OS.
3. ACRA Radar.

Route:

```text
Master Project Brief + MVP Dependency Map
```

## 4.5 Program / Platform

A long-term platform containing multiple projects, products, or industry templates.

Examples:

1. Optimaks multi-industry workflow automation platform.
2. Multi-client SME automation suite.

Route:

```text
Full CR or future major constitution stage
```

---

## 5. Dependent vs Independent MVP Rule

## 5.1 Dependent MVP

An MVP is dependent when it relies on another MVP’s data, workflow, architecture, UI pattern, business logic, or future integration.

Examples:

```text
MVP-02 Proposal Builder depends on MVP-01 Internal CRM because proposals need leads or clients.

MVP-03 Monthly Value Report depends on MVP-01 because reports need client records, issue references, and monthly value notes.

MVP-04 E-sign Flow depends on MVP-02 because contracts usually depend on proposals.
```

Dependent MVPs must follow sequence and inherit previous decisions.

They must not redefine shared data models independently.

## 5.2 Independent MVP

An MVP is independent when it can be designed, documented, or prototyped without relying on another MVP’s data model, workflow, or system behavior.

Examples:

```text
Ebook Organizer MVP may be independent from Optimaks OS.

ACRA Radar MVP may be independent during prototype stage.

Landing Page Demo Builder may be independent if it does not depend on CRM data yet.
```

Independent MVPs may prepare Step 1 and Step 2 documents in parallel.

However, if they later integrate into Optimaks OS, they must be reviewed as dependent modules.

---

## 6. Dependency Test

Before starting an MVP, answer these questions.

| Question | If Yes |
|---|---|
| Does this MVP use data from another MVP? | Dependent |
| Does this MVP update or depend on shared client data? | Dependent |
| Does this MVP affect the core system? | Dependent |
| Does this MVP change the data model? | Dependent |
| Does this MVP affect client workflow? | Dependent |
| Does this MVP need to integrate into Optimaks OS later? | Potentially dependent |
| Can this MVP run independently without shared data? | Independent |
| Is this a prototype or practice tool? | Usually independent |
| Can the documents be prepared without changing another MVP? | Usually independent |

If unsure, classify as potentially dependent and create a dependency note.

---

## 7. Required Document for Dependent MVPs

Dependent MVPs must include or reference:

```text
00_MVP_Dependency_Map.md
```

The dependency map should define:

1. Parent project.
2. MVP sequence.
3. What each MVP provides.
4. What each MVP depends on.
5. Shared data model assumptions.
6. Shared UI or component assumptions.
7. Future integration points.
8. CR / Full CR risks.

---

## 8. Suggested Large Project Folder Structure

For a large project such as Optimaks OS:

```text
12_Projects/
└── Optimaks_OS/
    ├── 00_Master_Project_Brief.md
    ├── 00_MVP_Dependency_Map.md
    ├── MVP-01_Internal_CRM/
    ├── MVP-02_Proposal_Builder/
    ├── MVP-03_Monthly_Value_Report/
    ├── MVP-04_Esign_Contract_Flow/
    └── MVP-05_Client_Portal/
```

Example dependency chain:

```text
MVP-01 Internal CRM
    ↓ provides Lead / Client / Follow-up foundation

MVP-02 Proposal Builder
    ↓ depends on Lead / Client from MVP-01

MVP-03 Monthly Value Report
    ↓ depends on Client / Issue / Value Notes from MVP-01

MVP-04 E-sign Contract Flow
    ↓ depends on Proposal from MVP-02

MVP-05 Client Portal
    ↓ depends on Client / Proposal / Contract / Report data
```

---

## 9. Independent MVP Folder Structure

Independent MVPs may live as separate project folders:

```text
12_Projects/
├── MVP-01_Internal_CRM_Workflow/
├── MVP-ACRA-01_Company_Radar/
├── MVP-EBOOK-01_Metadata_Organizer/
└── MVP-LP-01_Landing_Page_Demo_Builder/
```

Each independent MVP should still contain:

```text
README.md
01_Project_Brief.md
02_User_Flow.md
03_Architecture_Diagram.md
04_UI_Screen_List.md
05_Data_Model_Draft.md
06_Issue_Breakdown.md
07_AI_Execution_Prompt.md
08_Testing_Checklist.md
09_Development_Log.md
10_Post_MVP_Review.md
```

---

## 10. Mobile / Delivery Work Planning Rule

Paul may use delivery work time to prepare product definition, not code.

During mobile / delivery work, Paul may capture:

1. Large project ideas.
2. MVP decomposition ideas.
3. Dependent / independent classification.
4. Project Brief drafts.
5. User Flow drafts.
6. Out of Scope boundaries.
7. Success Criteria.
8. Dependency notes.
9. Backlog candidates.

Mobile work should not be used to make production changes.

Mobile work is suitable for product manager mode.

Desktop work is suitable for developer / reviewer mode.

```text
Mobile / Delivery Time:
Idea capture + MVP decomposition + document draft

Desktop Time:
Document cleanup + AI execution + code review + testing + commit
```

---

## 11. MVP Start Gate

Before any MVP enters UI skeleton or coding, the following must exist:

```text
README.md
01_Project_Brief.md
02_User_Flow.md
03_Architecture_Diagram.md
```

If the MVP is dependent, it must also include:

```text
00_MVP_Dependency_Map.md
```

The MVP should not be sent to Codex or Antigravity for implementation until the start gate is complete.

---

## 12. MVP Execution Pipeline

After the start gate, proceed with:

```text
Step 1: Project Brief / User Flow / Architecture Diagram
    ↓
Step 2: UI Screen List / Data Model Draft / Issue Breakdown / AI Prompt / Testing Checklist
    ↓
Step 3: UI Skeleton / Mock Data / Component Structure
    ↓
Step 4: Testing / Bug Fix / Development Log
    ↓
Step 5: Backend / Supabase / Integration only if CR is approved
```

---

## 13. Rule for AI Context

When using AI to work on an MVP, provide only the necessary context.

For dependent MVPs, include:

1. Optimaks v1.4 Constitution relevant rules.
2. v1.4.1 AI Pipeline rule if applicable.
3. v1.4.2 MVP Dependency rule if applicable.
4. Parent project brief.
5. Dependency map.
6. Previous MVP decisions.
7. Current MVP Step documents.

For independent MVPs, include:

1. Optimaks v1.4 Constitution relevant rules.
2. v1.4.1 AI Pipeline rule if applicable.
3. Current MVP Step documents.

AI must not re-decide already approved upstream decisions.

---

## 14. When This Rule Triggers a Constitution Review

This rule may trigger a future constitution review if:

1. Multiple MVPs repeatedly need the same decomposition pattern.
2. AI repeatedly confuses dependent and independent MVPs.
3. Multiple MVPs require a shared component library.
4. Multiple MVPs require a shared data model.
5. Optimaks begins operating multiple industry templates.

If the change affects multi-client or multi-industry governance, it may become a v3.0 candidate.

---

## 15. Conclusion

v1.4.2 ensures Optimaks does not build large systems in one uncontrolled jump.

It allows Paul to use mobile time to define products, classify MVPs, and prepare documents, while reserving desktop time for AI execution, code review, testing, and GitHub commits.

The principle is:

```text
Break big ideas into MVPs.
Classify MVP dependencies.
Document first.
Let AI execute only after scope is clear.
```



---

# File: 03_Development_Standard/STD-DEV-017_Small_Core_First_and_Layered_MVP_Execution_Rule.md

# STD-DEV-017 Small Core First and Layered MVP Execution Rule

Version: v1.4.3  
Owner: Optimaks Pte Ltd  
Status: Active Patch Rule  
Related Constitution: Optimaks Development Constitution v1.4.3 Integrated  
Related Rules: STD-DEV-015, STD-DEV-016

---

## 1. Purpose

This standard defines how Optimaks should start software projects from a small, stable, testable core before expanding into a full product.

The purpose is to prevent:

1. Overbuilding too early.
2. AI generating a system that looks complete but has weak structure.
3. Scope expansion before the real workflow is verified.
4. Mixing internal MVP requirements with client delivery requirements.
5. Building advanced features before the core data and user flow are clear.

---

## 2. Core Rule

Optimaks must follow the Small Core First Rule.

```text
Do not start from the full system.
Start from the smallest useful core.
Make it understandable.
Make it testable.
Make it extendable.
Then add modules layer by layer.
```

中文原則：

```text
不要一開始就做完整大系統。
先做最小、可用、可理解、可測試、可延伸的小核心。
核心穩定後，再一層一層加功能。
```

---

## 3. Small Core Definition

A small core is the minimum system that can prove the workflow.

A small core should usually include:

1. Main user or operator.
2. Main object or record.
3. Basic list view.
4. Basic detail view.
5. Basic status tracking.
6. Basic note or value field.
7. Mock data, localStorage, or simple data source when appropriate.
8. Clear extension points.

A small core should usually exclude:

1. Auth.
2. Payment.
3. E-sign.
4. Invoice automation.
5. Client portal.
6. Multi-tenant architecture.
7. Full dashboard/reporting.
8. Complex role permission.
9. Advanced workflow automation.
10. Production-grade integrations.

These excluded items may be added later through Issue, CR, or Full CR.

---

## 4. Layering Rule

Every new layer must answer:

| Question | Required Answer |
|---|---|
| What existing core does this extend? | Name the MVP or module. |
| What data does it reuse? | Name the entity or field. |
| What workflow does it change? | State the affected user flow. |
| Is this dependent or independent? | Use STD-DEV-016 classification. |
| Does this require CR? | State Mini Issue / Issue / CR / Full CR. |
| How will it be tested? | Provide acceptance criteria. |

No layer should redefine the previous layer unless a CR approves the change.

---

## 5. MVP Document Inheritance Rule

When developing the next MVP layer, the AI context package must include:

1. Current constitution version.
2. Parent project brief.
3. Previous MVP documents.
4. Current MVP scope.
5. Data model assumptions.
6. UI/page map assumptions.
7. Out-of-scope list.
8. Acceptance criteria.
9. Testing method.
10. Changelog or decision log.

This prevents AI from restarting from zero or contradicting previous decisions.

---

## 6. Internal CRM Example

For an internal Optimaks CRM MVP, the first core may include only:

1. Lead list.
2. Client profile.
3. Proposal status.
4. Follow-up status.
5. Issue / CR reference.
6. Monthly value note.

The first core should not include:

1. Auth.
2. Payment.
3. E-sign.
4. Multi-tenant.
5. Invoice.
6. Client portal.
7. Full reporting.

These later features must be added as future layers.

---

## 7. Commercial Delivery Guardrail

Small Core First does not mean low quality.

It means the first version has controlled scope.

Before client delivery, the system must still pass relevant delivery checks, including QA, PDPA, deployment, handover, backup, and maintenance expectations.

---

## 8. Trigger to Expand the Core

A module may be added after one or more conditions are met:

1. The current core workflow is clear.
2. The current data structure is stable enough.
3. The next feature has clear value.
4. The affected module is identified.
5. The change size is classified.
6. The testing method is defined.
7. The change is documented.

---

## 9. Summary

Small Core First is a permanent Optimaks development rule.

It should be used for Optimaks OS, Aircon OS, internal CRM, ACRA Radar, workflow automation systems, and any future SME automation product.



---

# File: 03_Development_Standard/STD-DEV-018_UI_Backend_Parallel_Development_and_AI_Context_Control_Rule.md

# STD-DEV-018 UI Backend Parallel Development and AI Context Control Rule

Version: v1.4.3  
Owner: Optimaks Pte Ltd  
Status: Active Patch Rule  
Related Constitution: Optimaks Development Constitution v1.4.3 Integrated

---

## 1. Purpose

This standard defines how Optimaks should run UI / UX work and backend / architecture work in parallel without losing consistency.

The purpose is to allow faster development while preventing UI, backend, and AI-generated code from drifting apart.

---

## 2. Core Rule

UI and backend may be developed in parallel only after a shared context package exists.

The shared context package must include:

1. Project brief.
2. User flow.
3. Page map.
4. Component map.
5. Data model draft.
6. Field list.
7. Status logic.
8. Out-of-scope list.
9. Acceptance criteria.
10. Testing method.

---

## 3. Tool Role Separation

| Tool | Main Role | Should Avoid |
|---|---|---|
| ChatGPT | Thinking, requirement structuring, CR drafting, document drafting, prompt preparation | Direct code execution without project context |
| Antigravity | UI / UX, visual flow, layout, interaction, front-end review | Redefining backend data models alone |
| Codex | Implementation, refactor, data structure, API logic, test support | Expanding scope beyond issue or CR |
| GitHub | Source of truth, Issues, commits, diffs, changelog, documentation | Being used only as backup without review discipline |

---

## 4. UI First vs Backend First Rule

UI may start first when:

1. The workflow is still being explored.
2. A demo is needed for sales or client explanation.
3. The purpose is to validate user flow.
4. Mock data is enough.

Backend may start first when:

1. The data model is already clear.
2. The workflow depends on integration.
3. Security, auth, database, or API design is the main risk.
4. The feature affects production or client data.

For most Optimaks MVPs, UI and backend should be planned together, but implementation can be staged.

---

## 5. Reconciliation Rule

After parallel work, the outputs must be reconciled through:

1. File diff review.
2. Data field comparison.
3. Page behavior check.
4. Component responsibility check.
5. Acceptance criteria testing.
6. Documentation update.
7. Changelog entry.

A UI that cannot connect to the planned data model is not complete.

A backend that does not support the intended user flow is not complete.

---

## 6. AI Prompt Requirement

AI execution prompts must not be vague.

A proper execution prompt should include:

1. Goal.
2. Scope.
3. Files or modules to modify.
4. Files or modules not to modify.
5. Relevant constitution rules.
6. Relevant MVP documents.
7. Data model or mock data.
8. UI/page map.
9. Acceptance criteria.
10. Testing instructions.
11. Expected output summary.

---

## 7. Summary

Parallel development is allowed only when the shared context is clear.

Speed comes from controlled parallelism, not from letting different AI tools guess independently.



---

# File: 03_Development_Standard/STD-DEV-019_Internal_MVP_vs_Client_Delivery_Version_Control_Rule.md

# STD-DEV-019 Internal MVP vs Client Delivery Version Control Rule

Version: v1.4.3  
Owner: Optimaks Pte Ltd  
Status: Active Patch Rule  
Related Constitution: Optimaks Development Constitution v1.4.3 Integrated

---

## 1. Purpose

This standard separates internal-use MVP development from client-delivery development.

The purpose is to let Optimaks build fast for internal validation while still maintaining professional standards for paid client delivery.

---

## 2. Core Rule

Internal MVPs may be simplified.

Client delivery versions must be controlled.

The two should not be judged by the same completion standard.

---

## 3. Internal MVP Standard

An internal MVP may omit advanced features if the goal is learning, validation, workflow testing, or internal productivity.

It may use:

1. Mock data.
2. localStorage.
3. Simplified status fields.
4. Manual workflow.
5. No auth.
6. No payment.
7. No e-sign.
8. No invoice.
9. No client portal.
10. No multi-tenant architecture.

However, it should still have:

1. Clear data structure.
2. Clear page structure.
3. Clear component structure.
4. Basic test method.
5. Changelog or development note.
6. Future extension notes.

---

## 4. Client Delivery Standard

Before a system is delivered to a client, the relevant delivery controls must be reviewed.

Depending on scope, this may include:

1. Auth and access control.
2. PDPA and data protection review.
3. Production deployment checklist.
4. Backup or export method.
5. QA checklist.
6. Handover guide.
7. Maintenance responsibility.
8. Support boundary.
9. Source code / IP policy.
10. Monthly maintenance and value report.

---

## 5. Monthly Value Rule

If a client pays a recurring monthly fee, Optimaks should be able to explain and show what the monthly fee covers.

Monthly value evidence may include:

1. Hosting and deployment maintenance.
2. Basic bug fixes.
3. Security or dependency updates.
4. Backup checks.
5. Uptime or availability checks.
6. Content update record.
7. Email / WhatsApp support record.
8. Data export assistance.
9. Lead or workflow activity summary.
10. System health report.

A one-click monthly report may be implemented as a project feature, but the principle belongs in the constitution.

---

## 6. Upgrade Path

An internal MVP can become a client delivery version only after:

1. Scope is rechecked.
2. Risk is classified.
3. Missing controls are listed.
4. QA is performed.
5. Deployment is verified.
6. Handover requirements are prepared.
7. Maintenance boundary is documented.

---

## 7. Summary

Internal MVP speed and client delivery quality are both important.

Optimaks should move fast internally, but deliver carefully externally.



---

# File: 00_Admin/VERSION_DELTA_SUMMARY_v1.3_to_v1.4.3.md

# VERSION_DELTA_SUMMARY v1.3 to v1.4.3

| Version | Type | Added / Changed | Main Files |
|---|---|---|---|
| v1.3 | Baseline | Created clean Optimaks document library with GitHub Markdown as source of truth, mobile-assisted development workflow, CR workflow, staging before production, QA/security, project context files, ISO-ready and grant-ready structure. | FND-002, STD-DEV-001 to STD-DEV-012, CLT files, LEG files, ISO files, templates, checklists, registers |
| v1.4 | Governance upgrade | Added self-management rule, daily priority rule, idea triage, Mini Issue / Issue / CR / Full CR classification, client value control, AI execution control, and constitution upgrade trigger rule. | STD-DEV-013, STD-DEV-014, TPL-DEV-006, CHK-DEV-006, ROADMAP-001 |
| v1.4.1 | Pipeline patch | Added AI-assisted semi-automated development pipeline: Idea → Project Brief → User Flow → Architecture Diagram → UI Screen List → Data Model Draft → Issue Breakdown → AI Prompt → Implementation → Testing → GitHub Diff → Changelog. | STD-DEV-015, TPL-DEV-007_AI_Pipeline_Context_Package, CHK-DEV-007 |
| v1.4.2 | MVP decomposition patch | Added large project decomposition, dependent vs independent MVP classification, MVP dependency map, and sequence inheritance rule. | STD-DEV-016, TPL-DEV-008_MVP_Decomposition_Template, 00_MVP_Dependency_Map_TEMPLATE |
| v1.4.3 | Integrated operating patch | Integrated v1.3 to v1.4.2 and added Small Core First Rule, document-as-AI-input rule, layered MVP inheritance, UI/backend parallel development, internal MVP vs client delivery separation, monthly value rule, and version discipline. | FND-002 updated, STD-DEV-017, STD-DEV-018, STD-DEV-019, CLT-006 updated |

---

## What Should Be Written Into the Constitution Itself

| Topic | Written Into Constitution? | Where |
|---|---:|---|
| Small Core First Rule | Yes | FND-002, STD-DEV-017 |
| MVP one-layer-at-a-time rule | Yes | FND-002, STD-DEV-016, STD-DEV-017 |
| Dependent vs independent MVP classification | Yes | STD-DEV-016 |
| AI must use documents as input, not just one-line prompt | Yes | FND-002, STD-DEV-015, STD-DEV-018 |
| UI / UX and backend parallel development rule | Yes | FND-002, STD-DEV-018 |
| Antigravity / Codex role separation | Yes | STD-DEV-013, STD-DEV-018 |
| Mini Issue / Issue / CR / Full CR classification | Yes | STD-DEV-013 |
| Internal MVP vs client delivery separation | Yes | FND-002, STD-DEV-019 |
| Monthly fee must show monthly value | Yes, as delivery principle | FND-002, STD-DEV-019, CLT-006 |
| Aircon OS exact version schedule | No | Keep in 12_Projects |
| MVP_01 exact feature list | Not in foundation, but example allowed | Keep main scope in 12_Projects; example in STD-DEV-017 |
| Three-day work plan | No | Keep in GitHub Issues or 00_Admin notes |

---

## Recommended Upgrade Logic

```text
v1.3 = Document library and base governance
v1.4 = Self-management, issue classification, AI and value control
v1.4.1 = Semi-automated AI development pipeline
v1.4.2 = MVP decomposition and dependency control
v1.4.3 = Small Core First integrated operating rule
```

v1.4.3 should remain a patch-level governance upgrade, not v1.5, because it clarifies how to execute the v1.4 system rather than introducing a new business stage.
