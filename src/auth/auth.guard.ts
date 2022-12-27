import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }

  public handleRequest(err, user, info) {
        if (err) {
            throw err;
        }
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
