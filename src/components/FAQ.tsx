"use client";

import { useState } from "react";

type FAQProps = {
  faqs: { question: string; answer: string }[];
};

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-1">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-white/5 last:border-0 group">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start md:items-center justify-between py-5 text-left text-base font-light text-neutral-300 transition-colors duration-500 hover:text-white gap-4"
            >
              <span className="leading-snug">{faq.question}</span>
              <span className={`text-neutral-700 transition-transform duration-700 ease-in-out shrink-0 mt-0.5 md:mt-0 group-hover:text-white ${isOpen ? 'rotate-180 text-white' : ''}`}>
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" width="18"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </button>
            <div 
              className={`grid transition-all duration-700 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pt-1 text-neutral-500 leading-relaxed font-light text-sm pr-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
