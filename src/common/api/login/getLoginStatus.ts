import { setAccessToken } from '@/utils/access-token';
import { requester } from '../requester';

//FIXME: API들 에러처리 및 수정필요
export async function getLoginStatus({
  id,
  password,
}: {
  id: string;
  password: string;
}) {
  const res = await requester.post(`/admin/signin`, { id, password });
  setAccessToken(res.data.access_token);

  return Boolean(res.data.access_token);
}
