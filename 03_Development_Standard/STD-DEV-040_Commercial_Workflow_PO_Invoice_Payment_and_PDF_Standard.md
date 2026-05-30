# STD-DEV-040 Commercial Workflow PO Invoice Payment and PDF Standard

**Version:** v1.7.3  
**Status:** Active  
**Applies To:** Quote, PO, invoice, payment, PDF generation, recurring billing, refund, suspension, tax reporting.

---

## 1. Purpose

This standard defines the commercial workflow foundation for Optimaks OS.

Commercial workflow must be treated as a controlled system, not as separate random payment buttons.

---

## 2. Commercial Workflow Layers

```text
Quote
↓
Purchase Order / Client Approval
↓
Invoice
↓
Payment
↓
Receipt
↓
Service Activation / Continuation
↓
Renewal / Recurring Billing / Suspension / Refund when applicable
```

---

## 3. Controlled Commercial Components

Commercial workflow may include:

```text
Quotation template
PO capture / approval reference
Invoice template
Invoice PDF generation
Receipt generation
Stripe recurring billing
HitPay integration
Grab PayLater handoff / reference
Refund flow
Auto-suspension flow
Installment / split payment logic
Multi-currency readiness
Tax / report export
```

---

## 4. Trigger Rule

Payment is not the first commercial event.

Recommended trigger sequence:

```text
Client selects package or accepts proposal
System creates quote / proposal record
Client confirms or sends PO
System generates invoice
Client pays invoice or first installment
System activates workspace / plan
System records payment and receipt
```

---

## 5. Safety Rule

No AI tool may change the following without explicit issue scope:

```text
Pricing
Discounts
Refund policy
Installment terms
Suspension logic
Recurring billing logic
Tax treatment
Currency behavior
Payment provider integration
Legal payment terms
```

---

## 6. MVP Rule

For MVP01 Starter, the commercial workflow can remain lightweight:

```text
Manual quote / invoice allowed
Manual payment status allowed
PDF generation optional unless in scope
Payment provider integration optional unless in scope
```

Do not overbuild commercial automation before the Starter offer is demo-able and sellable.

---

## 7. DONE Report Requirement

Any issue touching this standard must record:

```text
Commercial step affected
Provider affected, if any
Whether money movement is real or mock/demo
Invoice / PO / PDF effect
Refund / suspension effect
Testing method
Rollback note
```
