import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { Country, Role } from 'src/core/entities/user';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@ObjectType()
export class User {
  @Field()
  _id: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  fullName: string;
  @Field()
  email: string;
  @Field()
  password: string;

  @Field({ defaultValue: Role.USER })
  role: Role;
  @Field({ defaultValue: Country.TUNISIE })
  country: Country;

  @Field({ nullable: true })
  phoneNumber: string;
  @Field({ nullable: true })
  address: string;
  @Field({ nullable: true })
  companyId: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  fullName: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @Field({ nullable: true })
  phoneNumber: string;
  @Field({ nullable: true })
  address: string;
  @Field({ nullable: true })
  country: Country;
}

@InputType()
export class GetUsersInput extends PartialType(CreateUserInput) {
  @Field({ nullable: true })
  _id: string;
}

@ObjectType()
export class CreateUserResponse {
  @Field()
  _id: string;
  @Field()
  email: string;

  constructor(kwargs: { _id: string; email: string }) {
    this._id = kwargs._id;
    this.email = kwargs.email;
  }
}

@InputType()
class FieldsToUpdate extends PartialType(CreateUserInput) {}

@InputType()
export class UpdatUserInput {
  @Field()
  id: string;
  @Field()
  fieldsToUpdate: FieldsToUpdate;
}
