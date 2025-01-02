import React from "react";
import MenuItem from "../menu/elements/MenuItem";
import BurgerMenu from "../menu/BurgerMenu";
import Link from "next/link";
import { Mulish } from "next/font/google";
import Image from "next/image";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "700"],
});

function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-[100%] min-h-max mx-auto bg-white ">
      <div
        id="Navbar"
        className="flex flex-row justify-center items-center w-[87.4%] m-auto "
      >
        <Link className="h-[100%] w-full" href="/#">
          <Image
            className="object-contain"
            src="/logo.png"
            alt="logo"
            height={50}
            width={50}
          />
        </Link>
        <div className="hidden desktop:flex justify-between text-0.5xl w-/5 font-poppins text-black gap-10 pl-3 ">
          <div
            className={`${mulish.variable} font-sans flex justify-between items-center relative w-[500px]`}
          >
            <input
              type="text"
              placeholder="Search"
              className="border-white px-2 w-full h-[40px] rounded-md"
            ></input>
            <button className="absolute right-2 px-2 h-[28px] w-[28px] bg-[rgb(160,135,111)]  rounded-full flex items-center">
              <Image
                src={"/search-icon.svg"}
                alt="search-icon"
                width={20}
                height={20}
                className="object-center"
              />
            </button>
          </div>
          <div className="desktop:w-2/3 flex flex-row justify-end items-center  gap-10 ">
            <div className="hover:text-orange-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
              <MenuItem title="Home" />
            </div>
            <div className=" hover:text-orange-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
              <MenuItem title="Articles" />
            </div>
            <div className=" hover:text-orange-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
              <MenuItem title="Catagories" />
            </div>
            <div className=" hover:text-orange-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
              <MenuItem title="About" />
            </div>
          </div>
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
