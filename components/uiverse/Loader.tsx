import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-4 h-4 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
};

export const OrbitLoader: React.FC = () => {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <div className="absolute h-full w-full animate-[spin_3s_linear_infinite] rounded-full border-b-4 border-t-4 border-blue-500 opacity-70"></div>
      <div className="absolute h-16 w-16 animate-[spin_2s_linear_infinite_reverse] rounded-full border-l-4 border-r-4 border-purple-500 opacity-70"></div>
      <div className="absolute h-10 w-10 animate-[spin_1.5s_linear_infinite] rounded-full border-b-4 border-t-4 border-pink-500 opacity-70"></div>
      <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_15px_#fff]"></div>
    </div>
  );
};
