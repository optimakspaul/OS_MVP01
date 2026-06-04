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

type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted";

type LeadFilter = "All" | LeadStatus;

type DemoLead = {
  id: string;
  customerName: string;
  phone: string;
  serviceAddress: string;
  serviceIssue: string;
  serviceContext: string;
  status: LeadStatus;
  source: string;
  preferredTiming: string;
  customerType: string;
  customerSummary: string;
  nextQuoteStep: string;
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

const leadFilters: LeadFilter[] = [
  "All",
  "New",
  "Contacted",
  "Qualified",
  "Converted",
];

const demoLeads: DemoLead[] = [
  {
    id: "LEAD-1001",
    customerName: "Tampines HDB customer",
    phone: "+65 9123 4567",
    serviceAddress: "Tampines Street 21, HDB block",
    serviceIssue: "Aircon not cold",
    serviceContext:
      "Bedroom unit is blowing warm air. Customer can share photos and unit count before estimate.",
    status: "New",
    source: "/end-customer request preview",
    preferredTiming: "Today",
    customerType: "New customer",
    customerSummary:
      "Potential new customer with urgent cooling issue and clear contact details.",
    nextQuoteStep: "Prepare a manual estimate after confirming unit count.",
  },
  {
    id: "LEAD-1002",
    customerName: "Bukit Batok condo owner",
    phone: "+65 9234 5678",
    serviceAddress: "Bukit Batok condo, tower B",
    serviceIssue: "Water leaking",
    serviceContext:
      "Customer reports dripping near the living room unit after overnight use.",
    status: "Contacted",
    source: "Manual WhatsApp follow-up",
    preferredTiming: "Tomorrow",
    customerType: "New customer",
    customerSummary:
      "Contacted customer who needs a leak check before any quote estimate.",
    nextQuoteStep: "Ask for photos and access details before estimate guidance.",
  },
  {
    id: "LEAD-1003",
    customerName: "Hougang repeat customer",
    phone: "+65 9345 6789",
    serviceAddress: "Hougang Avenue 8",
    serviceIssue: "General servicing",
    serviceContext:
      "Repeat customer wants recurring servicing for two wall-mounted units.",
    status: "Qualified",
    source: "Returning customer message",
    preferredTiming: "This week",
    customerType: "Repeat customer",
    customerSummary:
      "Qualified repeat customer with known service context and basic reminder potential.",
    nextQuoteStep: "Prepare simple estimate for two-unit servicing.",
  },
];

export default function WorkspacePage() {
  const [activeStage, setActiveStage] = useState<WorkspaceStage>("All");
  const [completedActions, setCompletedActions] = useState<string[]>([]);
  const [activeLeadFilter, setActiveLeadFilter] = useState<LeadFilter>("All");
  const [selectedLeadId, setSelectedLeadId] = useState(demoLeads[0].id);
  const [convertedLeadIds, setConvertedLeadIds] = useState<string[]>([]);
  const [leadChecklist, setLeadChecklist] = useState<string[]>([]);

  const visibleRequests = useMemo(() => {
    if (activeStage === "All") {
      return demoRequests;
    }

    return demoRequests.filter((request) => request.stage === activeStage);
  }, [activeStage]);

  const visibleLeads = useMemo(() => {
    if (activeLeadFilter === "All") {
      return demoLeads;
    }

    return demoLeads.filter((lead) => {
      if (activeLeadFilter === "Converted") {
        return convertedLeadIds.includes(lead.id);
      }

      return lead.status === activeLeadFilter;
    });
  }, [activeLeadFilter, convertedLeadIds]);

  const selectedLead =
    demoLeads.find((lead) => lead.id === selectedLeadId) ?? demoLeads[0];

  const selectedLeadConverted = convertedLeadIds.includes(selectedLead.id);

  const leadManualActions = [
    `Review ${selectedLead.id} request context`,
    `Contact ${selectedLead.customerName} manually`,
    "Confirm service address and access notes",
    "Mark lead as qualified for quote estimate",
  ];

  function toggleAction(action: string) {
    setCompletedActions((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function toggleLeadChecklist(action: string) {
    setLeadChecklist((current) =>
      current.includes(action)
        ? current.filter((item) => item !== action)
        : [...current, action],
    );
  }

  function previewConvertToCustomer() {
    setConvertedLeadIds((current) =>
      current.includes(selectedLead.id) ? current : [...current, selectedLead.id],
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

      <section
        className="workspace-section"
        aria-labelledby="lead-customer-title"
      >
        <div className="section-heading">
          <p className="step-label">Lead / customer flow</p>
          <h2 id="lead-customer-title">
            Review lead, qualify manually, preview customer profile
          </h2>
          <p>
            ISSUE-012 adds the first detailed Starter operation flow inside the
            workspace. It uses static demo leads and local browser state only.
          </p>
        </div>

        <div className="workspace-notice compact" role="note">
          <strong>Lead / Customer demo boundary</strong>
          <span>
            The convert-to-customer action is a local preview. It does not save
            leads, create customers, submit an API request, run a server action,
            write to Supabase, or start quote implementation.
          </span>
        </div>

        <div className="stage-filter" aria-label="Filter lead inbox">
          {leadFilters.map((status) => (
            <button
              type="button"
              className={activeLeadFilter === status ? "active" : ""}
              key={status}
              onClick={() => setActiveLeadFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="lead-customer-grid">
          <div className="lead-inbox" aria-live="polite">
            <p className="step-label">Lead inbox / request list</p>
            {visibleLeads.length > 0 ? (
              visibleLeads.map((lead) => {
                const isSelected = lead.id === selectedLead.id;
                const isConverted = convertedLeadIds.includes(lead.id);

                return (
                  <button
                    type="button"
                    className={isSelected ? "lead-card selected" : "lead-card"}
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                  >
                    <span className="request-id">{lead.id}</span>
                    <strong>{lead.customerName}</strong>
                    <span>{lead.serviceIssue}</span>
                    <span className="lead-meta">
                      {isConverted ? "Converted preview" : lead.status}
                    </span>
                  </button>
                );
              })
            ) : (
              <p className="empty-state">
                No demo leads match this filter. Try another status.
              </p>
            )}
          </div>

          <article className="lead-detail-panel">
            <div>
              <p className="step-label">Lead detail panel</p>
              <h3>{selectedLead.customerName}</h3>
              <p className="status-pill">
                {selectedLeadConverted
                  ? "Converted preview"
                  : selectedLead.status}
              </p>
            </div>

            <dl className="lead-detail-list">
              <div>
                <dt>Contact</dt>
                <dd>{selectedLead.phone}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{selectedLead.serviceAddress}</dd>
              </div>
              <div>
                <dt>Service issue</dt>
                <dd>{selectedLead.serviceIssue}</dd>
              </div>
              <div>
                <dt>Preferred timing</dt>
                <dd>{selectedLead.preferredTiming}</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>{selectedLead.source}</dd>
              </div>
            </dl>

            <p className="next-step">{selectedLead.serviceContext}</p>
          </article>

          <article className="customer-profile-card">
            <div>
              <p className="step-label">Customer profile summary</p>
              <h3>
                {selectedLeadConverted
                  ? "Customer profile preview ready"
                  : "Customer profile not created"}
              </h3>
            </div>
            <p>{selectedLead.customerSummary}</p>
            <dl className="lead-detail-list">
              <div>
                <dt>Customer type</dt>
                <dd>{selectedLead.customerType}</dd>
              </div>
              <div>
                <dt>Profile state</dt>
                <dd>
                  {selectedLeadConverted
                    ? "Converted in local preview"
                    : "Lead review pending"}
                </dd>
              </div>
            </dl>
            <button
              type="button"
              className="primary-action"
              onClick={previewConvertToCustomer}
            >
              {selectedLeadConverted
                ? "Customer preview active"
                : "Preview convert to customer"}
            </button>
          </article>

          <article className="manual-checklist-card">
            <div>
              <p className="step-label">Manual action checklist</p>
              <h3>Qualify before quote estimate</h3>
            </div>
            <div className="action-list compact-list">
              {leadManualActions.map((action) => (
                <button
                  type="button"
                  className={
                    leadChecklist.includes(action) ? "action done" : "action"
                  }
                  key={action}
                  onClick={() => toggleLeadChecklist(action)}
                >
                  <span>{action}</span>
                  <strong>
                    {leadChecklist.includes(action) ? "Checked" : "Manual"}
                  </strong>
                </button>
              ))}
            </div>
            <p className="next-step">
              Next step to quote estimate: {selectedLead.nextQuoteStep} This is
              a handoff note only; ISSUE-013 must define quote estimate behavior
              in its own workpack.
            </p>
          </article>
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
