import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PermissionService } from './permission.service';
import { PermissionEntity } from './entities/permission.entity';
import { PermissionRepository } from './repositories/permission.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionEntity, PermissionRepository])],

  exports: [PermissionService],
  providers: [PermissionService],
})
export class PermissionModule {}
