import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'catalog' })
class Category {
  constructor(entity?: Omit<Category, 'id'>) {
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
}

export default Category;
