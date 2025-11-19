'use client';

import { useEffect } from 'react';
import { X, Check, Sparkles } from 'lucide-react';

interface CashRewardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Milestone {
  sales: string;
  bonus: string;
  total: string;
}

const milestones: Milestone[] = [
  { sales: "$2,000", bonus: "$100", total: "$100" },
  { sales: "$20,000", bonus: "$100", total: "$200" },
  { sales: "$50,000", bonus: "$100", total: "$300" },
  { sales: "$100,000", bonus: "$200", total: "$500" },
];

const milestoneColors = ['purple', 'blue', 'orange', 'green'];

export default function CashRewardsModal({ isOpen, onClose }: CashRewardsModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative bg-linear-to-br from-gray-900 to-black border-2 border-red-600/30 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        <div className="p-6 sm:p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-500 px-4 py-2 rounded-full mb-4 border border-orange-600/30">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold text-sm sm:text-base">Exclusive Black Friday Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Cash Rewards for New Creators
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              Limited-time Cash Rewards for Black Friday Sign Ups to make the most with Upgrade.chat!
            </p>
          </div>

          {/* Milestones Grid */}
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
              {/* Progress Line - Desktop */}
              <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 bg-gray-700" style={{ left: '12.5%', right: '12.5%' }}>
                <div className="h-full bg-orange-500"></div>
              </div>
              
              {milestones.map((milestone, index) => {
                const color = milestoneColors[index];
                const bgColorClass = color === 'purple' ? 'bg-purple-500' : 
                                     color === 'blue' ? 'bg-blue-500' : 
                                     color === 'orange' ? 'bg-orange-500' : 'bg-green-500';
                const textColorClass = color === 'purple' ? 'text-purple-500' : 
                                       color === 'blue' ? 'text-blue-500' : 
                                       color === 'orange' ? 'text-orange-500' : 'text-green-500';
                const borderColorClass = color === 'purple' ? 'border-purple-500/30' : 
                                         color === 'blue' ? 'border-blue-500/30' : 
                                         color === 'orange' ? 'border-orange-500/30' : 'border-green-500/30';
                const hoverBorderClass = color === 'purple' ? 'hover:border-purple-500' : 
                                         color === 'blue' ? 'hover:border-blue-500' : 
                                         color === 'orange' ? 'hover:border-orange-500' : 'hover:border-green-500';
                
                return (
                  <div key={index} className="relative">
                    {/* Checkmark Circle */}
                    <div className="flex justify-center mb-4 sm:mb-6 relative z-10">
                      <div className={`${bgColorClass} text-white rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg border-4 border-gray-900`}>
                        <Check className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={3} />
                      </div>
                    </div>
                    
                    {/* Milestone Card */}
                    <div className={`bg-gradient-to-br from-gray-900/50 to-${color}-950/30 rounded-xl p-4 sm:p-6 border-2 ${borderColorClass} ${hoverBorderClass} transition-all duration-300 hover:scale-105`}>
                      <div className="mb-2 sm:mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-gray-400">Goal #{index + 1}</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{milestone.sales}</div>
                      <div className="space-y-1">
                        <div className="text-xs sm:text-sm text-gray-400">
                          <span className={`${textColorClass} font-semibold`}>{milestone.bonus}</span>
                        </div>
                        <div className={`text-base sm:text-lg font-bold ${textColorClass}`}>
                          Total: {milestone.total}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-4 sm:p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              Activate your subscription this Black Friday season to receive Cash Rewards:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  <strong>Launch Your New Store</strong> and collect <span className="text-purple-500 font-semibold">$2,000</span> - <span className="text-purple-500 font-semibold">$100 REWARD</span> (Total $100)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Reach your first <span className="text-blue-500 font-semibold">$20,000</span> sales milestone - <span className="text-blue-500 font-semibold">$100 REWARD</span> (Total $200)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Reach your first <span className="text-orange-500 font-semibold">$50,000</span> sales milestone - <span className="text-orange-500 font-semibold">$100 REWARD</span> (Total $300)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Reach your first <span className="text-green-500 font-semibold">$100,000</span> sales milestone - <span className="text-green-500 font-semibold">$200 REWARD</span> (Total $500)
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              At Upgrade.chat, we appreciate you, and want to reward and motivate you to start, create, sell and grow more. This incentive to launch and start earning money with your new store during this limited time Black Friday Season! You must maintain your active Upgrade.chat subscription to receive the cash rewards.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

