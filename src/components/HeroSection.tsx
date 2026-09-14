import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { UnderlineStroke } from './TitleAccents';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:pt-12 md:pb-20 bg-[#FAF9F6]">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-100/40 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Social Proof Pill Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white border border-neutral-200/80 shadow-xs px-3.5 py-1 rounded-full mb-5">
            <span className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-700 font-sans-body">
              <strong className="font-semibold text-rose-600">+28 mil mulheres</strong> já usam
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-[#1D1D1F] tracking-wide leading-[1.05] max-w-3xl font-heading uppercase">
            Transforme qualquer foto em um Story{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">bonito, elegante</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>{' '}
            e com a sua personalidade
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl font-sans-body leading-relaxed">
            Tenha acesso ao meu pack com milhares de figurinhas para academia, trabalho, estudos, skincare, viagens, fé, rotina e muito mais.
          </p>

          {/* CTA Button & Trust Links */}
          <div className="mt-6 flex flex-col items-center w-full max-w-sm">
            <a
              id="hero-cta-btn"
              href="#planos"
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md shadow-rose-500/20 transition-all text-center flex items-center justify-center gap-2 group font-heading"
            >
              <span>QUERO MEUS STORIES BONITOS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#transformacao"
              className="mt-2.5 text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors font-sans-body"
            >
              Ver transformações antes e depois ↓
            </a>

            {/* Checkpoints list */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full text-center">
              <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-600 bg-white border border-neutral-200/70 py-1.5 px-2 rounded-xl shadow-2xs font-sans-body">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-600 bg-white border border-neutral-200/70 py-1.5 px-2 rounded-xl shadow-2xs font-sans-body">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>+15.000 itens</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-600 bg-white border border-neutral-200/70 py-1.5 px-2 rounded-xl shadow-2xs font-sans-body">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Fácil de usar</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-600 bg-white border border-neutral-200/70 py-1.5 px-2 rounded-xl shadow-2xs font-sans-body">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>Acesso vitalício</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="relative mt-10 sm:mt-12 w-full max-w-3xl mx-auto">
            <div className="relative mx-auto rounded-3xl p-2 bg-white/70 shadow-xl shadow-black/5 border border-black/[0.04]">
              <img
                src="/images/hero-mockup-DsMjv5DB.png"
                alt="Pack Manu Stories Mockup em smartphones"
                className="w-full h-auto rounded-2xl object-cover"
                loading="eager"
              />

              {/* Floating aesthetic feature tags */}
              <div className="absolute -bottom-3 left-3 sm:left-6 bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl py-1.5 px-3 shadow-md flex items-center gap-2 animate-float">
                <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 text-xs">
                  ✨
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-neutral-900 leading-tight font-heading">Fundo Transparente</p>
                  <p className="text-[9px] text-neutral-500 font-sans-body">Copie e cole direto no Story</p>
                </div>
              </div>

              <div className="absolute -top-2.5 right-3 sm:right-6 bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl py-1.5 px-3 shadow-md flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 text-xs">
                  ⚡
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-neutral-900 leading-tight font-heading">Pronto em 30 segundos</p>
                  <p className="text-[9px] text-neutral-500 font-sans-body">Pelo próprio celular</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
