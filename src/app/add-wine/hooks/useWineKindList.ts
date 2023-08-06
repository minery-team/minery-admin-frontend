import { useQuery } from 'react-query';

import { fetchWineKind } from '../api/fetchWineKind';

export function useWineKindList() {
  const { data: wineKindList } = useQuery(['/wine-kind'], () =>
    fetchWineKind()
  );

  return wineKindList;
}
