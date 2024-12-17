"use client";
import About from "@/components/layout/About";
import { Articles } from "@/components/layout/Articles";
import { Catagories } from "@/components/layout/Catagories";
import { Homepage } from "@/components/layout/Homepage";
// import About from "@/components/layout/About";
// import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
// import Skills from "@/components/layout/Skills";
// import Portfolio from "@/components/layout/Portfolio";
import { GlobalStateContext } from "@/context/GlobalStateContext";
import { useGlobal } from "@/hooks/global.customhooks";
// import Experience from "@/components/layout/Experience";
// import Testimonial from "@/components/layout/Testimonial";
// import Contact from "@/components/layout/Contact";
// import Modal from "@/components/layout/Modal";

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
