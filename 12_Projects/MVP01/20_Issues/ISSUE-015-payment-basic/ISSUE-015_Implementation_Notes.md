# ISSUE-015 Implementation Notes

**Issue:** ISSUE-015
**Title:** Payment Basic
**Project:** MVP01
**Primary Files:** `src/app/workspace/page.tsx`, `src/app/globals.css`

---

## 1. Implementation Choice

ISSUE-015 enhanced the existing `/workspace` route instead of creating a new `/workspace/payments` subroute.

Reason:

```text
The workspace page already contains Lead / Customer, Quote Estimate, and Booking Basic.
Payment Basic is the next local Starter flow step in the same workspace story.
A subroute would add routing surface without improving scope control.
```

---

## 2. Page Changes

`src/app/workspace/page.tsx` now includes:

```text
PaymentStatus type
paymentStatuses option list
paymentStatus local state
paymentChecklist local state
paidPreview / outstandingPreview display math
paymentManualActions list
togglePaymentChecklist helper
Payment Basic UI section after Booking Basic
```

The implementation uses existing selected lead, quote, estimate, booking date/time, and booking status values as demo context.

---

## 3. Styling Changes

`src/app/globals.css` now includes payment-specific layout and card styling:

```text
payment-basic-grid
payment-panel
payment-method-list
payment-method-card
payment-total-panel
paynow-panel
paynow-placeholder
payment-copy-card
payment-handoff-panel reuse
```

The CSS follows the existing workspace card pattern and does not add any UI library.

---

## 4. Persistence Boundary

```text
No database calls
No Supabase client usage
No API routes
No server actions
No payment provider SDKs
No env values
No package changes
```

All visible behavior is local browser state and static demo copy.

---

## 5. Commercial Boundary

ISSUE-015 does not implement a real commercial workflow engine.

```text
No real payment gateway
No PayNow API / QR generation
No Stripe / HitPay integration
No invoice generation
No receipt generation
No accounting integration
No GST compliance engine
No refund / suspension logic
```

---

## 6. Validation Plan

Required validation:

```text
npm run lint
npm run build
npm run typecheck
git diff --check
forbidden-scope audit
secret check for changed files
```

Validation results are recorded in `ISSUE-015_DONE_Report.md`.
