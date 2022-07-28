import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import User from '../user.schema/user.entity';
import CartItem from './cartItem.entity';

@Entity({ schema: 'order' })
class Cart {
  constructor(entity: Omit<Cart, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'numeric' })
  total: number;

  @OneToMany(() => CartItem, (item) => item.cart)
  @JoinColumn()
  cartItem: CartItem[];

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Cart;
