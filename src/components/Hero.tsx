import React from 'react';
import { ArrowDown, ExternalLink, Download, Mail, MapPin, Flag } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-steel-blue to-navy dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange/20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-steel-blue/20 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-orange/30 animate-pulse delay-1000"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Jeremias de Isequilla
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-200 font-light mb-4 animate-fade-in-delay-1">
            Solutions Architect & Technology Leader
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
            Transforming business operations through innovative technology solutions for 18+ years
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 animate-fade-in-delay-3">
            <div className="flex items-center space-x-2 text-orange font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Madrid, Spain</span>
              <Flag className="w-5 h-5" />
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">EU Passport Holder</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-orange hover:bg-orange/90 transform hover:scale-105 transition-all duration-200"
            >
              View My Work
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
            
            <a
              href="/cv-jeremias-de-isequilla.pdf"
              download
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-navy transform hover:scale-105 transition-all duration-200"
            >
              Download CV
              <Download className="ml-2 w-5 h-5" />
            </a>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-3 border-2 border-orange text-base font-medium rounded-md text-orange hover:bg-orange hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Let's Connect
              <Mail className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-orange transition-colors duration-200 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;