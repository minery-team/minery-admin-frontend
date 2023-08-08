import { Address } from './Address';
import { OrderStatus } from './OrderStatus';
import { Product, ProductOption } from './Product';
import { User } from './User';

export interface OrderItem {
  id: number;
  product: Product;
  amount: number;
  options: { id: number; option: ProductOption; amount: number }[];
}

interface Payment {
  amount: number;
  id: string;
  method: string;
  orderId: string;
  time: string;
  type: string;
}

export interface Order {
  id: number;
  cost: number;
  time: Date;
  address: Address;
  status: OrderStatus;
  items: OrderItem[];
  waybillNumber?: string;
  deliveryMessage: string | null;
  user: User;
  payment: Payment;
}
