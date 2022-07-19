import { Exclude } from 'class-transformer';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { UserModel } from './user.model';

class UserRegisterDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

class UserOutputDto extends UserModel {
  @Exclude()
  password: string;
}

class LoginDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export { UserRegisterDto, UserOutputDto, LoginDto };
