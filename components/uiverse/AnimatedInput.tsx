import React from "react";

export const AnimatedInput: React.FC = () => {
  return (
    <div className="relative w-full max-w-xs mt-6">
      <input
        type="text"
        id="animated-input"
        className="peer block w-full appearance-none rounded-lg border-2 border-slate-700 bg-transparent px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors"
        placeholder=" "
      />
      <label
        htmlFor="animated-input"
        className="absolute top-3 left-4 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-90 peer-focus:text-blue-500 bg-slate-950 px-1"
      >
        Email address
      </label>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500 peer-focus:text-blue-500 transition-colors">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
};
