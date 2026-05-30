# STD-DEV-042 Flow-first MVP and Issue Planning Standard

**Version:** v1.7.3  
**Status:** Active  
**Applies To:** MVP planning, flow diagrams, issue maps, AI execution planning.

---

## 1. Purpose

This standard prevents the team from generating too many 20_Issues before the actual workflow is clear.

---

## 2. Required Sequence

```text
MVP Scope
↓
Flow Index
↓
Flow Diagram
↓
Issue Map
↓
Issue Workpack
↓
AI Execution
↓
DONE Report
```

---

## 3. MVP Scope

MVP Scope defines what is in and out for the current build.

It must answer:

```text
Who is this MVP for?
What business outcome must it prove?
What must be demo-able?
What must be sellable?
What must be excluded for now?
```

---

## 4. Flow Index

Flow Index is a list of major workflows.

Example:

```text
F01 Client onboarding
F02 Lead capture
F03 Owner views lead
F04 WhatsApp follow-up
F05 Payment status update
F06 Starter dashboard review
```

Each flow should have:

```text
Flow ID
Flow name
User role
Trigger
End state
Priority
Related modules
Issue status
```

---

## 5. Flow Diagram

A flow diagram is required when:

```text
The workflow has more than 3 steps
More than one role is involved
There is a data handoff
There is payment, booking, invoice, approval, or client data isolation
The founder feels unclear about the workflow
```

---

## 6. Issue Map

Issue Map connects flows to implementation 20_Issues.

Do not generate a large fixed issue list before the MVP Scope and Flow Index are stable.

Preferred approach:

```text
Create enough 20_Issues for the next build slice.
Keep future 20_Issues as placeholders.
Refine them when the related flow becomes clear.
```

---

## 7. DONE Report Requirement

Any issue created under this standard must record:

```text
Related MVP Scope
Related Flow ID
Related issue map entry
Whether the flow changed during execution
What future issue may be needed
```
