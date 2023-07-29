import { requester } from '../requester';

//FIXME: API들 에러처리 및 수정필요
export async function getOrderList() {
  const res = await requester.get(`/order/all`);

  return res.data;
}
