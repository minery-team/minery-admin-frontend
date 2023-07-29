import { useQuery } from 'react-query';
import { requester } from '../../../../common/api/requester';
import {
  getOrderList,
  startDelivery,
  updateOrderStatus,
} from '../../../../common/api/order';

export function useOrderList() {
  const query = useQuery('order-list', () => getOrderList());

  const handleStatusChange = ({
    status,
    id,
  }: {
    status: string;
    id: number;
  }) => {
    if (status === 'SENT') {
      const waybillNumber = Number(prompt('운송장 번호를 입력해주세요'));

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
