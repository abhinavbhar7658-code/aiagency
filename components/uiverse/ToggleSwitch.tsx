import React from "react";

export const ToggleSwitch: React.FC = () => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" defaultChecked />
      <div className="h-8 w-14 rounded-full bg-slate-700 after:absolute after:top-1 after:left-1 after:h-6 after:w-6 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-500 peer-checked:after:translate-x-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/50 shadow-inner"></div>
      <span className="ml-3 text-sm font-medium text-slate-300">Advanced Mode</span>
    </label>
  );
};
