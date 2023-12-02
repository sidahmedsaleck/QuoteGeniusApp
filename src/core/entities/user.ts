export enum Country {
  TUNISIE = 'TUNISIE',
  DEFAULT = 'USA',
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export abstract class User {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  country: Country;
  companyId: string;
  role: Role;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
