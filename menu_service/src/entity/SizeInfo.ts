import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class SizeInfo {
  @PrimaryGeneratedColumn()
  itemSizeId!: number;

  @Column()
  observation!: string;

  @Column('float')
  realAmount!: number;

  @Column('float')
  previewsAmount!: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn()
  product!: Product;
}
