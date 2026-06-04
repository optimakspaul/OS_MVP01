# MVP01_SCOPE_BASELINE.md

## 1. Project Definition

MVP01 = Starter Complete + Optimaks OS Basic.

## 2. Target User / Business Objective

- Target user: Optimaks founder and first SME / field-service pilot clients.
- Primary industry template: one main industry template, recommended Aircon / Home Service.
- Business problem: sell and demo a practical operating system baseline without overbuilding Grow, Pro, full Platform, or AI scope too early.
- Primary value: provide a controlled Request to Payment starter operation flow, with basic reminder/report support and a minimal Optimaks OS layer for onboarding, client list, plan status, workspace links, demo readiness, and release handover.

## 3. Included Scope

The following are included in this project baseline:

- Shared Core foundation.
- Project / workspace foundation.
- Supabase and environment setup.
- Next.js app foundation.
- Base DB, indexes, updated_at support, auth boundary, profiles, and RLS foundations through the approved issue chain.
- Module Library Foundation.
- Plan depth mapping for Starter, Grow, and Pro as product depth levels, not separate apps.
- One primary industry template foundation.
- Future multi-industry placeholders at documentation / boundary level only.
- End Customer Interface Basic.
- Client Workspace Basic.
- Starter operation flow:
  - Request
  - Lead
  - Customer
  - Quote
  - Booking
  - Payment
  - Reminder / Report
- Admin Setting Basic:
  - business info
  - GST setting
  - PayNow QR / payment terms
- Optimaks OS Basic:
  - client list
  - plan status
  - onboarding status
  - workspace link
  - demo / release support
- GitHub / CI / deployment governance and issue handoff flow.

## 4. Reserved Scope

The following are reserved for later MVPs unless change control approves otherwise:

- Grow full collaboration.
- Pro technician / branch management.
- Full customer portal.
- Full payment gateway integration.
- Full WhatsApp API automation.
- Full PDF automation.
- Full workflow automation.
- Full SaaS billing.
- Full Optimaks Platform.
- AI, marketplace, ecosystem, and advanced platform intelligence.
- Multi-industry template rollout beyond the first primary industry template.
- Advanced analytics, complex installment engine, auto-refund, auto-suspension, and full billing automation.

## 5. Excluded Scope

The following are excluded from this project baseline:

- Unapproved scope expansion outside MVP01.
- Autonomous multi-agent execution without founder review.
- Production deployment without preview / staging / production gate approval.
- Direct edits to secrets or live client data outside approved standards.
- Replacing the Constitution with agency-agent behavior.
- Treating Starter, Grow, Pro, Platform, or AI as separate MVP01 apps.

## 6. Non-Goals

This project must not attempt to solve:

- Every future Optimaks product line.
- Full enterprise SaaS feature parity.
- Full Platform or AI ecosystem capability.
- All payment, tax, refund, and suspension automation.
- All industry templates at once.
- All Grow / Pro collaboration and management depth before Starter validation.

## 7. Plan / Platform Relationship

Starter, Grow, and Pro are plan depth levels.

```text
Starter: Included as MVP01 Starter Complete.
Grow: Reserved for later deeper collaboration and workflow depth.
Pro: Reserved for later technician, branch, and operational management depth.
Platform / AI: Reserved for MVP02-MVP05 or later approved roadmap.
```

Optimaks OS Basic is included only at the minimum owner-operations level required to support MVP01 onboarding, client tracking, workspace links, demo readiness, and release handover.

## 8. Feature Unlock Rule

Reserved or excluded features cannot be implemented without:

1. Impact Review
2. Placement Decision
3. Change Control Log Entry
4. Baseline Update, if approved

## 9. AI Scope Rule

AI must not treat reserved or excluded scope as available implementation work.

AI must not create module tables, template tables, business workflow tables, RLS, migrations, app UI, Supabase client code, or ISSUE-008 work during ISSUE-007 Architecture Alignment.
