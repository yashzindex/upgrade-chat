import React from "react";
import offerBg from "@/public/image/offerBg.png";
import Image from "next/image";
import offerImg from "@/public/image/svg/offerImg.svg";
import Marquee from "react-fast-marquee";

const marqueeItems = [
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
  "BLACK FRIDAY OFFERS",
];
const Offer = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-30 pb-10 md:pb-20">
      <div className="container">
        <div className="w-full max-w-258 mx-auto relative z-10">
          <Image src={offerImg} alt="offerImg" className="w-full h-full" />
        </div>
      </div>

      {/* slider red */}
      <div className="relative z-10 h-10 lg:h-16 xxl:h-19 -rotate-11 sm:-rotate-4 -mx-5 mt-10 lg:mt-20">
        {/* <div className="absolute inset-0"> */}
        <Marquee className="bg-commonRed py-2! sm:py-3! lg:py-5! xxl:py-6! **:divide-x-4 **:divide-white!">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="px-8 text-white font-clashDisplay font-semibold text-base md:text-lg lg:text-2xl xx:text-3xl xxl:text-4xl leading-[80%] tracking-wide whitespace-nowrap"
            >
              <p>{item}</p>
            </div>
          ))}
        </Marquee>
        {/* </div> */}
      </div>

      <div className="absolute -top-20 md:-top-30 -left-10/100 -right-10/100 w-120/100 h-full -rotate-11 sm:-rotate-4">
        <Image src={offerBg} alt="offerBg" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Offer;
