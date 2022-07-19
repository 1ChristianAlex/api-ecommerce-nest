import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { LoginDto, UserOutputDto, UserRegisterDto } from './user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async registerUser(@Body() userRegisterDto: UserRegisterDto) {
    try {
      const newUser = await this.userService.registerNewUser(
        new UserModel({
          email: userRegisterDto.email,
          firstName: userRegisterDto.firstName,
          id: null,
          lastName: userRegisterDto.lastName,
        }),
        userRegisterDto.password,
      );

      return plainToClass(UserOutputDto, newUser);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.userService.login(
        loginDto.email,
        loginDto.password,
      );

      return {
        user: plainToClass(UserOutputDto, user.user),
        accessToken: user.accessToken,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
