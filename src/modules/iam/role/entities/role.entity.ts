import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from '../../user/entities/user.entity';
import { PermissionEntity } from '../../permission/entities/permission.entity';

@Entity()
export class RoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @OneToMany(() => UserEntity, (user) => user.role, {
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  users: UserEntity[];

  @ManyToMany(() => PermissionEntity, (permission) => permission.roles, {
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  permissions: PermissionEntity[];
}
