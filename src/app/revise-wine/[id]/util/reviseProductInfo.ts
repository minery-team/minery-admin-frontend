import { MutableRefObject } from 'react';

import { ProductProps } from '@/app/add-wine/model/WineInfo';

export const reviseProductInfo = (
  formRef: MutableRefObject<HTMLFormElement | null>,
  wineId: string
) => {
  const formElement = formRef.current;
  if (formElement) {
    let productReviseProps: {
      [key: string]: string | string[] | number | null;
    } = {};

    const inputElements =
      formElement.querySelectorAll<HTMLInputElement>('input[type="text"]');

    for (let i = 0; i < ProductProps.length; i += 1) {
      if (ProductProps[i].type === 'number')
        productReviseProps[ProductProps[i].tag] = Number(
          inputElements[ProductProps[i].index].value
        );
      else
        productReviseProps[ProductProps[i].tag] =
          inputElements[ProductProps[i].index].value;
    }

    productReviseProps['wineId'] = wineId;
    productReviseProps['type'] = 'wine';
    productReviseProps['image'] = inputElements[22].value;
    productReviseProps['contentImage'] = inputElements[23].value;
    productReviseProps['images'] = inputElements[24].value.split(',');
    productReviseProps['labelImages'] = inputElements[25].value.split(',');
    productReviseProps['order'] = 0;

    return productReviseProps;
  }
};
