"use client";
import { GlobalStateContext } from "@/context/GlobalStateContext";
import { useContext } from "react";
import { Mulish } from "next/font/google";
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "700"],
});

const MenuItem = ({ title }: { title: string }) => {
  const context = useContext(GlobalStateContext);

  return (
    <a
      className={`${mulish.variable} font-sans `}
      href={"/#" + title}
      onClick={context?.exitMenu}
    >
      {title}
    </a>
  );
};

export default MenuItem;
