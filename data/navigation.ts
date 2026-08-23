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
    ],
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
    label: "About",
    href: "/about",
  },
];

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
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
