export interface BeforeAfterItem {
  id: string;
  category: string;
  label: string;
  beforeImg: string;
  afterImg: string;
  beforeCaption: string;
  afterCaption: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  stars: number;
}

export interface BonusItem {
  id: number;
  title: string;
  description: string;
  originalPrice: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StickerItem {
  id: number;
  name: string;
  img: string;
  category: string;
}

export interface StoryItem {
  id: number;
  img: string;
  tag: string;
  title: string;
}
