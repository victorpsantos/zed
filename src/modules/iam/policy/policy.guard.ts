import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { CHECK_POLICIES_KEY } from './policy.decorator';

import { AccessService } from '../access/access.service';
import { PolicyRule } from '../access/access.type';

Injectable();
export class PolicyGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly accessService: AccessService,
  ) {}

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
