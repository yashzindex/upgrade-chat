import Image from "next/image";
import React from "react";
import owner1 from "@/public/image/owner1.png";
import owner2 from "@/public/image/owner2.png";
import owner3 from "@/public/image/owner3.png";
import worksTopBlock from "@/public/image/svg/worksTopBlock.svg";
import arrowForward from "@/public/image/svg/arrowForward.svg";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    image: owner1,
    text: "Saved us thousands in operational costs. The ROI is unbeatable.",
    author: "~ Mike Chen (Startup Founder)",
  },
  {
    id: 2,
    image: owner2,
    text: "Game-changer for my workflow. Can't imagine working without it now.",
    author: "~ Emily Rodriguez (Creater)",
  },
  {
    id: 3,
    image: owner3,
    text: "The best investment I've made this year. The AI capabilities are incredible!",
    author: "~ Sarah Johnson (Director)",
  },
  {
    id: 4,
    image: owner1,
    text: "Saved us thousands in operational costs. The ROI is unbeatable.",
    author: "~ Mike Chen (Startup Founder)",
  },
  {
    id: 5,
    image: owner2,
    text: "Game-changer for my workflow. Can't imagine working without it now.",
    author: "~ Emily Rodriguez (Creater)",
  },
  {
    id: 6,
    image: owner3,
    text: "The best investment I've made this year. The AI capabilities are incredible!",
    author: "~ Sarah Johnson (Director)",
  },
];

const Works = () => {
  return (
    <section className="relative pt-10 sm:pt-15 md:pt-30 lg:pt-38 pb-15.5">
      {/* background blocks */}
      <div className="max-md:hidden absolute top-0 left-0 right-0 w-full after:absolute after:top-0 after:h-95/100 after:w-full after:bg-linear-to-b after:from-[#000000] from-50% after:to-[#0000] after:to-100">
        <div className="grid grid-cols-5 gap-3 h-36 sm:h-38 md:h-50 lg:h-61 xl:h-67 xxl:h-70">
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#060606] from-50% after:to-[#06060603] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#060606] from-50% after:to-[#06060603] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#060606] from-50% after:to-[#06060603] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#060606] from-50% after:to-[#06060603] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#060606] from-50% after:to-[#06060603] after:to-100"></div>
        </div>
      </div>

      <div className="container">
        <div className="mb-9 md:mb-10 xl:mb-13 relative z-10">
          <h6 className="gradient-text font-clashDisplay font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xxl:text-68 leading-tight -tracking-tight capitalize text-center">
            Proof That It Works
          </h6>
        </div>
      </div>

      <div className="relative z-10 mb-9 md:mb-14 xl:mb-19.5">
        <Marquee
          speed={20}
          pauseOnClick
          pauseOnHover
          gradient={true}
          gradientColor="black"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="h-full bg-[#1D0808] rounded-2xl md:rounded-[20px] p-5 xl:p-8 w-60 md:w-70 xl:w-80 min-h-70 xl:min-h-80 mx-1.5! flex flex-col justify-between gap-6"
            >
              <div className="inline-flex flex-col gap-5.5 h-full w-full">
                <div className="size-16 md:size-20 xxl:size-23.5 block rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt="testimonial-user"
                    className="rounded-full w-full h-full"
                  />
                </div>
                <div className="h-full text-white/60 font-clashDisplay font-normal text-base md:text-lg leading-snug tracking-wide">
                  <p>{item.text}</p>
                </div>
              </div>

              <div className="mt-auto block">
                <h6 className="gradient-text font-clashDisplay font-semibold text-sm md:text-base -tracking-tight">
                  {item.author}
                </h6>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="relative px-5 z-10">
        <Link
          href="#pricing"
          className="w-fit mx-auto bg-white shadow-owner rounded-xl flex max-md:flex-col items-center gap-3 md:gap-2 py-4 md:py-2 px-5 max-md:text-center"
        >
          <div className="flex items-center -space-x-1.5 md:-space-x-3.5">
            <span>
              <Image src={owner1} alt="owner1" className="rounded-full w-10 md:w-12 flex-none" />
            </span>
            <span>
              <Image src={owner2} alt="owner2" className="rounded-full w-10 md:w-12 flex-none" />
            </span>
            <span>
              <Image src={owner3} alt="owner3" className="rounded-full w-10 md:w-12 flex-none" />
            </span>
          </div>
          <div className="flex max-md:flex-col items-center gap-3">
            <p className="text-commonRed font-clashDisplay font-semibold text-xl leading-tight">
              Join <span className="font-bold">100,000+</span> Creators Who Already Made the Switch
            </p>
            <Arrow />
          </div>
        </Link>
      </div>

      {/* background blocks */}
      <div className="max-md:hidden absolute bottom-0 left-0 right-0 w-full after:absolute after:bottom-0 after:h-55/100 after:w-full after:bg-linear-to-b after:from-[#0000] from-50% after:to-[#000000] after:to-100">
        <div className="grid grid-cols-5 gap-3 h-47 lg:h-49 xl:h-48 xxl:h-49">
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#06060603] from-50% after:to-[#060606] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#06060603] from-50% after:to-[#060606] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#06060603] from-50% after:to-[#060606] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#06060603] from-50% after:to-[#060606] after:to-100"></div>
          <div className="bg-[#1D0808] rounded-2xl md:rounded-[20px] relative after:absolute after:inset-0 after:w-full after:h-full after:bg-linear-to-b after:from-[#06060603] from-50% after:to-[#060606] after:to-100"></div>
        </div>
      </div>
    </section>
  );
};

const Arrow = () => {
  return (
    <span>
      <Image src={arrowForward} alt="arrowForward" className="w-5" />
    </span>
  );
};

export default Works;
