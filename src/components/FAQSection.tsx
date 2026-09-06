import React, { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 md:py-24 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <SectionBadge>Dúvidas Comuns</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            Perguntas{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">Frequentes</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans-body">
            Tudo o que você precisa saber antes de começar:
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200/80 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left py-4 px-4 sm:px-5 flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-[#1D1D1F] hover:text-rose-600 transition-colors cursor-pointer font-heading"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1D1D1F] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 font-sans-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
