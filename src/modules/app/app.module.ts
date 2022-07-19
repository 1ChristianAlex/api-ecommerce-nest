import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { postgressOptions } from 'src/config/databaseConfig';
import { AuthModule } from '../auth/auth.module';
import { CartModule } from '../cart/cart.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgressOptions as TypeOrmModuleOptions),
    UserModule,
    CartModule,
    AuthModule,
  ],
})
export class AppModule {}
