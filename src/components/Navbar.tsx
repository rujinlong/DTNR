import React, { useState, useRef } from 'react';
import { Activity, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPlatformOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPlatformOpen(false);
    }, 100);
  };

  return (
    <nav className="bg-transparent py-4 relative z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">DTNR</span>
          </Link>
          <div className="flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <span>Platform</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isPlatformOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl border border-white/10"
                >
                  <Link 
                    to="/deepsmirUD"
                    className="block px-4 py-3 text-gray-300 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    DeepsmirUD
                  </Link>
                  <Link 
                    to="/deepdlncUD"
                    className="block px-4 py-3 text-gray-300 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    DeepdlncUD
                  </Link>
                  <Link 
                    to="/drutai"
                    className="block px-4 py-3 text-gray-300 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    Drutai
                  </Link>
                </div>
              )}
            </div>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;