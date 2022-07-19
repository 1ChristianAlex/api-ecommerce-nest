import { Injectable } from '@nestjs/common';
import { hash, genSalt, compare } from 'bcrypt';

@Injectable()
class UserEncrypt {
  async genHash(password: string) {
    return hash(password, await genSalt());
  }

  async isCompatibleHash(textToCompare: string, hash: string) {
    return compare(textToCompare, hash);
  }
}

export { UserEncrypt };
