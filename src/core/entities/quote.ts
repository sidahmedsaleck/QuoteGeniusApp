export enum QuoteStatus {
  Sent = 'Sent',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
}

export class Quote {
  _id: string;
  total: number;
  status: QuoteStatus;
  createdAt: Date;
  updatedAt: Date;
  note: string;
  customerId: string;
  salesPersonId: string;
  companyId: string;
}
