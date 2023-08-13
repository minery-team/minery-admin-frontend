'use client';

import Space from 'antd/es/space';
import { useOrderList } from './hooks/useOrderList';
import Select from 'antd/es/select';
import { Button, Table } from 'antd';
import withAuth from '@/common/hocs/withAuth';
import { ColumnsType } from 'antd/es/table';

const STATUS_MAP = {
  PAYMENT: '주문완료',
  PREPARE: '준비중',
  SEND: '배송시작',
  DONE: '배송 완료',
  CANCEL: '주문 반려',
};

type AdditionalInfo = {
  address: string;
  deliveryMessage: string;
  orderInfo: any[];
  tossOrderId: string;
  waybillNumber: number;
};

type DataType = {
  key: number;
  id: number;
  phone: string;
  payDate: string;
  cancleDate: any;
  price: number;
  payment: keyof typeof STATUS_MAP;
  delivery: boolean;
  additionalInfo: AdditionalInfo;
};

const Order = () => {
  const { data, isLoading, handleStatusChange, handleSentClick } =
    useOrderList();

  //FIXME: 컴포넌트 분리필요
  const columns: ColumnsType<DataType> = [
    {
      title: '주문번호',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '주문자 핸드폰 번호',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '결제일시',
      dataIndex: 'payDate',
      key: 'payDate',
    },
    {
      title: '취소일시',
      dataIndex: 'cancleDate',
      key: 'cancleDate',
    },
    {
      title: '주문금액',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '결제상태',
      key: 'payment',
      render: (_, item) => (
        <Space wrap>
          <Select
            defaultValue={STATUS_MAP[item.payment] || '배송중'}
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
              { value: 'DONE', label: STATUS_MAP.DONE },
              { value: 'CANCEL', label: STATUS_MAP.CANCEL },
            ]}
          />
        </Space>
      ),
    },

    {
      title: '배송 시작',
      dataIndex: 'delivery',
      key: 'delivery',
      render: (_, item) => (
        <Button
          onClick={() => {
            handleSentClick(item.id);
          }}
        >
          배송 시작
        </Button>
      ),
    },
  ];

  //FIXME: loading 수정
  if (isLoading) return <>로딩 중..</>;

  return (
    <div className="h-screen overflow-auto">
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <p>배송지: {record.additionalInfo.address}</p>
              <p>배송 요청사항: {record.additionalInfo.deliveryMessage}</p>
              <div>
                구매상품({record.additionalInfo.orderInfo.length}):
                {record.additionalInfo.orderInfo.map((item) => {
                  return <p key={item.id}> - {item.product.name}</p>;
                })}
              </div>
              <p>토스 주문번호: {record.additionalInfo.tossOrderId}</p>
              <p>송장번호: {record.additionalInfo.waybillNumber}</p>
            </>
          ),
        }}
      />
    </div>
  );
};

export default withAuth(Order);
