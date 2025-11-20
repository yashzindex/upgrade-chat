import React from "react";
import Image from "next/image";
import roundIcon from "@/public/image/svg/roundIcon.svg";
import borderTop from "@/public/image/borderTop.png";
import userBorder from "@/public/image/svg/userBorder.svg";
import Link from "next/link";

const cardData = [
  {
    type: "new",
    url: "/",
    title: "For New Users",
    features: [
      "Win $100 joining Cash on your first transaction",
      "Get up to 50% OFF on all plans tailored to your needs.",
      "Start selling subs, courses, and digital goods today",
    ],
    buttonText: "Claim My $100 Bonus + 50% OFF Now",
    buttonStyle: "glow",
  },
  {
    type: "existing",
    url: "/",
    title: "For Existing Users",
    features: [
      "Black Friday-only credit bundles → Get MORE for less",
      "Priority support for all holiday campaigns",
      "Unlock hidden growth perks",
    ],
    buttonText: "Unlock My 50% OFF &  Black Friday Credits",
    buttonStyle: "outline",
  },
];

const Users = () => {
  return (
    <section className="relative py-14 md:py-18 lg:py-22">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <Link href={card.url} 
              key={index}
              className="relative z-10 group rounded-4xl border border-commonRed/50"
            >
              <div className="relative h-full rounded-4xl userBg p-5 md:p-7 xl:p-10">
                <div className="space-y-4 md:space-y-6 xl:space-y-8">
                  {/* Icon Top Left */}
                  <div className="relative size-10">
                    <Image
                      src={roundIcon}
                      alt="roundIcon"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-clashDisplay font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl capitalize">
                    {card.title}
                  </h3>
                </div>

                <div className="border-t border-white/10 my-5 xl:my-8"></div>

                {/* Features */}
                <ul className="space-y-4">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <span className="size-4 text-white flex-none flex justify-center items-center text-[10px] border border-white rounded-full">
                        &#x2713;
                      </span>
                      <span className="text-white font-grotesk400 text-base md:text-lg leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="mt-8 md:mt-10 w-full border border-white rounded-xl py-4 px-5 text-white font-clashDisplay font-semibold text-base md:text-lg xl:text-xl leading-tight tracking-wide group-hover:bg-white group-hover:text-commonRed group-hover:shadow-9xl transition-all duration-300">
                  {card.buttonText}
                </button>
              </div>

              {/* rotate border */}
              <div className="absolute -top-2 left-20/100 right-20/100 h-3 hidden group-hover:block">
                <Image
                  src={userBorder}
                  alt="userBorder"
                  className="w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
