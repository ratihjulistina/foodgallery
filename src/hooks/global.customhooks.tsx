"use client";

import { useState } from "react";

export function useGlobal() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const toggleModal = (): void => {
    setModalOpen((prevState) => !prevState);
  };

  const exitMenu = (): void => {
    setIsMenuOpen(false);
  };

  const exitModal = (): void => {
    setModalOpen(false);
  };

  return {
    isMenuOpen,
    toggleMenu,
    exitMenu,
    isModalOpen,
    toggleModal,
    exitModal,
  };
}
