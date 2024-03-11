import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserRepository,
    ]),
  ],

  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
