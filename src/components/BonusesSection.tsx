import React from 'react';
import { BONUSES } from '../data';
import { Check, ArrowRight, MessageSquare, Sparkles, Box, BookOpen } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-3.5 h-3.5 text-rose-600" />,
  Box: <Box className="w-3.5 h-3.5 text-rose-600" />,
  BookOpen: <BookOpen className="w-3.5 h-3.5 text-rose-600" />,
  MessageSquare: <MessageSquare className="w-3.5 h-3.5 text-rose-600" />,
};

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
            Para garantir seu sucesso absoluto e eliminar qualquer barreira que impeça sua transformação, você receberá <strong>4 BÔNUS EXCLUSIVOS</strong>:
          </p>
        </div>

        {/* 4 Bonus Cards Grid with Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Bonus Image / Photo */}
                {bonus.image && (
                  <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-neutral-100 border-b border-neutral-100">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-rose-600 font-bold px-3 py-1 rounded-full text-[11px] font-heading shadow-xs border border-rose-100/80">
                        {iconMap[bonus.iconName] || <Sparkles className="w-3.5 h-3.5 text-rose-600" />}
                        <span>Bônus 0{bonus.id}</span>
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="line-through text-white text-xs font-semibold px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-xs font-sans-body">
                        {bonus.originalPrice}
                      </span>
                      <span className="text-emerald-800 bg-emerald-100/95 backdrop-blur-xs border border-emerald-300/80 font-bold px-2.5 py-0.5 rounded-full text-[10px] font-heading shadow-xs">
                        HOJE: GRÁTIS
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] font-heading leading-snug mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body">
                    {bonus.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs font-sans-body">
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
