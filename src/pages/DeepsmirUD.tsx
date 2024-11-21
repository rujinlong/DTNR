import React from 'react';
import Navbar from '../components/Navbar';

const DeepsmirUD = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-6">DeepsmirUD Platform</h1>
        <p className="text-xl text-gray-300 mb-8">
          Advanced AI-powered platform for microRNA drug discovery and development.
        </p>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
          <p className="text-gray-300">
            Platform details and features will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeepsmirUD;