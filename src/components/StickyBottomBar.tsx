import React, { useState, useEffect } from 'react';
import { CHECKOUT_LINKS } from '../data';
import { Sparkles, ArrowRight } from 'lucide-react';

export const StickyBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200/80 p-2.5 sm:py-3 sm:px-6 shadow-xl transition-all duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left info */}
        <div className="hidden sm:flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-[#1D1D1F] leading-tight flex items-center gap-1.5 font-heading">
              <span>Pack Manu Stories • Acesso Vitalício</span>
              <span className="text-[9px] bg-rose-50 text-rose-700 border border-rose-200/60 px-1.5 py-0.2 rounded font-bold font-heading">
                OFERTA
              </span>
            </p>
            <p className="text-[11px] text-neutral-500 font-sans-body">
              A partir de <strong className="text-rose-600 font-bold">R$ 19,90</strong> no Pix ou Cartão
            </p>
          </div>
        </div>

        {/* Mobile quick text */}
        <div className="sm:hidden text-left pl-1">
          <span className="text-[10px] text-neutral-400 line-through font-sans-body">De R$ 67,90</span>
          <p className="text-xs font-bold text-[#1D1D1F] leading-tight font-heading">
            A partir de <span className="text-rose-600">R$ 19,90</span>
          </p>
        </div>

        {/* Right CTA button */}
        <a
          href="#planos"
          className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-medium text-xs sm:text-sm py-2 px-4 sm:px-6 rounded-full shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap font-heading"
        >
          <span>QUERO O MEU PACK</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

      </div>
    </div>
  );
};
