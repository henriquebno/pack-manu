type MetaPixelCommand = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: MetaPixelCommand;
  }
}

interface CheckoutClickData {
  location: 'pricing_complete' | 'upsell_accept' | 'upsell_decline';
  plan: 'complete' | 'complete_offer' | 'essential';
  value: number;
}

export const trackCheckoutClick = ({
  location,
  plan,
  value,
}: CheckoutClickData) => {
  try {
    if (
      typeof window === 'undefined' ||
      typeof window.fbq !== 'function'
    ) {
      return;
    }

    window.fbq('trackCustom', 'CTA_Click', {
      cta_location: location,
      content_name: 'Pack Manu Stories',
      currency: 'BRL',
      plan,
      value,
    });
  } catch (error) {
    console.warn('CTA_Click não enviado:', error);
  }
};
