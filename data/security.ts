export interface SecurityPillar {
  id: string;
  title: string;
  shortDescription: string;
  details: string[];
  iconName: string;
}

export const securityPillarsData: SecurityPillar[] = [
  {
    id: "tenant-isolation",
    title: "Strict Tenant Isolation",
    shortDescription: "Your data and knowledge embeddings are stored in dedicated schema silos with cryptographic partition boundaries.",
    details: [
      "Zero cross-tenant data leakage",
      "Row Level Security (RLS) enforced at the database kernel level",
      "Isolated vector namespaces for all proprietary documents",
    ],
    iconName: "ShieldCheck",
  },
  {
    id: "zero-data-training",
    title: "Zero Model Training Retention",
    shortDescription: "We enforce enterprise API agreements guaranteeing your proprietary data is never used to train public foundation models.",
    details: [
      "Zero Data Retention (ZDR) endpoints configured with AI providers",
      "Transient prompt execution without secondary logging",
      "All intellectual property remains 100% company-owned",
    ],
    iconName: "Lock",
  },
  {
    id: "rbac-governance",
    title: "Role-Based Access Control (RBAC)",
    shortDescription: "Granular permissions ensure employees and agents only query the specific data tiers authorized for their role.",
    details: [
      "Fine-grained permission matrices (Viewer, Operator, Admin, Auditor)",
      "SSO & OAuth2 integration (Google Workspace, Okta, Microsoft Azure AD)",
      "Automated access revocation on employee offboarding",
    ],
    iconName: "UserCheck",
  },
  {
    id: "audit-telemetry",
    title: "Immutable Audit Trails",
    shortDescription: "Every agent query, tool execution, API call, and database transaction is logged with timestamped traceability.",
    details: [
      "Comprehensive telemetry logs exportable to Datadog, Splunk, or S3",
      "Human action vs. autonomous agent action attribution",
      "Automated anomaly detection alerts on suspicious query spikes",
    ],
    iconName: "FileText",
  },
  {
    id: "human-in-the-loop",
    title: "Configurable Human Approvals",
    shortDescription: "You dictate the exact boundary between autonomous execution and mandatory human sign-off.",
    details: [
      "Threshold-based pauses for actions exceeding configured financial or operational limits",
      "One-click review, modification, or rejection cockpit",
      "Instant emergency kill-switch per agent or globally",
    ],
    iconName: "UserCog",
  },
  {
    id: "encrypted-vaults",
    title: "Encrypted Credential Vaults",
    shortDescription: "All third-party API keys and database credentials are stored in hardware-encrypted security modules.",
    details: [
      "AES-256 encryption at rest and TLS 1.3 in transit",
      "Automated credential rotation support",
      "Zero plaintext secret exposure in client-side code",
    ],
    iconName: "Key",
  },
];
