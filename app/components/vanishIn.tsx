import React from "react";
import BFCliptext from "@/public/image/svg/BFCliptext.svg";
import vanishGradient from "@/public/image/vanishGradient.png";
import Image from "next/image";
import Countdown from "./countdown";
import Link from "next/link";

const VanishIn = () => {
  return (
    <section className="relative py-9 md:py-12 xl:py-15 xxl:py-17.5">
      <div className="container">
        <div className="w-full mx-auto">
          <div className="w-full max-w-lg mx-auto">
            <div className="">
              <Image
                src={BFCliptext}
                alt="BFCliptext"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="text-center mb-8">
            <div className="gradient-text font-clashDisplay font-medium text-2xl md:text-3xl xl:text-3xl xxl:text-40 leading-tight tracking-wider">
              <p>vanish in:</p>
            </div>
          </div>
          {/* counter */}
          <div className="w-full max-w-184 mx-auto">
            <Countdown targetDate="2025-11-28T00:00:00Z" />
          </div>

          {/* button */}
          <div className="mt-14 text-center">
            <Link
              href="#pricing"
              className="block w-fit mx-auto text-commonRed font-clashDisplay font-semibold text-base md:text-xl xl:text-2xl xxl:text-28 leading-tight tracking-[1px] capitalize text-center py-4 xl:py-6 px-5 xl:px-12 bg-white rounded-xl shadow-[0_0_27.70px_-1px_#F2181E] hover:bg-commonRed hover:text-white transition-all duration-300"
            >
              I Want My 65% OFF + $500 Cash Rewards Before It’s Gone
            </Link>
          </div>
        </div>
      </div>
      {/* background image */}
      <div className="absolute inset-0 -z-1">
        <Image
          src={vanishGradient}
          alt="vanishGradient"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default VanishIn;
