import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class SizeInfo {
  @PrimaryGeneratedColumn()
  itemSizeId!: number;

  @Column({ length: 100 })
  size!: string | null;

  @Column()
  observation?: string | null;

  @Column('float')
  realAmount: number;

  @Column('float')
  previewsAmount: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'productId' })
  product?: Product | null;
}
