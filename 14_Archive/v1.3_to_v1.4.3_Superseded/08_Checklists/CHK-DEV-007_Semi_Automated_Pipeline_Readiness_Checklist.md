# CHK-DEV-007 Semi-Automated Pipeline Readiness Checklist

Version: v1.4.1  
Purpose: Check whether a task is ready to move from one pipeline step to the next.

---

## 1. General Readiness

- [ ] The task has a clear name.
- [ ] The task has a defined project.
- [ ] The current step is known.
- [ ] The next step is known.
- [ ] Required documents are available.
- [ ] Scope is clear.
- [ ] Out of scope is clear.
- [ ] Acceptance criteria are written.

---

## 2. Step 1 Completion Check

Step 1 is complete when:

- [ ] README exists.
- [ ] Project Brief exists.
- [ ] User Flow exists.
- [ ] Architecture Diagram exists.
- [ ] In scope is clear.
- [ ] Out of scope is clear.
- [ ] First version boundary is clear.
- [ ] Backend is not started prematurely.

---

## 3. Step 2 Completion Check

Step 2 is complete when:

- [ ] UI Screen List exists.
- [ ] Data Model Draft exists.
- [ ] Issue Breakdown exists.
- [ ] AI Execution Prompt exists.
- [ ] Testing Checklist exists.
- [ ] UI can be built with mock data.
- [ ] Backend decisions are not forced too early.

---

## 4. Step 3 Completion Check

Step 3 is complete when:

- [ ] UI skeleton exists.
- [ ] Mock data exists.
- [ ] Basic routes exist.
- [ ] Main user flow can be clicked or simulated.
- [ ] Component structure is clear.
- [ ] No unapproved backend was added.
- [ ] Implementation summary is available.

---

## 5. Step 4 Completion Check

Step 4 is complete when:

- [ ] Testing checklist was executed.
- [ ] Bugs are listed.
- [ ] Scope expansion is checked.
- [ ] GitHub diff was reviewed.
- [ ] Development log was updated.
- [ ] Next action is clear.

---

## 6. Step 5 Readiness Check

Backend / Supabase planning can begin only when:

- [ ] UI flow is stable.
- [ ] Data model draft exists.
- [ ] Testing result is available.
- [ ] Need for persistence is confirmed.
- [ ] CR is created if database, auth, RLS, or production data is affected.
- [ ] Migration and rollback considerations are documented.

---

## 7. AI Assignment Check

Before assigning work to AI:

- [ ] AI receives relevant constitution rule.
- [ ] AI receives previous step documents.
- [ ] AI receives clear task scope.
- [ ] AI receives out-of-scope restrictions.
- [ ] AI receives expected output.
- [ ] AI receives acceptance criteria.
- [ ] AI is instructed not to expand scope.

---

## 8. Final Gate

Do not move to the next step if:

- [ ] Scope is unclear.
- [ ] Required documents are missing.
- [ ] AI is guessing requirements.
- [ ] Backend is being added too early.
- [ ] The task should actually be CR or Full CR.
- [ ] Business value is unclear.
