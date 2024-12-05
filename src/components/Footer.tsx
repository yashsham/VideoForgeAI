import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const footerLinks = {
  Product: ['Features', 'Pricing', 'Templates', 'Enterprise', 'Resources'],
  Support: ['Help Center', 'Community', 'Tutorial', 'Documentation', 'Contact'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center mb-8">
          <AnimatedLogo size="lg" className="mb-4" />
          <h3 className="text-xl font-bold text-white">VideoForge AI</h3>
          <p className="text-gray-400 text-sm mt-2">Creating the future of video editing</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-blue-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <span>© {new Date().getFullYear()} VideoForge AI. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}