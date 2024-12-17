const Close = () => {
  return (
    <button className="relative z-50 p-6 ">
      <div className="w-6 h-1 rotate-45 -translate-x-1/2 absolute bg-yellow-400 animate-pulse rounded-sm"></div>
      <div className="w-6 h-1 -rotate-45 -translate-x-1/2 absolute bg-yellow-400  animate-pulse rounded-sm"></div>
    </button>
  );
};

export default Close;
