import React from "react";

interface GlassCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-px before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-xl">
      <div className="relative flex h-full flex-col gap-4 rounded-2xl bg-black/40 p-6 backdrop-blur-md">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl group-hover:bg-blue-500/40 transition-all duration-500"></div>
        <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl group-hover:bg-purple-500/40 transition-all duration-500"></div>
        
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-inner ring-1 ring-white/20">
            {icon}
          </div>
        )}
        
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
        
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">
          Explore now
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
