import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEncrypt } from './userEncrypt';

@Module({
  controllers: [UserController],
  providers: [UserService, UserEncrypt, JwtService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserService],
})
export class UserModule {}
