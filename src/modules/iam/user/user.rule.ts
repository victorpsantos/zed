import { PolicyAbility } from '@modules/iam/access/policy-ability.interface';
import { PolicyRule } from '@common/types/policy-rule.type';
import { CreateUser, UserScope } from './user.action';

export const CreateUserAccessRule: PolicyRule = (
  policyAbility: PolicyAbility,
  ...args: any[]
) => {
  return policyAbility.allow(UserScope, [CreateUser]);
};
