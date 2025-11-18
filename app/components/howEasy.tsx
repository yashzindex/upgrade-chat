import React from "react";
import Image from "next/image";
import whatsapp from "@/public/image/svg/whatsapp.svg";
import telegram from "@/public/image/svg/telegram.svg";
import discord from "@/public/image/svg/discord.svg";
import lineVector from "@/public/image/svg/lineVector.svg";

const steps = [
  {
    title: "Step 01",
    description: "Connect Your Chat",
    details: ["whatsapp", "telegram", "discord"],
  },
  {
    title: "Step 02",
    description: "Add Plans & Products",
    details: [],
    text: "Subscriptions, digital goods, memberships.",
  },
  {
    title: "Step 03",
    description: "Start Selling Instantly",
    details: [],
    text: "Members pay → you get paid daily.",
  },
  {
    title: "Step 04",
    description: "Watch your growth multiply",
    details: [],
    text: "Cash in your Black Friday Bonus + 50% savings",
  },
];

const HowEasy = () => {
  return (
    <section className="relative py-9 md:py-12 xl:py-15 xxl:py-17.5">
      <div className="container">
        <h6 className="gradient-text font-cld600 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xxl:text-[68px] leading-tight -tracking-tight capitalize text-center">
          How Easy Is It?
        </h6>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative pl-px rounded-bl-xl redTowhite after:absolute after:h-px after:w-97/100 after:bottom-0 after:right-0 after:bg-linear-to-r after:from-[#ffffff61] after:to-black"
              >
                <div className="bg-black rounded-bl-xl h-full">
                  <div className="pb-px bg-linear-120 from-[#ca0b0b80] from-0% via-[#ffffff2a] via-50% to-black to-110%">
                    <div className="bg-black py-2 xl:py-4 px-5">
                      <p className="text-white text-lg md:text-xl font-cld600">
                        {step.title}
                      </p>
                    </div>
                  </div>
                  <div className="relative rounded-bl-xl bg-black p-5 md:p-8 xxl:p-10">
                    <div className="relative space-y-3 md:space-y-5 z-10">
                      <div className="text-white text-xl sm:text-2xl md:text-[26px] font-cld500 leading-snug">
                        <p>{step.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2.5 font-urb500 text-[#999999] text-base md:text-lg font-medium">
                        {step.details.length > 0 &&
                          step.details.map((detail, idx) => {
                            if (
                              detail === "whatsapp" ||
                              detail === "telegram" ||
                              detail === "discord"
                            ) {
                              const icon =
                                detail === "whatsapp"
                                  ? whatsapp
                                  : detail === "telegram"
                                  ? telegram
                                  : discord;
                              return (
                                <Image
                                  key={idx}
                                  src={icon}
                                  alt={detail}
                                  className="h-5.5"
                                />
                              );
                            }
                            return null;
                          })}
                        {step.text && <p>{step.text}</p>}
                      </div>
                    </div>
                    {/* image */}
                    <div className="h-5 sm:h-10 absolute sm:group-even:top-1! bottom-1 -right-6 sm:-right-1 max-sm:rotate-90 group-last:hidden sm:hidden xl:block">
                      <Image src={lineVector} alt="lineVector" className="max-sm:h-full" />
                    </div>
                    {/* blur */}
                    <div className="bg-linear-to-tl from-black to-[#250000] size-10 absolute top-0 left-0 z-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowEasy;
