import React from 'react';

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (value: boolean) => void;
}

export default function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative w-14 h-7 rounded-full bg-blue-900 flex items-center transition-colors duration-300 focus:outline-none"
      >
        <span
          className={`absolute w-5 h-5 rounded-full bg-white transform transition-transform duration-300 ${
            isAnnual ? 'translate-x-8' : 'translate-x-1'
          }`}
        />
      </button>
      <div className="flex items-center space-x-2">
        <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
        <span className="bg-green-500/10 text-green-400 text-sm px-2 py-1 rounded">Save 20%</span>
      </div>
    </div>
  );
}