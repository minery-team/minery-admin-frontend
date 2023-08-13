import { requester } from '@/common/api/requester';

export async function reviseWine(wineId: number, params: any) {
  const res = await requester.post(`/wine/${wineId}`, { ...params });
  return res.data;
}
