'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`divide-y divide-[#E2E8F0] border border-[#E2E8F0] rounded-2xl bg-white overflow-hidden shadow-sm ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="transition-colors">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left font-bold text-[#0F172A] hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors cursor-pointer"
            >
              <span className="text-base md:text-lg pr-4">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#0284C7] transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#F97316]' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 md:px-6 pb-6 pt-2 text-sm md:text-base text-[#475569] leading-relaxed bg-[#F8FAFC]/60 border-t border-[#E2E8F0]/60">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
