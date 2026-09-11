/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { FeaturesLibrarySection } from './components/FeaturesLibrarySection';
import { NichesSection } from './components/NichesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusesSection } from './components/BonusesSection';
import { InspirationsGallery } from './components/InspirationsGallery';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { CreatorSection } from './components/CreatorSection';
import { RecapSection } from './components/RecapSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
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
        {/* 2. Hero Section with Mockup */}
        <HeroSection />

        {/* 3. Pain Points / Identification */}
        <PainPointsSection />

        {/* 4. Before & After Interactive Transformations */}
        <BeforeAfterSection />

        {/* 5. What's Inside & Stickers Mosaic (+15.000 elements) */}
        <FeaturesLibrarySection />

        {/* 6. Niches & Daily Moments */}
        <NichesSection />

        {/* 7. Who is this for? Checklist */}
        <TargetAudienceSection />

        {/* 8. Social Proof & Verified Testimonials */}
        <TestimonialsSection />

        {/* 9. 4 Exclusive Bonuses (R$ 198 in value for free) */}
        <BonusesSection />

        {/* 10. Inspirations Gallery (Interactive Story Showcase) */}
        <InspirationsGallery />

        {/* 11. Pricing Plans (Pack Essencial R$ 9,99 & Pack Completo R$ 27,90) */}
        <PricingSection />

        {/* 12. 7-Day Unconditional Guarantee */}
        <GuaranteeSection />

        {/* 13. Creator Section */}
        <CreatorSection />

        {/* 14. Motivational Pre-closing Summary */}
        <RecapSection />

        {/* 15. FAQ Accordion */}
        <FAQSection />

        {/* 16. Final High-Urgency CTA Section */}
        <FinalCTASection />
      </main>

      {/* 17. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* 18. Sticky Floating CTA Bar */}
      <StickyBottomBar />

      {/* 19. Social Proof Sales Notification (8s interval, max 10 people) */}
      <SalesNotification />

      {/* 20. Legal Modal (Terms / Privacy) */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

