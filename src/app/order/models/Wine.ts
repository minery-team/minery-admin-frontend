import { Country } from './Country';
import { WineType } from './WineType';

export interface Wine {
  id: number;
  _id: number;
  name: string;
  enName: string;
  image?: string;
  rate?: number;
  type: WineType;
  country?: Country;
  price?: number;
  minAlcohol: number;
  maxAlcohol: number;
  sweetness: number;
  acidity: number;
  body: number;
  tannins: number;
  searchable: boolean;
  maker: string;
  style: string;
  rating: string;
  ferment: null;
  minTemperature: number;
  maxTemperature: number;
  foods: string[];
  importer: string;
  viewCount: number;
  kinds: {
    id: string;
    name: string;
  }[];
}
