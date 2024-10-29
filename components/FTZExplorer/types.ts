import { LucideIcon } from 'lucide-react';

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export interface Metric {
  value: number;
  label: string;
  suffix: string;
}

export interface Service {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
  metrics: Metric[];
}

export interface Benefit {
  title: string;
  icon: LucideIcon;
  description: string;
  impact?: {
    value: number;
    label: string;
    suffix: string;
  };
}

export interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

export interface BenefitCardProps {
  benefit: Benefit;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface IconProps {
  icon: LucideIcon;
  className?: string;
}
