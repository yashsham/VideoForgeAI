import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    stars: 5,
    text: "VideoForge AI has revolutionized my content creation process. The AI-powered editing is simply amazing!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "YouTuber",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    stars: 5,
    text: "The voice command feature saves me hours of editing time. Best AI video editor I've ever used!"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    stars: 5,
    text: "Incredible AI capabilities! The automatic scene transitions and effects are mind-blowing."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Filmmaker",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    stars: 5,
    text: "As a professional filmmaker, I'm impressed by the quality and ease of use. A game-changer!"
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    stars: 5,
    text: "The multi-platform sharing feature is seamless. Makes my social media workflow so much easier!"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient-text mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied creators who have transformed their video content
          </p>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex justify-center">
            <div className="w-full overflow-hidden">
              <div className="flex space-x-6 animate-scroll">
                <div className="flex space-x-6 shrink-0">
                  {[...reviews, ...reviews].map((review, index) => (
                    <div
                      key={`${review.id}-${index}`}
                      className="w-[400px] flex-shrink-0 bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                          <p className="text-blue-400">{review.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(review.stars)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-300">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}