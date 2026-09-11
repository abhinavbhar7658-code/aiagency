import React from "react";

export const NeoCheckbox: React.FC = () => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative flex h-6 w-6 items-center justify-center rounded border-2 border-slate-500 bg-transparent transition-all duration-300 group-hover:border-blue-500">
        <input type="checkbox" className="peer sr-only" />
        <div className="absolute h-full w-full rounded bg-blue-500 scale-0 opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:opacity-100 peer-checked:border-blue-500" />
        <svg
          className="absolute z-10 w-4 h-4 text-white scale-0 transition-transform duration-300 delay-100 peer-checked:scale-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
        Accept Terms & Conditions
      </span>
    </label>
  );
};
