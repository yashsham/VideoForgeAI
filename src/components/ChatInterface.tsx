import React, { useState, useEffect } from 'react';
import { Mic, Send, Image, Video, Music, Wand2, Sparkles } from 'lucide-react';

const pulsingDots = () => (
  <div className="flex space-x-1">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="w-2 h-2 bg-blue-400 rounded-full"
        style={{ animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite` }}
      ></div>
    ))}
  </div>
);

export default function ChatInterface() {
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      setIsTyping(true);
      const timeout = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10">
          <div className="p-6 border-b border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-between group">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient-text flex items-center gap-2">
                <Wand2 className="h-6 w-6 text-blue-400 animate-pulse" />
                AI Video Editor
              </h2>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Chat or speak with our AI to edit your video</p>
            </div>
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="h-96 p-6 overflow-y-auto bg-gradient-to-b from-black via-gray-900/50 to-black">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center p-1.5 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                  <Wand2 className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 group">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-2xl rounded-tl-none hover:from-gray-800 hover:to-gray-900 transition-all duration-300 border border-gray-800 hover:border-gray-700">
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      Hello! I'm your AI video editor. What would you like to create today?
                    </p>
                  </div>
                  {isTyping && (
                    <div className="mt-2 ml-2">
                      {pulsingDots()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {[
                  { Icon: Image, tooltip: "Add Image" },
                  { Icon: Video, tooltip: "Add Video" },
                  { Icon: Music, tooltip: "Add Music" }
                ].map(({ Icon, tooltip }) => (
                  <button
                    key={tooltip}
                    className="p-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 group relative"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tooltip}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="flex-1 relative group">
                <input
                  type="text"
                  placeholder="Type your editing instructions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    isRecording 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'text-gray-400 hover:text-red-400'
                  }`}
                  onClick={() => setIsRecording(!isRecording)}
                >
                  <Mic className="h-6 w-6" />
                </button>
                <button className="p-2 text-blue-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110">
                  <Send className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}