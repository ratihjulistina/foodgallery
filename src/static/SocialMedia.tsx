import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMedia = ({ size }: { size: number }) => {
  return (
    <div
      className="flex justify-center bg-black gap-5 py-5 items-end"
      style={{ pointerEvents: "auto" }}
    >
      <Link
        className="transition-all hover:scale-110 scale-100 mobile:p-1"
        href="https://www.linkedin.com/in/ratih-julistina-911b2299/"
      >
        <Image src="linkedin.svg" alt="icon" width={size} height={size} />
      </Link>

      <Link
        className="transition-all hover:scale-110 scale-100 mobile:p-1"
        href="https://github.com/ratihjulistina"
      >
        <Image
          src="icons8-instagram.svg"
          alt="icon"
          width={size}
          height={size}
        />
      </Link>
    </div>
  );
};

export default SocialMedia;
