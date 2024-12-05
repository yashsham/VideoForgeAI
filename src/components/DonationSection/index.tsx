import React from 'react';
import { Heart, Gift, Sparkles, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Heart,
    title: 'Support Innovation',
    description: 'Help us push the boundaries of AI video technology'
  },
  {
    icon: Gift,
    title: 'Early Access',
    description: 'Get exclusive access to new features before public release'
  },
  {
    icon: Sparkles,
    title: 'Special Recognition',
    description: 'Your name in our innovation partners wall'
  }
];

export default function DonationSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4 hover:bg-blue-500/20 transition-colors duration-300">
            Support Our Vision
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <AnimatedText 
              text="Donate for Innovation" 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-flow"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your contribution helps us develop cutting-edge AI technologies and innovative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="h-full"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeIn 0.5s ease-out forwards',
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-gray-300 mb-8 bg-navy-900/50 px-6 py-3 rounded-full border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300">
            <ArrowRight className="h-5 w-5 text-blue-400 animate-bounce" />
            <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Click the VideoForge AI logo to make a donation
            </span>
            <ArrowRight className="h-5 w-5 text-blue-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}