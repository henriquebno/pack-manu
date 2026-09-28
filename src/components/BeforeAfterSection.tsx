import React from 'react';
import { BEFORE_AFTER_DATA } from '../data';
import { UnderlineStroke } from './TitleAccents';

export const BeforeAfterSection: React.FC = () => {
  // Strictly the top 3 most compelling before/after demonstrations
  const displayItems = BEFORE_AFTER_DATA.slice(0, 3);

  return (
    <section id="transformacao" className="py-12 md:py-18 bg-[#FAF9F6] border-t border-neutral-200/60 relative scroll-mt-6">
      <span id="inspiracoes" className="sr-only" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center bg-rose-50 text-rose-700 border border-rose-200/80 text-xs font-semibold px-4 py-1 rounded-full mb-3.5 font-sans-body shadow-2xs">
            A Transformação
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D1D1F] font-heading tracking-tight leading-snug sm:leading-tight text-balance">
            De uma foto comum para um story que{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">dá vontade de postar ✨</span>
              <UnderlineStroke className="-bottom-1" color="#e11d48" />
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-sans-body">
            Veja a diferença instantânea que os elementos certos fazem nos seus Stories do dia a dia.
          </p>
        </div>

        {/* Side-by-Side Comparison Feed (3 strong pairs) */}
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

      </div>
    </section>
  );
};
