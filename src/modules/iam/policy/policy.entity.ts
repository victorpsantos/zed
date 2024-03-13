import { NestModule } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Action } from '@common/interfaces/action.interface';
import { Policy } from '@common/interfaces/policy.interface';
import { Effect } from '@common/enums/effect.enum';

@Entity()
export class PolicyEntity implements Policy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'enum', enum: Effect })
  effect: Effect;

  @Column({ type: 'array' })
  scopes: NestModule[];
  
  @Column({ type: 'array' })
  actions: Action[];

  @Column({ type: 'array' })
  conditions: string[];
}

/**
{
  name: Something,
  effect: Allow,
  scopes: [
    User,
    Policy,
  ],
  actions: [
    CreateUser,
    ReadUser,
    UpdateUser,
    ReadPolicy,
  ],
  conditions: []
}
 */
