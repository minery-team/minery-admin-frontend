import { useQuery } from 'react-query';

import { fetchProductList } from '../api/fetchProductList';
import { WineType, OrderType } from '../models/WineType';

export function useWineList({
  wineType,
  order,
}: {
  wineType?: WineType;
  order: OrderType;
}) {
  const query = useQuery(['/products', wineType, order], async () => {
    try {
      return await fetchProductList({ wineType, order });
    } catch {
      return [];
    }
  });

  return [query.data, query.refetch] as const;
}
