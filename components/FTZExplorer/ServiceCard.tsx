import React from 'react';
import { ServiceCardProps } from './types';
import AnimatedCounter from './AnimatedCounter';

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-lg transition-all duration-300 transform ${
        isActive 
          ? 'bg-[#00204E] text-white scale-105' 
          : 'bg-white text-[#00204E] hover:scale-102'
      } border border-gray-200 shadow-md`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg transition-all duration-300 ${
          isActive ? 'bg-sky-400' : 'bg-[#00204E]'
        }`}>
          <service.icon className={`h-6 w-6 ${
            isActive ? 'text-[#00204E]' : 'text-white'
          }`} />
        </div>
        <h3 className="text-lg font-semibold">{service.title}</h3>
      </div>
      {isActive && (
        <div className="space-y-4 mt-4 text-left">
          <p className="text-gray-200">{service.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="bg-[#003366] p-4 rounded-lg">
                <div className="text-2xl font-bold text-sky-400">
                  <AnimatedCounter 
                    value={metric.value} 
                    suffix={metric.suffix} 
                  />
                </div>
                <div className="text-sm text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </button>
  );
};
