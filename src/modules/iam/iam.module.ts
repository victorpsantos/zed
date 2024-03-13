import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PolicyModule } from './policy/policy.module';

@Module({
  exports: [],
  imports: [AuthModule, PolicyModule, UserModule],
  providers: [],
})
export class IamModule {}
