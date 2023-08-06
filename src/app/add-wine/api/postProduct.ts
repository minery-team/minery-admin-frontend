import { requester } from '@/common/api/requester';

export async function postProduct(params: any) {
  const res = await requester.post('/product', { ...params });
  return res.data;
}
