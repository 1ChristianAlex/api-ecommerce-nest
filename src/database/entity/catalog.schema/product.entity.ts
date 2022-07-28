import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../user.schema/user.entity';
import Category from './category.entity';
import ProductImages from './productImages.entity';

@Entity({ schema: 'catalog' })
class Product {
  constructor(entity: Omit<Product, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  description: string;

  @Column({ nullable: false, type: 'numeric' })
  price: number;

  @Column({ nullable: true, type: 'numeric' })
  oldPrice?: number;

  @Column({ nullable: false, type: 'numeric' })
  stock: number;

  @Column({ default: 0, type: 'numeric' })
  minUnits?: number;

  @Column({ nullable: false, type: 'varchar' })
  sellerBy: string;

  @OneToMany(() => ProductImages, (item) => item.product)
  @JoinColumn()
  images: ProductImages[];

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Product;
