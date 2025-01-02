"use client";
import { GlobalStateContext } from "@/context/GlobalStateContext";
import React, { useContext, useEffect } from "react";

const ContactBtn = ({ title }: { title: string }) => {
  const context = useContext(GlobalStateContext);

  const handleClick = () => {
    context?.exitModal();
    context?.toggleModal();
  };

  useEffect(() => {
    if (context?.isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [context?.isModalOpen]);

  return (
    <div
      className="font-poppins text-[rgb(41,41,51)] font-medium transition ease-in-out duration-300 bg-[#ffc96b] rounded-md m-auto px-3 py-2 text-center hover:bg-indigo-500"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default ContactBtn;
