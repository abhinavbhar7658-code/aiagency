"use client";

import React from "react";

export function InfiniteMarquee() {
  return (
    <div className="w-full bg-black py-4 overflow-hidden border-y-4 border-black">
      <div className="flex whitespace-nowrap animate-shimmer">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center text-4xl font-black uppercase text-yellow-400 mx-4 tracking-widest">
            <span>Automate Everything</span>
            <span className="mx-8 text-white">•</span>
            <span>Scale Effortlessly</span>
            <span className="mx-8 text-white">•</span>
            <span>Never Sleep</span>
            <span className="mx-8 text-white">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
