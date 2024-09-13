import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Address } from '../../address-service/entity/Address';
import { Product } from '../../menu-service/entity/Product';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  orderId!: string;

  @Column()
  orderNumber: number;

  @Column()
  storeId: string

  @Column({ length: 12, nullable: true })
  user?: string | null;

  @Column()
  deliveryForm?: string

  @Column({ nullable: true })
  paymentForm?: string

  @Column()
  totalPrice?: number

  @Column()
  status?: string;

  @Column()
  rank?: number

  @Column()
  feedback?: string

  @OneToMany(() => Product, (product) => product.id)
  @JoinColumn({name: 'products'})
  orderItems?: Product


  
}

