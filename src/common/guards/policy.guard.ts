import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { CHECK_POLICIES_KEY } from '@common/decorators/check-policy.decorator';
import { PolicyRule } from '@common/types/policy-rule.type';

Injectable();
export class PolicyGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyRules =
      this.reflector.get<PolicyRule[]>(
        CHECK_POLICIES_KEY,
        context.getHandler(),
      ) || [];

    const { user } = context.switchToHttp().getRequest();
    // Falta usar o PolicyAbility e passar ele para a policyRule
    const policyAbility = undefined;

    return policyRules.every((policyRule: PolicyRule) => {
      policyRule(policyAbility);
    });
  }
}
