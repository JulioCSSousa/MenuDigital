import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Product, (product) => product.category)
  @JoinColumn()
  product!: Product[];
}
