import { Repository } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';

export class RoleRepository extends Repository<RoleEntity> {}
