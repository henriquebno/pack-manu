import React, { useEffect } from 'react';
import { X, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_LINKS } from '../data';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="upsell-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Box - Centered, does NOT take full screen on mobile */}
      <div
        id="upsell-modal-content"
        className="relative bg-white rounded-3xl max-w-sm sm:max-w-md w-full p-5 sm:p-6 shadow-2xl border border-rose-100 my-auto text-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button (X) to allow closing and choosing the R$ 27,90 offer */}
        <button
          id="close-upsell-modal-btn"
          onClick={onClose}
          aria-label="Fechar e ver outros planos"
          className="absolute top-3.5 right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Alert Badge */}
        <div className="inline-flex items-center gap-1 bg-rose-50 border border-rose-200/80 text-rose-700 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider font-heading mb-2.5">
          <span>🎁 ESPERE! Liberamos uma condição especial para você</span>
        </div>

        {/* Introduction text */}
        <p className="text-xs sm:text-sm text-neutral-700 font-sans-body mt-1">
          Você escolheu o <strong className="text-[#1D1D1F]">Pack Essencial por R$ 9,99</strong>.
        </p>
        <p className="text-xs text-neutral-500 font-sans-body mt-1">
          Mas antes de continuar, queremos liberar uma oportunidade única:
        </p>

        {/* Special Offer Card Box */}
        <div className="mt-3 bg-[#FAF9F6] rounded-2xl p-4 border border-rose-200/70 text-center shadow-2xs">
          <h3 className="text-base sm:text-lg font-bold font-heading uppercase text-[#1D1D1F] tracking-wide leading-snug">
            Leve o <span className="text-rose-600">PACK COMPLETO</span> com todos os bônus por apenas{' '}
            <span className="text-emerald-700 bg-emerald-100/70 border border-emerald-300/80 px-1.5 py-0.5 rounded-md font-bold inline-block">
              R$ 19,90
            </span>
          </h3>

          <p className="text-xs text-neutral-600 font-sans-body mt-2 leading-relaxed">
            Você receberá tudo do Pack Essencial{' '}
            <strong className="text-neutral-800">+ todas as coleções e bônus exclusivos da versão Completa.</strong>
          </p>

          {/* Pricing Highlight */}
          <div className="mt-3 pt-2.5 border-t border-neutral-200/60 flex items-center justify-center gap-2">
            <span className="line-through text-neutral-400 text-xs sm:text-sm font-semibold">
              R$ 27,90
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-rose-600 uppercase tracking-wider font-heading">
              HOJE POR
            </span>
            <span className="text-2xl sm:text-3xl font-bold font-heading text-[#1D1D1F] tracking-tight">
              R$ 19,90
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-emerald-800 font-semibold mt-1 font-sans-body">
            Aproveite esse desconto exclusivo de R$ 27,90 por apenas R$ 19,90.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col items-center">
          {/* Main Focused Button (R$ 19,90) */}
          <a
            id="upsell-accept-btn"
            href={CHECKOUT_LINKS.completoOferta27}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm py-3 px-3 sm:px-4 rounded-full shadow-lg shadow-rose-500/25 transition-all flex items-center justify-center gap-2 uppercase tracking-wide font-heading text-center cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-300 fill-amber-300" />
            <span className="leading-tight">SIM! QUERO APROVEITAR E LEVAR O COMPLETO POR R$ 19,90</span>
          </a>

          {/* Discreet Secondary Option (R$ 9,99) */}
          <a
            id="upsell-decline-btn"
            href={CHECKOUT_LINKS.essencial}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-[11px] sm:text-xs text-neutral-400 hover:text-neutral-700 transition-colors underline underline-offset-2 font-sans-body text-center block px-2 leading-relaxed cursor-pointer"
          >
            Não, obrigada. Quero continuar apenas com o Pack Essencial por R$ 9,99.
          </a>
        </div>

        {/* Micro Trust Indicators */}
        <div className="mt-3.5 pt-2.5 border-t border-neutral-100 flex items-center justify-center gap-3 text-[10px] text-neutral-400 font-sans-body">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Compra 100% segura
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-500" />
            Acesso imediato
          </span>
        </div>
      </div>
    </div>
  );
};
