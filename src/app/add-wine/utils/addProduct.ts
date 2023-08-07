import { MutableRefObject } from 'react';

import { ProductProps } from '../model/WineInfo';

export const addProduct = (
  formRef: MutableRefObject<HTMLFormElement | null>,
  wineId: string
) => {
  const formElement = formRef.current;
  if (formElement) {
    let productPostProps: {
      [key: string]: string | string[] | number | null;
    } = {};

    const inputElements =
      formElement.querySelectorAll<HTMLInputElement>('input[type="text"]');

    for (let i = 0; i < ProductProps.length; i += 1) {
      if (ProductProps[i].type === 'number')
        productPostProps[ProductProps[i].tag] = Number(
          inputElements[ProductProps[i].index].value
        );
      else
        productPostProps[ProductProps[i].tag] =
          inputElements[ProductProps[i].index].value;
    }

    productPostProps['wineId'] = wineId;
    productPostProps['type'] = 'wine';
    productPostProps['image'] =
      inputElements[22].value ||
      'https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png';
    productPostProps['contentImage'] =
      inputElements[23].value ||
      'https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png';
    productPostProps['images'] = inputElements[24].value.split(',') || [
      'https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png',
    ];
    productPostProps['labelImages'] = inputElements[25].value.split(',') || [
      'https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png',
    ];
    productPostProps['order'] = 0;

    return productPostProps;
  }
};
