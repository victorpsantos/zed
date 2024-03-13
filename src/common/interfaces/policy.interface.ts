import { NestModule } from '@nestjs/common';

import { Action } from './action.interface';
import { Condition } from '@common/types/condition.type';
import { Effect } from '@common/enums/effect.enum';

export interface Policy {
  id: string;
  name: string;
  effect: Effect;
  scopes: NestModule[];
  actions: Action[];
  conditions: Condition[];
}
