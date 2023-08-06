import { MutableRefObject } from 'react';

import { WineProps } from '../model/WineInfo';

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
        for (let j = 0; j < wineList.length; j += 1) {
          if (
            wineList[j].name.includes(inputElements[WineProps[i].index].value)
          ) {
            winePostProps[WineProps[i].tag] = [wineList[j].id];
            break;
          }
        }
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
      'https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png';
    winePostProps['rate'] = 0;

    return winePostProps;
  }
};
