export enum InvoiceStatus {
  Unpaid = 'Unpaid',
  Paid = 'Paid',
  Overdue = 'Overdue',
}

export class Invoice {
  _id: string;
  amount: number;
  status: InvoiceStatus;
  createdAt: Date;
  updatedAt: Date;
  customerId: string;
  salesPersonId: string;
  companyId: string;
}
