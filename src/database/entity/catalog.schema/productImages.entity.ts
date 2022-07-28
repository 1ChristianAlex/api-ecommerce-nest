import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Product from './product.entity';

@Entity({ schema: 'catalog' })
class ProductImages {
  constructor(entity: Omit<ProductImages, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  src: string;

  @Column({ type: 'varchar' })
  alt: string;

  @ManyToOne(() => Product, (item) => item.images)
  @JoinColumn()
  product: Product;
}

export default ProductImages;
