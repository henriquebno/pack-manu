/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense, lazy } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { FeaturesLibrarySection } from './components/FeaturesLibrarySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

// Only load modal dynamically when user clicks Terms or Privacy
const LegalModal = lazy(() => import('./components/LegalModal').then(m => ({ default: m.LegalModal })));

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans-body selection:bg-rose-200 selection:text-rose-950">
      {/* 1. Urgency Notification Ribbon with Dynamic Date (Above the fold - synchronous) */}
      <TopBanner />

      <main className="flex-1">
        {/* 2. Proposta Clara: Hero Section com headline, mockup e CTA direto (Above the fold - synchronous) */}
        <HeroSection />

        {/* 3. Demonstração Visual: Antes & Depois direto (3 demonstrações fortes) */}
        <div className="content-auto">
          <BeforeAfterSection />
        </div>

        {/* 4. Benefícios Essenciais: Vitrine de elementos PNG +15.000 e categorias essenciais */}
        <div className="content-auto">
          <FeaturesLibrarySection />
        </div>

        {/* 5. Provas Reais Verificáveis: Depoimentos e avaliações de clientes */}
        <div className="content-auto">
          <TestimonialsSection />
        </div>

        {/* 6. Bônus Resumidos: 4 bônus especiais com fotos oficiais e descrições diretas */}
        <div className="content-auto">
          <BonusesSection />
        </div>

        {/* 7. SEÇÃO DE PLANOS (Trazida para o centro da conversão - 100% preservada) */}
        <div className="content-auto">
          <PricingSection />
        </div>

        {/* 8. Garantia Incondicional de 15 Dias */}
        <div className="content-auto">
          <GuaranteeSection />
        </div>

        {/* 9. Dúvidas Decisivas: FAQ enxuto com as perguntas que destravam a compra */}
        <div className="content-auto">
          <FAQSection />
        </div>
      </main>

      {/* 10. Footer */}
      <div className="content-auto">
        <Footer onOpenLegal={(type) => setLegalModalType(type)} />
      </div>

      {/* 11. Floating Sticky CTA Bar */}
      <StickyBottomBar />

      {/* 12. Legal Modal (Terms / Privacy) */}
      {legalModalType !== null && (
        <Suspense fallback={null}>
          <LegalModal
            isOpen={true}
            type={legalModalType}
            onClose={() => setLegalModalType(null)}
          />
        </Suspense>
      )}
    </div>
  );
}
