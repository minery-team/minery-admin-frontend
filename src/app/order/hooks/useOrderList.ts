import { useQuery } from 'react-query';
import { requester } from '../../../common/api/requester';
import {
  getOrderList,
  startDelivery,
  updateOrderStatus,
} from '@/common/api/order';
import { useRouter } from 'next/navigation';

export function useOrderList() {
  const query = useQuery('order-list', () => getOrderList());
  const router = useRouter();

  const handleStatusChange = ({
    status,
    id,
  }: {
    status: string;
    id: number;
  }) => {
    if (status === 'SENT') {
      const waybillNumber = Number(prompt('운송장 번호를 입력해주세요'));
      if (!waybillNumber) {
        alert('현재는 운송장 번호를 미입력한 경우 새로고침이 필요합니다');
        return;
      }

      startDelivery(id, waybillNumber);
    }

    updateOrderStatus(id, status);
  };

  return {
    data: query.data,
    isLoading: query.isLoading,
    handleStatusChange,
  };
}
