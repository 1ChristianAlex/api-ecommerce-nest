import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'order' })
class PaymentTypes {
  constructor(entity: Omit<PaymentTypes, 'id'>) {
    if (entity) {
      Object.assign(entity, this);
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  name: string;
}

export default PaymentTypes;
