import { PolicyScope, ReadPolicy } from './policy.action';
import { PolicyAbility } from '@common/interfaces/policy-ability.interface';
import { PolicyRule } from '@common/types/policy-rule.type';

export const ListPoliciesPolicyRule: PolicyRule = (
  policyAbility: PolicyAbility,
  ...args: any[]
) => {
  return false;
};
