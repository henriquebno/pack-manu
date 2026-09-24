import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isTerms = type === 'terms';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-rose-100 max-h-[85vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            {isTerms ? <FileText className="w-5 h-5 text-rose-600" /> : <Shield className="w-5 h-5 text-rose-600" />}
            <h3 className="font-bold text-lg sm:text-xl text-neutral-900 font-serif-display">
              {isTerms ? 'Termos de Uso' : 'Política de Privacidade'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-body">
          {isTerms ? (
            <>
              <p>
                <strong>1. Aceitação dos Termos:</strong> Ao adquirir ou acessar os produtos digitais do Pack Manu Stories, você concorda com as diretrizes e regras aqui estipuladas.
              </p>
              <p>
                <strong>2. Licença de Uso:</strong> O material disponibilizado concede uma licença de uso individual e intransferível. Você está autorizada a utilizar as figurinhas, molduras, fontes e elementos em seus Stories pessoais ou comerciais (contas de negócios). É estritamente proibida a revenda, rateio, compartilhamento de pastas ou distribuição não autorizada do material sob pena de responsabilização civil e criminal.
              </p>
              <p>
                <strong>3. Acesso e Entrega:</strong> O acesso é vitalício e entregue por via eletrônica logo após a confirmação do pagamento.
              </p>
              <p>
                <strong>4. Garantia Incondicional:</strong> Em consonância com o Código de Defesa do Consumidor, oferecemos 15 dias corridos para solicitação de estorno total caso o material não atenda às suas expectativas.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Proteção de Dados:</strong> O Pack Manu Stories valoriza a sua privacidade e garante a segurança dos seus dados conforme as diretrizes da LGPD (Lei Geral de Proteção de Dados).
              </p>
              <p>
                <strong>2. Coleta de Informações:</strong> As informações coletadas durante o processo de compra (como nome e e-mail) são processadas por gateways de pagamento seguros e utilizadas unicamente para a entrega do seu acesso e comunicações essenciais sobre o produto.
              </p>
              <p>
                <strong>3. Não Compartilhamento:</strong> Seus dados jamais serão vendidos ou cedidos a terceiros.
              </p>
              <p>
                <strong>4. Segurança Bancária:</strong> Os dados de pagamento (cartão de crédito, Pix) são criptografados de ponta a ponta e processados diretamente pela plataforma de pagamentos, sem armazenamento em nossos servidores.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-100 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
