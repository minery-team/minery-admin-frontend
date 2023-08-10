import { useQuery } from 'react-query';
import {
  getOrderList,
  startDelivery,
  updateOrderStatus,
} from '@/common/api/order';
import { format } from 'date-fns';

export function useOrderList() {
  const query = useQuery('order-list', () => getOrderList());

  const tableData = query.data?.map((item: any, idx: number) => {
    return {
      key: idx,
      id: item.id,
      phone: item.address.phone,
      payDate: format(new Date(item.payment.time), 'yy년 MM월 dd일'),
      cancleDate: 'FIXME',
      price: item.cost,
      payment: item.status,
      additionalInfo: {
        address: item.address.address,
        deliveryMessage: item.deliveryMessage,
        orderInfo: item.items,
        //FIXME: paymanetId는 모지..?
        tossOrderId: item.payment.orderId,
        waybillNumber: item.waybillNumber,
      },
    };
  });

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
    data: tableData,
    isLoading: query.isLoading,
    handleStatusChange,
  };
}
