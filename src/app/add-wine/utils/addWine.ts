import { MutableRefObject } from 'react';

import { WineProps } from '../model/WineInfo';
import { divideByComma } from '@/app/revise-wine/[id]/util/stringUtil';

export const addWine = (
  formRef: MutableRefObject<HTMLFormElement | null>,
  wineList: { id: string; name: string }[]
) => {
  const formElement = formRef.current;

  if (formElement) {
    let winePostProps: {
      [key: string]: string | string[] | number | boolean | undefined;
    } = {};

    const inputElements =
      formElement.querySelectorAll<HTMLInputElement>('input[type="text"]');

    for (let i = 0; i < WineProps.length; i += 1) {
      if (WineProps[i].tag === 'foods')
        winePostProps[WineProps[i].tag] = [
          inputElements[WineProps[i].index].value,
        ];
      else if (WineProps[i].tag === 'kinds') {
        const kindList = divideByComma(inputElements[WineProps[i].index].value);

        let kindIdList: string[] = [];
        for (let j = 0; j < kindList.length; j += 1) {
          for (let k = 0; k < wineList.length; k += 1) {
            if (
              wineList[k].name.includes(inputElements[WineProps[i].index].value)
            ) {
              kindIdList.push(wineList[k].id);
              break;
            }
          }
        }

        winePostProps[WineProps[i].tag] = kindIdList;
      } else {
        if (WineProps[i].type === 'number')
          winePostProps[WineProps[i].tag] = Number(
            inputElements[WineProps[i].index].value
          );
        else
          winePostProps[WineProps[i].tag] =
            inputElements[WineProps[i].index].value;
      }
    }

    winePostProps['rating'] = undefined;
    winePostProps['searchable'] = false;
    winePostProps['image'] =
      inputElements[22].value ||
      'https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png';
    winePostProps['rate'] = 0;

    return winePostProps;
  }
};
