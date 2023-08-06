import { requester } from '@/common/api/requester';

export async function fetchWineKind() {
  const res = await requester.get('/wine-kind');
  return res.data;
}
