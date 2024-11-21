import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <a 
      href={link}
      className="block p-6 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/15 transition-all transform hover:-translate-y-1"
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </a>
  );
}

export default ServiceCard;