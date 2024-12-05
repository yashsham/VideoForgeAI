import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectFilters from '../components/Projects/ProjectFilters';
import ProjectList from '../components/Projects/ProjectList';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: "Summer Vacation Highlights",
    thumbnail: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80",
    status: "Completed",
    date: "2024-03-15",
    duration: "3:45",
    size: "720p",
    views: 1234,
  },
  {
    id: 2,
    title: "Product Launch Video",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    status: "In Progress",
    date: "2024-03-14",
    duration: "2:30",
    size: "1080p",
    views: 856,
  },
  {
    id: 3,
    title: "Corporate Training",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    status: "Draft",
    date: "2024-03-13",
    duration: "15:20",
    size: "4K",
    views: 0,
  },
];

export default function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">My Projects</h1>
            
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-navy-900 border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors relative hover-shine"
              >
                <Filter className="h-5 w-5" />
              </button>
              
              <div className="flex border border-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-blue-400'} transition-colors hover-shine`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-blue-400'} transition-colors hover-shine`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {showFilters && <ProjectFilters />}

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <ProjectList projects={projects} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}