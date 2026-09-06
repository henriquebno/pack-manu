import React from 'react';
import { Heart } from 'lucide-react';

export const CreatorSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-2xs flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          
          {/* Creator Photo */}
          <div className="shrink-0 relative">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-neutral-200 shadow-sm relative">
              <img
                src="/images/isabela-photo-ecTAwEwd.jpg"
                alt="Criadora do Pack Manu Stories"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-1 right-1 bg-rose-600 text-white p-1.5 rounded-full shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-white" />
            </div>
          </div>

          {/* Creator Text */}
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-rose-700 bg-rose-50 border border-rose-100/80 px-2.5 py-0.5 rounded-full inline-block mb-2 font-heading">
              Quem está por trás
            </span>
            <h3 className="text-2xl sm:text-3xl text-[#1D1D1F] font-heading uppercase tracking-wide mb-2">
              Muito prazer! ✨
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body">
              Assim como você, eu sempre quis Stories bonitos e elegantes sem precisar passar horas editando ou entender de programas complexos.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body mt-2">
              Criei o <strong>Pack Manu Stories</strong> para que qualquer mulher consiga elevar suas fotos em segundos. Hoje já são mais de 28 mil mulheres transformando seus perfis diariamente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
