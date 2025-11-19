"use client";
import React, { useState, useRef, MutableRefObject, useEffect } from "react";
import Image from "next/image";
import arrowDown from "@/public/image/svg/arrowDown.svg";
import faqGradient from "@/public/image/faqGradient.png";


// ----------------------
// Types
// ----------------------
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  items?: FaqItem[];
}

// ----------------------
// Component
// ----------------------
const Faq: React.FC<FaqProps> = ({ items = [] }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // Open all items by default on first render
  useEffect(() => {
    setOpenIndexes(items.map((_, index) => index));
  }, [items]);

  // Ref for dynamic content height
  const contentRefs = useRef<HTMLDivElement[]>([]) as MutableRefObject<
    HTMLDivElement[]
  >;

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // close
        : [...prev, index] // open
    );
  };

  return (
    <section className="relative pt-9 md:pt-12 xl:pt-15 xxl:pt-17.5">
      <div className="container">
        <div className="text-center mb-12">
          <h6 className="gradient-text font-clashDisplay font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xxl:text-[68px] leading-tight -tracking-tight capitalize">
            Frequently Asked Questions
          </h6>
        </div>

        <div className="w-full max-w-243 mx-auto">
          {items.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div key={index} className="py-5 lg:py-7">
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="cursor-pointer w-full flex justify-between items-center gap-5 text-left"
                >
                  <h6 className="font-clashDisplay font-medium text-white text-lg md:text-xl xl:text-2xl tracking-widest">
                    {faq.question}
                  </h6>

                  <Image
                    src={arrowDown}
                    alt="arrowDown"
                    className={`size-6 flex-none transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Body */}
                <div
                  ref={(el) => {
                    if (el) contentRefs.current[index] = el;
                  }}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    height: isOpen
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <div className="mt-2 font-clashDisplay font-normal text-white/70 text-lg md:text-xl xl:text-2xl tracking-widest space-y-2 w-85/100">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-[10%] bottom-0 left-0 right-0 -z-1">
        <Image src={faqGradient} alt="faqGradient" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Faq;
