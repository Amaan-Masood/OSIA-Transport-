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
    'inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border';

  const variantClasses = {
    // Crisp Sky Blue Badge (matched to logo)
    water: 'bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]',
    // Crisp Warm Orange Badge (matched to logo)
    orange: 'bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5]',
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
