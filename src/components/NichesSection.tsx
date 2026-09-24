import React from 'react';
import { CheckCircle2, Coffee, Briefcase, Sparkles } from 'lucide-react';
import { SectionBadge, MarkerHighlight, UnderlineStroke } from './TitleAccents';

export const NichesSection: React.FC = () => {
  const routineItems = [
    'Bom dia, boa tarde e boa noite',
    'Café e alimentação',
    'Academia e treino',
    'Trabalho e home office',
    'Estudos e leituras',
    'Maternidade e família',
    'Casa, limpeza e organização',
    'Férias e viagens',
    'Praia e fins de semana',
    'Clima e tempo',
    'Frases e pensamentos',
    'Fé e mensagens de gratidão',
    'Caixinhas de perguntas',
    'Datas especiais e comemorações',
    'Elementos 3D modernos',
    'E muito mais...',
  ];

  const workItems = [
    'Nutricionistas',
    'Esteticistas & Clínicas',
    'Psicólogas & Terapeutas',
    'Advogadas & Direito',
    'Dentistas & Odontologia',
    'Lash Designers',
    'Manicures & Nail Designers',
    'Confeiteiras & Gastronomia',
    'Social Media & Designers',
    'Empreendedoras & Lojas',
    'Profissionais da Saúde',
    'Maquiadoras & Cabeleireiras',
    'Arquitetas & Decoradoras',
    'Consultoras de Imagem',
    'Professoras & Educadoras',
    'E muitas outras...',
  ];

  return (
    <section className="py-14 md:py-24 bg-[#FAF9F6] border-t border-neutral-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <SectionBadge>Para Todos os Momentos</SectionBadge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-heading uppercase tracking-wide leading-[1.06]">
            Tem figurinha para{' '}
            <span className="relative inline-block text-rose-600">
              <span className="relative z-10">praticamente tudo ✨</span>
              <UnderlineStroke className="-bottom-1 sm:-bottom-1.5" color="#e11d48" />
            </span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-600 font-sans-body">
            Mais de 10.000 figurinhas organizadas por nicho e por momento do seu dia.
          </p>
        </div>

        {/* 2 Big Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          
          {/* Column 1: ROTINA */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-2xs">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider font-heading">
                    Uso Pessoal & Cotidiano
                  </span>
                  <h3 className="text-lg sm:text-xl text-[#1D1D1F] font-heading uppercase tracking-wide">
                    Para sua rotina
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {routineItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 font-sans-body">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span className={idx === routineItems.length - 1 ? 'font-semibold text-rose-600' : ''}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 bg-neutral-50 rounded-xl p-3 border border-neutral-200/60 text-[11px] text-neutral-600 flex items-center gap-2 font-sans-body">
              <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Nunca mais fique sem ideias para registrar seus momentos.</span>
            </div>
          </div>

          {/* Column 2: TRABALHO E NICHOS */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 shadow-2xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider font-heading">
                    Profissional & Negócios
                  </span>
                  <h3 className="text-lg sm:text-xl text-[#1D1D1F] font-heading uppercase tracking-wide">
                    Para o seu trabalho
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {workItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 font-sans-body">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span className={idx === workItems.length - 1 ? 'font-semibold text-rose-600' : ''}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 bg-neutral-50 rounded-xl p-3 border border-neutral-200/60 text-[11px] text-neutral-600 flex items-center gap-2 font-sans-body">
              <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Comunique profissionalismo e atraia clientes com autoridade.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
