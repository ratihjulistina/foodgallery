import Image from "next/image";
import React from "react";
import { Mulish, Playfair, Lato, Montserrat, Poppins } from "next/font/google";
import SocialMedia from "@/static/SocialMedia";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "700"],
});

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["900"],
});

const About = () => {
  return (
    <div className="w-full  bg-[rgb(160,135,111)] opacity-0.4 m-auto py-5">
      <div className="w-[87.4%] min-h-max m-auto" id="About">
        <div
          className={`${playfair.variable} font-serif text-5xl text-black py-10`}
        >
          About Us
        </div>
        <div className="w-[100%] min-h-max flex flex-row justify-between items-center gap-10 p-10  ">
          <div className="w-[35%]">
            <Image
              src={"/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"}
              alt="gambar"
              height={800}
              width={800}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-end justify-center gap-5">
            <p
              className={`${mulish.variable} font-sans  text-black text-right `}
            >
              Hi, I am Mina. A Registered Dietitian, recipe developer, writer,
              and most importantly a mama. I share wholesome family-friendly
              recipes along with a healthy dose of nutrition and feeding tips.
            </p>
            <SocialMedia size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
