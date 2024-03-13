import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { PolicyEntity } from './policy.entity';

@Injectable()
export class PolicyRepository extends Repository<PolicyEntity> {}
