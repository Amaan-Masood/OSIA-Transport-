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
  const baseClasses = 'rounded-xl transition-all duration-200 overflow-hidden';

  const variantClasses = {
    surface: 'bg-white border border-[#D5DFEA] shadow-[0_4px_12px_rgba(10,27,46,0.06)]',
    dark: 'bg-[#0A1B2E] border border-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)]',
    outline: 'bg-transparent border border-[#D5DFEA]',
  };

  const accentClasses = {
    water: 'border-t-4 border-t-[#1391E5]',
    orange: 'border-t-4 border-t-[#FF7A1A]',
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
