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

export const trackCheckoutClick = (_data: CheckoutClickData) => {
  // Pixel do Facebook removido conforme solicitado. Apenas Utmify ativo.
};
