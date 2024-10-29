import React, { useState } from 'react';
import { BenefitCardProps } from './types';
import AnimatedCounter from './AnimatedCounter';

export const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 bg-[#00204E] rounded-lg transform transition-all duration-300 ${
          isHovered ? 'rotate-12' : ''
        }`}>
          <benefit.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-[#00204E]">{benefit.title}</h3>
      </div>
      <p className="text-gray-600">{benefit.description}</p>
      {benefit.impact && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-[#00204E]">
            <AnimatedCounter 
              value={benefit.impact.value} 
              suffix={benefit.impact.suffix} 
            />
          </div>
          <div className="text-sm text-gray-600">{benefit.impact.label}</div>
        </div>
      )}
    </div>
  );
};
