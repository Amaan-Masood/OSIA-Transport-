import React from 'react';

export interface BadgeProps {
  variant?: 'water' | 'orange' | 'navy' | 'neutral' | 'success';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  children,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase';

  const variantClasses = {
    water: 'bg-[#EDF3FA] text-[#0B6FB8] border border-[#1391E5]/30',
    orange: 'bg-[#FFF7ED] text-[#C2410C] border border-[#FF7A1A]/30',
    navy: 'bg-[#0A1B2E] text-white',
    neutral: 'bg-[#F4F7FB] text-[#22354A] border border-[#D5DFEA]',
    success: 'bg-[#DCFCE7] text-[#15803D] border border-[#15803D]/20',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
