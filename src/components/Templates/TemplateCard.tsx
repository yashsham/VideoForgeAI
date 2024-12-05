import React from 'react';
import { Play, Eye, Clock, BarChart2 } from 'lucide-react';

interface Template {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  difficulty: string;
  views: number;
  description: string;
}

interface TemplateCardProps {
  template: Template;
  onPreview: () => void;
}

export default function TemplateCard({ template, onPreview }: TemplateCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'text-green-400';
      case 'intermediate':
        return 'text-yellow-400';
      case 'advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-navy-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover-shine">
      <div className="relative aspect-video">
        <img
          src={template.thumbnail}
          alt={template.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onPreview}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
          >
            <Play className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute top-2 right-2">
          <span className="bg-black/60 text-white px-2 py-1 rounded text-sm">
            {template.duration}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {template.title}
            </h3>
            <span className="text-sm text-gray-400">{template.category}</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-400">
              <BarChart2 className="h-4 w-4 mr-1" />
              <span className={getDifficultyColor(template.difficulty)}>
                {template.difficulty}
              </span>
            </div>
            <div className="flex items-center text-gray-400">
              <Eye className="h-4 w-4 mr-1" />
              <span>{template.views.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={onPreview}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}