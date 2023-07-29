'use client';

import Space from 'antd/es/space';
import { useOrderList } from './hooks/useOrderList';
import Select from 'antd/es/select';
import { Order } from './models/Order';

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
    //FIXME: inline 수정
    <div style={{ overflow: 'auto', height: '100vh' }}>
      {data.map((item: Order) => {
        return (
          <div key={item.id}>
            {item.id} | {item.}
            <Space wrap>
              <Select
                defaultValue={STATUS_MAP[item.status]}
                style={{ width: 120 }}
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
