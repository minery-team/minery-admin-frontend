import { Wine } from './Wine';

export interface Product {
  id: number;
  type: 'wine' | 'snack';
  name: string;
  enName: string;
  desc: string;
  price: number;
  originalPrice: number;
  image: string;
  weight: number;
  options: ProductOption[];
  images: string[];
  order?: number;
  wine: Wine;
  labelImages: string[];
  contentImage: string;
  foodDescription: string;
  soldOut: boolean;
}

export interface ProductOption {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  images: string[];
}

export type ProductForSnack = Omit<Product, 'wine' | 'labelImages'>;
