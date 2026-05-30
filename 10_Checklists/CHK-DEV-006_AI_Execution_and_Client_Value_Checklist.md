# CHK-DEV-006 AI Execution and Client Value Checklist

Version: v1.4  
Use before assigning work to Codex or Antigravity.

---

## 1. Requirement Clarity

- [ ] The problem is clearly described.
- [ ] The target user is known.
- [ ] The expected result is clear.
- [ ] Acceptance criteria are written.

---

## 2. Issue Size

- [ ] Mini Issue
- [ ] Issue
- [ ] Change Request
- [ ] Full Change Request

If unsure, ask ChatGPT to classify before development.

---

## 3. Client Value

At least one value type is identified:

- [ ] Internal Value
- [ ] Client Value
- [ ] Maintenance Value
- [ ] Sales Value
- [ ] Risk Reduction Value
- [ ] Platform Foundation Value

---

## 4. Risk Area

- [ ] No high-risk area affected
- [ ] Database affected
- [ ] Auth / RLS / permission affected
- [ ] Customer data affected
- [ ] Billing / payment affected
- [ ] Production deployment affected
- [ ] Legal / PDPA affected
- [ ] Client promise affected
- [ ] Core architecture affected

If any high-risk area is affected, use CR or Full CR.

---

## 5. AI Assignment Readiness

- [ ] GitHub Issue or CR exists.
- [ ] Scope is limited.
- [ ] AI prompt is clear.
- [ ] Affected files/modules are known or requested.
- [ ] Testing requirements are included.
- [ ] AI is instructed not to expand scope.

---

## 6. After AI Output

- [ ] Review changed files.
- [ ] Review GitHub diff.
- [ ] Test in local/staging/preview.
- [ ] Run relevant checklist.
- [ ] Confirm acceptance criteria.
- [ ] Update changelog if needed.
- [ ] Update documentation if needed.
