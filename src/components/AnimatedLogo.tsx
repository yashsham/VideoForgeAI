import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function AnimatedLogo({ size = 'md', className = '' }: AnimatedLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div 
      className={`relative group cursor-pointer ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label="VideoForge AI Logo"
    >
      {/* Base icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Sparkles className="w-full h-full text-blue-400 transition-all duration-300 group-hover:animate-pulse" />
      </div>
      
      {/* Rainbow gradient text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
      
      {/* Rotating border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: '3s' }}></div>
    </div>
  );
}