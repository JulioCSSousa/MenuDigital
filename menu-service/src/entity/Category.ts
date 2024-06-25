import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: true })
  name?: string;

  @Column({ length: 100, nullable: true})
  label?: string;
  

  @OneToMany(() => Product, (product) => product.category, {nullable: true})
  @JoinColumn({name: "productId"})
  product?: Product[];

}
