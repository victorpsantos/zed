import { Condition } from '@common/types/condition.type';
import { Action } from '../../../common/interfaces/action.interface';

export interface AccessAbility {
  allow(
    scope: string,
    actions: Partial<Action>,
    conditions: Condition[],
  ): boolean;

  deny(
    scope: string,
    actions: Partial<Action>,
    conditions: Condition[],
  ): boolean;
}
