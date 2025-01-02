import Image from "next/image";
import { Mulish, Playfair, Lato, Poppins } from "next/font/google";
import Subscription from "../menu/elements/Subscription";

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

export async function Homepage() {
  //pakai async itu karna mau ngambil data di API, berarti itu promis jadi nunggu dlu, data ada di software lain nih.

  return (
    <div className="w-[87.4%] min-h-max mx-auto bg-white ">
      <div
        id="Home"
        className="w-[100%] min-h-max flex flex-row justify-between items-center bg-[rgb(160,135,111)] opacity-0.4"
      >
        <div className="w-[40%] h-full flex flex-col justify-center items-center m-auto">
          <h1 className={`${playfair.variable} font-serif text-5xl`}>
            Plan your daily meal!
          </h1>
          <h2
            className={`${mulish.variable} font-sans font-medium w-full text-right px-5`}
          >
            Simply your life
          </h2>
        </div>
        <div className="w-[60%] h-max ">
          <Image
            width={900}
            height={400}
            src={"/hero.jpg"}
            style={{ objectFit: "contain", opacity: "0.5" }}
            className="w-full h-full"
            alt="heroimage"
          />
        </div>
      </div>
      <div>
        <Subscription />
      </div>
    </div>
  );
}
