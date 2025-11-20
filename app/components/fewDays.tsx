import React from "react";
import Countdown from "./countdown";

const FewDays = () => {
  return (
    <section className="relative pt-10 md:pt-15 pb-10 md:pb-13 xl:pb-16 xxl:pb-21">
      <div className="container">
        <div className="w-full max-w-230 mx-auto">
          <div className="gradient-text font-clashDisplay font-medium text-2xl md:text-3xl xl:text-3xl xxl:text-40 leading-tight tracking-wide text-center mb-5">
            <h2>Only available for a few days — then it&apos;s gone.</h2>
          </div>

          {/* counter */}
          <div className="w-full max-w-184 mx-auto">
            <Countdown targetDate="2025-11-28T00:00:00Z" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FewDays;
