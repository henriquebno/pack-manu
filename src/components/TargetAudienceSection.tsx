import React from 'react';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const TargetAudienceSection: React.FC = () => {
  const isForYou = [
    'Mulheres que desejam um Instagram mais bonito e profissional',
    'Empreendedoras que querem transmitir credibilidade e atrair clientes',
    'Criadoras de conteúdo que valorizam estética e harmonia visual',
    'Qualquer mulher que quer se sentir orgulhosa ao postar',
    'Quem quer economizar tempo sem abrir mão da qualidade',
  ];

  const notForYou = [
    'Quem busca algo masculino ou agressivo visualmente',
    'Quem não usa Instagram Stories no seu dia a dia',
    'Quem prefere deixar o perfil sem cuidado visual',
  ];

  return (
    <section className="py-14 md:py-24 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <SectionBadge>É Para Você?</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            O Pack Manu Stories foi feito para{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">mulheres que...</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-sans-body">
            Veja se essa transformação faz sentido para o seu momento:
          </p>
        </div>

        {/* 2 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Column 1: É para você */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] font-heading uppercase tracking-wide">
                  É para você se...
                </h3>
              </div>

              <div className="space-y-3.5">
                {isForYou.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-700 font-medium font-sans-body leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <a
                href="#oferta"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full shadow-xs transition-all font-heading"
              >
                <span>SIM, É EXATAMENTE O QUE PRECISO</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: NÃO é para você */}
          <div className="bg-white/70 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-700 font-heading uppercase tracking-wide">
                  NÃO é para você se...
                </h3>
              </div>

              <div className="space-y-3.5">
                {notForYou.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-sans-body leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
              <p className="text-xs text-neutral-600 font-sans-body">
                Foco 100% em estética feminina, delicada e elegante.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
