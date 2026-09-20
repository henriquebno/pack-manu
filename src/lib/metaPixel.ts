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

/**
 * Tracks only clicks that leave the sales page for a checkout.
 *
 * This event intentionally runs in the browser only. Purchase and checkout
 * events remain owned by the checkout/Utmify integrations, avoiding a second
 * server event without a matching event_id.
 */
export const trackCheckoutClick = ({ location, plan, value }: CheckoutClickData) => {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;

  window.fbq('trackCustom', 'CTA_Click', {
    cta_location: location,
    content_name: 'Pack Manu Stories',
    currency: 'BRL',
    plan,
    value,
  });
};

