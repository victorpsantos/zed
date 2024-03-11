import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleService } from './role.service';
import { RoleEntity } from './entities/role.entity';
import { RoleRepository } from './repositories/role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity, RoleRepository])],

  exports: [RoleService],
  providers: [RoleService],
})
export class RoleModule {}
