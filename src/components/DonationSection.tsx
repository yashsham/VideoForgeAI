import React from 'react';
import { Heart, Gift, Sparkles, ArrowRight } from 'lucide-react';

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
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Support Our Vision
          </span>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Donate for Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your contribution helps us develop cutting-edge AI technologies and innovative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-navy-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-gray-300 mb-8">
            <ArrowRight className="h-5 w-5 text-blue-400 animate-bounce" />
            <span>Click the VideoForge AI logo to make a donation</span>
            <ArrowRight className="h-5 w-5 text-blue-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}