import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#181414] text-neutral-400 py-12 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-rose-600/20 text-rose-400 flex items-center justify-center font-serif-display font-bold">
            M
          </span>
          <span className="font-bold text-white text-lg font-serif-display tracking-tight">
            Pack Manu Stories
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
          A biblioteca definitiva de figurinhas estéticas e elementos elegantes para elevar seu Instagram.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 text-xs text-neutral-400">
          <button
            onClick={() => onOpenLegal('terms')}
            className="hover:text-rose-400 transition-colors underline underline-offset-4 cursor-pointer"
          >
            Termos de Uso
          </button>
          <span>•</span>
          <button
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-rose-400 transition-colors underline underline-offset-4 cursor-pointer"
          >
            Política de Privacidade
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-neutral-400 max-w-2xl leading-relaxed">
          Este produto não tem vínculo institucional com a Meta, Instagram ou Facebook. Todas as marcas registradas pertencem a seus respectivos titulares.
        </p>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-2">
          <p>© {new Date().getFullYear()} Pack Manu Stories — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> para transformar seus Stories
          </p>
        </div>

      </div>
    </footer>
  );
};
