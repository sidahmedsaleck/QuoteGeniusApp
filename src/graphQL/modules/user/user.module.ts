import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { DbModule } from 'src/db/db.module';
import { UserService } from './user.service';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [UserResolver, UserService],
})
export class UserModule {}
