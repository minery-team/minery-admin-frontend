import { Address } from './Address';
import { OrderStatus } from './OrderStatus';
import { Product, ProductOption } from './Product';

export interface OrderItem {
  id: number;
  product: Product;
  amount: number;
  options: { id: number; option: ProductOption; amount: number }[];
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
}
