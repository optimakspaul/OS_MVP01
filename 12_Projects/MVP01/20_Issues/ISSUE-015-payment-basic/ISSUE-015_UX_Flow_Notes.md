# ISSUE-015 UX Flow Notes

**Issue:** ISSUE-015
**Title:** Payment Basic
**Project:** MVP01
**Route:** `/workspace`

---

## 1. User Story

An SME owner or admin has manually coordinated a booking and now needs to track whether the customer has paid.

The owner can review the booking, customer, and quote context, show cash or static PayNow instructions, preview a payment status, and see paid / outstanding amounts for demo storytelling.

---

## 2. Workspace Entry Point

The Payment Basic section is added to the existing Client Workspace page after Booking Basic.

```text
Lead / Customer -> Quote Estimate -> Booking Basic -> Payment Basic -> Admin Setting Basic
```

No new route was created because the existing workspace already contains the Starter operation flow panels.

---

## 3. Visible UX Sections

```text
Payment Basic heading
Payment demo boundary notice
Selected booking / customer / quote summary
Payment method display
Cash option card
Static PayNow QR placeholder card
Payment status selector
Paid / outstanding summary
Manual payment checklist
Customer payment instruction copy
Next step to Admin Setting Basic
```

---

## 4. Interaction Model

```text
Payment status buttons update local preview state.
Manual payment checklist buttons toggle local checked state.
Paid / outstanding preview updates from selected status and estimate preview.
Customer instruction copy updates from selected customer and payment status.
```

The flow does not submit forms, call APIs, run server actions, write to Supabase, create a transaction, generate a QR code, or send customer messages.

---

## 5. Accessibility Notes

```text
The Payment Basic section has an aria-labelledby heading.
Payment status buttons are grouped with an aria-label.
The QR placeholder is marked aria-hidden because it is decorative demo UI.
Button text changes are visible and do not rely only on color.
The demo boundary is visible before the payment panels.
```

---

## 6. Demo Boundary Copy

The page explicitly states that Payment Basic:

```text
does not move money
does not generate PayNow QR codes
does not call Stripe or HitPay
does not create invoices or receipts
does not submit APIs or server actions
does not write to Supabase
does not start ISSUE-016
```

---

## 7. ISSUE-016 Handoff

The final payment handoff card explains that ISSUE-016 may define Admin Setting Basic for business info, GST setting, static PayNow QR / payment terms, and workspace setup copy after founder acceptance and workpack approval.
