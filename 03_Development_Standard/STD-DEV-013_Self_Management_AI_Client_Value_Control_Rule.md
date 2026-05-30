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
