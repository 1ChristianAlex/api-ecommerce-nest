import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../user.schema/user.entity';
import Address from './address.entity';
import Cart from './cart.entity';
import Payment from './payment.entity';

@Entity({ schema: 'order' })
class Order {
  constructor(entity: Omit<Order, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Cart)
  @JoinColumn()
  cart: Cart;

  @OneToOne(() => Payment)
  @JoinColumn()
  payment: Payment;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Order;
