import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import { PermissionService } from './permission/permission.service';
import { PermissionEntity } from './permission/entities/permission.entity';
import { PermissionRepository } from './permission/repositories/permission.repository';
import { RoleModule } from './role/role.module';
import { RoleService } from './role/role.service';
import { RoleEntity } from './role/entities/role.entity';
import { RoleRepository } from './role/repositories/role.repository';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserEntity } from './user/entities/user.entity';
import { UserRepository } from './user/repositories/user.repository';

@Module({
  imports: [
    // External
    TypeOrmModule.forFeature([
      PermissionEntity,
      PermissionRepository,
      RoleEntity,
      RoleRepository,
      UserEntity,
      UserRepository,
    ]),

    // Internal
    AuthModule,
    PermissionModule,
    RoleModule,
    UserModule,
  ],

  exports: [PermissionService, RoleService, UserService],
  providers: [PermissionService, RoleService, UserService],
})
export class IamModule {}
