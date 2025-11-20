"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

interface CountdownProps {
  targetDate: string | number | Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const splitDigits = (num: number) => {
    return String(num).padStart(2, "0").split("");
  };

  return (
    <div className="grid grid-cols-3 gap-5 lg:gap-9 justify-center items-center">
      {/* DAYS */}
      <div className="text-center">
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 lg:gap-5">
          {splitDigits(timeLeft.days).map((digit, i) => (
            <div
              key={i}
              className="clockBg textStroke text-white text-2xl sm:text-5xl md:text-6xl xl:text-7xl xxl:text-8xl font-clashDisplay font-bold leading-snug py-4.5 px-4 flex items-center justify-center rounded-md"
            >
              {digit}
            </div>
          ))}
        </div>
        <p className="text-white font-sfPro400 text-base sm:text-2xl md:text-3xl xl:text-32 uppercase tracking-wider mt-3 sm:mt-4.5">
          Days
        </p>
      </div>

      {/* HOURS */}
      <div className="text-center">
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 lg:gap-5">
          {splitDigits(timeLeft.hours).map((digit, i) => (
            <div
              key={i}
              className="clockBg textStroke text-white text-2xl sm:text-5xl md:text-6xl xl:text-7xl xxl:text-8xl font-clashDisplay font-bold leading-snug py-4.5 px-4 flex items-center justify-center rounded-md"
            >
              {digit}
            </div>
          ))}
        </div>
        <p className="text-white font-sfPro400 text-base sm:text-2xl md:text-3xl xl:text-32 uppercase tracking-wider mt-3 sm:mt-4.5">
          Hours
        </p>
      </div>

      {/* MINUTES */}
      <div className="text-center">
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 lg:gap-5">
          {splitDigits(timeLeft.minutes).map((digit, i) => (
            <div
              key={i}
              className="clockBg textStroke text-white text-2xl sm:text-5xl md:text-6xl xl:text-7xl xxl:text-8xl font-clashDisplay font-bold leading-snug py-4.5 px-4 flex items-center justify-center rounded-md"
            >
              {digit}
            </div>
          ))}
        </div>
        <p className="text-white font-sfPro400 text-base sm:text-2xl md:text-3xl xl:text-32 uppercase tracking-wider mt-3 sm:mt-4.5">
          Minutes
        </p>
      </div>
    </div>
  );
};

export default Countdown;
