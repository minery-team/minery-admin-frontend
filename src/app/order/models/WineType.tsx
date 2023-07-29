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
