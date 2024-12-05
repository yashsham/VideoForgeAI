import React, { useState } from 'react';
import { Search, Filter, Play } from 'lucide-react';
import TemplateCard from '../components/Templates/TemplateCard';
import TemplateFilters from '../components/Templates/TemplateFilters';
import TemplatePreview from '../components/Templates/TemplatePreview';
import GettingStarted from '../components/Templates/GettingStarted';
import Footer from '../components/Footer';

const templates = [
  {
    id: 1,
    title: "Product Showcase",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    duration: "0:30",
    difficulty: "Beginner",
    views: 12453,
    description: "Perfect for showcasing your products with elegant transitions and professional effects."
  },
  {
    id: 2,
    title: "Social Media Story",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
    duration: "0:15",
    difficulty: "Easy",
    views: 8765,
    description: "Vertical template optimized for Instagram and TikTok stories."
  },
  {
    id: 3,
    title: "Corporate Presentation",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    duration: "2:00",
    difficulty: "Intermediate",
    views: 5432,
    description: "Professional template for business presentations and company overviews."
  },
  {
    id: 4,
    title: "Travel Vlog",
    category: "Lifestyle",
    thumbnail: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
    duration: "3:00",
    difficulty: "Intermediate",
    views: 7890,
    description: "Dynamic template for travel content with stunning transitions."
  },
  {
    id: 5,
    title: "Tutorial Video",
    category: "Education",
    thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
    duration: "5:00",
    difficulty: "Advanced",
    views: 15678,
    description: "Structured template for educational content and how-to videos."
  },
  {
    id: 6,
    title: "Event Promotion",
    category: "Marketing",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    duration: "0:45",
    difficulty: "Beginner",
    views: 6543,
    description: "Engaging template for promoting events and conferences."
  },
  {
    id: 7,
    title: "Wedding Highlights",
    category: "Events",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    duration: "2:30",
    difficulty: "Intermediate",
    views: 9876,
    description: "Beautiful templates for wedding videos and love stories."
  },
  {
    id: 8,
    title: "Gaming Montage",
    category: "Entertainment",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    duration: "1:30",
    difficulty: "Advanced",
    views: 11234,
    description: "Dynamic templates for gaming highlights and stream content."
  }
];

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['All', 'Popular', 'New', 'Marketing', 'Social Media', 'Business', 'Education', 'Entertainment'];

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Video Templates</h1>
              <p className="text-gray-400">Start with a professional template and customize it to your needs</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
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
            </div>
          </div>

          <GettingStarted />

          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category.toLowerCase())}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'bg-navy-900 text-gray-400 hover:text-white hover:bg-navy-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {showFilters && <TemplateFilters />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onPreview={() => setSelectedTemplate(template)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedTemplate && (
        <TemplatePreview
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
      
      <Footer />
    </div>
  );
}