import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

export const TopBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(347);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 10 ? prev - 1 : 347));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="bg-[#121214] text-[#FAF6F0] py-2 px-4 text-xs font-medium border-b border-white/10 sticky top-0 z-40 backdrop-blur-md bg-opacity-95 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center">
        <span className="inline-flex items-center gap-1 text-rose-300 font-semibold tracking-wide font-sans-body">
          <Clock className="w-3 h-3 text-rose-400 animate-pulse" />
          <span className="tabular-nums font-bold text-rose-200">{formattedTime}</span>
        </span>
        <span className="text-neutral-200 text-[11px] sm:text-xs font-sans-body">
          Mais de 28 mil mulheres já transformaram seus Stories. <strong className="text-white">Falta você.</strong>
        </span>
        <a
          href="#planos"
          className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold bg-white text-[#121214] hover:bg-neutral-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider transition-all font-heading"
        >
          <Flame className="w-3 h-3 text-rose-600 fill-rose-600" />
          Ver Oferta
        </a>
      </div>
    </div>
  );
};
