import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { PermissionEntity } from '../entities/permission.entity';

@Injectable()
export class PermissionRepository extends Repository<PermissionEntity> {}
