import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Users, Sparkles, CheckCircle } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <SectionBadge>Prova Social</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            Milhares de mulheres já{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">transformaram ✨</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>{' '}
            seus Stories
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body">
            Veja o que elas estão dizendo sobre o Pack Manu Stories:
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-neutral-200/80 shadow-2xs grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
          <div className="border-r border-neutral-100 last:border-0 pr-2">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-1.5">
              <Users className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#1D1D1F] font-heading">5.000+</p>
            <p className="text-[11px] text-neutral-600 font-sans-body">Mulheres usando</p>
          </div>

          <div className="border-r border-neutral-100 last:border-0 pr-2">
            <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-1.5">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#1D1D1F] font-heading">4.9</p>
            <p className="text-[11px] text-neutral-600 font-sans-body">Nota média</p>
          </div>

          <div className="border-r border-neutral-100 last:border-0 pr-2">
            <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mx-auto mb-1.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#1D1D1F] font-heading">+15.000</p>
            <p className="text-[11px] text-neutral-600 font-sans-body">Elementos</p>
          </div>

          <div>
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1.5">
              <CheckCircle className="w-4 h-4" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#1D1D1F] font-heading">100%</p>
            <p className="text-[11px] text-neutral-600 font-sans-body">Satisfação</p>
          </div>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/70 shadow-2xs hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-2.5 text-amber-400">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed font-sans-body">
                  “{t.quote}”
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1D1D1F] leading-tight font-heading">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-rose-600 font-sans-body">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
