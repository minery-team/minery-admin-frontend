export enum WineType {
  RED,
  WHITE,
  ROSE,
  SPARKLING,
  ETC,
}

export const NAME_BY_WINE_TYPE: Record<WineType, string> = {
  [WineType.RED]: 'Red',
  [WineType.WHITE]: 'White',
  [WineType.ROSE]: 'Rose',
  [WineType.SPARKLING]: 'Sparkling',
  [WineType.ETC]: 'etc',
};

export const KR_NAME_BY_WINE_TYPE: Record<WineType, string> = {
  [WineType.RED]: '레드',
  [WineType.WHITE]: '화이트',
  [WineType.ROSE]: '로제',
  [WineType.SPARKLING]: '스파클링',
  [WineType.ETC]: '기타',
};

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
}

export interface ProductOption {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  images: string[];
}

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

export enum Country {
  이탈리아 = '이탈리아',
  프랑스 = '프랑스',
  스페인 = '스페인',
  칠레 = '칠레',
  미국 = '미국',
  호주 = '호주',
  뉴질랜드 = '뉴질랜드',
  아르헨티나 = '아르헨티나',
  독일 = '독일',
  포르투갈 = '포르투갈',
  기타 = '기타',
  오스트리아 = '오스트리아',
  슬로베니아 = '슬로베니아',
  불가리아 = '불가리아',
  캐나다 = '캐나다',
  영국 = '영국',
  남아프리카 = '남아프리카', // deprecated
  '남아프리카 공화국' = '남아프리카 공화국',
  그리스 = '그리스',
  크로아티아 = '크로아티아',
  헝가리 = '헝가리',
  레바논 = '레바논',
  일본 = '일본',
}

export enum OrderType {
  POPULAR,
  LOWEST_PRICE,
}
