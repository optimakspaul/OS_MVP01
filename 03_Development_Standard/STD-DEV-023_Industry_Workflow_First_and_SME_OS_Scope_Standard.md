# STD-DEV-023 Industry Workflow First and SME OS Scope Standard

| Field | Value |
|---|---|
| Document Code | STD-DEV-023 |
| Version | v1.5.1 WAS Positioning Patch |
| Effective Date | 2026-05-14 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Convert the Optimaks WAS / SME OS product positioning into an executable development standard. |

---

## 1. Purpose

This standard ensures that Optimaks projects are designed from industry workflows rather than generic feature lists.

It supports `FND-005 Product Positioning and WAS Principle`.

---

## 2. Standard Rule

Before any Optimaks workflow system is implemented, the project must define:

1. Target industry.
2. Target user roles.
3. Daily workflow to systemize.
4. Pain points and manual coordination problems.
5. Small Core MVP.
6. Data model and data flow.
7. Page map and user flow.
8. Automation points.
9. Monthly or measurable value proof.
10. Later modules and add-on boundaries.

If these cannot be defined, the project should remain in research, discovery, or sales exploration stage.

---

## 3. Workflow Scope Template

Every WAS project should be mapped using this sequence:

```text
Lead / enquiry
↓
Customer profile
↓
Quote / proposal
↓
Booking / schedule
↓
Job assignment
↓
Job execution status
↓
Proof of completion
↓
Invoice / payment tracking
↓
Maintenance / reminder
↓
Customer reactivation
↓
Monthly value report
```

Not every project needs every step in MVP_01. However, the future workflow direction should be visible.

---

## 4. Small Core Rule for WAS

A WAS project must not begin as a complete system.

It must begin as a Small Core MVP that proves the most important business loop.

Example:

```text
MVP_01:
Lead → Customer Profile → Quote Status → Job Status → Follow-up Note

MVP_02:
Booking Schedule + Calendar Sync

MVP_03:
Technician Job Card + Completion Photo

MVP_04:
Invoice Tracker

MVP_05:
Maintenance Reminder

MVP_06:
Client Portal
```

---

## 5. Human Workflow Rule

Optimaks systems should support human work instead of pretending to remove all human work.

The correct positioning is:

```text
Reduce repetitive admin work
Make work status visible
Reduce missed follow-ups
Help SME owners coordinate operations
Show monthly service value
```

The incorrect positioning is:

```text
Fully replace all admin staff
Promise complete automation without human review
Build a large ERP-like system before validating workflow
```

---

## 6. When to Use This Standard

Use this standard when:

1. Creating a new vertical OS.
2. Preparing a client workflow automation proposal.
3. Turning a market observation into a product idea.
4. Converting a sales pitch into an MVP plan.
5. Evaluating whether a feature belongs in core, add-on, or future CR.

---

## 7. Relation to Other Standards

| Related Document | Relationship |
|---|---|
| FND-005 | Defines the product positioning principle. |
| STD-DEV-020 | Defines the AI Context Package required before AI execution. |
| STD-DEV-021 | Defines MVP layering and Small Core First execution. |
| STD-DEV-022 | Defines internal MVP vs client delivery and monthly value control. |
| TPL-DEV-011 | Provides the workflow blueprint template. |
| CHK-DEV-009 | Provides the readiness checklist. |

---

## 8. Acceptance Criteria

A project passes this standard only when:

- The target industry is clear.
- The workflow is written as a sequence, not just a feature list.
- The Small Core MVP can be built and tested independently.
- The future module direction is visible.
- The system has a measurable operational value.
- The project avoids overbuilding at the start.
