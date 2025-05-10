import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="mb-4 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;