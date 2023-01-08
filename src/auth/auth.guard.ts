import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import {AuthGuard} from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
      console.log('canactivate');
      console.log(context);
        return super.canActivate(context);
    }

    public handleRequest(err, user, info) {
      console.log('handlereq');
      console.log(user);
      console.log(info);
         if (err) {
            throw err;
         }
         if (!user) {
            throw new UnauthorizedException();
         }
         return user;
    }*/
}
