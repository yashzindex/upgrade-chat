import React from "react";
import endingBg from "@/public/image/endingBg.png";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const marqueeItems = [
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
  "BLACK FRIDAY MEGA DEAL",
];

const EndingSoon = () => {
  return (
    <section className="relative pb-9 overflow-hidden pt-20 5xl:pt-40">
      <div className="relative pt-40 md:pt-65 xxl:pt-71">
        {/* slider red */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 lg:h-16 xxl:h-19 -rotate-11 sm:-rotate-4 z-10 -mx-5">
          {/* <div className="absolute inset-0"> */}
          <Marquee className="bg-textRed py-2! sm:py-3! lg:py-5! xxl:py-6! **:divide-x-4 **:divide-white!">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="px-8 text-white font-clashDisplay font-semibold text-base md:text-lg lg:text-2xl xx:text-3xl xxl:text-4xl leading-none whitespace-nowrap"
              >
                <p>{item}</p>
              </div>
            ))}
          </Marquee>
          {/* </div> */}
        </div>
        {/* slider white */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 lg:h-16 xxl:h-19 rotate-7 sm:rotate-3 xxl:rotate-2 z-10 -mx-5">
          {/* <div className="absolute inset-0"> */}
          <Marquee className="bg-white py-2! sm:py-3! lg:py-5! xxl:py-6! **:divide-x-4 **:divide-textRed!">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="px-8 text-textRed font-clashDisplay font-semibold text-base md:text-lg lg:text-2xl xx:text-3xl xxl:text-4xl leading-none whitespace-nowrap"
              >
                <p>{item}</p>
              </div>
            ))}
          </Marquee>
          {/* </div> */}
        </div>
      </div>

      {/* title / button */}
      <div className="relative z-10">
        <div className="container">
          <div className="space-y-12 text-center">
            <div className="*:block uppercase text-white font-clashDisplay font-bold  text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug tracking-wide space-y-2">
              <h6>Massive 65% OFF + $500 Cash Rewards</h6>
              <h6>ENDING SOON.</h6>
            </div>

            <Link
              href="#pricing"
              className="block w-fit mx-auto text-commonRed font-clashDisplay font-semibold text-base md:text-lg xl:text-2xl leading-tight tracking-[1px] capitalize text-center py-4 xl:py-5.5 px-5 xl:px-7 bg-white rounded-xl hover:bg-commonRed hover:text-white transition-all duration-300"
            >
              Claim My Offer Now
            </Link>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="absolute inset-0 -z-20">
        <Image src={endingBg} alt="endingBg" className="w-full h-full" />
      </div>
      {/* gradient */}
      <div className="bg-linear-to-b from-black to-transparent absolute inset-0 -z-10"></div>
    </section>
  );
};

export default EndingSoon;
