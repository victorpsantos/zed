import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PolicyModule } from './policy/policy.module';
import { AccessModule } from './access/access.module';

@Module({
  exports: [],
  imports: [AuthModule, PolicyModule, UserModule, AccessModule],
  providers: [],
})
export class IamModule {}
