import React from 'react';
import { ImageOff, Shuffle, Fingerprint, Clock, Sparkles } from 'lucide-react';
import { SectionBadge, MarkerHighlight } from './TitleAccents';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: ImageOff,
      number: '01',
      title: 'STORIES SEM GRAÇA',
      description: 'Você posta uma foto ou vídeo, mas sente que está “cru”. Falta detalhe, acabamento e um visual mais bonito.',
    },
    {
      icon: Clock,
      number: '02',
      title: 'VOCÊ PERDE TEMPO DEMAIS',
      description: 'Abre Pinterest, Canva, GIFs, fontes, referências… e mesmo assim demora para montar um Story simples.',
    },
    {
      icon: Shuffle,
      number: '03',
      title: 'NADA COMBINA ENTRE SI',
      description: 'Cada Story fica de um jeito. Um fofo, outro apagado, outro aleatório — e o perfil perde identidade.',
    },
    {
      icon: Fingerprint,
      number: '04',
      title: 'VOCÊ PENSA DEMAIS ANTES DE POSTAR',
      description: 'Muitas vezes você até quer aparecer mais, mas trava porque acha que o Story não ficou bonito o suficiente.',
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-white border-t border-neutral-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <SectionBadge>Você se identifica?</SectionBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-tight">
            VOCÊ ATÉ TEM BOM GOSTO<br />
            <span>
              MAS SEUS STORIES AINDA NÃO FICAM{' '}
              <MarkerHighlight colorClass="bg-rose-200/60">
                <span className="text-rose-600">COMO VOCÊ IMAGINA</span>
              </MarkerHighlight>
            </span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-neutral-600 font-sans-body leading-relaxed max-w-xl mx-auto">
            Você posta, testa, apaga, muda… mas ainda sente que falta algo.
            <span className="block mt-1.5 text-neutral-700 font-medium">
              O resultado? Stories sem harmonia, sem personalidade e sem aquele visual que chama atenção.
            </span>
          </p>
        </div>

        {/* 4 Pain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF9F6] rounded-2xl p-5 sm:p-6 border border-neutral-200/70 shadow-2xs hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-rose-600 flex items-center justify-center border border-neutral-200/60 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-rose-600 bg-white border border-rose-200/60 px-2.5 py-0.5 rounded-full font-heading">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1D1D1F] font-heading mb-1.5 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans-body">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Callout Box */}
        <div className="mt-8 bg-[#1D1D1F] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <p className="text-base sm:text-lg font-medium leading-relaxed font-sans-body">
              “Eu só queria postar algo bonito sem perder tempo procurando elemento, fonte e inspiração toda vez.”
            </p>
            <div className="mt-4 pt-3.5 border-t border-white/10 inline-flex items-center justify-center gap-1.5 text-xs text-rose-300 font-heading">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Foi por isso que criamos um pack pronto para transformar Stories comuns em posts mais bonitos em poucos segundos.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
