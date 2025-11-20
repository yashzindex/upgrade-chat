import Image from "next/image";
import Hero from "./components/hero";
import EndingSoon from "./components/endingSoon";
import Faq, { FaqItem } from "./components/faq";
import VanishIn from "./components/vanishIn";
import Works from "./components/works";
import FewDays from "./components/fewDays";
import Unmissiable from "./components/unmissiable";
import ExclusiveCashRewards from "./components/exclusiveCashRewards";
import HowEasy from "./components/howEasy";
import ActNow from "./components/actNow";
import Users from "./components/users";
import Offer from "./components/offer";
import Pricing from "./components/pricing";
import actPlanBg from "@/public/image/actPlanBg.png";
import unmissable from "@/public/image/unmissable.png";
import Footer from "./components/footer";
import PricingSection from "./components/PricingSection";

export default function Home() {
  const faqItems: FaqItem[] = [
    {
      question: "Do I really get $100 free?",
      answer: "Yes. Earn your first $1000, and we’ll instantly match it.",
    },
    {
      question: "I’m already a user. What’s in it for me?",
      answer:
        "Exclusive discounted credits + holiday perks that only exist this weekend.",
    },
    {
      question: "What’s the catch?",
      answer: "There isn’t one. No fees, no strings. Just pure growth.",
    },
  ];

  return (
    <>
      <Hero />
      <div className="relative">
        <FewDays />
        <Unmissiable />
        <div className="absolute top-10/100 -bottom-25/100 left-0 right-0 -z-1">
          <Image src={unmissable} alt="unmissable" className="w-full h-full" />
        </div>
      </div>
      <ExclusiveCashRewards />
      <Offer />
      <Users />
      <div className="relative">
        <ActNow />
        {/* <Pricing /> */}
        <PricingSection />

        <div className="absolute top-0 left-0 right-0 h-70/100 -z-1">
          <Image src={actPlanBg} alt="actPlanBg" className="w-full h-full" />
        </div>
      </div>
      <HowEasy />
      <Works />
      <VanishIn />
      <Faq items={faqItems} />;
      <EndingSoon />
      <Footer />
    </>
  );
}
