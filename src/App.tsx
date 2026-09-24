/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PainPointsSection } from './components/PainPointsSection';
import { NichesSection } from './components/NichesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { MiniCTASection } from './components/MiniCTASection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FeaturesLibrarySection } from './components/FeaturesLibrarySection';
import { InspirationsGallery } from './components/InspirationsGallery';
import { BonusesSection } from './components/BonusesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { CreatorSection } from './components/CreatorSection';
import { RecapSection } from './components/RecapSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { LegalModal } from './components/LegalModal';
import { SalesNotification } from './components/SalesNotification';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans-body selection:bg-rose-200 selection:text-rose-950">
      {/* 1. Urgency Notification Ribbon */}
      <TopBanner />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Before & After Transformation */}
        <BeforeAfterSection />

        {/* 4. Pain Points / Identification */}
        <PainPointsSection />

        {/* 5. Niches & Daily Moments */}
        <NichesSection />

        {/* 6. 3-Step How It Works */}
        <HowItWorksSection />

        {/* 7. Mini CTA Banner */}
        <MiniCTASection />

        {/* 8. Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* 9. Product Features & Library (+15.000 items) */}
        <FeaturesLibrarySection />

        {/* 10. Inspirations Gallery (Real Story Showcase) */}
        <InspirationsGallery />

        {/* 11. Exclusive Bonuses */}
        <BonusesSection />

        {/* 12. Target Audience (Is for you / Not for you) */}
        <TargetAudienceSection />

        {/* 13. Pricing Plans (Oferta Especial) */}
        <PricingSection />

        {/* 14. 7-Day Unconditional Guarantee */}
        <GuaranteeSection />

        {/* 15. Creator Story (Quem é Manu?) */}
        <CreatorSection />

        {/* 16. Recap Summary */}
        <RecapSection />

        {/* 17. Final High-Urgency CTA Section */}
        <FinalCTASection />

        {/* 18. FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 19. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* 20. Floating Sticky CTA Bar */}
      <StickyBottomBar />

      {/* 21. Social Proof Sales Notification */}
      <SalesNotification />

      {/* 22. Legal Modal (Terms / Privacy) */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
