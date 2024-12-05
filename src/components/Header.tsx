import React, { useState } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { makePayment } from '../utils/payment';

interface HeaderProps {
  onAuthClick: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
}

export default function Header({ onAuthClick, onPageChange, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDonation = async () => {
    await makePayment(1000); // Amount in INR
  };

  const navItems = [
    { name: 'Dashboard', page: 'dashboard' },
    { name: 'Templates', page: 'templates' },
    { name: 'Projects', page: 'projects' },
    { name: 'Pricing', page: 'pricing' },
  ];

  return (
    <header className="fixed top-0 w-full bg-navy-900/90 backdrop-blur-sm border-b border-blue-900/50 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => {
                onPageChange('home');
                handleDonation();
              }}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <Sparkles className="h-8 w-8 text-blue-400 group-hover:animate-pulse transition-all duration-300" />
              <span className="text-xl font-bold text-white relative">
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 bg-clip-text text-transparent transition-opacity duration-300 bg-[length:200%_auto] animate-gradient-text">
                  VideoForge AI
                </span>
                <span className="relative group-hover:opacity-0 transition-opacity duration-300">
                  VideoForge AI
                </span>
              </span>
            </button>
            <div className="hidden lg:flex items-center space-x-8 ml-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onPageChange(item.page)}
                  className={`${
                    currentPage === item.page
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  } transition-colors`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={onAuthClick}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onAuthClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all hover:scale-105"
            >
              Sign Up
            </button>
          </div>

          <button
            className="lg:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-navy-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onPageChange(item.page);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  currentPage === item.page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-navy-700'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onAuthClick();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-gray-300 hover:bg-navy-700 rounded-md"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}