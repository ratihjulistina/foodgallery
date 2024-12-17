"use client";
import About from "@/components/layout/About";
import { Articles } from "@/components/layout/Articles";
import { Catagories } from "@/components/layout/Catagories";
import { Homepage } from "@/components/layout/Homepage";
import Navbar from "@/components/layout/Navbar";
import { GlobalStateContext } from "@/context/GlobalStateContext";
import { useGlobal } from "@/hooks/global.customhooks";

export default function Home() {
  const {
    isMenuOpen,
    toggleMenu,
    exitMenu,
    isModalOpen,
    toggleModal,
    exitModal,
  } = useGlobal();
  return (
    <GlobalStateContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        exitMenu,
        isModalOpen,
        toggleModal,
        exitModal,
      }}
    >
      <Navbar />
      <Homepage />
      <Articles />
      <Catagories />
      <About />
    </GlobalStateContext.Provider>
  );
}
