import React from 'react';

export default function ProjectFilters() {
  return (
    <div className="bg-navy-900 p-4 rounded-lg mb-6 border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Date Range</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Resolution</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="">All Sizes</option>
            <option value="4k">4K</option>
            <option value="1080p">1080p</option>
            <option value="720p">720p</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Sort By</label>
          <select className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="views-desc">Most Viewed</option>
            <option value="views-asc">Least Viewed</option>
          </select>
        </div>
      </div>
    </div>
  );
}