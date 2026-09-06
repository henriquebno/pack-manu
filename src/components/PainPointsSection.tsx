import React from 'react';
import { ImageOff, Shuffle, Fingerprint, Clock, Sparkles } from 'lucide-react';
import { SectionBadge, MarkerHighlight } from './TitleAccents';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: ImageOff,
      title: 'Stories sem graça',
      description: 'Você posta a foto, mas sente que ela ficou simples demais e não chama atenção.',
      tag: 'Falta destaque',
    },
    {
      icon: Shuffle,
      title: 'Falta de harmonia',
      description: 'Você tenta adicionar textos, GIFs e elementos, mas parece que nada combina.',
      tag: 'Visual poluído',
    },
    {
      icon: Fingerprint,
      title: 'Sem identidade',
      description: 'Cada Story fica com um estilo diferente e seu perfil não transmite organização e cuidado.',
      tag: 'Inconsistência',
    },
    {
      icon: Clock,
      title: 'Tempo perdido tentando editar',
      description: 'Testa uma fonte, apaga. Procura GIF, não encontra. Muda a cor. Tenta de novo... Uma coisa de segundos vira um trabalho.',
      tag: 'Cansaço',
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-white border-t border-neutral-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <SectionBadge>Você se identifica?</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            Você também sente que seus Stories poderiam ser{' '}
            <MarkerHighlight colorClass="bg-rose-200/60">
              <span className="text-rose-600">muito mais bonitos?</span>
            </MarkerHighlight>
          </h2>
          
          <div className="mt-3.5 space-y-1.5 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body leading-relaxed">
            <p>Você tira uma foto legal, quer compartilhar aquele momento...</p>
            <p>Mas quando abre os Stories, parece que <strong className="text-neutral-900 font-semibold">falta alguma coisa</strong>.</p>
            <p>A foto está boa, só falta o acabamento estético que você admira em outros perfis.</p>
          </div>
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
                    <span className="text-[10px] font-semibold text-neutral-600 bg-white border border-neutral-200/60 px-2.5 py-0.5 rounded-full font-heading">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1D1D1F] font-heading mb-1.5">
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
              “Eu só queria conseguir deixar meus Stories bonitos sem precisar entender de design ou passar vários minutos editando.”
            </p>
            <div className="mt-4 pt-3.5 border-t border-white/10 inline-flex items-center gap-1.5 text-xs text-rose-300 font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Criado para transformar qualquer foto comum em menos de 1 minuto</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
