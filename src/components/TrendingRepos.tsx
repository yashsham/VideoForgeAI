import React from 'react';
import { Star, GitFork } from 'lucide-react';

const trendingRepos = [
  {
    name: 'microsoft/vscode',
    description: 'Visual Studio Code',
    stars: '154k',
    forks: '28.5k',
    language: 'TypeScript',
    languageColor: '#2b7489',
  },
  {
    name: 'facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stars: '203k',
    forks: '42.8k',
    language: 'JavaScript',
    languageColor: '#f1e05a',
  },
  {
    name: 'denoland/deno',
    description: 'A modern runtime for JavaScript and TypeScript.',
    stars: '89.9k',
    forks: '4.8k',
    language: 'Rust',
    languageColor: '#dea584',
  },
];

export default function TrendingRepos() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Trending repositories</h2>
          <div className="flex gap-4">
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300">
              <option>All languages</option>
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>Python</option>
            </select>
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300">
              <option>Today</option>
              <option>This week</option>
              <option>This month</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {trendingRepos.map((repo) => (
            <div
              key={repo.name}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 hover:text-blue-300">
                    {repo.name}
                  </h3>
                  <p className="mt-1 text-gray-300">{repo.description}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: repo.languageColor }}
                      ></span>
                      <span className="text-sm text-gray-300">{repo.language}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">{repo.stars}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <GitFork className="h-4 w-4 mr-1" />
                      <span className="text-sm">{repo.forks}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Star
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}