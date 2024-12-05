import React from 'react';
import { MessageSquare, Mic, Wand2, Share2, Video, Music, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Chat-Based Editing',
    description: 'Edit your videos through natural conversation with our AI assistant.',
  },
  {
    icon: Mic,
    title: 'Voice Commands',
    description: 'Speak your edits naturally and watch them come to life instantly.',
  },
  {
    icon: Video,
    title: 'AI Video Generation',
    description: 'Generate custom video clips and scenes using text descriptions.',
  },
  {
    icon: Music,
    title: 'Smart Audio',
    description: 'Add AI-generated music and sound effects that match your content.',
  },
  {
    icon: Wand2,
    title: 'Magic Effects',
    description: 'Apply stunning visual effects and transitions with AI assistance.',
  },
  {
    icon: Share2,
    title: 'Multi-Platform Share',
    description: 'Share directly to YouTube, Instagram, Twitter, and more.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient-text mb-4">
            AI-Powered Video Creation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-typing">
            Everything you need to create professional videos with the power of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="hover-shine p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg group bg-gradient-to-br from-gray-900 to-black"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-blue-400 hover:text-cyan-300 font-medium group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}