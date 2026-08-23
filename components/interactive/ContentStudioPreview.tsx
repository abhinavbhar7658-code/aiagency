"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
 Layers, 
 Video, 
 Sparkles, 
 CheckCircle2, 
 Share2, 
 Bookmark, 
 Heart, 
 MessageSquare,
 Clock,
 Send,
 Flame,
 ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const sampleFormats = [
 {
 id:"carousel",
 title:"Educational Carousel",
 icon: <Layers className="w-4 h-4 text-primary" />,
 platform:"LinkedIn / Instagram",
 hook:"Most small businesses lose 40% of their warm leads to 4-hour response times. Here's how to fix it with an automated 60-second pipeline ⬇️",
 slides: ["Slide 1: The Speed-to-Lead Problem (Why response latency kills deal flow)","Slide 2: Manual vs. Automated Routing comparison chart","Slide 3: Step 1 — Instant WhatsApp intent extraction","Slide 4: Step 2 — Real-time CRM contact enrichment","Slide 5: Step 3 — Direct calendar invite dispatch","Slide 6: The Payoff (3.2x higher conversion rate)",
 ],
 hashtags:"#BusinessAutomation #LeadGeneration #B2BGrowth #SpeedToLead #DWD",
 visualNote:"Clean navy background with cyan flowchart lines, bold white headers, high-contrast text.",
 },
 {
 id:"reel",
 title:"Short-Form Video Script",
 icon: <Video className="w-4 h-4 text-primary" />,
 platform:"Reels / YouTube Shorts / TikTok",
 hook:"0:00-0:03 [Visual: Red warning graphic] 'Stop spending thousands on Meta ads until you fix this one fatal follow-up mistake...'",
 slides: ["0:03-0:10: When a lead clicks your ad, they expect an answer in 3 minutes, not 3 hours.","0:10-0:20: By connecting a smart AI qualification agent to your inbox, every lead is scored and booked immediately.","0:20-0:28: Your sales rep only talks to pre-qualified decision makers ready to buy.","0:28-0:30: [CTA on-screen]: 'Comment PIPELINE to get our free automation blueprint.'",
 ],
 hashtags:"#Shorts #ReelsScript #SalesAutomation #AgencyLife #GrowthHacking",
 visualNote:"Talking head video with rapid b-roll cuts, kinetic yellow-and-white subtitles, upbeat lo-fi audio.",
 },
 {
 id:"post",
 title:"High-Engagement Text Post",
 icon: <Sparkles className="w-4 h-4 text-primary" />,
 platform:"X (Twitter) / LinkedIn Feed",
 hook:"The best AI implementation is the one your customers never even notice.",
 slides: ["It shouldn't feel like a robot reading a script.","It should feel like an experienced account manager who knows your inventory, your calendar, and your exact pricing by heart.","3 non-negotiables for your customer support AI:","1. Zero made-up facts (strict knowledge-grounding).","2. Instant human handoff for edge cases.","3. Direct integration with your real database.",
 ],
 hashtags:"#AITools #CustomerExperience #Operations #BusinessSystems #DWD",
 visualNote:"High-contrast quote card with subtle brand watermark and bold highlighted words.",
 },
];

export function ContentStudioPreview() {
 const [selectedFormat, setSelectedFormat] = useState(sampleFormats[0]);
 const [likes, setLikes] = useState(142);
 const [hasLiked, setHasLiked] = useState(false);

 const handleLike = () => {
 if (!hasLiked) {
 setLikes(likes + 1);
 setHasLiked(true);
 } else {
 setLikes(likes - 1);
 setHasLiked(false);
 }
 };

 return (
 <div className="rounded-3xl border border-border dark:border-border bg-card dark:bg-background p-6 sm:p-8 shadow-xl">
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border dark:border-border">
 <div>
 <div className="flex items-center gap-2">
 <span className="text-sm font-mono font-bold text-primary dark:text-primary uppercase tracking-widest">
 Live Deliverable Inspector
 </span>
 <Badge variant="default" className="text-[10px] py-0 px-2 h-4">
 Production Ready
 </Badge>
 </div>
 <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
 See Exactly What We Deliver Every Week
 </h3>
 </div>

 {/* Tab Selectors */}
 <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary dark:bg-background border border-border dark:border-border">
 {sampleFormats.map((fmt) => (
 <button
 key={fmt.id}
 onClick={() => setSelectedFormat(fmt)}
 className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all",
 selectedFormat.id === fmt.id
 ?"bg-white dark:bg-card text-foreground shadow-sm border border-border dark:border-border"
 :"text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground"
 )}
 >
 {fmt.icon}
 <span>{fmt.title.split("")[0]}</span>
 </button>
 ))}
 </div>
 </div>

 {/* Deliverable Mockup Canvas */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
 {/* Left: Content Breakdown */}
 <div className="lg:col-span-7 space-y-4">
 <div className="flex items-center justify-between text-sm text-muted-foreground dark:text-muted-foreground font-mono">
 <span className="flex items-center gap-1.5">
 <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
 Target Channel: <strong className="text-foreground dark:text-muted-foreground">{selectedFormat.platform}</strong>
 </span>
 <span className="flex items-center gap-1">
 <Clock className="w-3.5 h-3.5" />
 Batch Turnaround: 48h
 </span>
 </div>

 {/* Hook Block */}
 <div className="rounded-2xl border border-primary bg-primary dark:bg-primary p-4 space-y-1">
 <span className="text-[11px] font-mono font-bold text-primary dark:text-primary uppercase tracking-wider block">
 Pattern-Interrupt Hook (0-3s Stop Rate)
 </span>
 <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">"{selectedFormat.hook}"
 </p>
 </div>

 {/* Core Content Body */}
 <div className="rounded-2xl border border-border dark:border-border bg-background dark:bg-background p-4 space-y-2">
 <span className="text-[11px] font-mono font-bold text-muted-foreground dark:text-muted-foreground uppercase tracking-wider block">
 Structured Script & Value Delivery
 </span>
 <div className="space-y-1.5">
 {selectedFormat.slides.map((line, idx) => (
 <div key={idx} className="flex items-start gap-2 text-sm sm:text-sm text-foreground dark:text-muted-foreground">
 <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-primary shrink-0 mt-0.5" />
 <span>{line}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Hashtags & Creative Direction */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
 <div className="p-3 rounded-xl border border-border dark:border-border bg-white dark:bg-background space-y-1">
 <span className="font-mono font-semibold text-muted-foreground dark:text-muted-foreground block">Tiered Hashtag Strategy</span>
 <p className="text-foreground dark:text-muted-foreground font-mono text-[11px] break-words">{selectedFormat.hashtags}</p>
 </div>
 <div className="p-3 rounded-xl border border-border dark:border-border bg-white dark:bg-background space-y-1">
 <span className="font-mono font-semibold text-muted-foreground dark:text-muted-foreground block">Creator / Editor Note</span>
 <p className="text-foreground dark:text-muted-foreground text-[11px]">{selectedFormat.visualNote}</p>
 </div>
 </div>
 </div>

 {/* Right: Live Feed Preview Card */}
 <div className="lg:col-span-5 rounded-2xl border border-border dark:border-border bg-white dark:bg-background p-4 shadow-lg space-y-3">
 <div className="flex items-center justify-between pb-3 border-b border-border dark:border-border">
 <div className="flex items-center gap-2.5">
 <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-primary/80 flex items-center justify-center text-foreground font-bold text-sm">
 DWD
 </div>
 <div>
 <span className="font-bold text-sm text-foreground block">Your Brand Official</span>
 <span className="text-[10px] text-muted-foreground">Sponsored • 2h ago</span>
 </div>
 </div>
 <Flame className="w-4 h-4 text-amber-500" />
 </div>

 <p className="text-sm text-foreground dark:text-muted-foreground line-clamp-3">
 {selectedFormat.hook}
 </p>

 <div className="rounded-xl border border-border dark:border-border bg-secondary dark:bg-background aspect-video flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group">
 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/80/10" />
 <Sparkles className="w-8 h-8 text-primary dark:text-primary mb-2 relative" />
 <span className="text-sm font-bold text-foreground relative">
 {selectedFormat.title}
 </span>
 <span className="text-[10px] text-muted-foreground dark:text-muted-foreground font-mono relative mt-0.5">
 High-CTR Thumbnail & Graphics Included
 </span>
 </div>

 {/* Social Interaction Buttons */}
 <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground dark:text-muted-foreground">
 <div className="flex items-center gap-3">
 <button 
 onClick={handleLike}
 className={cn("flex items-center gap-1 hover:text-red-500 transition-colors",
 hasLiked &&"text-red-500 font-bold"
 )}
 >
 <Heart className={cn("w-4 h-4", hasLiked &&"fill-current")} />
 <span>{likes}</span>
 </button>
 <div className="flex items-center gap-1">
 <MessageSquare className="w-4 h-4" />
 <span>38</span>
 </div>
 <div className="flex items-center gap-1">
 <Share2 className="w-4 h-4" />
 <span>64</span>
 </div>
 </div>
 <Bookmark className="w-4 h-4 hover:text-primary cursor-pointer" />
 </div>
 </div>
 </div>
 </div>
 );
}
