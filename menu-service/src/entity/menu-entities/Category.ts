import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 100, nullable: true})
  label?: string;
  

  @OneToMany(() => Product, (product) => product.category)
  @JoinColumn({name: "productId"})
  product!: Product[];

}
