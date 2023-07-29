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

export const FLAG_BY_COUNTRY: Record<Country, string> = {
  [Country.이탈리아]: '🇮🇹',
  [Country.프랑스]: '🇫🇷',
  [Country.스페인]: '🇪🇸',
  [Country.칠레]: '🇨🇱',
  [Country.미국]: '🇺🇸',
  [Country.호주]: '🇦🇺',
  [Country.뉴질랜드]: '🇳🇿',
  [Country.아르헨티나]: '🇦🇷',
  [Country.독일]: '🇩🇪',
  [Country.기타]: '',
  [Country.포르투갈]: '🇵🇹',
  [Country.오스트리아]: '🇵🇦',
  [Country.슬로베니아]: '🇸🇮',
  [Country.불가리아]: '🇧🇬',
  [Country.캐나다]: '🇨🇦',
  [Country.영국]: '🇬🇧',
  [Country['남아프리카 공화국']]: '🇿🇦',
  [Country.남아프리카]: '🇿🇦',
  [Country.그리스]: '🇵🇬',
  [Country.크로아티아]: '🇭🇷',
  [Country.헝가리]: '🇵🇭',
  [Country.레바논]: '🇱🇧',
  [Country.일본]: '🇯🇵',
};

export function getWineFlagLabel(country?: Country) {
  if (!country || !FLAG_BY_COUNTRY[country]) {
    return undefined;
  }
  return `${FLAG_BY_COUNTRY[country]} `;
}
