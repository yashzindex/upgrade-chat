import React from "react";
import Image from "next/image";
import actNowBox from "@/public/image/svg/actNowBox.svg";
import actNowBoxMd from "@/public/image/svg/actNowBoxMd.svg";
import actNowIcon1 from "@/public/image/svg/actNowIcon1.svg";
import actNowIcon2 from "@/public/image/svg/actNowIcon2.svg";
import actNowIcon3 from "@/public/image/svg/actNowIcon3.svg";

const items = [
  {
    icon: actNowIcon1,
    text: "These offers are never coming back",
  },
  {
    icon: actNowIcon2,
    text: "Black Friday = highest transaction season of the year",
  },
  {
    icon: actNowIcon3,
    text: "Competitors are taking bigger cuts… we’re paying YOU more",
  },
];

const ActNow = () => {
  return (
    <section className="relative py-9 md:py-12 xl:py-17 xxl:py-22">
      <div className="container">
        <div className="space-y-3 text-center mb-8 md:mb-10 xl:mb-12">
          <h5 className="gradient-text font-cld600 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xxl:text-[68px] leading-tight -tracking-tight capitalize text-center">
            Why Act Now?
          </h5>

          <div className="text-white font-poppins500 text-xl md:text-2xl xl:text-[28px]">
            <p>Every day you wait is money left on the table.</p>
          </div>
        </div>

        <div className="w-full max-w-230 xl:max-w-275 mx-auto">
          <div className="p-px">
            <div className="relative p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <div key={index} className="relative z-10 py-3 px-0 xl:p-5 space-y-3 ms:space-y-5 xl:space-y-8">
                  <div className="size-14 whiteCircle rounded-full flex justify-center items-center">
                    <Image
                      src={item.icon}
                      alt={`actNowIcon-${index}`}
                      className="size-6"
                    />
                  </div>
                  <div className="text-white font-inter600 text-base md:text-lg xl:text-xl space-y-2">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}

              <div className="absolute inset-0">
                <Image
                  src={actNowBox}
                  alt="actNowBox"
                  className="w-full h-full hidden lg:block"
                />
                <Image
                  src={actNowBoxMd}
                  alt="actNowBoxMd"
                  className="w-full h-full block lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActNow;
