import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { UnderlineStroke } from './TitleAccents';

export const MiniCTASection: React.FC = () => {
  const highlights = [
    '+15.000 figurinhas estéticas',
    'Acesso imediato e vitalício',
    'Pagamento único sem mensalidade',
  ];

  return (
    <section className="py-10 md:py-16 bg-white border-t border-neutral-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-rose-50/70 via-white to-pink-50/50 rounded-3xl p-6 sm:p-10 border border-rose-100/90 shadow-sm text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-rose-200/40 blur-3xl pointer-events-none rounded-full" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.1] mb-4">
            Pronta para deixar seus Stories{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">muito mais bonitos?</span>
              <UnderlineStroke className="-bottom-1" color="#e11d48" />
            </span>
          </h2>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 text-xs sm:text-sm text-neutral-700 font-sans-body">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 bg-white/80 border border-neutral-200/70 px-3 py-1 rounded-full shadow-2xs">
                <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 stroke-[2.5]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-neutral-500 text-xs sm:text-sm mb-1 font-sans-body">
            A partir de apenas
          </p>
          <div className="flex items-baseline justify-center gap-1 mb-6">
            <span className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] font-heading">
              R$ 9<span className="text-xl sm:text-2xl text-neutral-500 font-medium">,99</span>
            </span>
            <span className="text-xs text-neutral-500 font-sans-body">• pagamento único</span>
          </div>

          <a
            href="#oferta"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3 px-8 rounded-full shadow-md shadow-rose-500/20 transition-all font-heading"
          >
            <span>QUERO ACESSAR AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
