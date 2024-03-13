import { SetMetadata } from '@nestjs/common';

import { PolicyRule } from '@common/types/policy-rule.type';

export const CHECK_POLICIES_KEY = 'check_policies';
export const CheckPolicies = (...policyRules: PolicyRule[]) =>
  SetMetadata(CHECK_POLICIES_KEY, policyRules);
