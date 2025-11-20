'use client';

import { useState } from 'react';

interface PricingPlan {
  name: string;
  monthlyPriceBF: number;
  monthlyPriceRegular: number;
  annualPriceBF: number;
  annualPriceRegular: number;
  lifetimePriceBF: number;
  lifetimePriceRegular: number;
  features: string[];
  isPopular?: boolean;
}

type PricingPeriod = 'monthly' | 'annual' | 'lifetime';

const pricingPlans: PricingPlan[] = [
  {
    name: 'Ignite',
    monthlyPriceBF: 17,
    monthlyPriceRegular: 49,
    annualPriceBF: 175,
    annualPriceRegular: 495,
    lifetimePriceBF: 279,
    lifetimePriceRegular: 795,
    features: [
      'Up to 1,500 Active Subscribers',
      'One Store and Discord Server',
      'Automated Notification DMs',
      'Standard Analytics Dashboard',
      'Stripe and PayPal Integrations',
      'Direct Daily Payouts',
      '4.9% Platform Fee',
      '0.00 Per Transaction Fee'
    ],
  },
  {
    name: 'Elevate',
    monthlyPriceBF: 49,
    monthlyPriceRegular: 139,
    annualPriceBF: 475,
    annualPriceRegular: 1375,
    lifetimePriceBF: 699,
    lifetimePriceRegular: 1995,
    isPopular: true,
    features: [
      'Up to 3,000 Active Subscribers',
      'Up to 10 Stores & Discord Servers',
      'Automated Notification DMs',
      'Custom Branded Store & Checkout Pages',
      'Advanced Analytics & Engagement Reports',
      'Priority Support + Onboarding',
      'Stripe and PayPal Integrations', 
      'Direct Daily Payouts',
      '3.9% Platform Fee',
      '0.00 Per Transaction Fee'
    ],
  },
  {
    name: 'Scale',
    monthlyPriceBF: 139,
    monthlyPriceRegular: 399,
    annualPriceBF: 995,
    annualPriceRegular: 2875,
    lifetimePriceBF: 1399,
    lifetimePriceRegular: 3995,
    features: [
      'Unlimited Active Subscribers',
      'Unlimited Stores & Discord Servers',
      'Automated Notification DMs',
      'Custom Branded Store & Checkout Pages',
      'Advanced Analytics & Tracking Reports',
      'Account Manager and Onboarding Support',
      'V2: Access to over 100 Payment Gateways',
      'V2: Advanced API, Zapier and Make Access',
      'V2: Advanced Affiliate Program Access',
      'V2: Advanced CRM System & Team Access',
      'Stripe and PayPal Integrations', 
      'Direct Daily Payouts',
      '2.9% Platform Fee',
      '0.00 Per Transaction Fee'
    ],
  },
];

export default function PricingSection() {
  const [pricingPeriod, setPricingPeriod] = useState<PricingPeriod>('annual');

  return (
    <section className="pt-0 pb-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="gradient-text text-4xl md:text-5xl font-bold text-center mb-4">
          Build Your Empire!
        </h2>
        <h3 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-6">
          Multiply Your Earnings.
        </h3>
        <p className="text-center text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 text-sm sm:text-base lg:text-lg">
          Whether you're choosing monthly, annual, or lifetime, every plan you choose today
          unlocks a massive 65% OFF plus $500 Cash Rewards on your first sales milestones.
        </p>

        {/* Pricing Period Toggle */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:mb-16">
          <div className="inline-flex bg-gray-900 border border-gray-800 rounded-lg p-1">
            <button
              onClick={() => setPricingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm sm:text-base font-medium transition-all ${
                pricingPeriod === 'monthly'
                  ? 'bg-gradient-to-br from-emerald-600 to-green-700 text-white shadow-lg shadow-emerald-600/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPricingPeriod('annual')}
              className={`px-6 py-2 rounded-md text-sm sm:text-base font-medium transition-all ${
                pricingPeriod === 'annual'
                  ? 'bg-gradient-to-br from-emerald-600 to-green-700 text-white shadow-lg shadow-emerald-600/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setPricingPeriod('lifetime')}
              className={`px-6 py-2 rounded-md text-sm sm:text-base font-medium transition-all ${
                pricingPeriod === 'lifetime'
                  ? 'bg-gradient-to-br from-emerald-600 to-green-700 text-white shadow-lg shadow-emerald-600/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Lifetime
            </button>
          </div>
          {pricingPeriod === 'monthly' && (
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              MAXIMUM FLEXIBILITY - CANCEL ANYTIME
            </span>
          )}
          {pricingPeriod === 'annual' && (
            <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Save 65% - Exlusive Black Friday Deal!
            </span>
          )}
          {pricingPeriod === 'lifetime' && (
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              UNBEATABLE VALUE - LIFETIME SAVINGS OVER 65%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              pricingPeriod={pricingPeriod}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, pricingPeriod }: { plan: PricingPlan; pricingPeriod: PricingPeriod }) {
  // Determine prices based on pricing period
  let blackFridayPrice: number;
  let regularPrice: number;
  
  switch (pricingPeriod) {
    case 'annual':
      blackFridayPrice = plan.annualPriceBF;
      regularPrice = plan.annualPriceRegular;
      break;
    case 'lifetime':
      blackFridayPrice = plan.lifetimePriceBF;
      regularPrice = plan.lifetimePriceRegular;
      break;
    default: // monthly
      blackFridayPrice = plan.monthlyPriceBF;
      regularPrice = plan.monthlyPriceRegular;
  }
  
  // Calculate discount percentage
  const discountPercentage = regularPrice > 0 
    ? Math.round(((regularPrice - blackFridayPrice) / regularPrice) * 100)
    : 0;

  // Determine if this card should be highlighted
  const isHighlighted = 
    pricingPeriod === 'lifetime' 
      ? plan.name === 'Scale'
      : pricingPeriod === 'annual'
        ? plan.name === 'Scale'
        : plan.isPopular;

  // Determine badge text
  const getBadgeText = () => {
    if (pricingPeriod === 'lifetime' && plan.name === 'Scale') return 'MAXIMUM SAVINGS';
    if (pricingPeriod === 'annual' && plan.name === 'Scale') return 'BEST VALUE';
    return 'MOST POPULAR';
  };

  // Determine badge colors
  const badgeColor = 
    pricingPeriod === 'lifetime' && plan.name === 'Scale'
      ? 'bg-gradient-to-r from-yellow-500 to-amber-600'
      : pricingPeriod === 'annual' && plan.name === 'Scale'
        ? 'bg-gradient-to-r from-emerald-500 to-green-600'
        : 'bg-red-600';
  
  const borderColor = 
    pricingPeriod === 'lifetime' && plan.name === 'Scale'
      ? 'border-yellow-500'
      : pricingPeriod === 'annual' && plan.name === 'Scale'
        ? 'border-emerald-500'
        : 'border-red-600';

  const neonBorderClass = 
    pricingPeriod === 'lifetime' && plan.name === 'Scale'
      ? 'neon-border-gold'
      : pricingPeriod === 'annual' && plan.name === 'Scale'
        ? 'neon-border-green'
        : 'neon-border';

  // Map plan names to their SVG files
  const planAssets = {
    'Ignite': {
      icon: '/image/svg/ignite.svg',
      background: '/image/svg/Rectangle 39789-ignite.svg'
    },
    'Elevate': {
      icon: '/image/svg/elevate.svg',
      background: '/image/svg/Rectangle 39789-elevate.svg'
    },
    'Scale': {
      icon: '/image/svg/scale.svg',
      background: '/image/svg/Rectangle 39789-scale.svg'
    }
  };

  const assets = planAssets[plan.name as keyof typeof planAssets];

  return (
    <div className="relative">
      {/* Badge positioned outside the card */}
      {isHighlighted && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${badgeColor} text-white text-xs font-bold px-4 py-1 rounded-full z-20`}>
          {getBadgeText()}
        </div>
      )}
      
      {/* Card with overflow-hidden for header clipping */}
      <div
        className={`relative bg-gradient-to-b from-gray-900 to-black border rounded-2xl overflow-hidden  pricingBg ${
          isHighlighted
            ? `${borderColor} ${neonBorderClass}`
            : 'border-gray-800'
        }`}
      >
        {discountPercentage > 0 && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {discountPercentage}% OFF
          </div>
        )}

        {/* Header with background and icon */}
        <div className="relative h-32 sm:h-36 flex flex-col items-center justify-center overflow-hidden">
        {/* Background SVG */}
        <img 
          src={assets?.background} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <img 
            src={assets?.icon} 
            alt={plan.name}
            className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">{plan.name}</h3>
        </div>
      </div>

      {/* Pricing Content */}
      <div className="p-6">
        <div className="mb-6">
          {plan.monthlyPriceBF > 0 || plan.monthlyPriceRegular > 0 ? (
            <>
              {pricingPeriod === 'lifetime' ? (
                <>
                  <div className="flex items-baseline gap-1 sm:gap-2 mb-2">
                    <span className="gradient-text text-4xl sm:text-5xl font-bold">
                      ${blackFridayPrice}
                    </span>
                    <span className="text-white/80 text-sm sm:text-base">once</span>
                  </div>
                  {regularPrice > 0 && (
                    <div className="text-white/90 text-lg sm:text-xl font-semibold mb-1">
                      $<span className="strikethrough-diagonal inline-block">{regularPrice}</span> lifetime
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-1 sm:gap-2 mb-2">
                    <span className="gradient-text text-4xl sm:text-5xl font-bold">
                      ${pricingPeriod === 'annual' ? Math.floor(blackFridayPrice / 12) : blackFridayPrice}
                    </span>
                    <span className="text-white/80 text-sm sm:text-base">/ month</span>
                  </div>
                  {regularPrice > 0 && (
                    <div className="flex items-baseline gap-2 text-white/90 text-lg sm:text-xl font-semibold mb-1">
                      <span>
                        $<span className="strikethrough-diagonal inline-block">{regularPrice}</span>{pricingPeriod === 'annual' ? '/yr' : '/month'}
                      </span>
                      {pricingPeriod === 'annual' && (
                        <span className="text-xs sm:text-sm text-white/80 tracking-wider">
                          Billed ${blackFridayPrice}/yr
                        </span>
                      )}
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <div className="text-xl sm:text-2xl font-bold">Contact Sales</div>
          )}
        </div>

        <button 
          className="w-full text-white font-bold py-3 text-sm sm:text-base rounded-lg mb-6 transition-all flex items-center justify-center gap-2"
          style={{
            backgroundColor: plan.name === 'Ignite' ? '#7a33cb' : plan.name === 'Elevate' ? '#d42fcf' : '#e57c04',
            opacity: 1
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <img 
            src={assets?.icon} 
            alt=""
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span>{(plan.monthlyPriceBF > 0 || plan.monthlyPriceRegular > 0) ? 'Get Started' : 'Contact Us'}</span>
        </button>

        <div className="space-y-3">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  color: plan.name === 'Ignite' ? '#7a33cb' : plan.name === 'Elevate' ? '#d42fcf' : '#e57c04'
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
