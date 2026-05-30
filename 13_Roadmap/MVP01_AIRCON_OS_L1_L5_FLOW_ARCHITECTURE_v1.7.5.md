# MVP01 Aircon OS L1-L5 Flow Architecture

**Version:** v1.7.5-safe  
**Status:** Active Planning Reference  
**Related Constitution:** `01_Constitution/CURRENT_CONSTITUTION.md`  
**Related Standard:** `03_Development_Standard/STD-DEV-045_MVP01_Aircon_OS_L1_L5_Flow_and_Owner_OS_Standard.md`

---

## 1. MVP01 Scope

```text
MVP01 = Core Foundation + Solo Complete + Flow Basic + Command Reserved + Owner Console Basic
```

---

## 2. L1 Business Flow

```text
Lead → Customer → Booking → Job → Completion → Payment → Review → Maintenance Reminder → Repeat Booking
```

### Trigger Questions

| Question | MVP01 Answer |
|---|---|
| 客戶從哪裡來？ | Landing Page, WhatsApp CTA, Enquiry Form, Manual Entry |
| 資料進哪裡？ | Supabase operational tables: leads, customers, bookings, jobs, invoices, payments, reviews, maintenance_reminders, notifications |
| 誰負責處理？ | Optimaks Internal Admin, Owner, Technician, Customer; Admin reserved |
| 狀態怎麼變？ | L4 status model controls every workflow |
| 什麼時候通知？ | New lead, booking confirmed, job assigned, job completed, invoice sent, payment overdue, reminder due |
| 什麼時候收錢？ | Optimaks collects setup/monthly fees from SME; SME collects job payment from end customer |
| 什麼時候提醒保養？ | After job completion, system creates maintenance cycle and reminder due date |

---

## 3. L2 Plan Flow

```text
Solo    = 接單與形象
Flow    = 派單與回流
Command = 品管與管理
```

### MVP01 Delivery Depth

| Plan | MVP01 Depth | Reason |
|---|---|---|
| Solo | Complete | Can sell and onboard first clients |
| Flow | Basic | Can demo dispatch, reminder, service history value |
| Command | Reserved | Prevent overbuilding before real demand |

---

## 4. L3 Role Flow

| Role | MVP01 Actions |
|---|---|
| Optimaks Internal Admin | Create client, assign plan, toggle features, track payment and launch |
| Owner | Review leads, bookings, jobs, invoices, payments, reminders |
| Admin | Reserved for future operation support |
| Technician | Receive task card, update job status |
| Customer | Submit enquiry, confirm booking, pay, review, rebook |

---

## 5. L4 Status Flow

```text
Lead:         new → contacted → quoted → won / lost
Customer:     new → active → inactive → repeat
Booking:      requested → confirmed → scheduled → completed / cancelled
Job:          created → assigned → in_progress → completed → rescheduled / failed
Quote:        draft → sent → accepted / rejected / expired
Invoice:      draft → sent → paid → overdue → cancelled
Payment:      unpaid → partially_paid → paid → refunded
Review:       not_requested → requested → reviewed / no_response
Maintenance:  not_set → scheduled → reminder_due → reminder_sent → rebooked / no_response
Notification: pending → sent → failed → acknowledged
```

---

## 6. L5 Module / Template Flow

```text
Plan Feature Template → Enables Modules → Uses Industry Templates → Generates Pages / Messages / Documents / Automations
```

### Modules

- Lead Module
- Customer Module
- Booking Module
- Job Module
- Technician Assignment Module
- Invoice Module
- Payment Status Module
- Review Module
- Maintenance Reminder Module
- Notification Module
- Owner Console Module

### Templates

- Aircon Industry Template
- Solo Plan Feature Template
- Flow Plan Feature Template
- Command Reserved Feature Template
- Landing Page Template
- WhatsApp Enquiry Template
- WhatsApp Task Card Template
- Review Request Template
- Maintenance Reminder Template
- Invoice Template
- E-Receipt Template

---

## 7. MVP01 First Issue Sequence Recommendation

```text
ISSUE-000  Preflight: secrets, accounts, repo, Supabase, Vercel, GitHub check
ISSUE-001  Project setup and constitution reference alignment
ISSUE-002  Core database baseline: workspace, users, roles, plan rules
ISSUE-003  Owner Console Basic: client profile, plan assignment, feature toggle
ISSUE-004  Aircon Industry Template + Solo / Flow / Command plan templates
ISSUE-005  Lead + customer tables and enquiry intake
ISSUE-006  Solo landing page + enquiry form + WhatsApp CTA
ISSUE-007  Booking + job scheduling foundation
ISSUE-008  Technician task card and assignment basic flow
ISSUE-009  Invoice/payment status and e-receipt placeholder
ISSUE-010  Review request + maintenance reminder basic flow
ISSUE-011  Service history and monthly summary
ISSUE-012  Command reserved placeholders and permission future-proofing
```

This sequence may be revised by formal issue planning, but it should not be replaced by a feature dump.
