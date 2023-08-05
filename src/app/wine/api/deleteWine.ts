import { requester } from '@/common/api/requester';

export async function deleteWine(wineId: number) {
  const res = await requester.delete(`/product/${wineId}`);
  return res.data;
}
