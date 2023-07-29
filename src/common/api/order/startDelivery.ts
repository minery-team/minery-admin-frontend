import { requester } from '../requester';

export async function startDelivery(id: number, waybillNumber: number) {
  requester.post(`/order/${id}/start-delivery`, { waybillNumber });
}
