'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, Building2, TrendingUp, Box, ShieldCheck, 
  DollarSign, BarChart2, ClipboardCheck, PackageOpen, Boxes
} from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2000, suffix = '%' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

const ServiceCard = ({ service, isActive, onClick }) => {
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
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
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

const BenefitCard = ({ benefit }) => {
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
            <AnimatedCounter value={benefit.impact.value} suffix={benefit.impact.suffix} />
          </div>
          <div className="text-sm text-gray-600">{benefit.impact.label}</div>
        </div>
      )}
    </div>
  );
};

const FTZExplorer = () => {
  const [activeService, setActiveService] = useState(null);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  const services = [
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

  const benefits = [
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
          {services.map((service, index) => (
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
    </div>
  );
};

export default FTZExplorer;
