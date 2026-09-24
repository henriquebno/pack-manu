import React from 'react';
import { Sparkles, ShieldCheck, Zap, Heart, ArrowRight } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#121214] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-rose-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <SectionBadge badgeClassName="text-rose-300 bg-white/10 border-white/15">
          Última Chance
        </SectionBadge>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading uppercase tracking-wide leading-[1.05] max-w-2xl mx-auto">
          Seu Instagram merece refletir quem{' '}
          <span className="relative inline-block text-rose-400">
            <span className="relative z-10">você realmente é</span>
            <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#fb7185" />
          </span>
        </h2>

        <p className="mt-3.5 text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed font-sans-body">
          Não deixe para depois. Cada dia que passa é um dia a menos com Stories que não representam sua verdadeira essência.
        </p>

        {/* CTA Button */}
        <div className="mt-7 flex flex-col items-center">
          <a
            id="final-cta-btn"
            href="#oferta"
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3.5 px-8 sm:px-10 rounded-full shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2 font-heading"
          >
            <span>QUERO TRANSFORMAR MEUS STORIES AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="mt-5 flex items-center justify-center gap-3 text-[11px] text-neutral-300 flex-wrap font-sans-body">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Pagamento 100% seguro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Acesso imediato
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              Garantia de 15 dias
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
