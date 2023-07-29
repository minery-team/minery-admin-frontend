export enum OrderStatus {
  PAYMENT = 'PAYMENT',
  PREPARE = 'PREPARE',
  SENT = 'SENT',
  DONE = 'DONE',
}

export const orderStatusToHumanReadable = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.PAYMENT:
      return '결제';
    case OrderStatus.PREPARE:
      return '준비중';
    case OrderStatus.SENT:
      return '배송중';
    case OrderStatus.DONE:
      return '배송완료';
    default:
      throw new Error('Invalid OrderStatus');
  }
};
