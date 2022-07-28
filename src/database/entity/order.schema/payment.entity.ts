import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../user.schema/user.entity';
import PaymentTypes from './paymentTypes.entity';

@Entity({ schema: 'order' })
class Payment {
  constructor(entity: Omit<Payment, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => PaymentTypes)
  @JoinColumn()
  paymentType: PaymentTypes;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Payment;
