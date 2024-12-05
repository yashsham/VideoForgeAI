import React from 'react';
import { X, Play, Pause, SkipBack } from 'lucide-react';

const demoClips = [
  {
    id: 1,
    title: "AI Scene Generation",
    preview: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1280&h=720&q=80",
    description: "Generate custom scenes with AI"
  },
  {
    id: 2,
    title: "Smart Transitions",
    preview: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1280&h=720&q=80",
    description: "Seamless AI-powered transitions"
  },
  {
    id: 3,
    title: "Auto Color Grading",
    preview: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1280&h=720&q=80",
    description: "Professional color correction"
  }
];

export default function DemoOverlay({ onClose }) {
  const [currentClip, setCurrentClip] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  React.useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentClip((prev) => (prev + 1) % demoClips.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-white hover:text-blue-400 transition-colors p-2"
        >
          <X className="h-8 w-8" />
        </button>
      </div>

      <div className="max-w-6xl w-full mx-4">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-navy-900 border border-blue-900/50">
          {demoClips.map((clip, index) => (
            <div
              key={clip.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentClip ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={clip.preview}
                alt={clip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{clip.title}</h3>
                <p className="text-gray-300">{clip.description}</p>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 right-6 flex items-center space-x-4">
            <button
              onClick={() => setCurrentClip(0)}
              className="p-2 text-white hover:text-blue-400 transition-colors"
            >
              <SkipBack className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 text-white hover:text-blue-400 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
            <div
              className="h-full bg-blue-500"
              style={{
                width: `${((currentClip + 1) / demoClips.length) * 100}%`,
                transition: 'width 3s linear',
              }}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {demoClips.map((clip, index) => (
            <button
              key={clip.id}
              onClick={() => {
                setCurrentClip(index);
                setIsPlaying(false);
              }}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                currentClip === index
                  ? 'border-blue-500 scale-105'
                  : 'border-transparent hover:border-blue-500/50'
              }`}
            >
              <img
                src={clip.preview}
                alt={clip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-medium">{clip.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}