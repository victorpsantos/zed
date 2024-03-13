import { PolicyAbility as IPolicyAbility } from '@modules/iam/access/policy-ability.interface';
import { User } from '@common/interfaces/user.interface';
import { Condition, PolicyConditionType } from '@common/types/condition.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AbilityFactory {
  createAbility(user: User): IPolicyAbility {
    // Falta implementar a lógica

    return new PolicyAbility();
  }

  private generatePolicyConditions(
    type: PolicyConditionType,
    field: string,
    value: string | number | boolean,
  ) {
    switch (type) {
      case 'Equals':
        return { [field]: { $eq: value } };
      case 'NotEquals':
        return { [field]: { $ne: value } };
      case 'LessThan':
        return {
          $and: [{ [field]: { $exists: true } }, { [field]: { $lt: value } }],
        };
      case 'LessThanEquals':
        return {
          $and: [{ [field]: { $exists: true } }, { [field]: { $lte: value } }],
        };
      case 'GreaterThan':
        return { [field]: { $gt: value } };
      case 'GreaterThanEquals':
        return { [field]: { $gte: value } };
    }
  }
}

// Falta implementar
class PolicyAbility implements IPolicyAbility {
  constructor() {}

  allow(): boolean {
    return;
  }

  deny(): boolean {
    return;
  }
}
