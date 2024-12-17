"use client";

import { GlobalStateContext } from "@/context/GlobalStateContext";
import Burger from "./elements/Burger";
import { useContext, useEffect } from "react";
import Close from "./elements/Close";
import Menu from "./elements/Menu";
import SocialMedia from "@/static/SocialMedia";

const BurgerMenu = () => {
  const context = useContext(GlobalStateContext);

  useEffect(() => {
    const handleResize = () => {
      if (context?.isMenuOpen) {
        document.body.classList.add("overflow-y-hidden");
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [context?.isMenuOpen]);

  return (
    <div className="desktop:hidden">
      <div
        className="fixed top-0 right-0 p-2 z-50"
        onClick={context?.toggleMenu}
      >
        {context?.isMenuOpen ? <Close /> : <Burger />}
      </div>
      {context?.isMenuOpen ? (
        <div className="absolute top-0 right-0 font-poppins w-[100%] text-[rgb(49,51,59)] text-xl flex flex-col justify-end items-left bg-indigo-400 pt-10 gap-5 pl-10 ">
          <Menu />
          <SocialMedia size={20} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BurgerMenu;
