import { requester } from '@/common/api/requester';

export async function fetchProduct(id: string) {
  const res = await requester.get(`/product/${id}`);
  return res.data;
}
