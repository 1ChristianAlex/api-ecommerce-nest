import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, pass: string) {
    const { user } = await this.userService.login(email, pass);

    if (user && user.email === email) {
      return user;
    }
    return null;
  }
}
