import React from 'react';
import { BONUSES } from '../data';
import { Check, ArrowRight, MessageSquare, Sparkles, Box, BookOpen } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const BonusesSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-white border-t border-neutral-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <SectionBadge>Bônus Exclusivos</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            MAS ESPERE!{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">AINDA TEM MAIS...</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body leading-relaxed">
            Para garantir seu sucesso absoluto e eliminar qualquer barreira que impeça sua transformação, vou incluir <strong>4 BÔNUS EXCLUSIVOS</strong> que multiplicarão seus resultados:
          </p>
        </div>

        {/* 4 Bonus Cards Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Visual Mockup Banner */}
              {bonus.image && (
                <div className="w-full aspect-[4/3] bg-[#120F24] overflow-hidden relative border-b border-neutral-100">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={800}
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 text-xs">
                    <span className="line-through text-white/80 text-[11px] bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      {bonus.originalPrice}
                    </span>
                    <span className="text-emerald-300 bg-emerald-950/85 border border-emerald-400/40 font-bold px-2 py-0.5 rounded-md text-[10px] font-heading backdrop-blur-xs">
                      HOJE: GRÁTIS
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-neutral-900 font-heading mb-1">
                    Bônus 0{bonus.id}:
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] font-heading leading-snug mb-2.5">
                    {bonus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs font-sans-body">
                  <div className="flex items-center gap-1.5 text-rose-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>Incluso no Pack Completo</span>
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-400">
                    Acesso Imediato
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Calculation Box */}
        <div className="mt-8 max-w-xl mx-auto bg-[#1D1D1F] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center shadow-md">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-300 mb-1 font-heading">
            Valor Somado dos 4 Bônus:
          </p>
          <p className="text-2xl sm:text-3xl font-heading uppercase tracking-wide">
            R$ 198,00 em materiais extras
          </p>
          <p className="mt-1 text-xs text-neutral-300 font-sans-body">
            Você leva <strong className="text-white">todos os 4 bônus 100% GRÁTIS</strong> ao escolher o Pack Completo.
          </p>
          <div className="mt-4">
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 hover:bg-neutral-100 active:scale-[0.98] font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-xs transition-all font-heading"
            >
              <span>Garantir Meus Bônus Grátis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
