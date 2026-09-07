import { ProductItem } from "@/types";

export const productsData: ProductItem[] = [
  {
    id: "dlp",
    slug: "dlp",
    title: "DLP",
    fullName: "Data Loss Prevention",
    shortDescription: "Protect sensitive business information from unauthorized access, sharing, and leakage.",
    longDescription: "Our Data Loss Prevention (DLP) solution provides deep visibility and granular control over how critical enterprise information is accessed, used, and transferred. By continuously monitoring endpoints, networks, and cloud environments, it prevents accidental or malicious data exfiltration and ensures regulatory compliance across all digital touchpoints.",
    iconName: "Database",
    badge: "Data Security",
    keyFeatures: [
      "Real-time data discovery and classification",
      "Automated policy enforcement and blocking",
      "Endpoint, network, and cloud application coverage",
      "Incident forensics and automated reporting"
    ],
    benefits: [
      "Prevent sensitive data breaches and intellectual property theft",
      "Ensure compliance with GDPR, HIPAA, and DPDP regulations",
      "Maintain complete visibility of data movement across your organization",
    ],
    technologies: ["AI-Powered Content Inspection", "Endpoint Agents", "Cloud Access Security Broker (CASB)", "Encryption"],
    idealFor: "Enterprises handling sensitive customer data, financial records, or intellectual property.",
    implementationTime: "3 to 6 weeks",
  },
  {
    id: "mfa",
    slug: "mfa",
    title: "MFA",
    fullName: "Multi-Factor Authentication",
    shortDescription: "Strengthen user authentication and reduce the risk of unauthorized account access.",
    longDescription: "Multi-Factor Authentication (MFA) adds a critical layer of defense beyond traditional passwords. By requiring two or more verification factors—such as a biometric scan, physical token, or mobile push notification—our MFA solution thwarts credential stuffing and phishing attacks, securing access to your corporate assets and applications.",
    iconName: "Fingerprint",
    badge: "Identity Security",
    keyFeatures: [
      "Support for biometrics, hardware tokens, and authenticator apps",
      "Adaptive, risk-based authentication triggers",
      "Seamless integration with enterprise directories (Active Directory, LDAP)",
      "Single tap and passwordless login options"
    ],
    benefits: [
      "Block 99.9% of automated credential attacks",
      "Provide a frictionless authentication experience for employees",
      "Meet strict cybersecurity insurance and compliance requirements",
    ],
    technologies: ["FIDO2", "WebAuthn", "SAML", "OIDC", "Risk Engine API"],
    idealFor: "Organizations looking to eliminate password-based vulnerabilities and secure remote access.",
    implementationTime: "1 to 3 weeks",
  },
  {
    id: "sso",
    slug: "sso",
    title: "SSO",
    fullName: "Single Sign-On",
    shortDescription: "Secure and streamlined access to business applications through centralized authentication.",
    longDescription: "Single Sign-On (SSO) simplifies the modern digital workspace by allowing users to securely access all their authorized cloud and on-premise applications with a single set of credentials. This centralized approach not only improves workforce productivity but also gives IT teams a unified point of control to manage access policies and revoke permissions instantly.",
    iconName: "Key",
    badge: "Access Management",
    keyFeatures: [
      "Centralized application portal and catalog",
      "Automated user provisioning and de-provisioning (SCIM)",
      "Universal directory integration",
      "Granular access policies by user group or role"
    ],
    benefits: [
      "Dramatically reduce IT helpdesk tickets for password resets",
      "Enhance employee productivity with one-click application access",
      "Mitigate risks of shadow IT and orphaned accounts",
    ],
    technologies: ["SAML 2.0", "OAuth 2.0", "OpenID Connect", "SCIM"],
    idealFor: "Scaling companies utilizing multiple SaaS applications and fragmented login systems.",
    implementationTime: "2 to 5 weeks",
  },
  {
    id: "pam",
    slug: "pam",
    title: "PAM",
    fullName: "Privileged Access Management",
    shortDescription: "Secure privileged accounts and govern administrative access to critical systems.",
    longDescription: "Privileged Access Management (PAM) is designed to protect your most sensitive assets by securing, monitoring, and managing the accounts that hold elevated permissions. Our PAM solution isolates administrative sessions, rotates credentials automatically, and records all privileged activity, ensuring malicious actors or compromised insiders cannot move laterally through your network.",
    iconName: "Shield",
    badge: "Infrastructure Security",
    keyFeatures: [
      "Secure enterprise password vault and credential rotation",
      "Privileged session isolation, monitoring, and recording",
      "Just-in-Time (JIT) and zero standing privileges access",
      "Real-time threat analytics on administrative behavior"
    ],
    benefits: [
      "Prevent lateral movement from compromised administrative accounts",
      "Provide indisputable audit trails for compliance mandates",
      "Safely grant third-party and vendor access to sensitive infrastructure",
    ],
    technologies: ["Secure Enclaves", "Just-in-Time Access", "Session Proxy", "Vault APIs"],
    idealFor: "Organizations with complex IT infrastructure, sensitive databases, or high regulatory burdens.",
    implementationTime: "4 to 8 weeks",
  },
  {
    id: "iam",
    slug: "iam",
    title: "IAM",
    fullName: "Identity & Access Management",
    shortDescription: "Manage digital identities and ensure appropriate access based on business roles.",
    longDescription: "Identity and Access Management (IAM) serves as the foundational security layer for the modern enterprise. Our comprehensive IAM platform governs the entire lifecycle of user identities—from onboarding to offboarding—ensuring that the right people have the right access to the right resources at the right time, minimizing the attack surface while enabling business agility.",
    iconName: "Users",
    badge: "Enterprise Security",
    keyFeatures: [
      "Lifecycle management and automated role-based access control (RBAC)",
      "Access request and approval workflows",
      "Continuous identity governance and compliance auditing",
      "Unified visibility across hybrid and multi-cloud environments"
    ],
    benefits: [
      "Enforce the principle of least privilege across the organization",
      "Streamline employee onboarding and automated offboarding",
      "Achieve full compliance with continuous access reviews and certifications",
    ],
    technologies: ["RBAC/ABAC Models", "Identity Governance Frameworks", "Directory Sync", "Zero Trust Architecture"],
    idealFor: "Medium to large enterprises needing strict governance over user permissions and system access.",
    implementationTime: "6 to 12 weeks",
  }
];
