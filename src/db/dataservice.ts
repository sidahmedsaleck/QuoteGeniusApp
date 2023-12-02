import { DataService } from 'src/core/abstract/dataservice';
import { PgRepo } from './pgrepo';
import { Repository } from 'typeorm';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class PgDataService implements DataService, OnApplicationBootstrap {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}
  user: PgRepo<UserEntity>;

  onApplicationBootstrap() {
    this.user = new PgRepo(this.userRepo);
  }
}
