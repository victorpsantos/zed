import { PolicyAbility } from '../interfaces/policy-ability.interface';

export type PolicyRule = (policyAbility: PolicyAbility, ...args: any[]) => boolean;
