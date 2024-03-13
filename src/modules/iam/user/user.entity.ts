import { Policy } from '@common/interfaces/policy.interface';
import { WithPolicies } from '@common/interfaces/user-with-policies.interface';
import { User } from '@common/interfaces/user.interface';
import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { PolicyEntity } from '../policy/policy.entity';

@Entity()
export class UserEntity implements User, WithPolicies {
  @ManyToMany(() => PolicyEntity)
  @JoinTable()
  policies?: Policy[];
}
