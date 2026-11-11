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
    <div className={`divide-y divide-[#D5DFEA] border border-[#D5DFEA] rounded-xl bg-white overflow-hidden ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="transition-colors">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-5 text-left font-bold text-[#0A1B2E] hover:bg-[#F4F7FB] focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors cursor-pointer"
            >
              <span className="text-base md:text-lg pr-4">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#FF7A1A] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm md:text-base text-[#52667B] leading-relaxed bg-[#F4F7FB]/50 border-t border-[#D5DFEA]/50">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
