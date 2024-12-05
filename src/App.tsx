import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import DonationSection from './components/DonationSection';
import Features from './components/Features';
import ChatInterface from './components/ChatInterface';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import Templates from './pages/Templates';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <Pricing />;
      case 'projects':
        return <Projects />;
      case 'templates':
        return <Templates />;
      default:
        return (
          <>
            <Hero />
            <DonationSection />
            <Features />
            <ChatInterface />
            <Reviews />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Toaster position="top-center" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
      </div>
      <Header 
        onAuthClick={() => setShowAuth(true)} 
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
      <main className="relative">
        {renderPage()}
      </main>
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default App;