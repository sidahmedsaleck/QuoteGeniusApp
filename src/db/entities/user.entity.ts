import { Country, Role, User } from 'src/core/entities/user';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class UserEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  fullName: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: Role.USER, enum: Role })
  role: Role;
  @Column({ default: Country.DEFAULT, enum: Country })
  country: Country;

  @Column({ nullable: true })
  phoneNumber: string;
  @Column({ nullable: true })
  companyId: string;
  @Column({ nullable: true })
  address: string;

  @Column({ default: false })
  verified: boolean;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
