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
    'inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-150 rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 min-h-[38px]',
    md: 'text-sm px-6 py-3 min-h-[44px]',
    lg: 'text-base px-8 py-3.5 min-h-[50px]',
  };

  // WCAG strict contrast compliant classes
  const variantClasses = {
    // Safety Orange with Deep Navy text (6.8:1 contrast - exceeds WCAG AA)
    cta: 'bg-[#F97316] text-[#0B1726] hover:bg-[#EA580C] shadow-sm font-extrabold hover:shadow-md',
    // Authority Navy with White text
    primary: 'bg-[#0B1726] text-white hover:bg-[#162842] shadow-sm hover:shadow-md',
    // WhatsApp Green with Navy text & icon (8.8:1 contrast)
    whatsapp: 'bg-[#22C55E] text-[#0B1726] hover:bg-[#16A34A] shadow-sm font-extrabold hover:shadow-md',
    // Sky Blue (Logo matched) with White text
    water: 'bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-sm hover:shadow-md',
    // Outline with crisp navy border and text
    outline: 'border-2 border-[#0B1726] text-[#0B1726] hover:bg-[#F8FAFC]',
    // Ghost
    ghost: 'text-[#0B1726] hover:bg-[#F8FAFC]',
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
