import React from 'react';
import { Clock, Eye, Film, MoreVertical } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  date: string;
  duration: string;
  size: string;
  views: number;
}

export default function ProjectCard({ project }: { project: Project }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500';
      case 'in progress':
        return 'bg-blue-500';
      case 'draft':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-navy-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover-shine">
      <div className="relative aspect-video">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Film className="h-4 w-4" />
              <span>{project.size}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <button className="text-gray-400 hover:text-white transition-colors p-1">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></span>
            <span className="text-gray-400">{project.status}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Eye className="h-4 w-4 mr-1" />
            <span>{project.views.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}