# HARDEN-005 Known Warnings Summary

**Hardening Item:** HARDEN-005
**Warning Decision:** Non-blocking for founder demo acceptance

| Warning | Demo Impact | Blocking? | Required Handling |
|---|---|---:|---|
| Visual/responsive browser automation unavailable | No fresh screenshot evidence from the Windows sandbox | No | Founder may perform an optional manual desktop/mobile visual review |
| Workspace is intentionally long | Self-guided users may not inspect every section | No | Use the eight-step presenter navigation and keep the demo focused |
| WhatsApp link has no configured business recipient | The handoff is a generic draft only | No | State that the user chooses the recipient and whether to send |
| Routes are static and non-persistent | Demo actions do not create operational records | No | Repeat the static/local boundary during the demo |
| Earlier SQL validation was static | Database runtime readiness is not demonstrated | No for static demo | Require approved Supabase runtime validation before production DB use |
| Historical wording/path residue remains | May confuse deep governance review | No | Optional governance cleanup under a separate approved task |
| Git line-ending normalization warnings | No content or validation failure | No | Treat as repository hygiene only |

## Reserved Capability Warning

MVP01 does not demonstrate completed production capability for:

```text
Persistence
Auth-gated portals
Real client administration
Tenant provisioning
Quote or booking engines
Payment processing
Reminder automation
Report generation
Billing and subscriptions
Deployment automation
Module entitlements
MVP02 functionality
```

## Summary

The warnings affect production interpretation and unattended presentation quality, not the founder-guided demo decision.
