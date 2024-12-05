import React from 'react';
import { Play, Settings, Share2, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Play,
    title: "Choose a Template",
    description: "Browse our collection and select a template that matches your needs."
  },
  {
    icon: Settings,
    title: "Customize Content",
    description: "Edit text, images, and colors to match your brand and message."
  },
  {
    icon: Sparkles,
    title: "Add AI Effects",
    description: "Enhance your video with AI-powered transitions and effects."
  },
  {
    icon: Share2,
    title: "Export & Share",
    description: "Download your video or share directly to social media."
  }
];

export default function GettingStarted() {
  return (
    <div className="bg-navy-900/50 rounded-xl p-8 mb-12 border border-blue-900/30 hover:border-blue-500/20 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-6 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 transition-all duration-300">
        Getting Started
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.title}
              className="group h-full"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <div className="relative bg-navy-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Shine effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Icon className="h-6 w-6 text-white relative z-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-1">
                    {step.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}