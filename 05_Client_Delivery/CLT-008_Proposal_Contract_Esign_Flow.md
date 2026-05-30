# Proposal Contract E-Sign Flow

| Field | Value |
|---|---|
| Document Code | CLT-008 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Define client proposal, quotation, agreement and e-sign flow. |

---


## Flow

```text
Client chooses package / confirms interest
        ↓
Collect client basic information
        ↓
Generate Proposal / Quotation / Scope of Work
        ↓
Generate Contract with T&C / PDPA clauses
        ↓
Send for e-sign via Zoho Sign / Signwell
        ↓
Milestone payment / deposit
        ↓
Project kickoff
        ↓
GitHub Issue / Project Board setup
        ↓
Development + Preview
        ↓
Acceptance + Production
        ↓
Maintenance monthly service
```

## Tool Strategy

- Zoho Sign: formal Optimaks internal signing workflow.
- Signwell: simpler client-side signing option.
- CRM: store proposal, contract, status, payment milestone, and handover records.

## Rule

Signed documents should match project version and scope. Scope expansion after signing should become a Change Request or add-on quotation.
