"use client";
import { useEffect, useState } from "react";

const useScrollPos = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 200);
    };
    window.removeEventListener("scroll", handleScroll);
  }, []);
  return isAtTop;
};

export default useScrollPos;
