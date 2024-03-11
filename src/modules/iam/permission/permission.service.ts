import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PermissionEntity } from './entities/permission.entity';
import { PermissionRepository } from './repositories/permission.repository';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(PermissionEntity)
    private readonly permissionRepository: PermissionRepository,
  ) {}
}
