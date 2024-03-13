import { Injectable } from '@nestjs/common';
import { Action } from '@common/interfaces/action.interface';
import { Condition } from '@common/types/condition.type';

@Injectable()
export class AccessService {
  allow(
    scope: string,
    actions: Partial<Action>,
    conditions: Condition[],
  ): boolean {
    return;
  }

  deny(
    scope: string,
    actions: Partial<Action>,
    conditions: Condition[],
  ): boolean {
    return;
  }

  private parseConditions(conditions) {}
}
