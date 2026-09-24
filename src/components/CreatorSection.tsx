import React from 'react';

export const CreatorSection: React.FC = () => {
  return (
    <section id="quem-esta-por-tras" className="py-14 md:py-20 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
          
          {/* Creator Photo - Quadrada com bordas levemente redondas, estática e sem clique */}
          <div className="shrink-0 relative">
            <div className="w-44 h-44 sm:w-52 sm:h-52 aspect-square rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm relative bg-neutral-100">
              <img
                id="creator-manu-photo"
                src="/images/manu-creator.webp"
                alt="Manu - Criadora do Pack Manu Stories"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width={208}
                height={208}
              />
            </div>
          </div>

          {/* Creator Content */}
          <div className="flex-1">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-rose-700 bg-rose-50 border border-rose-100/90 px-3 py-1 rounded-full inline-block mb-3 font-heading">
              ✨ CONHEÇA A CRIADORA
            </span>

            <h2 className="text-2xl sm:text-3xl text-[#1D1D1F] font-heading uppercase tracking-wide mb-4 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
              <span>Quem é Manu?</span>
              {/* Coração vermelho com apenas o traço feito à mão com caneta */}
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 inline-block shrink-0 drop-shadow-2xs -mt-1"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Coração traçado"
              >
                <path
                  d="M14.2 23.4C13.6 22.9 5.8 16.8 4.2 12.1C2.8 7.9 5.9 4.2 10.1 4.3C12.7 4.4 14.1 5.8 14.8 6.9C15.5 5.7 16.9 4.4 19.5 4.3C23.7 4.2 26.8 7.9 25.4 12.1C23.8 16.8 16 22.9 15.4 23.4C15 23.7 14.6 23.7 14.2 23.4Z"
                  stroke="#E11D48"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h2>

            <div className="space-y-3.5 text-xs sm:text-[14px] text-neutral-600 leading-relaxed font-sans-body">
              <p>
                Muito antes de atuar profissionalmente, eu já era apaixonada por stories bem construídos, estéticos e elegantes. Antes mesmo de existir estratégia ou briefing, eu já criava figurinhas personalizadas para deixar minhas próprias publicações com um toque único.
              </p>

              <p>
                Com o tempo, percebi que esse cuidado visual poderia ir além do meu perfil. Foi então que decidi disponibilizar minhas criações para ajudar outras mulheres a deixarem seus stories mais bonitos, organizados e atrativos — sem complicação e sem perder tempo.
              </p>

              <p className="text-neutral-800 font-medium">
                Hoje, fico imensamente feliz ao ver mais de <span className="text-rose-600 font-semibold">47 mil pessoas</span> transformando suas redes através do Pack Manu Stories, trazendo mais estética, leveza e personalidade para o seu dia a dia. ✨
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
