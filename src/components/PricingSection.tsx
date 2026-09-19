import React, { useState } from 'react';
import { CHECKOUT_LINKS } from '../data';
import { Check, Sparkles, ShieldCheck, Zap, Heart, Gift, ArrowRight, Star } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';
import { UpsellModal } from './UpsellModal';

export const PricingSection: React.FC = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <section id="planos" className="py-14 md:py-24 bg-[#FBF9F6] relative border-t border-neutral-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <SectionBadge>Oferta Especial por Tempo Limitado</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            Escolha o seu{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">plano de acesso ✨</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body">
            Acesso vitalício, pagamento único e sem mensalidades. Comece a usar ainda hoje.
          </p>
        </div>

        {/* Pricing Cards Grid - Pack Completo VIP FIRST, Pack Essencial SECOND */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* PLAN 1: PACK COMPLETO VIP - R$ 27,90 (FIRST, PROMINENT & COMPACT) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border-2 border-rose-500/90 shadow-lg shadow-rose-950/5 flex flex-col justify-between relative order-1 overflow-hidden">
            
            {/* Clean Top Full-Width Banner Pill */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-[11px] font-bold py-1.5 px-4 rounded-xl uppercase tracking-wider flex items-center justify-center gap-1.5 mb-3 shadow-xs font-heading">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>MAIS ESCOLHIDO (96% DAS MULHERES)</span>
            </div>

            <div>
              {/* Header Info */}
              <div className="mb-3.5 pb-3 border-b border-rose-100">
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1 font-heading">
                  <Sparkles className="w-3 h-3" />
                  EXPERIÊNCIA COMPLETA + BÔNUS
                </span>
                <h3 className="text-2xl sm:text-3xl text-[#1D1D1F] font-heading uppercase tracking-wide mt-1 flex items-center gap-2">
                  Pack Completo VIP
                </h3>
                <p className="text-xs text-neutral-600 mt-0.5 font-sans-body">
                  Leve a coleção completa de figurinhas, molduras, divisores e todos os 4 bônus especiais.
                </p>
              </div>

              {/* Price comparison */}
              <div className="mb-3.5 bg-rose-50/60 rounded-2xl p-3 border border-rose-100">
                <p className="text-[11px] text-neutral-600 font-medium line-through">De R$ 97,90 por apenas:</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-sm font-semibold text-rose-600 font-heading">R$</span>
                  <span className="text-4xl sm:text-5xl font-bold text-rose-600 font-heading tracking-tight">27,90</span>
                </div>
                <p className="text-[11px] text-rose-900 font-semibold mt-0.5 font-sans-body">
                  Pagamento único • Sem mensalidades • Acesso vitalício
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5 text-xs text-neutral-700 font-sans-body">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>+15.000</strong> Figurinhas Estéticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>+100</strong> Molduras Elegantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>+150</strong> Ícones Minimalistas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>+60</strong> Divisores Femininos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span><strong>+120</strong> Elementos Florais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span>Tutorial completo passo a passo</span>
                </div>
              </div>

              {/* Highlighted Bonus Box - Compact with Title Only as requested */}
              <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50/80 rounded-2xl py-2.5 px-3.5 border border-rose-200/80 mb-4 flex items-center justify-between gap-2 shadow-xs">
                <span className="text-xs sm:text-[13px] font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                  <Gift className="w-4 h-4 text-rose-600 shrink-0" />
                  + TODOS OS 4 BÔNUS INCLUSOS HOJE
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300/60 px-2 py-0.5 rounded-full shrink-0">
                  GRÁTIS
                </span>
              </div>
            </div>

            <div>
              <a
                id="cta-completo-btn"
                href={CHECKOUT_LINKS.completo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-full shadow-md shadow-rose-500/20 transition-all text-center flex items-center justify-center gap-2 animate-cta-subtle group font-heading cursor-pointer"
              >
                <span>QUERO O PACK COMPLETO + BÔNUS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-neutral-600 font-sans-body">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Compra 100% segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-500" />
                  Acesso imediato
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-rose-500" />
                  7 dias de garantia
                </span>
              </div>
            </div>
          </div>

          {/* PLAN 2: PACK ESSENCIAL - R$ 9,99 (SECOND) */}
          <div className="md:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/80 shadow-sm flex flex-col justify-between relative order-2">
            <div>
              <div className="mb-3.5 pb-3 border-b border-neutral-100">
                <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider font-heading">
                  Opção Básica
                </span>
                <h3 className="text-2xl sm:text-3xl text-[#1D1D1F] font-heading uppercase tracking-wide mt-1">
                  Pack Essencial
                </h3>
                <p className="text-xs text-neutral-600 mt-0.5 font-sans-body">
                  Ideal para quem quer apenas as figurinhas para começar.
                </p>
              </div>

              {/* Price */}
              <div className="mb-3.5">
                <p className="text-[11px] text-neutral-600 font-medium">Pagamento único:</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-sm font-semibold text-neutral-600 font-heading">R$</span>
                  <span className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] font-heading tracking-tight">9,99</span>
                </div>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans-body">Acesso vitalício • Sem mensalidades</p>
              </div>

              {/* Features List */}
              <div className="space-y-2 mb-5 text-xs sm:text-sm text-neutral-700 font-sans-body">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>+15.000</strong> figurinhas e elementos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Acesso vitalício à biblioteca</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Compatível com iPhone e Android</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-600">
                  <span className="text-xs text-neutral-600">✕ Não inclui os 4 bônus especiais</span>
                </div>
              </div>
            </div>

            <div>
              <button
                id="btn-choose-essencial"
                type="button"
                onClick={() => setIsUpsellOpen(true)}
                className="w-full bg-[#1D1D1F] hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm py-3 px-5 rounded-full shadow-xs transition-all text-center flex items-center justify-center gap-2 group font-heading cursor-pointer"
              >
                <span>QUERO O PACK ESSENCIAL</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-neutral-600 font-sans-body">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Compra segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-500" />
                  Acesso imediato
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Upsell Pop-up when choosing R$ 9,99 */}
      <UpsellModal isOpen={isUpsellOpen} onClose={() => setIsUpsellOpen(false)} />
    </section>
  );
};
