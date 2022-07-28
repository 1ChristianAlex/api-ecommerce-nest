import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain } from 'class-transformer';
import { UserEntity } from 'src/database/entity';
import { Repository } from 'typeorm';
import { jwtConstants } from '../auth/constants';
import { UserModel } from './user.model';
import { UserEncrypt } from './userEncrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private userEncrypt: UserEncrypt,
    private jwtService: JwtService,
  ) {}

  async registerNewUser(
    newUser: UserModel,
    password: string,
  ): Promise<UserEntity> {
    const hashPassword = await this.userEncrypt.genHash(password);

    const newUserRegister = await this.usersRepository
      .insert(
        new UserEntity({ ...newUser, password: hashPassword, isActive: true }),
      )
      .then(() => this.usersRepository.findOneBy({ password: hashPassword }));

    return newUserRegister;
  }

  async login(email: string, password: string) {
    const userLogin = await this.usersRepository.findOneByOrFail({
      email,
    });

    const isPasswordCompatible = await this.userEncrypt.isCompatibleHash(
      password,
      userLogin.password,
    );

    if (!isPasswordCompatible) {
      throw new Error('Wrong email or password!');
    }

    return {
      user: userLogin,
      accessToken: this.jwtService.sign(instanceToPlain(userLogin), {
        secret: jwtConstants.secret,
      }),
    };
  }
}
