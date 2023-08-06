import { requester } from '@/common/api/requester';
import { WineType, Product, OrderType } from '../models/WineType';

export async function fetchProductList({
  wineType,
  order,
}: {
  wineType?: WineType;
  order?: OrderType;
}) {
  const res = await requester.get<Product[]>('/product', {
    params: { wineType, order },
  });
  return res.data;
}
