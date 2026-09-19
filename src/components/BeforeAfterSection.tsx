import React, { useState } from 'react';
import { BEFORE_AFTER_DATA } from '../data';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Double items for seamless infinite scroll
  const carouselItems = [...BEFORE_AFTER_DATA, ...BEFORE_AFTER_DATA];

  return (
    <section id="transformacao" className="py-14 md:py-24 bg-[#FAF9F6] border-t border-neutral-200/60 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <SectionBadge>A Transformação</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            De fotos comuns para{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">Stories memoráveis ✨</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body">
            Com os elementos certos, seus Stories ganham harmonia, elegância e personalidade sem você precisar gastar horas editando.
          </p>
        </div>

      </div>

      {/* INFINITE CAROUSEL OF TRANSFORMATIONS (Continuous Seamless Scrolling, non-stop, non-clickable) */}
      <div className="w-full overflow-hidden py-4 select-none pointer-events-none">
        <div className="flex gap-4 sm:gap-6 animate-scroll-slow w-max px-4">
          {carouselItems.map((item, idx) => (
            <div
              key={`trans-${item.id}-${idx}`}
              className="bg-white rounded-3xl p-3.5 sm:p-4 border border-neutral-200/80 shadow-sm w-[290px] sm:w-[350px] shrink-0 flex flex-col"
            >
              {/* Category label */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-[#1D1D1F] font-heading">
                  {item.category}
                </span>
                <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full font-heading">
                  {item.label}
                </span>
              </div>

              {/* Side by side mini comparison */}
              <div className="grid grid-cols-2 gap-2 aspect-[16/10] sm:aspect-[16/11]">
                {/* BEFORE */}
                <div className="relative rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/70">
                  <img
                    src={item.beforeImg}
                    alt={`${item.label} antes`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={160}
                    height={110}
                    draggable={false}
                  />
                  <span className="absolute top-1.5 left-1.5 text-[9px] font-bold text-neutral-700 bg-white/90 backdrop-blur-2xs px-1.5 py-0.5 rounded shadow-2xs font-heading">
                    ANTES
                  </span>
                </div>

                {/* AFTER */}
                <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-rose-300 shadow-xs">
                  <img
                    src={item.afterImg}
                    alt={`${item.label} depois`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={160}
                    height={110}
                    draggable={false}
                  />
                  <span className="absolute top-1.5 left-1.5 text-[9px] font-bold text-white bg-rose-600/90 backdrop-blur-2xs px-1.5 py-0.5 rounded shadow-2xs flex items-center gap-0.5 font-heading">
                    <Sparkles className="w-2.5 h-2.5" />
                    DEPOIS
                  </span>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 text-center text-[11px] text-neutral-600 font-sans-body px-1 line-clamp-1">
                {item.afterCaption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Interactive Comparison Below */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-neutral-200/80 shadow-sm">
          
          {/* Tabs */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap mb-6">
            {BEFORE_AFTER_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer font-heading ${
                  activeTab === idx
                    ? 'bg-[#1D1D1F] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Side by side large display for selected item */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Before */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider font-heading">
                  ANTES (SEM ELEMENTOS)
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-neutral-100 border border-neutral-200 shadow-xs">
                <img
                  src={BEFORE_AFTER_DATA[activeTab].beforeImg}
                  alt="Antes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={340}
                  height={600}
                />
              </div>
              <p className="text-[11px] text-neutral-600 text-center mt-2 font-sans-body">
                {BEFORE_AFTER_DATA[activeTab].beforeCaption}
              </p>
            </div>

            {/* After */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1 font-heading">
                  <Sparkles className="w-3 h-3" />
                  DEPOIS (COM O PACK)
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-neutral-900 border-2 border-rose-400 shadow-md">
                <img
                  src={BEFORE_AFTER_DATA[activeTab].afterImg}
                  alt="Depois"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={340}
                  height={600}
                />
              </div>
              <p className="text-[11px] text-rose-700 font-semibold text-center mt-2 font-sans-body">
                {BEFORE_AFTER_DATA[activeTab].afterCaption}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 text-center">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 bg-[#1D1D1F] hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-xs transition-all font-heading"
            >
              <span>TRANSFORMAR MEUS STORIES TAMBÉM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
