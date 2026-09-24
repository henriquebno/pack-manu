import React, { useState } from 'react';
import { BEFORE_AFTER_DATA } from '../data';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { UnderlineStroke } from './TitleAccents';

export const BeforeAfterSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // The first 2 pairs match the reference photo (Fruta & Treino/Relógio), plus other curated pairs
  const displayItems = showAll ? BEFORE_AFTER_DATA : BEFORE_AFTER_DATA.slice(0, 3);

  return (
    <section id="transformacao" className="py-12 md:py-20 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center bg-rose-50 text-rose-700 border border-rose-200/80 text-xs font-semibold px-4 py-1 rounded-full mb-3.5 font-sans-body shadow-2xs">
            A Transformação
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-tight">
            A mesma foto. Só que com o{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">Pack Manu Stories</span>
              <UnderlineStroke className="-bottom-1" color="#e11d48" />
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-sans-body">
            Veja a diferença instantânea que os elementos certos fazem nos seus Stories do dia a dia.
          </p>
        </div>

        {/* Side-by-Side Comparison Feed (Exact model from photo) */}
        <div className="space-y-4 sm:space-y-6 max-w-[360px] sm:max-w-[440px] md:max-w-[480px] mx-auto">
          {displayItems.map((item) => (
            <div key={item.id} className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              
              {/* SEM (Left Photo) */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/16] bg-neutral-200/80 shadow-xs border border-black/5">
                <img
                  src={item.beforeImg}
                  alt={`${item.label} sem figurinhas`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={240}
                  height={426}
                />
                <span className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider font-heading shadow-xs select-none">
                  SEM
                </span>
              </div>

              {/* COM (Right Photo) */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/16] bg-neutral-200/80 shadow-xs border border-black/5">
                <img
                  src={item.afterImg}
                  alt={`${item.label} com figurinhas`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={240}
                  height={426}
                />
                <span className="absolute top-2.5 right-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider font-heading shadow-sm shadow-rose-500/30 select-none">
                  COM
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Toggle to see more pairs */}
        {BEFORE_AFTER_DATA.length > 3 && (
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200/90 hover:bg-neutral-50 px-4 py-2 rounded-full shadow-2xs transition-all font-heading cursor-pointer"
            >
              <span>{showAll ? 'Ver menos comparações' : 'Ver mais fotos comparadas'}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-md shadow-rose-500/20 transition-all font-heading"
          >
            <span>QUERO TRANSFORMAR MEUS STORIES</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
