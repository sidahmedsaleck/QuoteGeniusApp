import { ValidationPipe } from '@nestjs/common';
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphQL/types/user';
import {
  CreateUserResponse,
  UpdatUserInput,
  User,
} from 'src/graphQL/types/user';
import { UserService } from './user.service';
import { GetUsersInput } from 'src/graphQL/types/user';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => User)
  async getUserById(@Args('id') id: string) {
    const _user = await this.userService.findUserById(id);
    return _user;
  }
  @Query(() => [User])
  async getAllUsers(@Args('options') options: GetUsersInput) {
    const _users = await this.userService.findAll(
      options !== undefined ? options : {},
    );
    return _users;
  }

  @Mutation(() => User)
  async updateUser(@Args('input') input: UpdatUserInput) {
    const _updatedUser = await this.userService.update(
      { _id: input.id },
      input.fieldsToUpdate,
    );
    return _updatedUser;
  }

  @Mutation(() => CreateUserResponse, { nullable: true })
  async createUser(@Args('input', ValidationPipe) input: CreateUserInput) {
    const _newUser = await this.userService.create(input);
    return new CreateUserResponse(_newUser);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string) {
    const _deletedUser = await this.userService.delete(id);
    return _deletedUser;
  }
}
