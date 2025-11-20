import React from "react";
import Image, { StaticImageData } from "next/image";

import icon1 from "@/public/image/svg/icon1.svg";
import icon2 from "@/public/image/svg/icon2.svg";
import icon3 from "@/public/image/svg/icon3.svg";
import icon4 from "@/public/image/svg/icon4.svg";

interface Feature {
  icon: StaticImageData;
  title: string;
  description: string | string[];
}

const features: Feature[] = [
  {
    icon: icon1,
    title: "Incredible Value",
    description:
      "Get up to 65% OFF plus $500 Cash Rewards on your first sales milestones. This is our biggest offer of the year.",
  },
  {
    icon: icon2,
    title: "Exclusive Access",
    description:
      "Early access to new features and premium AI models before anyone else.",
  },
  {
    icon: icon3,
    title: "No Hidden Charges",
    description: 
      "What you see is what you pay. No surprise fees or hidden costs.",
  },
  {
    icon: icon4,
    title: "Premium Support",
    description:
      "Get priority customer support and dedicated account management.",
  },
];

const Unmissiable: React.FC = () => {
  return (
    <section className="py-10 md:py-13 xl:py-16 xxl:py-21">
      <div className="container">
        <div className="text-center mb-5 md:mb-10 xl:mb-13">
          <div className="p-2 md:p-4 w-fit mx-auto mb-3 bg-white text-textRed font-clashDisplay font-semibold uppercase text-lg sm:text-2xl md:text-3xl xxl:text-32">
            <p>Free Money, Real Fast</p>
          </div>

          <h3 className="gradient-text font-clashDisplay font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xxl:text-68 leading-tight -tracking-tight capitalize">
            Why This Deal is Unmissable?
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:*:border-x lg:*:first:border-l max-lg:*:border-b *:border-[#ffffff1f]">
          {features.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="pt-8 xl:pt-12.5 px-0 pb-5 xl:px-8 xl:pb-6 flex flex-col justify-start"
            >
              <div className="mb-4 lg:mb-7.5 space-y-5 lg:space-y-7.5">
                <div className="w-fit h-fit rounded-xl p-px iconbgBorder">
                  <span className="size-16 xl:size-22 rounded-xl p-3 flex justify-center items-center bg-linear-to-tl from-black to-[#250000]">
                    <Image
                      src={icon}
                      alt={`icon${index + 1}`}
                      className="max-w-6 xl:max-w-8"
                    />
                  </span>
                </div>

                <h3 className="font-clashDisplay font-semibold text-[#E6E6E6] text-lg md:text-xl xl:text-[22px]">
                  {title}
                </h3>
              </div>

              <div className="text-[#E6E6E6] font-satoshi400 text-base space-y-2">
                {Array.isArray(description) ? (
                  description.map((desc, i) => <p key={i}>{desc}</p>)
                ) : (
                  <p>{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unmissiable;
