import { MutableRefObject } from 'react';

import { WineProps } from '@/app/add-wine/model/WineInfo';
import { divideByComma } from './stringUtil';

export const reviseWineInfo = (
  formRef: MutableRefObject<HTMLFormElement | null>,
  wineList: { id: string; name: string }[]
) => {
  const formElement = formRef.current;

  if (formElement) {
    let wineReviseProps: {
      [key: string]: string | string[] | number | boolean | undefined;
    } = {};

    const inputElements =
      formElement.querySelectorAll<HTMLInputElement>('input[type="text"]');

    for (let i = 0; i < WineProps.length; i += 1) {
      if (WineProps[i].tag === 'foods')
        wineReviseProps[WineProps[i].tag] = [
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

        wineReviseProps[WineProps[i].tag] = kindIdList;
      } else {
        if (WineProps[i].type === 'number')
          wineReviseProps[WineProps[i].tag] = Number(
            inputElements[WineProps[i].index].value
          );
        else
          wineReviseProps[WineProps[i].tag] =
            inputElements[WineProps[i].index].value;
      }
    }

    wineReviseProps['rating'] = undefined;
    wineReviseProps['searchable'] = false;
    wineReviseProps['image'] = inputElements[22].value;
    wineReviseProps['rate'] = 0;

    return wineReviseProps;
  }
};
