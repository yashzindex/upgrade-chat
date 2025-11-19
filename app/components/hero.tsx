"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo from "@/public/image/logo.png";
import heroBg from "@/public/image/heroBg.png";
import offerTag from "@/public/image/offerTag.png";
import offerTagHero from "@/public/image/svg/offerTagHero.svg";

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

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden pb-10 lg:pb-15 xxl:pb-20">
        {/* title and image */}
        <div className="relative z-10 pt-25 lg:pb-15 xxl:pb-20">
          <div className="w-full container xxl:max-w-325! mx-auto">
            {/* Logo Image */}
            <Link
              href="/"
              className="w-60 sm:w-90 md:w-110 xxl:w-125 relative z-10 block mx-auto"
            >
              <Image src={logo} alt="logo" className="h-full w-full" />
            </Link>

            {/* grid container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
              {/* title tag */}
              <div className="lg:col-span-9 max-lg:order-2">
                <div className="h-full flex flex-col justify-center py-10 lg:pt-22 lg:pb-12">
                  <div className="mb-15 space-y-3 max-md:text-center">
                    <h1 className="font-clashDisplay font-bold gradient-text text-4xl sm:text-5xl xl:text-6xl xxl:text-7xl tracking-[1%]">
                      Biggest Deal Ever...
                    </h1>
                    <div className="text-white/90 font-sfPro400 text-xl md:text-2xl xl:text-[28px] xxl:text-[32px] space-y-2">
                      <p>
                        This Black Friday, we’re giving away more than ever
                        before
                      </p>
                    </div>
                  </div>
                  <div className="flex max-md:flex-col items-center gap-6 xl:gap-8">
                    <Link
                      href="/"
                      className="text-white font-clashDisplay font-semibold text-base md:text-lg xl:text-2xl xxl:text-[28px] tracking-wide leading-tight md:leading-[72%] text-center uppercase bg-commonRed border-2 border-commonRed shadow-redBtnShadow p-4 sm:px-5 sm:py-5 xl:py-6 hover:bg-commonRed/50 transition-all duration-300"
                    >
                      Get My $100 Bonus
                    </Link>
                    <Link
                      href="/"
                      className="text-white font-clashDisplay font-semibold text-base md:text-lg xl:text-2xl xxl:text-[28px] tracking-wide leading-tight md:leading-[72%] text-center uppercase border-2 border-white p-4 sm:px-5 sm:py-5 xl:py-6 hover:text-commonRed hover:border-commonRed transition-all duration-300"
                    >
                      {" "}
                      Claim My Black Friday Credits
                    </Link>
                  </div>
                </div>
              </div>

              {/* offer tag */}
              <div className="lg:col-span-3 max-lg:order-1 lg:-mt-12 xl:-mt-20">
                <div className="w-50/100 mx-auto lg:w-full h-full">
                  <Image
                    src={offerTagHero}
                    alt="offerTagHero"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="relative h-12 lg:h-15 -rotate-3 z-10">
          {/* <div className="absolute inset-0"> */}
            <Marquee className="bg-white py-3 lg:py-4 **:divide-x-4 **:divide-black!">
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  className="px-8 font-clashDisplay font-semibold text-black text-base md:text-lg xl:text-2xl xxl:text-[28px] leading-tight whitespace-nowrap"
                >
                  <p>{item}</p>
                </div>
              ))}
            </Marquee>
          {/* </div> */}
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={heroBg} alt="heroBg" className="w-full h-full" />
        </div>
      </section>
    </>
  );
};

export default Hero;
