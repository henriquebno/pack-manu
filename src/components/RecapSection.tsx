import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { UnderlineStroke } from './TitleAccents';

export const RecapSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-neutral-200/60 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
          <Sparkles className="w-5 h-5" />
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06] max-w-xl mx-auto">
          Seu Instagram também pode ter{' '}
          <span className="relative inline-block text-rose-600">
            <span className="relative z-10">aquele visual ✨</span>
            <UnderlineStroke className="-bottom-1" color="#e11d48" />
          </span>
        </h2>

        <div className="mt-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto space-y-2 font-sans-body">
          <p>
            Você não precisa ser designer nem passar horas editando para postar com bom gosto.
          </p>
          <p className="font-medium text-neutral-900">
            Com o Pack Manu Stories, você terá milhares de elementos prontos para transformar fotos comuns em Stories refinados em poucos segundos.
          </p>
        </div>

        {/* 4 Summary Badges */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto">
          <div className="bg-[#FAF9F6] rounded-xl p-2.5 border border-neutral-200/70 text-[11px] font-bold text-neutral-800 font-heading">
            ✨ +15.000 elementos
          </div>
          <div className="bg-[#FAF9F6] rounded-xl p-2.5 border border-neutral-200/70 text-[11px] font-bold text-neutral-800 font-heading">
            🔒 Acesso vitalício
          </div>
          <div className="bg-[#FAF9F6] rounded-xl p-2.5 border border-neutral-200/70 text-[11px] font-bold text-neutral-800 font-heading">
            🎁 4 Bônus inclusos
          </div>
          <div className="bg-[#FAF9F6] rounded-xl p-2.5 border border-neutral-200/70 text-[11px] font-bold text-neutral-800 font-heading">
            💗 7 dias de garantia
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md shadow-rose-500/20 transition-all font-heading"
          >
            <span>QUERO MEUS STORIES BONITOS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
