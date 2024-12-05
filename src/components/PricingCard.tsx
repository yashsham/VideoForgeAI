import React from 'react';
import { Check } from 'lucide-react';
import '../styles/animations.css';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  onSubscribe: () => void;
}

export default function PricingCard({ tier, onSubscribe }: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl ${
      tier.highlighted 
        ? 'bg-gradient-to-b from-blue-600 to-blue-800 border-2 border-blue-400 transform scale-105' 
        : 'bg-navy-900 border border-gray-800'
    } p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover-shine`}>
      {tier.highlighted && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold hover-shine">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-gray-400 mb-4">{tier.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-white">{tier.price}</span>
          {tier.price !== 'Free' && <span className="text-gray-400 ml-2">/month</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <li 
            key={index} 
            className={`flex items-center ${feature.included ? 'text-white' : 'text-gray-500 line-through'}`}
          >
            <Check className={`h-5 w-5 mr-3 ${feature.included ? 'text-blue-400' : 'text-gray-600'}`} />
            {feature.text}
          </li>
        ))}
      </ul>

      <button 
        onClick={onSubscribe}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover-shine ${
          tier.highlighted
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        } hover:scale-105`}
      >
        {tier.buttonText}
      </button>
    </div>
  );
}