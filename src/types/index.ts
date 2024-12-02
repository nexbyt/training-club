export interface Program {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  price: string;
  location: string;
  tags: string[];
}

export interface Collection {
  title: string;
  count: string;
  imageUrl: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type BadgeVariant = 'default' | 'success' | 'pro';
