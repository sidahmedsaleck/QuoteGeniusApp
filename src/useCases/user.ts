import { DataService } from 'src/core/abstract/dataservice';
import { User } from 'src/core/entities/user';

export class UserUseCases {
  constructor(private readonly dataService: DataService) {}

  async findAll(options: Partial<User>) {
    try {
      const users = await this.dataService.user.findAll(options);
      if (users) {
        return users;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error finding users');
    }
  }
  async create(createUserInput: Partial<User>) {
    try {
      const user = await this.dataService.user.create(createUserInput);
      if (user) {
        return user;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error creating user');
    }
  }

  async findUserById(id: string) {
    try {
      const user = await this.dataService.user.findOne({ _id: id });
      if (user) {
        return user;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error finding user');
    }
  }

  async update(filter: Partial<User>, update: Partial<User>) {
    try {
      const user = await this.dataService.user.update(filter, update);
      if (user) {
        return user;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error updating user');
    }
  }

  async delete(id: string) {
    try {
      const user = await this.dataService.user.delete({ _id: id });
      console.log(user);
      if (user) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error deleting user');
    }
  }
}
