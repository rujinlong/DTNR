import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-500/20 to-transparent transform rotate-12"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-400/10 to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            DTNR: AI-Powered ncRNA Drug Discovery
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            DTNR is an AI-powered platform revolutionizing drug discovery by targeting non-coding RNAs (ncRNAs). Our advanced deep learning models accelerate the identification of potential drug candidates, significantly reducing the time and cost of traditional methods.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105">
              Start Discovery
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;