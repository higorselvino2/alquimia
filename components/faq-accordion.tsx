'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={cn(
              "bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 backdrop-blur-md hover:bg-white/10",
              isOpen ? "border-white/20 bg-white/10" : ""
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
            >
              <h3 className="font-bold text-base sm:text-lg text-white">
                {item.question}
              </h3>
              <div className={cn(
                "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 transition-transform duration-300",
                isOpen && "rotate-180 bg-[#FF7A00] text-black"
              )}>
                <ChevronDown className={cn("w-5 h-5", isOpen && "text-black")} />
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-5 text-white/70 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
