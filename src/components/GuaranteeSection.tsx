import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { UnderlineStroke } from './TitleAccents';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-neutral-200/60 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-2xs flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          
          {/* Guarantee Badge Seal */}
          <div className="shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1D1D1F] p-1 flex items-center justify-center text-center shadow-md">
              <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-2 text-[#1D1D1F]">
                <ShieldCheck className="w-6 h-6 text-rose-600 mb-0.5" />
                <span className="text-xl sm:text-2xl font-bold font-heading leading-none text-[#1D1D1F]">
                  7 DIAS
                </span>
                <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest font-heading mt-0.5">
                  GARANTIA
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Content */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-rose-700 uppercase tracking-wider bg-rose-50 border border-rose-100/80 px-2.5 py-0.5 rounded-full mb-2 font-heading">
              <Heart className="w-3 h-3" />
              <span>Risco Zero</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl text-[#1D1D1F] font-heading uppercase tracking-wide mb-2">
              Experimente por{' '}
              <span className="relative inline-block text-rose-600">
                <span className="relative z-10">7 dias</span>
                <UnderlineStroke className="-bottom-0.5" color="#e11d48" />
              </span>{' '}
              com tranquilidade
            </h2>
            
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body">
              Você pode conhecer todo o material sem assumir nenhum risco. Você terá <strong>7 dias completos</strong> para acessar o Pack Manu Stories. Se por qualquer motivo achar que não é para você, basta solicitar o reembolso e você recebe de volta <strong>100% do valor pago</strong>. Simples e rápido.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
