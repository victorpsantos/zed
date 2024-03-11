import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleEntity } from '../../role/entities/role.entity';

@Entity()
export class PermissionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  permission: string;

  @ManyToMany(() => RoleEntity, (role) => role.permissions, {
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  roles: RoleEntity[];
}
