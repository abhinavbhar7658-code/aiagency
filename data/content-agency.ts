export interface ContentServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  deliverables: string[];
  sampleHook?: string;
  targetPlatforms: string[];
  businessImpact: string;
}

export interface ContentPricingTier {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  tagline: string;
  isPopular?: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export const contentServicesData: ContentServiceItem[] = [
  {
    id: "posts-and-carousels",
    title: "Social Media Posts & Carousels",
    tagline: "Engaging posts that stop the scroll and grow your audience",
    description: "Multi-slide educational carousels and high-impact single image posts designed specifically for LinkedIn, Instagram, and X to maximize dwell time, shares, and qualified inbound inquiries.",
    iconName: "Layers",
    badge: "Audience Growth",
    deliverables: [
      "10 to 30 custom visual posts & multi-slide carousels per month",
      "Hook-driven copywriting structured for high save and share rates",
      "Custom branded typography, color palettes, and visual hierarchy",
      "Platform-optimized aspect ratios (1:1 square, 4:5 vertical, 16:9 landscape)",
    ],
    sampleHook: "90% of local service businesses lose leads in the first 5 minutes. Here is the 3-step automation that fixes it ⬇️",
    targetPlatforms: ["LinkedIn", "Instagram", "X (Twitter)", "Facebook"],
    businessImpact: "Increases profile visits and inbound authority by 3.5x within 60 days.",
  },
  {
    id: "reels-shorts-and-ads",
    title: "Reels, Shorts & Video Ads",
    tagline: "High-converting videos that grab attention and drive results",
    description: "Scroll-stopping short-form video scripts and edited formats designed with proven 3-second pattern interrupts, retention-focused pacing, on-screen dynamic text cues, and high-conversion CTAs.",
    iconName: "Video",
    badge: "High Conversion",
    deliverables: [
      "2 to 8 ready-to-record short-form scripts (0-3s hook / 3-15s build / 15-30s payoff)",
      "Dynamic on-screen subtitle captions, text callouts & b-roll direction notes",
      "Short-form video ad frameworks optimized for Meta & YouTube Shorts",
      "Trending audio and hook angle recommendations refreshed weekly",
    ],
    sampleHook: "Stop paying for cold ads before you set up this one automated follow-up...",
    targetPlatforms: ["Instagram Reels", "YouTube Shorts", "TikTok", "Meta Ads"],
    businessImpact: "Drives 4x higher video completion rates and qualified direct message triggers.",
  },
  {
    id: "scripts-captions-ideas",
    title: "Scripts, Captions & Content Ideas",
    tagline: "Well-researched scripts and captions that connect and convert",
    description: "Deep audience research translated into compelling copy that speaks directly to your ideal customer's pain points, eliminating fluff and sounding like an experienced industry specialist.",
    iconName: "FileText",
    badge: "Conversion Copy",
    deliverables: [
      "Full caption copy with structured hook line, single core idea, and clear CTA",
      "Tiered hashtag strategy (1 broad industry tag + 2-3 niche tags + 1 branded tag)",
      "Weekly backlog of 20+ researched content angles and hook variants",
      "Brand voice consistency modeling tuned to your exact tone and vocabulary",
    ],
    sampleHook: "The biggest bottleneck in your business isn't lack of leads—it's how long it takes you to respond.",
    targetPlatforms: ["All Social Platforms", "Email Newsletters", "Community Channels"],
    businessImpact: "Transforms passive readers into booked strategy calls and active pipeline.",
  },
  {
    id: "thumbnails-creative-design",
    title: "Thumbnail & Creative Design",
    tagline: "Eye-catching designs that boost clicks and brand recall",
    description: "High-contrast, click-optimized thumbnail art and brand asset templates that stand out against cluttered social feeds and YouTube recommendation rails.",
    iconName: "Palette",
    badge: "High CTR",
    deliverables: [
      "Custom high-CTR video thumbnail graphics with bold focal points",
      "Figma/Canva brand template kits for rapid visual consistency",
      "Custom icons, charts, infographics, and carousel cover slides",
      "Exported in crisp retina-ready PNG and WebP formats",
    ],
    targetPlatforms: ["YouTube", "Instagram Feed", "LinkedIn Documents", "Web Assets"],
    businessImpact: "Improves organic click-through rate (CTR) by 45% to 80% on video content.",
  },
  {
    id: "monthly-content-calendar",
    title: "Monthly Content Calendar",
    tagline: "Strategic content planning to keep your brand active and consistent",
    description: "A structured week-by-week publishing grid that rotates 5 core content pillars (Education, Social Proof, Core Offer, Behind-the-Scenes, Community) so your brand remains active with purpose.",
    iconName: "Calendar",
    badge: "Consistency",
    deliverables: [
      "30-day publishing schedule organized by date, platform, format, and pillar",
      "Optimal posting time recommendations based on audience engagement data",
      "Visual grid preview for Instagram and multi-platform publishing checklist",
      "Campaign synchronization with active business launches and promotions",
    ],
    targetPlatforms: ["Multi-Channel Management"],
    businessImpact: "Eliminates last-minute content panic and ensures 100% posting consistency.",
  },
  {
    id: "performance-reports",
    title: "Content Performance Reports",
    tagline: "Simple, actionable reports to measure performance and improve your content",
    description: "Zero-padding monthly reports focused on what actually matters: which posts generated inquiries, which hooks drove the longest watch time, and one concrete strategic pivot for next month.",
    iconName: "TrendingUp",
    badge: "Data-Driven",
    deliverables: [
      "Monthly executive breakdown of top-performing hooks, formats, and topics",
      "Direct attribution analysis connecting content to leads and inquiries",
      "Concrete strategic recommendations and content iteration plan for next month",
      "Monthly 30-minute strategy review call (Premium Tier)",
    ],
    targetPlatforms: ["Executive Analytics"],
    businessImpact: "Continuously optimizes content ROI, lowering customer acquisition costs over time.",
  },
];

export const contentPricingData: ContentPricingTier[] = [
  {
    id: "starter",
    name: "Starter Content",
    price: "₹5,000",
    billingPeriod: "per month",
    tagline: "For small and local businesses looking for consistent, high-quality social media presence.",
    idealFor: "Solo founders, local clinics, boutique agencies, consultants",
    features: [
      "12 Custom Posts & Captions per month (3 per week)",
      "2 High-Retention Reels / Short-Form Video Scripts",
      "Basic Tiered Hashtag Research (Broad, Niche, Branded)",
      "Brand Voice Modeling (Tailored to your tone)",
      "One visual direction note per post for your creator/editor",
      "Turnaround: 5 business days for full monthly batch",
    ],
    ctaText: "Get Started with Starter",
  },
  {
    id: "growth",
    name: "Growth Content Engine",
    price: "₹10,000",
    billingPeriod: "per month",
    tagline: "For scaling businesses wanting consistent video, carousel education, and strategic calendars.",
    isPopular: true,
    idealFor: "Growing service providers, real estate teams, e-commerce brands, B2B founders",
    features: [
      "20 Custom Posts & Multi-Slide Carousels per month (5 per week)",
      "4 High-Retention Reels / Shorts / Video Ad Scripts with text cues",
      "Full 30-Day Content Calendar across 5 strategic pillars",
      "Complete Hashtag & Keyword Strategy for SEO reach",
      "Monthly Performance Report with concrete changes for next month",
      "Dedicated Slack/WhatsApp channel with your Delivery Lead",
    ],
    ctaText: "Scale with Growth Engine",
  },
  {
    id: "premium",
    name: "Premium Omnichannel AI",
    price: "₹18,000",
    billingPeriod: "per month",
    tagline: "Complete content dominance with daily publishing, 8 video scripts, and competitor scanning.",
    idealFor: "Ambitious brands wanting daily multi-channel authority and aggressive customer acquisition",
    features: [
      "30 Custom Posts & Rich Multi-Slide Carousels (Daily Publishing)",
      "8 Short-Form Video Scripts & Paid Ad Frameworks",
      "Full High-CTR Thumbnail & Creative Graphic Design Kit",
      "Comprehensive Monthly Competitor Scan & Gap Analysis",
      "Monthly Executive Performance Report & 45-Min Strategy Call",
      "Priority 48-Hour Content Iterations and Revisions",
    ],
    ctaText: "Deploy Premium Omnichannel",
  },
];
