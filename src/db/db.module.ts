import { Module } from '@nestjs/common';
import { PgDataService } from './dataservice';
import { DataService } from 'src/core/abstract/dataservice';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: DataService,
      useClass: PgDataService,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD.toString(),
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  exports: [DataService],
})
export class DbModule {}
