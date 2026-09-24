import React from 'react';
import { Sparkles, Copy, Smartphone } from 'lucide-react';
import { SectionBadge, UnderlineStroke } from './TitleAccents';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: Sparkles,
      title: 'Escolha a figurinha',
      description: 'No seu celular, acesse a pasta organizada com milhares de opções separadas por nicho e momento do dia.',
    },
    {
      number: '2',
      icon: Copy,
      title: 'Copie com 1 toque',
      description: 'Copie a figurinha com fundo transparente direto para a área de transferência do seu aparelho.',
    },
    {
      number: '3',
      icon: Smartphone,
      title: 'Cole no seu Story',
      description: 'Abra o Instagram e cole a figurinha exatamente onde quiser na sua foto ou vídeo. Simples assim!',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <SectionBadge>Passo a Passo Simples</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            Escolheu a foto?{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">O resto é simples ✨</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body">
            Você não precisa de aplicativos complexos nem de habilidades de design.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs relative flex flex-col items-center text-center hover:border-rose-200 hover:shadow-xs transition-all"
              >
                {/* Step badge icon */}
                <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center mb-4 relative">
                  <Icon className="w-6 h-6 text-rose-600" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold font-heading flex items-center justify-center shadow-xs">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] mb-2 font-heading uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
