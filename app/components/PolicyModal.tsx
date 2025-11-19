'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

export default function PolicyModal({ isOpen, onClose, title, url }: PolicyModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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

  // Reset states when modal opens with new URL
  useEffect(() => {
    if (isOpen && url) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen, url]);

  // Handle iframe load events
  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative bg-linear-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="flex-1 relative overflow-hidden">
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
              <svg className="animate-spin h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-2 text-sm text-gray-400">Loading {title}...</p>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
              <X className="h-12 w-12 text-red-500" />
              <p className="mt-2 text-sm text-gray-400">Unable to load {title}</p>
              <p className="text-xs text-gray-500 mb-4">This content cannot be displayed in a frame</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Open in New Tab
              </a>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            className={`w-full h-full border-none ${isLoading || hasError ? 'hidden' : 'block'}`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
      </div>
    </div>
  );
}

