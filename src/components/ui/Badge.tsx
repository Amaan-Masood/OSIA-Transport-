import React from 'react';

export interface BadgeProps {
  variant?: 'water' | 'orange' | 'navy' | 'neutral' | 'success';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'water',
  children,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border transition-colors';

  const variantClasses = {
    // Precision Sky Blue Badge (Calibrated to official logo)
    water: 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]',
    // Orange aliased to Precision Sky Blue to guarantee zero visual fragmentation
    orange: 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]',
    // Authority Navy Badge
    navy: 'bg-[#0B1726] text-white border-[#0B1726]',
    // Clean Studio Neutral Badge
    neutral: 'bg-[#F1F5F9] text-[#334155] border-[#E2E8F0]',
    // Safety & Compliance Success Badge
    success: 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
