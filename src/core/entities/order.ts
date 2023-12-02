export enum OrderStatus {
  Created = 'Created',
  Processing = 'Processing',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export class Order {
  _id: string;
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  quoteId: string;
  invoiceId: string;
}
