import React from 'react';
import { Sparkles, Image, Check, Layers, Heart, Infinity as InfinityIcon, Zap } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

const ROW1_STICKERS = [
  '/images/sticker-1-CUhZcYaj.webp',
  '/images/sticker-4-Bz4LTYqM.webp',
  '/images/sticker-11-BliCkY5X.webp',
  '/images/sticker-13-BnuPCZTi.webp',
  '/images/sticker-15-CKHRMzGh.webp',
  '/images/sticker-16-D0e3fNl6.webp',
  '/images/sticker-12-C68Rt-ns.webp',
  '/images/sticker-19-DSx-dlyZ.webp',
  '/images/sticker-5-DjomY0fN.webp',
];

const ROW2_STICKERS = [
  '/images/sticker-6-BPiw3Ak_.webp',
  '/images/sticker-10-DfvINmaU.webp',
  '/images/sticker-14-TzpsTBd9.webp',
  '/images/sticker-17-JjG14PVt.webp',
  '/images/sticker-8-BFD-NdQg.webp',
  '/images/sticker-18-BI5dxiw-.webp',
  '/images/sticker-9-SLEOzQQo.webp',
  '/images/sticker-2-CtHK1tkb.webp',
  '/images/sticker-3-CYa_b6Hg.webp',
];

export const FeaturesLibrarySection: React.FC = () => {
  const categoriesCards = [
    {
      title: 'Figurinhas Estéticas',
      count: '+15.000 itens',
      desc: 'Elementos decorativos delicados e minimalistas para qualquer ocasião.',
      icon: Sparkles,
    },
    {
      title: 'Molduras Elegantes',
      count: '+100 molduras',
      desc: 'Enquadre suas fotos com design refinado e destaque instantâneo.',
      icon: Image,
    },
    {
      title: 'Ícones Minimalistas',
      count: '+150 ícones',
      desc: 'Pequenos detalhes funcionais para rotina, bem-estar e trabalho.',
      icon: Heart,
    },
    {
      title: 'Divisores e Traços',
      count: '+60 divisores',
      desc: 'Perfeitos para estruturar textos, legendas e caixas nos Stories.',
      icon: Layers,
    },
    {
      title: 'Elementos Florais',
      count: '+120 elementos',
      desc: 'Folhagens, botânicos e traços orgânicos suaves e femininos.',
      icon: Sparkles,
    },
    {
      title: 'Fundos & Texturas',
      count: '+50 fundos',
      desc: 'Texturas neutras e limpas para criar Stories do zero com facilidade.',
      icon: Image,
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-[#FAF9F6] border-t border-neutral-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <SectionBadge>Biblioteca Completa</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            <span className="relative inline-block text-rose-600 mr-2">
              <span className="relative z-10">+15.000 elementos</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
            prontos para os seus Stories
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body">
            Arquivos com fundo 100% transparente para copiar e colar em segundos no Instagram.
          </p>
        </div>

        {/* DARK BACKGROUND INFINITE CAROUSEL - EXACTLY LIKE ORIGINAL */}
        <div className="relative rounded-3xl bg-[#121214] p-5 sm:p-8 md:p-10 border border-white/10 shadow-2xl shadow-black/20 overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-rose-500/15 blur-3xl rounded-full pointer-events-none" />

          {/* Header Inside Dark Box */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-white/10 relative z-10">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-rose-300 uppercase tracking-wider font-heading">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Vitrine de Figurinhas em PNG</span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5 font-sans-body">
                Fundo transparente: destaque perfeito sobre qualquer foto ou vídeo
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                ✨ +15.000 opções
              </span>
              <span className="text-[11px] font-medium text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                ⚡ Copie e cole
              </span>
            </div>
          </div>

          {/* Continuous Infinite Scrolling Stickers */}
          <div className="flex flex-col gap-4 sm:gap-6 py-6 sm:py-8 overflow-hidden relative z-10 select-none pointer-events-none">
            
            {/* Row 1: Left */}
            <div className="w-full overflow-hidden">
              <div className="flex gap-4 sm:gap-6 animate-scroll-left w-max">
                {[...ROW1_STICKERS, ...ROW1_STICKERS].map((img, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/[0.04] rounded-2xl border border-white/10 p-3 sm:p-4 flex items-center justify-center shrink-0 backdrop-blur-xs"
                  >
                    <img
                      src={img}
                      alt={`Figurinha aesthetic ${idx + 1}`}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Right */}
            <div className="w-full overflow-hidden">
              <div className="flex gap-4 sm:gap-6 animate-scroll-right w-max">
                {[...ROW2_STICKERS, ...ROW2_STICKERS].map((img, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-white/[0.04] rounded-2xl border border-white/10 p-3 sm:p-4 flex items-center justify-center shrink-0 backdrop-blur-xs"
                  >
                    <img
                      src={img}
                      alt={`Figurinha aesthetic ${idx + 1}`}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                      loading="lazy"
                      decoding="async"
                      width={128}
                      height={128}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom quick tip on dark card */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-center text-[11px] text-neutral-400 font-sans-body">
            <span>✓ Todas as figurinhas já recortadas</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Prontas para salvar no rolo da câmera</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Não precisa de Canva Pro nem aplicativos pagos</span>
          </div>

        </div>

        {/* 4 Technical Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          <div className="bg-white rounded-2xl p-4 border border-neutral-200/70 text-center shadow-xs">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#1D1D1F] font-heading">Fundo Transparente</p>
            <p className="text-[11px] text-neutral-600 mt-0.5 font-sans-body">PNG de altíssima qualidade</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-neutral-200/70 text-center shadow-xs">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2">
              <Image className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#1D1D1F] font-heading">Alta Resolução</p>
            <p className="text-[11px] text-neutral-600 mt-0.5 font-sans-body">Nítido em qualquer tamanho</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-neutral-200/70 text-center shadow-xs">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2">
              <InfinityIcon className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#1D1D1F] font-heading">Uso Ilimitado</p>
            <p className="text-[11px] text-neutral-600 mt-0.5 font-sans-body">Use quantas vezes quiser</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-neutral-200/70 text-center shadow-xs">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2">
              <Zap className="w-4 h-4" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#1D1D1F] font-heading">Acesso Imediato</p>
            <p className="text-[11px] text-neutral-600 mt-0.5 font-sans-body">Direto no seu e-mail</p>
          </div>
        </div>

        {/* 6 Categories Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3.5">
          {categoriesCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200/70 shadow-xs hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full font-heading">
                    {card.count}
                  </span>
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-[#1D1D1F] font-heading">
                  {card.title}
                </h3>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans-body leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <a
            href="#planos"
            className="inline-flex items-center gap-2 bg-[#1D1D1F] hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-xs sm:text-sm py-3 px-6 rounded-full shadow-xs transition-all font-heading"
          >
            <span>QUERO ACESSO À BIBLIOTECA COMPLETA</span>
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
