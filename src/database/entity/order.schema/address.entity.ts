import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../user.schema/user.entity';

@Entity({ schema: 'order' })
class Address {
  constructor(entity: Omit<Address, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  street: string;

  @Column({ nullable: false, type: 'varchar' })
  district: string;

  @Column({ nullable: false, type: 'varchar' })
  city: string;

  @Column({ nullable: true, type: 'varchar' })
  complement?: string;

  @Column({ nullable: false, type: 'numeric' })
  cep: number;

  @Column({ nullable: false, type: 'numeric' })
  streetNumber: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Address;
