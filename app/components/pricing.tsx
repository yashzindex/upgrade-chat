"use client";
import React, { useState } from "react";
import Image from "next/image";
import roundIcon from "@/public/image/svg/roundIcon.svg";
import roundIconRed from "@/public/image/svg/roundIconRed.svg";
import priceOfferShare from "@/public/image/svg/priceOfferShare.svg";
import off50 from "@/public/image/svg/off50.svg";
import off40 from "@/public/image/svg/off40.svg";
import off25 from "@/public/image/svg/off25.svg";
import offer50round from "@/public/image/svg/offer50round.svg";
import userBorder from "@/public/image/svg/userBorder.svg";

const plans = [
  {
    tag: "monthly",
    id: "ignite",
    title: "Ignite",
    subtitle: "For creators just starting to monetize their communities.",
    discount: "50",
    discountImg: off50,
    oldPrice: "$99",
    price: "$49",
    period: "/ per month",
    highlight: false,
    button: "Start Automating",
    features: [
      "Up to 500 community members",
      "1 active sales campaign",
      "Automated welcome & sales DMs",
      "Basic analytics dashboard",
      "Communication tools",
      "5% transaction fee",
    ],
  },
  {
    tag: "monthly",
    id: "elevate",
    title: "Elevate",
    subtitle: "For mid-sized communities ready to scale automation",
    discount: "40",
    discountImg: off40,
    oldPrice: "$119",
    price: "$69",
    period: "/ per month",
    highlight: true, // glowing middle card
    button: "Start Automating",
    features: [
      "Up to 5,000 members",
      "Unlimited sales campaigns",
      "Advanced analytics + engagement reports",
      "CRM dashboard (lead tracking + payment history)",
      "Integration with Stripe & PayPal",
      "3% transaction fee",
    ],
  },
  {
    tag: "monthly",
    id: "scale",
    title: "Scale",
    subtitle:
      "For established communities or agencies managing multiple servers.",
    discount: "25",
    discountImg: off25,
    oldPrice: "$199",
    price: "$149",
    period: "/ per month",
    highlight: false,
    button: "Start Automating",
    features: [
      "Up to 25,000 members",
      "Multi-server & multi-admin support",
      "Priority support + onboarding",
      "White-label checkout pages",
      "1.9% transaction fee",
      "Advanced affiliate program access",
      "Custom API integrations",
    ],
  },
  {
    tag: "monthly",
    id: "enterprise",
    title: "Enterprise",
    subtitle:
      "For brands, networks, or SaaS platforms integrating Upgrade.Chat tech.",
    discount: null,
    discountImg: null,
    oldPrice: null,
    price: "Custom",
    period: "",
    highlight: false,
    button: "Contact Sales",
    features: [
      "Unlimited members & servers",
      "Dedicated account manager",
      "Custom integrations (CRM, AI bots, etc.)",
      "SLA + uptime guarantee",
      "Revenue-sharing or API licensing options",
    ],
  },
  {
    tag: "annually",
    id: "ignite",
    title: "Ignite",
    subtitle: "For creators just starting to monetize their communities.",
    discount: "50",
    discountImg: off50,
    oldPrice: "$1188",
    price: "$588",
    period: "/ per month",
    highlight: false,
    button: "Start Automating",
    features: [
      "Up to 500 community members",
      "1 active sales campaign",
      "Automated welcome & sales DMs",
      "Basic analytics dashboard",
      "Communication tools",
      "5% transaction fee",
    ],
  },
  {
    tag: "annually",
    id: "elevate",
    title: "Elevate",
    subtitle: "For mid-sized communities ready to scale automation",
    discount: "40",
    discountImg: off40,
    oldPrice: "$1428",
    price: "$828",
    period: "/ per month",
    highlight: false, // glowing middle card
    button: "Start Automating",
    features: [
      "Up to 5,000 members",
      "Unlimited sales campaigns",
      "Advanced analytics + engagement reports",
      "CRM dashboard (lead tracking + payment history)",
      "Integration with Stripe & PayPal",
      "3% transaction fee",
    ],
  },
  {
    tag: "annually",
    id: "scale",
    title: "Scale",
    subtitle:
      "For established communities or agencies managing multiple servers.",
    discount: "25",
    discountImg: off25,
    oldPrice: "$2388",
    price: "$1718",
    period: "/ per month",
    highlight: true,
    button: "Start Automating",
    features: [
      "Up to 25,000 members",
      "Multi-server & multi-admin support",
      "Priority support + onboarding",
      "White-label checkout pages",
      "1.9% transaction fee",
      "Advanced affiliate program access",
      "Custom API integrations",
    ],
  },
  {
    tag: "annually",
    id: "enterprise",
    title: "Enterprise",
    subtitle:
      "For brands, networks, or SaaS platforms integrating Upgrade.Chat tech.",
    discount: null,
    discountImg: null,
    oldPrice: null,
    price: "Custom",
    period: "",
    highlight: false,
    button: "Contact Sales",
    features: [
      "Unlimited members & servers",
      "Dedicated account manager",
      "Custom integrations (CRM, AI bots, etc.)",
      "SLA + uptime guarantee",
      "Revenue-sharing or API licensing options",
    ],
  },
  {
    tag: "lifetime",
    id: "ignite",
    title: "Ignite",
    subtitle: "For creators just starting to monetize their communities.",
    discount: "50",
    discountImg: off50,
    oldPrice: "$795",
    price: "$279",
    period: "/ per month",
    highlight: false,
    button: "Start Automating",
    features: [
      "Up to 1,500 Active Subscribers",
      "One Store and Discord Server",
      "Automated Notification DMs",
      "Standard Analytics Dashboard",
      "Stripe and PayPal Integrations",
      "Direct Daily Payouts",
      "4.9% Platform Fee",
      "0.00 Per Transaction Fee",
    ],
  },
  {
    tag: "lifetime",
    id: "elevate",
    title: "Elevate",
    subtitle: "For mid-sized communities ready to scale automation",
    discount: "40",
    discountImg: off40,
    oldPrice: "$1995",
    price: "$699",
    period: "/ per month",
    highlight: false, // glowing middle card
    button: "Start Automating",
    features: [
      "Up to 3,000 Active Subscribers",
      "Up to 10 Stores & Discord Servers",
      "Automated Notification DMs",
      "Custom Branded Store & Checkout Pages",
      "Advanced Analytics & Engagement Reports",
      "Priority Support + Onboarding",
      "Stripe and PayPal Integrations",
      "Direct Daily Payouts",
      "3.9% Platform Fee",
      "0.00 Per Transaction Fee",
    ],
  },
  {
    tag: "lifetime",
    id: "scale",
    title: "Scale",
    subtitle:
      "For established communities or agencies managing multiple servers.",
    discount: "25",
    discountImg: off25,
    oldPrice: "$2388",
    price: "$1718",
    period: "/ per month",
    highlight: false,
    button: "Start Automating",
    features: [
      "Unlimited Active Subscribers",
      "Unlimited Stores & Discord Servers",
      "Automated Notification DMs",
      "Custom Branded Store & Checkout Pages",
      "Advanced Analytics & Tracking Reports",
      "Account Manager and Onboarding Support",
      "V2: Access to over 100 Payment Gateways",
      "V2: Advanced API, Zapier and Make Access",
      "V2: Advanced Affiliate Program Access",
      "V2: Advanced CRM System & Team Access",
      "Stripe and PayPal Integrations",
      "Direct Daily Payouts",
      "2.9% Platform Fee",
      "0.00 Per Transaction Fee",
    ],
  },
  {
    tag: "lifetime",
    id: "enterprise",
    title: "Enterprise",
    subtitle:
      "For brands, networks, or SaaS platforms integrating Upgrade.Chat tech.",
    discount: null,
    discountImg: null,
    oldPrice: null,
    price: "Custom",
    period: "",
    highlight: true,
    button: "Contact Sales",
    features: [
      "Unlimited members & servers",
      "Dedicated account manager",
      "Custom integrations (CRM, AI bots, etc.)",
      "SLA + uptime guarantee",
      "Revenue-sharing or API licensing options",
    ],
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const filteredPlans = plans.filter((p) => p.tag === billing);
  return (
    <section className="relative py-14 md:py-18 lg:py-22">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-3 mb-12 md:mb-15 xl:mb-20">
          <h6 className="gradient-text font-clashDisplay font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xxl:text-[68px] leading-tight -tracking-tight capitalize">
            Pick Your Plan. <br /> Multiply Your Earnings.
          </h6>

          <div className="text-white font-poppins500 text-xl md:text-2xl xl:text-[28px] xxl:px-9">
            <p>
              Whether you’re just starting or already scaling, every plan gets
              the Black Friday power-up — up to 50% OFF + $100 cashback on your
              first $1,000.
            </p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="relative w-fit mx-auto flex justify-center mb-10 md:mb-15 xl:mb-20">
          <div className="relative overflow-hidden w-fit md:w-120 mx-auto border border-white backdrop-blur-md rounded-xl flex">
            <button
              className={`cursor-pointer capitalize flex-1 p-4.5 font-clashDisplay font-semibold text-lg md:text-xl tracking-wider leading-none transition ${
                billing === "monthly" ? "bg-white text-black" : "text-white"
              }`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={`cursor-pointer capitalize flex-1 p-4.5 font-clashDisplay font-semibold text-lg md:text-xl tracking-wider leading-none transition ${
                billing === "annually" ? "bg-white text-black" : "text-white"
              }`}
              onClick={() => setBilling("annually")}
            >
              Annually
            </button>
            <button
              className={`cursor-pointer capitalize flex-1 p-4.5 font-clashDisplay font-semibold text-lg md:text-xl tracking-wider leading-none transition ${
                billing === "lifetime" ? "bg-white text-black" : "text-white"
              }`}
              onClick={() => setBilling("lifetime")}
            >
              lifetime
            </button>
          </div>
          {/* offer */}
          <div className="size-22 absolute -top-10 -right-10">
            <Image
              src={offer50round}
              alt="offer50round"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredPlans.map((plan,index) => (
            <div
              key={index}
              className={`relative rounded-3xl py-8 md:py-10 px-6 md:px-8 border pricingBg ${
                plan.highlight ? "border-commonRed/40" : "border-transparent"
              }`}
            >
              {/* Discount Badge */}
              {plan.discount && (
                <div className="absolute right-4 top-0">
                  <div className="size-24 relative">
                    <Image
                      src={plan.discountImg}
                      alt="discountImg"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              {/* Icon Top Left */}
              <div className="relative size-10 mb-6">
                <Image
                  src={plan.highlight ? roundIconRed : roundIcon}
                  alt="roundIcon"
                  className="w-full h-full"
                />
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-2xl font-clashDisplay font-semibold">
                  {plan.title}
                </h3>
                <p className="text-white font-sfPro400 text-sm">
                  {plan.subtitle}
                </p>
              </div>

              {/* Pricing */}
              <div className="mt-6">
                {plan.oldPrice && (
                  <p className="line-through text-[#7B7B7B] text-2xl font-clashDisplay font-normal leading-none">
                    {plan.oldPrice}
                  </p>
                )}
                <div className="flex items-center gap-3">
                  <p className="text-white font-clashDisplay text-[40px] xxl:text-[44px] font-bold leading-none">
                    {plan.price}
                  </p>
                  <p className="text-white/60 text-sm">{plan.period}</p>
                </div>
              </div>

              {/* Button */}
              <button
                className={`mt-6 w-full py-3 rounded-xl font-clashDisplay font-semibold tracking-widest ${
                  plan.highlight
                    ? "bg-white text-black shadow-[0_0_20px_#ff2d2d]"
                    : "bg-linear-to-r from-[#ffffff0d] to-transparent border border-white/30 text-white"
                }`}
              >
                {plan.button}
              </button>

              {/* Feature List */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                <p className="text-white text-base font-grotesk500">
                  What you will get
                </p>
                <ul className="space-y-4 text-white/80 font-grotesk400 text-[15px]">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="size-4 text-white/80 flex-none flex justify-center items-center text-[10px] border border-white rounded-full">
                        &#x2713;
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* top line */}
              <div className=""></div>
              {/* rotate border */}
              <div
                className={`absolute -top-2 left-20/100 right-20/100 h-4 ${
                  plan.highlight ? "block" : "hidden"
                }  `}
              >
                <Image
                  src={userBorder}
                  alt="userBorder"
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
