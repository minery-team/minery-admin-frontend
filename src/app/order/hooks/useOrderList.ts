import { useQuery } from 'react-query';
import {
  getOrderList,
  startDelivery,
  updateOrderStatus,
} from '@/common/api/order';
import { format } from 'date-fns';
import { Order } from '../models/Order';

export function useOrderList() {
  const query = useQuery(['order-list'], () => getOrderList(), { onSuccess: list => {
    list.sort(function compare(a: Order, b: Order) {
      if (a.id < b.id) return 1;
      else return -1
    })
  }});

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

  const handleSentClick = (id: number) => {
    const waybillNumber = Number(prompt('운송장 번호를 입력해주세요'));
    if (waybillNumber) {
      startDelivery(id, waybillNumber);
      updateOrderStatus(id, 'SENT').then(() => {
        alert(
          '배송중으로 상태가 변경되지 않을텐데.. 새로고침 부탁드리겠습니다!(반영예정)'
        );
      });
    }
  };

  const handleStatusChange = ({
    status,
    id,
  }: {
    status: string;
    id: number;
  }) => {
    updateOrderStatus(id, status);
  };

  return {
    data: tableData,
    isLoading: query.isLoading,
    handleStatusChange,
    handleSentClick,
  };
}
