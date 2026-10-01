/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';

// Code-split below-the-fold components to reduce initial JavaScript bundle and main-thread work
const BeforeAfterSection = lazy(() => import('./components/BeforeAfterSection').then(m => ({ default: m.BeforeAfterSection })));
const FeaturesLibrarySection = lazy(() => import('./components/FeaturesLibrarySection').then(m => ({ default: m.FeaturesLibrarySection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const BonusesSection = lazy(() => import('./components/BonusesSection').then(m => ({ default: m.BonusesSection })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection').then(m => ({ default: m.GuaranteeSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const StickyBottomBar = lazy(() => import('./components/StickyBottomBar').then(m => ({ default: m.StickyBottomBar })));
const LegalModal = lazy(() => import('./components/LegalModal').then(m => ({ default: m.LegalModal })));

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  useEffect(() => {
    // Prefetch below-the-fold chunks during browser idle time so scrolling and CTA clicks are instant
    const prefetchChunks = () => {
      import('./components/BeforeAfterSection');
      import('./components/FeaturesLibrarySection');
      import('./components/TestimonialsSection');
      import('./components/BonusesSection');
      import('./components/PricingSection');
      import('./components/GuaranteeSection');
      import('./components/FAQSection');
      import('./components/Footer');
      import('./components/StickyBottomBar');
    };

    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number }).requestIdleCallback(
        prefetchChunks,
        { timeout: 1500 }
      );
    } else {
      setTimeout(prefetchChunks, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans-body selection:bg-rose-200 selection:text-rose-950">
      {/* 1. Urgency Notification Ribbon with Dynamic Date (Above the fold - synchronous) */}
      <TopBanner />

      <main className="flex-1">
        {/* 2. Proposta Clara: Hero Section com headline, mockup e CTA direto (Above the fold - synchronous) */}
        <HeroSection />

        <Suspense fallback={null}>
          {/* 3. Demonstração Visual: Antes & Depois direto (3 demonstrações fortes) */}
          <BeforeAfterSection />

          {/* 4. Benefícios Essenciais: Vitrine de elementos PNG +15.000 e categorias essenciais */}
          <FeaturesLibrarySection />

          {/* 5. Provas Reais Verificáveis: Depoimentos e avaliações de clientes */}
          <TestimonialsSection />

          {/* 6. Bônus Resumidos: 4 bônus especiais com fotos oficiais e descrições diretas */}
          <BonusesSection />

          {/* 7. SEÇÃO DE PLANOS (Trazida para o centro da conversão - 100% preservada) */}
          <PricingSection />

          {/* 8. Garantia Incondicional de 15 Dias */}
          <GuaranteeSection />

          {/* 9. Dúvidas Decisivas: FAQ enxuto com as perguntas que destravam a compra */}
          <FAQSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {/* 10. Footer */}
        <Footer onOpenLegal={(type) => setLegalModalType(type)} />

        {/* 11. Floating Sticky CTA Bar */}
        <StickyBottomBar />

        {/* 12. Legal Modal (Terms / Privacy) */}
        {legalModalType !== null && (
          <LegalModal
            isOpen={true}
            type={legalModalType}
            onClose={() => setLegalModalType(null)}
          />
        )}
      </Suspense>
    </div>
  );
}
