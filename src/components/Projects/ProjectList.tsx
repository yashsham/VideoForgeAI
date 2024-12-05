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

export default function ProjectList({ projects }: { projects: Project[] }) {
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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-4 px-4 text-gray-400 font-medium">Project</th>
            <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
            <th className="text-left py-4 px-4 text-gray-400 font-medium">Date</th>
            <th className="text-left py-4 px-4 text-gray-400 font-medium">Duration</th>
            <th className="text-left py-4 px-4 text-gray-400 font-medium">Size</th>
            <th className="text-left py-4 px-4 text-gray-400 font-medium">Views</th>
            <th className="py-4 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-b border-gray-800 hover:bg-navy-800 transition-colors group"
            >
              <td className="py-4 px-4">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-9 rounded overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></span>
                  <span className="text-gray-400">{project.status}</span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-400">{project.date}</td>
              <td className="py-4 px-4">
                <div className="flex items-center text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{project.duration}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center text-gray-400">
                  <Film className="h-4 w-4 mr-1" />
                  <span>{project.size}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center text-gray-400">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{project.views.toLocaleString()}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <button className="text-gray-400 hover:text-white transition-colors p-1">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}