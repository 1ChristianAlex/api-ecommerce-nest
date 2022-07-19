class UserModel {
  constructor(partial?: UserModel) {
    Object.assign(this, partial);
  }

  id: number;

  firstName: string;

  lastName: string;

  email: string;

  image?: string;

  createAt?: Date;

  updateAt?: Date;

  isActive?: boolean;
}

export { UserModel };
