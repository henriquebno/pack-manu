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
  // Nenhum evento disparado no clique do botão. O IC é capturado pelo pixel no checkout quando o cliente insere os dados.
};
