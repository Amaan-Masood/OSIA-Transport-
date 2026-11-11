import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cta' | 'primary' | 'whatsapp' | 'water' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-200 rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 min-h-[38px]',
    md: 'text-sm px-6 py-3 min-h-[44px]',
    lg: 'text-base px-8 py-3.5 min-h-[50px]',
  };

  // Cohesive Executive Palette: OSIA Precision Blue is the singular primary accent
  const variantClasses = {
    // High-End Signature CTA: Precision Blue with radiant depth and crisp white typography
    cta: 'bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-[0_4px_16px_rgba(2,132,199,0.30)] hover:shadow-[0_6px_22px_rgba(2,132,199,0.40)] font-extrabold',
    // Authority Midnight Navy
    primary: 'bg-[#0B1726] text-white hover:bg-[#162842] shadow-sm hover:shadow-md font-bold',
    // Official Deep WhatsApp Emerald (Executive, mature & non-fluorescent)
    whatsapp: 'bg-[#128C7E] text-white hover:bg-[#0E7064] shadow-sm font-extrabold hover:shadow-md',
    // Precision Blue (alias)
    water: 'bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-sm hover:shadow-md font-bold',
    // Refined Studio Outline with crisp slate border
    outline: 'border border-[#CBD5E1] bg-white text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#94A3B8] shadow-xs font-bold',
    // Ghost
    ghost: 'text-[#0F172A] hover:bg-[#F8FAFC]',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
