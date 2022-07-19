import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserModel } from '../user/user.model';

const UserRequest = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  return request.user as UserModel;
});

export { UserRequest };
