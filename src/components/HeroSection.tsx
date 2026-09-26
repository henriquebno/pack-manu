import React from 'react';
import { ArrowRight } from 'lucide-react';
import { UnderlineStroke } from './TitleAccents';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:pt-12 md:pb-20 bg-[#FAF9F6]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-100/40 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white border border-neutral-200/80 shadow-xs px-3.5 py-1.5 rounded-full mb-5">
            <span className="text-amber-500 text-xs">✨</span>
            <span className="text-[11px] sm:text-xs font-semibold text-neutral-800 font-heading tracking-wide">
              +15.000 figurinhas para seus Stories
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#1D1D1F] tracking-wide leading-tight sm:leading-[1.15] max-w-4xl font-heading uppercase text-balance">
            Transforme qualquer story em um conteúdo bonito, profissional e{' '}
            <span className="relative inline-block text-rose-600 whitespace-nowrap">
              <span className="relative z-10">impossível de ignorar</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>{' '}
            em poucos cliques.
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl font-sans-body leading-relaxed">
            Tenha +15.000 figurinhas e elementos prontos para usar em Stories de trabalho, rotina, academia, fé, beleza, comida, viagens e muito mais.
          </p>
          <p className="mt-1.5 text-xs sm:text-sm font-semibold text-neutral-800 font-sans-body">
            Sem precisar criar do zero ou perder tempo procurando GIFs.
          </p>

          {/* Hero Visual Mockup */}
          <div className="relative mt-6 sm:mt-8 w-full max-w-3xl mx-auto">
            <div className="relative mx-auto rounded-3xl p-2 bg-white/70 shadow-xl shadow-black/5 border border-black/[0.04]">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/hero-mockup-new-mobile.webp" type="image/webp" width={640} height={640} />
                <img
                  src="/images/hero-mockup-new.webp"
                  alt="Pack Manu Stories Mockup em smartphones"
                  className="w-full h-auto rounded-2xl object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1254}
                  height={1254}
                />
              </picture>
            </div>
          </div>

          {/* CTA Buttons & Microcopy */}
          <div className="mt-8 flex flex-col items-center w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <a
                id="hero-cta-btn"
                href="#inspiracoes"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('inspiracoes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="w-full sm:w-auto flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full shadow-md shadow-rose-500/20 transition-all text-center flex items-center justify-center gap-2 group font-heading cursor-pointer"
              >
                <span>QUERO ACESSAR AS +15.000 FIGURINHAS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#produto"
                className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-200/80 hover:bg-neutral-50 px-5 py-3 rounded-full transition-all shadow-2xs font-heading"
              >
                Ver o que está incluso ↓
              </a>
            </div>

            <p className="mt-3 text-[11px] text-neutral-500 font-sans-body">
              A partir de <strong className="text-neutral-800 font-semibold">R$ 9,99</strong> • pagamento único
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
