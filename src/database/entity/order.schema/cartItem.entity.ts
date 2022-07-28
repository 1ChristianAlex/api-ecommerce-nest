import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Product from '../catalog.schema/product.entity';
import Cart from './cart.entity';

@Entity({ schema: 'order' })
class CartItem {
  constructor(entity: Omit<CartItem, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric', default: 1 })
  units: number;

  @OneToOne(() => Product)
  @JoinColumn()
  products: Product[];

  @ManyToOne(() => Cart, (item) => item.cartItem)
  @JoinColumn()
  cart: Cart;
}

export default CartItem;
