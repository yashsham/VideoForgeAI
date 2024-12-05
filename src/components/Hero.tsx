import React, { useState, useEffect } from 'react';
import { ArrowRight, Wand2, Video, Share2 } from 'lucide-react';
import DemoOverlay from './DemoOverlay';

const taglines = [
  "Transform ideas into stunning videos",
  "Create content with AI magic",
  "Edit videos through chat",
  "Generate AI clips instantly"
];

const gradientColors = [
  'from-blue-500 via-cyan-500 to-blue-500',
  'from-blue-400 via-cyan-500 to-blue-500',
  'from-cyan-500 via-blue-500 to-cyan-500',
  'from-blue-500 via-blue-400 to-cyan-500'
];

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentGradient, setCurrentGradient] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
      setCurrentGradient((prev) => (prev + 1) % gradientColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900/20 to-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2)_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-shine p-8 rounded-2xl backdrop-blur-sm border border-gray-800/50">
          <h1 className="text-5xl sm:text-6x1 lg:text-7x1 font-bold mb-8 animate-letter-spacing">
            <span className="text-glow animate-fade-in text-white">Create Amazing Videos with</span>{' '}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r animate-rainbow-text ${gradientColors[currentGradient]}`}>
              AI Magic
            </span>
          </h1>
          <div className="h-20">
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-typing overflow-hidden">
              {taglines[currentTagline]}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-float">
            <button className="hover-shine w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
              Start Creating
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="hover-shine w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {showDemo && <DemoOverlay onClose={() => setShowDemo(false)} />}
    </div>
  );
}