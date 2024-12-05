import React, { useState } from 'react';
import { initializePayment } from '../utils/razorpay';
import PricingCard from '../components/PricingCard';
import PricingToggle from '../components/pricing/PricingToggle';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import '../styles/animations.css';

const calculateAnnualPrice = (monthlyPrice: number) => {
  const annualPrice = monthlyPrice * 12 * 0.8; // 20% discount
  return Math.floor(annualPrice / 12);
};

const createPricingTiers = (isAnnual: boolean) => [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      { text: '720p video export', included: true },
      { text: '5 video projects', included: true },
      { text: 'Basic AI effects', included: true },
      { text: 'Community support', included: true },
      { text: 'Cloud storage (2GB)', included: true },
      { text: 'Advanced AI features', included: false },
      { text: 'Priority support', included: false },
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: `$${isAnnual ? calculateAnnualPrice(29) : '29'}`,
    description: 'Best for professionals',
    features: [
      { text: '4K video export', included: true },
      { text: 'Unlimited projects', included: true },
      { text: 'Advanced AI effects', included: true },
      { text: 'Priority support', included: true },
      { text: 'Cloud storage (50GB)', included: true },
      { text: 'Custom branding', included: true },
      { text: 'API access', included: false },
    ],
    buttonText: 'Start Pro Trial',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: `$${isAnnual ? calculateAnnualPrice(99) : '99'}`,
    description: 'For teams and businesses',
    features: [
      { text: '8K video export', included: true },
      { text: 'Unlimited everything', included: true },
      { text: 'Custom AI models', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Cloud storage (500GB)', included: true },
      { text: 'Custom branding', included: true },
      { text: 'API access', included: true },
    ],
    buttonText: 'Contact Sales',
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const pricingTiers = createPricingTiers(isAnnual);

  const handleSubscription = async (tier: any) => {
    if (tier.price === 'Free') {
      // Handle free tier signup
      return;
    }

    const plan = {
      id: tier.id,
      name: tier.name,
      price: parseInt(tier.price.replace('$', '')),
      interval: isAnnual ? 'yearly' : 'monthly'
    };

    await initializePayment(plan);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-800 transition-all duration-300 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-400 animate-typing mx-auto max-w-2xl">
              Choose the perfect plan for your video creation needs
            </p>
          </div>

          <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {pricingTiers.map((tier) => (
              <div key={tier.id} className="hover-shine">
                <PricingCard 
                  tier={tier} 
                  onSubscribe={() => handleSubscription(tier)}
                />
              </div>
            ))}
          </div>

          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}