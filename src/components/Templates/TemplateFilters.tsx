import React from 'react';

export default function TemplateFilters() {
  return (
    <div className="bg-navy-900 p-4 rounded-lg mb-6 border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="">All Categories</option>
            <option value="marketing">Marketing</option>
            <option value="social-media">Social Media</option>
            <option value="business">Business</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="education">Education</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Duration</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="">Any Length</option>
            <option value="0-30">0-30 seconds</option>
            <option value="30-60">30-60 seconds</option>
            <option value="1-3">1-3 minutes</option>
            <option value="3+">3+ minutes</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Sort By</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="popular">Most Popular</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="duration-asc">Duration (Shortest)</option>
            <option value="duration-desc">Duration (Longest)</option>
          </select>
        </div>
      </div>
    </div>
  );
}