import React from 'react';
import { X, Download, Share2, Clock, Eye, BarChart2 } from 'lucide-react';

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

interface TemplatePreviewProps {
  template: Template;
  onClose: () => void;
}

export default function TemplatePreview({ template, onClose }: TemplatePreviewProps) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <button
          onClick={onClose}
          className="text-white hover:text-blue-400 transition-colors p-2"
        >
          <X className="h-8 w-8" />
        </button>
      </div>

      <div className="max-w-6xl w-full mx-4">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-navy-900 border border-blue-900/50">
          <img
            src={template.thumbnail}
            alt={template.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{template.title}</h2>
                <p className="text-gray-300 max-w-2xl">{template.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors hover-shine">
                  <Download className="h-5 w-5" />
                  <span>Use Template</span>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors hover-shine">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{template.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>{template.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart2 className="h-5 w-5" />
                <span>{template.difficulty}</span>
              </div>
              <span className="text-blue-400">{template.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}