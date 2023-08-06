import { requester } from '@/common/api/requester';

export async function postWine(params: any) {
  const res = await requester.post('/wine', { ...params });
  return res.data;
}
