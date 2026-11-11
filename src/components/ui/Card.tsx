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
  const baseClasses = 'rounded-2xl transition-all duration-200 overflow-hidden';

  const variantClasses = {
    // Crisp white surface with hairline border & subtle elevation
    surface: 'bg-white border border-[#E2E8F0] shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-[#CBD5E1]',
    // Authority dark navy card with fine white hairline border
    dark: 'bg-[#132238] border border-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:border-white/20',
    // Pure hairline outline
    outline: 'bg-transparent border border-[#E2E8F0]',
  };

  const accentClasses = {
    water: 'border-t-4 border-t-[#0284C7]',
    orange: 'border-t-4 border-t-[#0284C7]',
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
