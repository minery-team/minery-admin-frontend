'use client';

import Space from 'antd/es/space';
import { useOrderList } from './hooks/useOrderList';
import Select from 'antd/es/select';
import { Order } from './models/Order';
import { format } from 'date-fns';
import { Button } from 'antd';

const STATUS_MAP = {
  PAYMENT: '주문완료',
  PREPARE: '준비중',
  SENT: '배송시작',
  DONE: '배송 완료',
  CANCEL: '주문 반려',
};

export default function Order() {
  const { data, isLoading, handleStatusChange } = useOrderList();

  //FIXME: loading 수정
  if (isLoading) return <>로딩 중..</>;

  return (
    <div style={{ overflow: 'auto', height: '100vh' }}>
      {data.map((item: Order) => {
        return (
          <div style={{ margin: '20px 0' }} key={item.id}>
            {item.payment.orderId} / {item.address.phone} /{' '}
            {format(new Date(item.payment.time), 'yy-MM-dd')} /{' '}
            {/* 취소일시 필드 */}
            {item.cost} /{' '}
            <Space wrap>
              <Select
                defaultValue={STATUS_MAP[item.status]}
                style={{ width: 120 }}
                //FIXME: UI는 그대로 변경이 되는데 배송버튼을 별도로 분리해야함
                onChange={(status) =>
                  handleStatusChange({
                    status: status,
                    id: item.id,
                  })
                }
                options={[
                  { value: 'PAYMENT', label: STATUS_MAP.PAYMENT },
                  { value: 'PREPARE', label: STATUS_MAP.PREPARE },
                  { value: 'SENT', label: STATUS_MAP.SENT },
                  { value: 'DONE', label: STATUS_MAP.DONE },
                  { value: 'CANCEL', label: STATUS_MAP.CANCEL },
                ]}
              />
            </Space>
          </div>
        );
      })}
    </div>
  );
}
