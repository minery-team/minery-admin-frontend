import { requester } from '../requester';

export async function updateOrderStatus(id: number, status: string) {
  requester.post(`/order/${id}/status`, { status });
}
