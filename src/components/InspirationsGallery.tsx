import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

// Full collection matching the original site's rich stories array
const ALL_STORIES_CAROUSEL = [
  '/images/story-1-C665SIao.webp',
  '/images/after-fitness-DC_K6b53.webp',
  '/images/story-11-_8e1j99H.webp',
  '/images/story-2-B94qPte1.webp',
  '/images/after-fruit-D1an2U3e.webp',
  '/images/story-12-BH_IGoOa.webp',
  '/images/story-3-CCcShyHH.webp',
  '/images/after-gym-Cdqt_dYD.webp',
  '/images/story-13-B676D-DK.webp',
  '/images/story-4-CNnDSkV9.webp',
  '/images/after-lingerie-BwfVXGKj.webp',
  '/images/story-14-_BhRRc8t.webp',
  '/images/story-5-DN4tThc0.webp',
  '/images/after-netflix-CWmTPNHb.webp',
  '/images/story-15-CDB78I5r.webp',
  '/images/story-6-BqgU9-pI.webp',
  '/images/after-pizza-DGUIwc9I.webp',
  '/images/story-16-CD4pJhPo.webp',
  '/images/story-7-BNw7-3Kq.webp',
  '/images/after-image-Bwm8Fojg.webp',
  '/images/story-17-D25O698I.webp',
  '/images/story-8-D6MxRHTs.webp',
  '/images/story-9-Cqu-C6DV.webp',
  '/images/story-18-CKJXJhhx.webp',
  '/images/story-10-B3zch44O.webp',
];

export const InspirationsGallery: React.FC = () => {
  // Split into 2 rows for balanced infinite scrolling
  const half = Math.ceil(ALL_STORIES_CAROUSEL.length / 2);
  const row1 = ALL_STORIES_CAROUSEL.slice(0, half);
  const row2 = ALL_STORIES_CAROUSEL.slice(half);

  return (
    <section className="py-14 md:py-24 bg-[#FAF9F6] border-t border-neutral-200/60 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Narrative Box */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs max-w-2xl mx-auto text-center">
          <span className="text-2xl block mb-2">✨</span>
          <p className="text-xl sm:text-2xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-snug">
            Imagine nunca mais abrir o Instagram sem saber como deixar seu Story{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">bonito</span>
              <UnderlineStroke className="-bottom-1" color="#e11d48" />
            </span>
          </p>
          <div className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-600 font-sans-body">
            <p>☕ <strong>Tirou foto do café?</strong> Tem figurinhas prontas para compor.</p>
            <p>💪 <strong>Foi treinar?</strong> Tem elementos de foco e motivação.</p>
            <p>💻 <strong>Trabalho e rotina?</strong> Composições elegantes em segundos.</p>
            <p className="pt-1.5 text-neutral-800 font-medium">
              Basta copiar o elemento da sua galeria e colar direto no Story. Rápido, leve e intuitivo.
            </p>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <SectionBadge>Inspirações Reais</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            Veja como ficam os seus{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">Stories ✨</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body">
            Mais de 500 composições criadas usando exclusivamente os elementos do Pack Manu Stories.
          </p>
        </div>

      </div>

      {/* INFINITE CONTINUOUS CAROUSEL OF REAL STORIES (Non-stop, non-clickable) */}
      <div className="w-full flex flex-col gap-4 sm:gap-6 py-2 select-none pointer-events-none">
        
        {/* Row 1: Leftward infinite scroll */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-scroll-left w-max px-2">
            {[...row1, ...row1].map((imgUrl, idx) => (
              <div
                key={`story-r1-${idx}`}
                className="w-36 sm:w-44 md:w-52 aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-100 border border-black/[0.06] shadow-sm shrink-0"
              >
                <img
                  src={imgUrl}
                  alt={`Inspiração Story ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={208}
                  height={370}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward infinite scroll */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-3 sm:gap-4 animate-scroll-right w-max px-2">
            {[...row2, ...row2].map((imgUrl, idx) => (
              <div
                key={`story-r2-${idx}`}
                className="w-36 sm:w-44 md:w-52 aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-100 border border-black/[0.06] shadow-sm shrink-0"
              >
                <img
                  src={imgUrl}
                  alt={`Inspiração Story ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={208}
                  height={370}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Button below carousel */}
      <div className="mt-8 text-center px-4">
        <a
          href="#planos"
          className="inline-flex items-center gap-2 bg-[#1D1D1F] hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm py-3 px-6 rounded-full shadow-xs transition-all font-heading"
        >
          <span>QUERO CRIAR STORIES BONITOS ASSIM</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
};
