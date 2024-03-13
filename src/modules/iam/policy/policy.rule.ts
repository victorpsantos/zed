import { AccessAbility } from '../access/access.interface';
import { AccessRule } from '../access/access.type';

export const ListPoliciesAccessRule: AccessRule = (
  accessAbility: AccessAbility,
  ...args: any[]
) => {
  return false;
};
