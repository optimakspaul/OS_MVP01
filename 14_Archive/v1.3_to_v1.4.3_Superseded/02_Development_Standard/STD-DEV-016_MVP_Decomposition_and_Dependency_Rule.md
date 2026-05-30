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
