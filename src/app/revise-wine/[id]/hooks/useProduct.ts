import { useQuery } from 'react-query';

import { fetchProduct } from '../api/fetchProduct';

export function useProduct(productId: string) {
  const query = useQuery(['/products', productId], async () => {
    try {
      return await fetchProduct(productId);
    } catch {
      return undefined;
    }
  });

  return [query.data, query.refetch] as const;
}
