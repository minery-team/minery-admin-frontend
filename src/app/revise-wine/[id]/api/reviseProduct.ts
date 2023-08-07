import { requester } from '@/common/api/requester';

export async function reviseProduct(productId: string, params: any) {
  const res = await requester.post(`/wine/${productId}`, { ...params });
  return res.data;
}
