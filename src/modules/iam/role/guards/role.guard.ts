import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  public canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.getAllAndOverride<string[] | undefined>(
      'roles',
      [context.getHandler(), context.getClass()],
    );

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user();

    if (!user) {
      return false;
    }

    return user.role.some((role: string) => roles.includes(role));
  }
}
