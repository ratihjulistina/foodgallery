import React from "react";

const Burger = () => {
  return (
    <button aria-label="Burger Menu Button" className="relative p-6 ">
      <div className="absolute space-y-1 -translate-y-1/2 -translate-x-1/2">
        <div className="w-6 h-1 bg-indigo-400 animate-pulse rounded-sm"></div>
        <div className="w-6 h-1 bg-indigo-400 animate-pulse rounded-sm "></div>
        <div className="w-6 h-1 bg-indigo-400 animate-pulse rounded-sm "></div>
      </div>
    </button>
  );
};

export default Burger;
