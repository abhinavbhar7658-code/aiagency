export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

export const navigationData: NavItem[] = [
  {
    label: "AI Agency",
    href: "/ai-agency",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Content AI",
        href: "/services/content-ai",
        description: "Social media growth, carousels, video scripts, and monthly content calendars.",
      },
      {
        label: "Automation AI",
        href: "/services/automation-ai",
        description: "CRM workflows, WhatsApp bots, speed-to-lead qualification & automated ops.",
      },
      {
        label: "Web & AI Systems",
        href: "/services/web-ai-systems",
        description: "High-converting web applications, FAQ chatbots, and voice telephony agents.",
      },
      {
        label: "Cybersecurity & Compliance",
        href: "/services/cybersecurity",
        description: "Security assessments, TPRM, Data Privacy, and ISO readiness support.",
      }
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "DLP",
        href: "/products/dlp",
        description: "Data Loss Prevention to protect sensitive business information.",
      },
      {
        label: "MFA",
        href: "/products/mfa",
        description: "Multi-Factor Authentication for strengthened identity verification.",
      },
      {
        label: "SSO",
        href: "/products/sso",
        description: "Single Sign-On for streamlined access to business applications.",
      },
      {
        label: "PAM",
        href: "/products/pam",
        description: "Privileged Access Management for critical systems.",
      },
      {
        label: "IAM",
        href: "/products/iam",
        description: "Identity & Access Management across the enterprise.",
      }
    ]
  },
  {
    label: "AI Agents",
    href: "/ai-agents",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Uiverse UI",
    href: "/uiverse",
    badge: "New",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Content AI", href: "/services/content-ai" },
    { label: "Automation AI", href: "/services/automation-ai" },
    { label: "Web & AI Systems", href: "/services/web-ai-systems" },
  ],
  ai: [
    { label: "AI Agents", href: "/ai-agents" },
    { label: "Industries", href: "/industries" },
    { label: "AI Agency", href: "/ai-agency" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};
