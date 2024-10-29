'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, Building2, TrendingUp, Box, ShieldCheck, 
  DollarSign, BarChart2, ClipboardCheck, PackageOpen, Boxes 
} from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { BenefitCard } from './BenefitCard';
import type { Service, Benefit } from './types';

const FTZExplorer: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [animateHeader, setAnimateHeader] = useState<boolean>(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: 'FTZ Warehousing',
      icon: Building2,
      description: 'Secure storage within our Foreign Trade Zone, allowing duty-free storage and improved cash flow.',
      metrics: [
        { value: 500, label: 'Thousand Sq Ft Facility', suffix: 'k' },
        { value: 35, label: 'Duty Reduction', suffix: '%' }
      ]
    },
    {
      id: 2,
      title: 'Duty Management',
      icon: DollarSign,
      description: 'Defer or eliminate customs duties on imported goods until they leave the FTZ.',
      metrics: [
        { value: 20, label: 'Cost Reduction', suffix: '%' },
        { value: 100, label: 'Compliance Rate', suffix: '%' }
      ]
    },
    {
      id: 3,
      title: 'Supply Chain Integration',
      icon: Boxes,
      description: 'Seamless integration of FTZ benefits with comprehensive 3PL services.',
      metrics: [
        { value: 40, label: 'Faster Processing', suffix: '%' },
        { value: 99.9, label: 'Inventory Accuracy', suffix: '%' }
      ]
    },
    {
      id: 4,
      title: 'Compliance & Documentation',
      icon: ClipboardCheck,
      description: 'Complete management of customs documentation and regulatory compliance.',
      metrics: [
        { value: 100, label: 'Documentation Accuracy', suffix: '%' },
        { value: 0, label: 'Compliance Issues', suffix: '' }
      ]
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Cost Reduction',
      icon: TrendingUp,
      description: 'Significantly reduce or eliminate duties and taxes through FTZ benefits.',
      impact: { value: 35, label: 'Average Cost Savings', suffix: '%' }
    },
    {
      title: 'Cash Flow Improvement',
      icon: BarChart2,
      description: 'Defer payments until goods leave the FTZ for distribution.',
      impact: { value: 45, label: 'Working Capital Improvement', suffix: '%' }
    },
    {
      title: 'Regulatory Compliance',
      icon: ShieldCheck,
      description: 'Ensure full compliance with customs and FTZ regulations.',
      impact: { value: 100, label: 'Compliance Rate', suffix: '%' }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div 
          className={`mb-12 transition-all duration-1000 transform ${
            animateHeader ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#00204E] p-3 rounded-lg">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#00204E]">Quetico FTZ Solutions</h1>
          </div>
          <p className="text-gray-600 max-w-3xl text-lg">
            Maximize your global trade efficiency with our Foreign Trade Zone warehousing and seamless 3PL solutions. 
            Reduce duties, streamline customs, and optimize your international supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#00204E] mb-6">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>

      {/* Optional Contact CTA */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <div className="bg-[#00204E] rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Global Trade?</h2>
          <p className="mb-6 text-gray-300">
            Contact us today to learn how our FTZ solutions can benefit your business.
          </p>
          <button className="bg-sky-400 text-[#00204E] px-8 py-3 rounded-lg font-semibold hover:bg-sky-300 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FTZExplorer;
