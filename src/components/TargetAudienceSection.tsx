import React from 'react';
import { AUDIENCE_CHECKLIST } from '../data';
import { Check, HeartHandshake, ArrowRight } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-white border-t border-neutral-200/60 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <SectionBadge>É para você?</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            O Pack Manu Stories foi feito para{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">mulheres que...</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans-body">
            Se você se identifica com pelo menos um destes pontos, esse acervo foi feito para você:
          </p>
        </div>

        {/* Checklist Card */}
        <div className="bg-[#FAF9F6] rounded-3xl p-5 sm:p-8 border border-neutral-200/80 shadow-2xs">
          <div className="space-y-3">
            {AUDIENCE_CHECKLIST.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-neutral-200/60 shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 font-medium font-sans-body leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-neutral-700 text-xs font-sans-body">
              <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Eleve o nível do seu Instagram hoje mesmo</span>
            </div>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-[#1D1D1F] hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-xs transition-all font-heading"
            >
              <span>Ver Opções de Acesso</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
