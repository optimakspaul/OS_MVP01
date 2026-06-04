"use client";

import { useMemo, useState } from "react";

type WorkspaceStage =
  | "All"
  | "Lead"
  | "Customer"
  | "Quote"
  | "Booking"
  | "Payment"
  | "Reminder";

type DemoRequest = {
  id: string;
  customer: string;
  serviceIssue: string;
  area: string;
  stage: Exclude<WorkspaceStage, "All">;
  status: string;
  nextStep: string;
};

const workflowStages = [
  {
    label: "Lead",
    status: "New request",
    detail: "Review service issue, customer contact, and service area.",
    count: "3",
  },
  {
    label: "Customer",
    status: "Manual contact",
    detail: "Confirm customer details before turning request into a profile.",
    count: "2",
  },
  {
    label: "Quote",
    status: "Estimate needed",
    detail: "Prepare a manual estimate after checking service context.",
    count: "2",
  },
  {
    label: "Booking",
    status: "Schedule manually",
    detail: "Agree date and time outside this demo workspace.",
    count: "1",
  },
  {
    label: "Payment",
    status: "Status tracking",
    detail: "Track cash, PayNow, or outstanding status manually.",
    count: "1",
  },
  {
    label: "Reminder",
    status: "Follow-up due",
    detail: "Prepare maintenance reminder or service follow-up.",
    count: "2",
  },
  {
    label: "Report",
    status: "Basic snapshot",
    detail: "Review simple monthly operational signals.",
    count: "1",
  },
];

const demoRequests: DemoRequest[] = [
  {
    id: "REQ-010-DEMO",
    customer: "Tampines HDB customer",
    serviceIssue: "Aircon not cold",
    area: "Tampines",
    stage: "Lead",
    status: "New lead",
    nextStep: "Call customer and ask for unit count and photos.",
  },
  {
    id: "REQ-011-DEMO",
    customer: "Bukit Batok condo owner",
    serviceIssue: "Water leaking",
    area: "Bukit Batok",
    stage: "Quote",
    status: "Estimate pending",
    nextStep: "Review leak notes before sending a manual estimate.",
  },
  {
    id: "REQ-012-DEMO",
    customer: "Hougang repeat customer",
    serviceIssue: "General servicing",
    area: "Hougang",
    stage: "Booking",
    status: "Timing requested",
    nextStep: "Confirm this week service slot manually.",
  },
  {
    id: "REQ-013-DEMO",
    customer: "Jurong West landed home",
    serviceIssue: "New installation estimate",
    area: "Jurong West",
    stage: "Payment",
    status: "Awaiting PayNow confirmation",
    nextStep: "Mark payment status only after manual confirmation.",
  },
];

const manualActions = [
  "Review new service request",
  "Contact customer manually",
  "Prepare quote estimate",
  "Confirm booking slot",
  "Check payment status",
  "Set maintenance reminder",
];

const reportSnapshot = [
  { label: "Open requests", value: "4" },
  { label: "Quotes pending", value: "2" },
  { label: "Bookings to confirm", value: "1" },
  { label: "Follow-ups due", value: "2" },
];

export default function WorkspacePage() {
  const [activeStage, setActiveStage] = useState<WorkspaceStage>("All");
  const [completedActions, setCompletedActions] = useState<string[]>([]);

  const visibleRequests = useMemo(() => {
    if (activeStage === "All") {
      return demoRequests;
    }

    return demoRequests.filter((request) => request.stage === activeStage);
  }, [activeStage]);

  function toggleAction(action: string) {
    setCompletedActions((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  return (
    <main className="workspace-page">
      <section className="workspace-hero" aria-labelledby="workspace-title">
        <div>
          <p className="eyebrow">Client Workspace Basic</p>
          <h1 id="workspace-title">Manage customer requests</h1>
          <p className="workspace-hero-copy">
            A demo workspace for an Aircon / Home Service SME owner or admin.
            It shows the Starter flow from incoming lead to customer, quote,
            booking, payment status, reminder, and basic report.
          </p>
        </div>

        <aside className="workspace-context" aria-label="Workspace context">
          <strong>Aircon / Home Service Starter Template</strong>
          <span>Plan depth: Starter Complete</span>
          <span>Mode: manual-assisted and non-persistent</span>
        </aside>
      </section>

      <section className="workspace-notice" role="note">
        <strong>Demo boundary</strong>
        <span>
          This workspace uses static demo data and local browser state only. It
          does not save leads, create customers, write to Supabase, call APIs,
          process payments, send WhatsApp messages, or create ISSUE-012 records.
        </span>
      </section>

      <section className="workspace-section" aria-labelledby="workflow-title">
        <div className="section-heading">
          <p className="step-label">Starter workflow overview</p>
          <h2 id="workflow-title">
            Lead to Customer to Quote to Booking to Payment to Reminder to
            Report
          </h2>
        </div>

        <div className="workflow-grid">
          {workflowStages.map((stage) => (
            <article className="workflow-card" key={stage.label}>
              <span className="stage-count">{stage.count}</span>
              <h3>{stage.label}</h3>
              <p className="status-pill">{stage.status}</p>
              <p>{stage.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-section" aria-labelledby="intake-title">
        <div className="section-heading">
          <p className="step-label">Lead / customer intake overview</p>
          <h2 id="intake-title">Incoming request board</h2>
          <p>
            These cards show how requests from the end-customer route may be
            reviewed conceptually before ISSUE-012 defines real lead and
            customer records.
          </p>
        </div>

        <div className="stage-filter" aria-label="Filter request board">
          {(["All", "Lead", "Quote", "Booking", "Payment"] as const).map(
            (stage) => (
              <button
                type="button"
                className={activeStage === stage ? "active" : ""}
                key={stage}
                onClick={() => setActiveStage(stage)}
              >
                {stage}
              </button>
            ),
          )}
        </div>

        <div className="request-board" aria-live="polite">
          {visibleRequests.map((request) => (
            <article className="request-card" key={request.id}>
              <div>
                <p className="request-id">{request.id}</p>
                <h3>{request.customer}</h3>
              </div>
              <dl>
                <div>
                  <dt>Issue</dt>
                  <dd>{request.serviceIssue}</dd>
                </div>
                <div>
                  <dt>Area</dt>
                  <dd>{request.area}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{request.status}</dd>
                </div>
              </dl>
              <p className="next-step">{request.nextStep}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-grid" aria-label="Workspace status panels">
        <article className="workspace-panel">
          <p className="step-label">Quote estimate status</p>
          <h2>2 estimates need manual review</h2>
          <p>
            Quote work remains estimate-level only. No pricing engine, quote
            persistence, approval workflow, or invoice is created here.
          </p>
        </article>

        <article className="workspace-panel">
          <p className="step-label">Booking status</p>
          <h2>1 booking slot to confirm</h2>
          <p>
            Booking is manual-assisted. This page does not create a calendar,
            scheduler, technician assignment, or booking record.
          </p>
        </article>

        <article className="workspace-panel">
          <p className="step-label">Payment status</p>
          <h2>1 payment awaiting confirmation</h2>
          <p>
            Payment is status copy only. There is no gateway, receipt,
            transaction, refund, invoice, or PayNow integration.
          </p>
        </article>

        <article className="workspace-panel">
          <p className="step-label">Reminder / follow-up status</p>
          <h2>2 follow-ups due</h2>
          <p>
            Reminder work is a manual queue preview. No notification service,
            automation, WhatsApp API, or reminder record is created.
          </p>
        </article>
      </section>

      <section className="workspace-section" aria-labelledby="actions-title">
        <div className="section-heading">
          <p className="step-label">Manual action queue</p>
          <h2 id="actions-title">Owner / admin next steps</h2>
          <p>
            Toggle actions to preview local progress. These toggles are not
            saved and do not update any backend status.
          </p>
        </div>

        <div className="action-list">
          {manualActions.map((action) => (
            <button
              type="button"
              className={
                completedActions.includes(action) ? "action done" : "action"
              }
              key={action}
              onClick={() => toggleAction(action)}
            >
              <span>{action}</span>
              <strong>
                {completedActions.includes(action) ? "Preview done" : "To do"}
              </strong>
            </button>
          ))}
        </div>
      </section>

      <section className="workspace-section" aria-labelledby="report-title">
        <div className="section-heading">
          <p className="step-label">Basic report snapshot</p>
          <h2 id="report-title">Monthly starter view</h2>
          <p>
            A light report preview for demo storytelling only. Reporting logic,
            analytics, exports, and stored metrics remain outside ISSUE-011.
          </p>
        </div>

        <div className="report-grid">
          {reportSnapshot.map((item) => (
            <article className="report-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
