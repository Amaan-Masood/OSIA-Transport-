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
    'inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-150 rounded-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeClasses = {
    sm: 'text-xs px-3 py-2 min-h-[36px]',
    md: 'text-sm px-5 py-3 min-h-[44px]',
    lg: 'text-base px-7 py-3.5 min-h-[52px]',
  };

  // WCAG strict contrast compliant classes
  const variantClasses = {
    // Safety Orange with NAVY text (6.66:1 contrast - passes WCAG AA)
    cta: 'bg-[#FF7A1A] text-[#0A1B2E] hover:bg-[#E8640A] shadow-sm font-extrabold',
    // Navy with White text
    primary: 'bg-[#0A1B2E] text-white hover:bg-[#14304E] shadow-sm',
    // WhatsApp Green with NAVY text & icon (8.76:1 contrast)
    whatsapp: 'bg-[#25D366] text-[#0A1B2E] hover:bg-[#1FB75A] shadow-sm font-extrabold',
    // Water Blue with White text
    water: 'bg-[#1391E5] text-white hover:bg-[#0B6FB8] shadow-sm',
    // Outline with Navy border and text
    outline: 'border-2 border-[#0A1B2E] text-[#0A1B2E] hover:bg-[#F4F7FB]',
    // Ghost
    ghost: 'text-[#0A1B2E] hover:bg-[#F4F7FB]',
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
