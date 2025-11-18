import React from "react";
import BFCliptext from "@/public/image/svg/BFCliptext.svg";
import Image from "next/image";
import Countdown from "./countdown";
import Link from "next/link";

const VanishIn = () => {
  return (
    <section className="relative py-9 md:py-12 xl:py-15 xxl:py-17.5">
      <div className="container">
        <div className="w-full max-w-188 mx-auto">
          <div className="w-full max-w-128 mx-auto">
            <div className="">
              <Image
                src={BFCliptext}
                alt="BFCliptext"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="text-center mb-8">
            <div className="gradient-text font-cld500 text-2xl md:text-3xl xl:text-3xl xxl:text-[40px] leading-tight tracking-wider">
              <p>vanish in:</p>
            </div>
          </div>
          {/* counter */}
          <Countdown targetDate="2025-11-28T00:00:00Z" />

          {/* button */}
          <div className="mt-14 text-center">
            <Link
              href="/"
              className="block w-fit mx-auto text-commonRed font-cld600 text-base md:text-xl xl:text-2xl xxl:text-[28px] leading-tight tracking-[1px] capitalize text-center py-4 xl:py-6 px-5 xl:px-3.5 bg-white rounded-xl shadow-[0_0_27.70px_-1px_#F2181E] hover:bg-commonRed hover:text-white transition-all duration-300"
            >
              I Want My 50% OFF + $100 Bonus Before It’s Gone
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VanishIn;
