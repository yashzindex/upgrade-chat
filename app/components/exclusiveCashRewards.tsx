"use client";

import React from "react";
import Image from "next/image";
import ExclusiveBackShapeImage from "@/public/image/exclusive-cash-rewards-border-shape.png";
import ExclusiveArrowCoolDown from "@/public/image/exclusive-arrow-cool-down.png";

interface TierItem {
  tier: string;
  transacted: string;
  cashback: string;
  totalBonus: string;
}

const tiersData: TierItem[] = [
  {
    tier: "Tier 1",
    transacted: "$2000 Transacted",
    cashback: "$100 Cashback",
    totalBonus: "$100",
  },
  {
    tier: "Tier 2",
    transacted: "$20,000 Transacted",
    cashback: "+$100 Cashback",
    totalBonus: "$200",
  },
  {
    tier: "Tier 3",
    transacted: "$50,000 Transacted",
    cashback: "+$100 Cashback",
    totalBonus: "$300",
  },
  {
    tier: "Tier 4",
    transacted: "$100,000 Transacted",
    cashback: "+$200 Cashback",
    totalBonus: "$500",
  },
];

const ExclusiveCashRewards: React.FC = () => {
  return (
    <>
      <section className="py-10 md:py-13 xl:py-16 xxl:py-21">
        <div className="container">
          {/* Heading Section */}
          <div className="text-center w-full max-w-284 mx-auto mb-5 md:mb-10 xl:mb-13">
            <div className="p-2 md:p-4 w-fit mx-auto mb-3 bg-white text-commonRed font-clashDisplay font-semibold uppercase text-lg sm:text-2xl md:text-3xl xxl:text-32">
              <p>Exclusive Black Friday Offer</p>
            </div>

            <h3 className="gradient-text font-clashDisplay font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xxl:text-68 leading-tight -tracking-tight capitalize mb-3">
              Cash Rewards for New Creators
            </h3>

            <p className="text-center text-[#E6E6E6] mb-8 sm:mb-12 max-w-7xl font-satoshi400 mx-auto text-sm sm:text-base md:text-lg lg:text-2xl xl:text-2xl leading-tight -tracking-tight  xl:px-10">
              This Black Friday, Upgrade Chat is giving creators tier-wise cashback bonuses based on how much you transact during the campaign window. Every time you cross a milestone, we automatically add a new bonus to your account - no forms, no claiming, no limits.
            </p>
          </div>

          {/* Main Box */}
          <div className="max-w-4xl mx-auto p-5 md:p-8 text-white relative">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 w-full h-full">
              <Image
                src={ExclusiveBackShapeImage}
                alt="back-shape"
                fill
                className="object-fill w-full h-full"
              />
            </div>

            {/* Tiers Loop */}
            <div className="flex flex-col gap-[26px]">
              {tiersData.map((item, index) => (
                <div key={index} className="block relative border-l border-white rounded-bl-xl">
                  {index !== tiersData.length - 1 && (
                    <div className="absolute left-1/2 -bottom-5 md:-bottom-7 -traslate-x-1/2 w-6 md:w-8 h-8 sm:h-10 md:h-12">
                      <Image
                        src={ExclusiveArrowCoolDown}
                        alt="arrow"
                        fill
                        className="object-cover w-full h-full"
                      ></Image>
                    </div>
                  )}
                  <div className="py-4 px-5">
                    <span className="font-clashDisplay font-semibold text-base lg:text-xl text-white">
                      {" "}
                      {item.tier}{" "}
                    </span>
                  </div>

                  <div className="relative py-8 px-5 border-t border-b rounded-bl-xl">
                    <div className="relative z-10 flex max-sm:flex-col flex-wrap justify-between -mx-2">
                      <div className="flex-1 px-2">
                        <span className="font-clashDisplay font-medium text-xl lg:text-2xl text-white">
                          {" "}
                          {item.transacted}{" "}
                        </span>
                      </div>

                      <div className="flex-1 sm:text-end px-2">
                        <span className="font-clashDisplay font-medium text-xl lg:text-[26px] text-white">
                          {" "}
                          {item.cashback}{" "}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <p className="text-base font-medium sm:text-end text-white/50 mt-2">
                        (Your total bonus = {item.totalBonus})
                      </p>
                    </div>

                    {/* gradient */}
                    <div className="bg-linear-to-tl from-black to-[#250000] size-25 absolute top-0 left-0 z-1"></div>
                    <div className="absolute -top-px h-px right-0 left-px bg-linear-to-r from-transparent to-black to-95%"></div>
                    <div className="absolute -bottom-px h-px right-0 left-px bg-linear-to-r from-transparent to-black to-95%"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExclusiveCashRewards;
