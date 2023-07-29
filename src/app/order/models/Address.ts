export interface BaseAddress {
  address: string;
  detailAddress: string;
  postalCode: string;
  phone: string;
  name: string;
  default: boolean;
}

export interface Address extends BaseAddress {
  id: number;
}
