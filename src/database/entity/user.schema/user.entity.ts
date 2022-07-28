import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import Role from './role.entity';

@Entity({ schema: 'user' })
class User {
  constructor(entity: Omit<Role, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
    this.updateAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  firstName: string;

  @Column({ nullable: false, type: 'varchar' })
  lastName: string;

  @Column({ nullable: false, type: 'varchar', unique: true })
  email: string;

  @Column({ nullable: false, type: 'varchar' })
  password: string;

  @Column({ nullable: true, type: 'varchar' })
  image?: string;

  @Column({ nullable: true, type: 'varchar' })
  phone?: string;

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;
}

export default User;
