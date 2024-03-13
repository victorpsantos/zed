import { Policy } from '@common/interfaces/policy.interface';

export interface PolicyAbility {
  allow(): boolean;
  deny(): boolean;
}
