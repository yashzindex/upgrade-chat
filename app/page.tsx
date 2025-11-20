import Image from "next/image";
import Hero from "./components/hero";
import EndingSoon from "./components/endingSoon";
import Faq, { FaqItem } from "./components/faq";
import VanishIn from "./components/vanishIn";
import Works from "./components/works";
import FewDays from "./components/fewDays";
import Unmissiable from "./components/unmissiable";
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
      question: "Who can get this deal?",
      answer:
        "Both new and existing users can take advantage of this Black Friday offer. New users get 65% OFF plus $500 Cash Rewards, while existing users can upgrade or renew with the same benefits.",
    },
    {
      question: "How long does this offer last?",
      answer:
        "This is a limited-time Black Friday offer. Check the countdown timer to see exactly how much time is left. Once the timer hits zero, the deal is gone.",
    },
    {
      question: "Can I combine this with other offers?",
      answer:
        "The Black Friday discount cannot be combined with other promotional offers, but the Cash Rewards are stackable with your existing credits.",
    },
    {
      question: "What are the Cash Rewards?",
      answer:
        "You can earn $500 in Cash Rewards as credit that you can use towards future purchases or upgrades on the platform. It's added to your account after hitting your first sales milestones.",
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
      <Offer />
      <Users />
      <div className="relative">
        <ActNow />
        {/* <Pricing /> */}
        <div id="pricing">
          <PricingSection />
        </div>

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
