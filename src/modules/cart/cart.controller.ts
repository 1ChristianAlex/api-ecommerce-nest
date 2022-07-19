import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserRequest } from '../auth/auth.requestDecorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserModel } from '../user/user.model';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  @Get(':id')
  async getCart(@Param() params, @UserRequest() user: UserModel) {
    console.log(user);

    return params.id;
  }
}
