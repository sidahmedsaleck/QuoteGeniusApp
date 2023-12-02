import { Injectable } from '@nestjs/common';
import { DataService } from 'src/core/abstract/dataservice';
import { UserUseCases } from 'src/useCases/user';

@Injectable()
export class UserService extends UserUseCases {
  constructor(dataService: DataService) {
    super(dataService);
  }
}
