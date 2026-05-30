# Repository Structure

| Field | Value |
|---|---|
| Document Code | STD-DEV-012 |
| Version | v1.3 |
| Effective Date | 2026-05-13 |
| Owner | Optimaks Pte Ltd |
| Status | Active |
| Purpose | Provide recommended GitHub repository structure for Optimaks OS and documents. |

---


## Recommended Repository Structure

```text
optimaks-os/
├── README.md
├── docs/
│   ├── constitution/
│   │   ├── OPTIMAKS_DEVELOPMENT_CONSTITUTION_v1.3.md
│   │   └── CHANGELOG.md
│   ├── process/
│   │   ├── 10_STEP_DELIVERY_PROCESS.md
│   │   ├── CHANGE_REQUEST_POLICY.md
│   │   └── DEPLOYMENT_POLICY.md
│   ├── templates/
│   │   ├── GITHUB_ISSUE_TEMPLATE_change_request.md
│   │   ├── MOBILE_CAPTURE_TEMPLATE.md
│   │   ├── QA_CHECKLIST.md
│   │   └── HANDOVER_GUIDE_TEMPLATE.md
│   └── legal/
│       ├── TERMS_TEMPLATE.md
│       ├── PDPA_NOTICE_TEMPLATE.md
│       └── CLIENT_SERVICE_AGREEMENT_TEMPLATE.md
├── apps/
│   ├── optimaks-os/
│   ├── aircon-os/
│   └── acra-radar/
├── packages/
│   ├── ui/
│   ├── shared/
│   └── config/
└── .github/
    └── ISSUE_TEMPLATE/
```

## Note

This structure can grow over time. The first priority is:

1. `docs/constitution`
2. `.github/ISSUE_TEMPLATE`
3. project `README.md`
4. change request and QA templates
