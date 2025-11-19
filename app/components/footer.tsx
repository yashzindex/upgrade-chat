"use client";
import React, { useState } from "react";
import CashRewardsModal from "./CashRewardsModal";
import PolicyModal from "./PolicyModal";
import logo from "@/public/image/logo.png";
import Image from "next/image";

const Footer = () => {
  const [isCashRewardsModalOpen, setIsCashRewardsModalOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    title: string;
    url: string;
  }>({
    isOpen: false,
    title: "",
    url: "",
  });
  const openPolicyModal = (title: string, url: string) => {
    setPolicyModal({ isOpen: true, title, url });
  };

  const closePolicyModal = () => {
    setPolicyModal({ isOpen: false, title: "", url: "" });
  };

  return (
    <>
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="container">
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <div className="flex justify-center mb-6">
              <Image 
                src={logo}
                alt="Upgrade.chat"
                className="h-9 w-auto"
              />
            </div>
            <p>&copy; 2025 Upgrade.chat. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm">
              <button
                onClick={() =>
                  openPolicyModal(
                    "Privacy Policy",
                    "https://docs.upgrade.chat/privacy-policy"
                  )
                }
                className="hover:text-white transition-colors underline underline-offset-2 hover:no-underline"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600">•</span>
              <button
                onClick={() =>
                  openPolicyModal(
                    "Terms of Service",
                    "https://docs.upgrade.chat/terms-of-service"
                  )
                }
                className="hover:text-white transition-colors underline underline-offset-2 hover:no-underline"
              >
                Terms of Service
              </button>
              <span className="text-gray-600">•</span>
              <button
                onClick={() =>
                  openPolicyModal(
                    "Acceptable Use Policy",
                    "https://docs.upgrade.chat/acceptable-use-policy"
                  )
                }
                className="hover:text-white transition-colors underline underline-offset-2 hover:no-underline"
              >
                Acceptable Use Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* Cash Rewards Modal */}
      <CashRewardsModal
        isOpen={isCashRewardsModalOpen}
        onClose={() => setIsCashRewardsModalOpen(false)}
      />

      {/* Policy Modal */}
      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={closePolicyModal}
        title={policyModal.title}
        url={policyModal.url}
      />
    </>
  );
};

export default Footer;
