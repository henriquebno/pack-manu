import { BeforeAfterItem, TestimonialItem, BonusItem, FAQItem, StickerItem, StoryItem } from './types';

export const CHECKOUT_LINKS = {
  essencial: '/go/essencial.html',
  completo: '/go/completo.html',
  completoOferta27: '/go/completo-oferta.html',
};

export const getCheckoutUrlWithUtms = (url: string): string => {
  if (typeof window === 'undefined') return url;
  const search = window.location.search;
  if (!search) return url;
  const cleanSearch = search.startsWith('?') ? search.slice(1) : search;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${cleanSearch}`;
};

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'fruit',
    category: 'Café & Frutas',
    label: 'Rotina Matinal',
    beforeImg: '/images/before-fruit-CzWcVnOE.webp',
    afterImg: '/images/after-fruit-D1an2U3e.webp',
    beforeCaption: 'Foto comum sem destaque',
    afterCaption: 'Story estético com figurinhas e tipografia harmônica',
  },
  {
    id: 'lingerie',
    category: 'Trabalho & Negócio',
    label: 'Loja & Produtos',
    beforeImg: '/images/before-lingerie-D0bOVO6Z.webp',
    afterImg: '/images/after-lingerie-BwfVXGKj.webp',
    beforeCaption: 'Foto sem contexto comercial',
    afterCaption: 'Divulgação profissional com chamada e horário',
  },
  {
    id: 'gym',
    category: 'Academia & Treino',
    label: 'Corrida & Treino',
    beforeImg: '/images/before-gym-DfFcG8W2.webp',
    afterImg: '/images/after-gym-Cdqt_dYD.webp',
    beforeCaption: 'Apenas a foto do relógio e tênis',
    afterCaption: 'Mensagem motivacional e elementos de foco',
  },
  {
    id: 'netflix',
    category: 'Rotina & Relax',
    label: 'Momento Descanso',
    beforeImg: '/images/before-netflix-D9J760Rd.webp',
    afterImg: '/images/after-netflix-CWmTPNHb.webp',
    beforeCaption: 'Foto escura da tela e pipoca',
    afterCaption: 'Composição aconchegante com adesivo temático',
  },
  {
    id: 'fitness',
    category: 'Lifestyle & Saúde',
    label: 'Musa Fitness',
    beforeImg: '/images/before-fitness-DZyd-cF-.webp',
    afterImg: '/images/after-fitness-DC_K6b53.webp',
    beforeCaption: 'Selfie no espelho simples',
    afterCaption: 'Story com sticker descontraído e elegante',
  },
];

export const STICKER_ITEMS: StickerItem[] = [
  { id: 1, name: 'Pipoca & Dorama', img: '/images/sticker-1-CUhZcYaj.webp', category: 'Entretenimento' },
  { id: 2, name: 'Frase Motivacional', img: '/images/sticker-2-CtHK1tkb.webp', category: 'Frases' },
  { id: 3, name: 'Momento Café', img: '/images/sticker-3-CYa_b6Hg.webp', category: 'Rotina' },
  { id: 4, name: 'Horário & Alerta', img: '/images/sticker-4-Bz4LTYqM.webp', category: 'Comercial' },
  { id: 5, name: 'Feedback de Cliente', img: '/images/sticker-5-DjomY0fN.webp', category: 'Negócios' },
  { id: 6, name: 'Coração Minimalista', img: '/images/sticker-6-BPiw3Ak_.webp', category: 'Estética' },
  { id: 8, name: 'Sextou Relax', img: '/images/sticker-8-BFD-NdQg.webp', category: 'Final de Semana' },
  { id: 9, name: 'Treino Pago', img: '/images/sticker-9-SLEOzQQo.webp', category: 'Fitness' },
  { id: 10, name: 'Foco & Produtividade', img: '/images/sticker-10-DfvINmaU.webp', category: 'Trabalho' },
  { id: 11, name: 'Detalhe Floral', img: '/images/sticker-11-BliCkY5X.webp', category: 'Delicado' },
  { id: 12, name: 'Loja Aberta', img: '/images/sticker-12-C68Rt-ns.webp', category: 'Vendas' },
  { id: 13, name: 'Bom Dia & Fé', img: '/images/sticker-13-BnuPCZTi.webp', category: 'Inspiração' },
  { id: 14, name: 'Moldura Polaróide', img: '/images/sticker-14-TzpsTBd9.webp', category: 'Molduras' },
  { id: 15, name: 'Glow Minimalista', img: '/images/sticker-15-CKHRMzGh.webp', category: 'Brilhos' },
  { id: 16, name: 'Divisor Estético', img: '/images/sticker-16-D0e3fNl6.webp', category: 'Traços' },
  { id: 17, name: 'Aviso Importante', img: '/images/sticker-17-JjG14PVt.webp', category: 'Recados' },
  { id: 18, name: 'Lifestyle Chic', img: '/images/sticker-18-BI5dxiw-.webp', category: 'Moda' },
  { id: 19, name: 'Checklist Diário', img: '/images/sticker-19-DSx-dlyZ.webp', category: 'Produtividade' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    tag: 'Depoimento Real — Nail Designer',
    quote: 'Eu posto meus trabalhos todos os dias e sentia que meus Stories ficavam sempre iguais. Com o pack ficou muito mais fácil dar um toque bonito nas fotos das unhas sem perder tempo editando.',
    author: 'Larissa Mendes',
    role: 'Nail Designer',
    stars: 5,
  },
  {
    id: '2',
    tag: 'Depoimento Real — Lojista',
    quote: 'Uso principalmente para mostrar novidades e bastidores da loja. Antes eu demorava muito escolhendo GIF e fonte, agora já encontro algo que combina e posto bem mais rápido.',
    author: 'Camila Rocha',
    role: 'Empreendedora',
    stars: 5,
  },
  {
    id: '3',
    tag: 'Depoimento Real — Social Media',
    quote: 'O que mais gostei foi a variedade. Consigo usar em vários tipos de Story sem ficar com aquela sensação de estar repetindo sempre os mesmos elementos.',
    author: 'Beatriz Vasconcelos',
    role: 'Social Media',
    stars: 5,
  },
  {
    id: '4',
    tag: 'Depoimento Real — Esteticista',
    quote: 'Minhas fotos já eram boas, mas eu nunca sabia o que acrescentar para deixar o Story mais arrumado. Agora consigo finalizar tudo de um jeito bem mais bonito e rápido.',
    author: 'Juliana Castro',
    role: 'Esteticista',
    stars: 5,
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'Figurinhas Exclusivas',
    description: '+3.000 figurinhas únicas e modernas que você não encontra em lugar nenhum — prontas para transformar qualquer story em conteúdo de impacto.',
    originalPrice: 'R$ 47',
    iconName: 'Sparkles',
    image: '/images/bonus-1-stickers.webp',
  },
  {
    id: 2,
    title: '+200 Sombras Elegantes',
    description: 'Efeitos de sombra profissionais que elevam o visual dos seus stories instantaneamente. O detalhe que separa um perfil amador de um perfil que impressiona.',
    originalPrice: 'R$ 37',
    iconName: 'Box',
    image: '/images/bonus-2-shadows.webp',
  },
  {
    id: 3,
    title: 'Templates Prontos no Canva',
    description: 'Modelos de story já montados e fáceis de personalizar. Edite em segundos e poste com a confiança de quem tem uma designer no time.',
    originalPrice: 'R$ 67',
    iconName: 'BookOpen',
    image: '/images/bonus-3-canva.webp',
  },
  {
    id: 4,
    title: 'Suporte Prioritário no WhatsApp',
    description: 'Ficou com alguma dúvida? Nossa equipe responde rapidinho pelo WhatsApp. Você nunca vai travar na hora de usar suas figurinhas.',
    originalPrice: 'R$ 47',
    iconName: 'MessageSquare',
    image: '/images/bonus-4-whatsapp.webp',
  },
];

export const STORIES_GALLERY: StoryItem[] = [
  { id: 1, img: '/images/story-1-C665SIao.webp', tag: 'Café', title: 'Rotina Matinal com Café' },
  { id: 2, img: '/images/story-2-B94qPte1.webp', tag: 'Rotina', title: 'Home Office Produtivo' },
  { id: 3, img: '/images/story-3-CCcShyHH.webp', tag: 'Academia', title: 'Treino & Disciplina' },
  { id: 4, img: '/images/story-4-CNnDSkV9.webp', tag: 'Trabalho', title: 'Reunião & Metas' },
  { id: 5, img: '/images/story-5-DN4tThc0.webp', tag: 'Viagem', title: 'Pôr do Sol na Praia' },
  { id: 6, img: '/images/story-6-BqgU9-pI.webp', tag: 'Fé', title: 'Momento de Gratidão' },
  { id: 7, img: '/images/story-7-BNw7-3Kq.webp', tag: 'Beleza', title: 'Cuidados com a Pele' },
  { id: 8, img: '/images/story-8-D6MxRHTs.webp', tag: 'Lifestyle', title: 'Almoço Saudável' },
  { id: 9, img: '/images/story-9-Cqu-C6DV.webp', tag: 'Empreendedorismo', title: 'Envio de Pedidos' },
  { id: 10, img: '/images/story-10-B3zch44O.webp', tag: 'Café', title: 'Pausa para o Cappuccino' },
  { id: 11, img: '/images/story-11-_8e1j99H.webp', tag: 'Rotina', title: 'Organização da Semana' },
  { id: 12, img: '/images/story-12-BH_IGoOa.webp', tag: 'Viagem', title: 'Fim de Tarde Relax' },
  { id: 13, img: '/images/story-13-B676D-DK.webp', tag: 'Beleza', title: 'Look do Dia Elegante' },
  { id: 14, img: '/images/story-14-_BhRRc8t.webp', tag: 'Lifestyle', title: 'Noite de Cinema' },
  { id: 15, img: '/images/story-15-CDB78I5r.webp', tag: 'Maternidade', title: 'Amor & Afeto' },
  { id: 16, img: '/images/story-16-CD4pJhPo.webp', tag: 'Fé', title: 'Palavra de Conforto' },
  { id: 17, img: '/images/story-17-D25O698I.webp', tag: 'Academia', title: 'Meta Batida' },
  { id: 18, img: '/images/story-18-CKJXJhhx.webp', tag: 'Trabalho', title: 'Novidades na Loja' },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Como vou receber meu acesso?',
    answer: 'Assim que o pagamento for aprovado, você receberá as instruções de acesso completas e o link da plataforma no e-mail utilizado durante a compra. Se pagar via Pix ou Cartão, a liberação é imediata em menos de 2 minutos.',
  },
  {
    question: 'Preciso saber editar?',
    answer: 'Não. O material foi pensado justamente para quem quer criar Stories bonitos sem precisar dominar ferramentas profissionais de edição. Basta copiar a figurinha e colar direto no Story do seu Instagram, sem complicação.',
  },
  {
    question: 'Posso usar as figurinhas quantas vezes quiser?',
    answer: 'Sim! Depois de adquirir o produto, você poderá utilizar todos os elementos sempre que quiser no seu dia a dia, de acordo com os termos de uso do produto.',
  },
  {
    question: 'O acesso é vitalício?',
    answer: 'Sim. Sua compra libera acesso vitalício a todo o conteúdo incluído na oferta, sem mensalidades ou renovações futuras.',
  },
  {
    question: 'Funciona no Android e iPhone?',
    answer: 'Sim, 100%! Os arquivos são disponibilizados em PNG com fundo transparente em alta resolução, perfeitamente compatíveis com iOS (iPhone) e Android (Samsung, Xiaomi, Motorola, etc.). Disponibilizamos também um tutorial passo a passo em vídeo.',
  },
  {
    question: 'Quando recebo?',
    answer: 'O acesso é liberado imediatamente após a confirmação do pagamento pelo sistema seguro da Ticto.',
  },
  {
    question: 'Tenho garantia?',
    answer: 'Sim. Sua compra conta com garantia incondicional de 15 dias. Se você entrar e sentir que não é para você, basta solicitar o reembolso e 100% do seu dinheiro será devolvido sem perguntas.',
  },
];

export const AUDIENCE_CHECKLIST = [
  'Quer deixar seu Instagram mais bonito sem precisar aprender design.',
  'Gosta daqueles Stories femininos, organizados e elegantes que vê no Instagram.',
  'Quer postar sua rotina de um jeito mais bonito.',
  'Trabalha pelo Instagram e quer transmitir uma imagem mais profissional.',
  'Cria conteúdo e quer ter mais opções na hora de postar.',
  'Não quer perder vários minutos tentando montar cada Story.',
  'Quer abrir sua biblioteca e sempre encontrar alguma coisa que combine com o momento.',
];
