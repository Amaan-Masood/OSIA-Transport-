import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accentTop?: 'water' | 'orange' | 'none';
  variant?: 'surface' | 'dark' | 'outline';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  accentTop = 'none',
  variant = 'surface',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden';

  const variantClasses = {
    // Crisp white surface with hairline border & subtle tinted slate elevation
    surface: 'bg-white border border-[#E2E8F0] shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.09)] hover:border-[#CBD5E1]',
    // Authority dark navy card with fine white hairline border
    dark: 'bg-[#132238] border border-white/10 text-white shadow-[0_10px_28px_rgba(0,0,0,0.28)] hover:border-white/25',
    // Pure hairline outline
    outline: 'bg-transparent border border-[#E2E8F0]',
  };

  const accentClasses = {
    water: 'border-t-[3px] border-t-[#0369A1]',
    orange: 'border-t-[3px] border-t-[#0369A1]',
    none: '',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${accentClasses[accentTop]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
