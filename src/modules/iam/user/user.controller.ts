import { Controller, Get, UseGuards } from '@nestjs/common';

import { CheckPolicies } from '@common/decorators/check-policy.decorator';
import { PolicyGuard } from '@common/guards/policy.guard';

@Controller('user')
export class UserController {
    @Get()
    @UseGuards(PolicyGuard)
    @CheckPolicies()
    getUsers() {}
}
