import React from 'react';
import { Heart, ArrowUp, User } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <User className="w-8 h-8 text-orange" />
            <h3 className="text-2xl font-bold">Jeremias de Isequilla</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Solutions Architect & Technology Leader
          </p>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-orange mx-2" /> in Madrid, Spain
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2025 Jeremias de Isequilla. All rights reserved.
            </p>
          </div>
        </div>
        
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange hover:bg-orange/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;