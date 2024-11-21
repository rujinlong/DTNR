import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Search, ChevronDown, Database, TestTube2, Microscope, FlaskConical, Dna, Network, Binary, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import DeepsmirUD from './pages/DeepsmirUD';
import DeepdlncUD from './pages/DeepdlncUD';
import Drutai from './pages/Drutai';

function HomePage() {
  const services = [
    {
      icon: <Database className="w-12 h-12 text-blue-400" />,
      title: "DTNR Platform",
      description: "AI-powered ncRNA drug discovery platform for rapidly identifying potential therapeutics.",
      link: "#platform"
    },
    {
      icon: <Dna className="w-12 h-12 text-blue-400" />,
      title: "DeepsmirUD",
      description: "Advanced platform for microRNA drug discovery using deep learning algorithms.",
      link: "/deepsmirUD"
    },
    {
      icon: <Network className="w-12 h-12 text-blue-400" />,
      title: "DeepdlncUD",
      description: "Comprehensive analysis platform for long non-coding RNA drug development.",
      link: "/deepdlncUD"
    },
    {
      icon: <Binary className="w-12 h-12 text-blue-400" />,
      title: "Drutai",
      description: "AI-powered platform for intelligent drug target identification and analysis.",
      link: "/drutai"
    },
    {
      icon: <TestTube2 className="w-12 h-12 text-blue-400" />,
      title: "Active Ingredient Analysis",
      description: "Deep analysis of potential drug molecules using cutting-edge AI technology.",
      link: "#analysis"
    },
    {
      icon: <Microscope className="w-12 h-12 text-blue-400" />,
      title: "Drug Evaluation",
      description: "Systematic evaluation and optimization of drug effectiveness.",
      link: "#evaluation"
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-blue-400" />,
      title: "Drug Development",
      description: "Advanced research and development platform for new drug development.",
      link: "#development"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-400" />,
      title: "Coming Soon",
      description: "More innovative tools and features are currently under development.",
      link: "#coming-soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900">
      <Navbar />
      <HeroSection />
      
      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search tools..."
                  className="w-full px-4 py-3 pl-12 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-4 top-3.5 text-gray-500" />
              </div>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2">
              Search
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deepsmirUD" element={<DeepsmirUD />} />
      <Route path="/deepdlncUD" element={<DeepdlncUD />} />
      <Route path="/drutai" element={<Drutai />} />
    </Routes>
  );
}

export default App;