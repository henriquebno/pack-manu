import React from 'react';
import { BONUSES } from '../data';
import { Gift, Type, BookOpen, Sparkles, Box, Check, ArrowRight } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const BonusesSection: React.FC = () => {
  const getBonusIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Type className="w-5 h-5 text-rose-600" />;
      case 2:
        return <BookOpen className="w-5 h-5 text-rose-600" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-rose-600" />;
      case 4:
        return <Box className="w-5 h-5 text-rose-600" />;
      default:
        return <Gift className="w-5 h-5 text-rose-600" />;
    }
  };

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

        {/* 4 Bonus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#FAF9F6] rounded-2xl p-5 sm:p-6 border border-neutral-200/70 shadow-2xs relative flex flex-col justify-between hover:border-neutral-300 transition-all"
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold text-rose-700 bg-white border border-neutral-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-heading">
                  BÔNUS #{bonus.id}
                </span>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="line-through text-neutral-600 text-[11px]">{bonus.originalPrice}</span>
                  <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 font-bold px-2 py-0.5 rounded-md text-[10px] font-heading">
                    HOJE: GRÁTIS
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-neutral-200/60 shadow-2xs">
                    {getBonusIcon(bonus.id)}
                  </div>
                  <h3 className="text-base sm:text-lg text-[#1D1D1F] font-heading uppercase tracking-wide">
                    {bonus.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body mt-1">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs text-rose-700 font-medium font-sans-body">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                <span>Incluso no Pack Completo</span>
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
              href="#planos"
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
