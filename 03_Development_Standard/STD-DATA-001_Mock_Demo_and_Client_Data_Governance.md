# STD-DATA-001 Mock Demo and Client Data Governance

## 1. Purpose

This standard controls the use of mock data, demo data and real client data in Optimaks OS / Aircon OS development.

---

## 2. Core Principle

```text
Demo data must be clearly fake or explicitly authorized.
Real client data must not leak into development, public demos or AI prompts.
```

---

## 3. Data Categories

### Mock Data

Fake data used during development.

Recommended location:

```text
src/lib/mock/
```

### Demo Data

Fake but realistic data used in demo environments.

Must be labeled as demo.

### Client Data

Real business, customer, contact, quote, invoice, job or operational data.

Requires strict handling and authorization.

---

## 4. Rules

- Mock data should not include real phone numbers, emails or addresses.
- Demo data should be clearly labeled `DEMO`.
- Real client data must not be pasted into AI prompts unless authorized and redacted.
- Client logos should not be publicly deployed without permission.
- Demo client landing pages should avoid implying endorsement unless approved.
- Production seed data must not include test-only mock records.

---

## 5. Recommended Mock Naming

Use examples like:

```text
Demo Aircon Services Pte Ltd
Sample Customer A
demo@example.com
+65 8000 0000
```

Avoid real company identity unless explicitly authorized.

---

## 6. AI Rule

When asking AI to generate mock data, instruct it to:

```text
Use fictional Singapore-style demo data only.
Do not use real client names, emails, phone numbers or addresses.
```

---

## 7. Prohibited Behavior

Do not:

- use real customer contacts as mock data
- put real invoices in screenshots
- feed unredacted client data into AI tools
- publicly deploy unauthorized logo-based demos
- mix demo and production data in the same table without clear environment separation
