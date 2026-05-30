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
