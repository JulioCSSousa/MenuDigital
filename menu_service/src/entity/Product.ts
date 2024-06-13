import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { SizeInfo } from './SizeInfo';
import { Category } from './Category';
import { Additional } from './Additional';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name: string;

  @Column()
  flavor: string;

  @Column()
  description: string;

  @Column()
  isSale: boolean;

  @Column()
  image: string;

  @OneToMany(() => SizeInfo, (size) => size.itemSizeId)
  @JoinColumn()
  size: SizeInfo[];

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn()
  category: Category;

  @OneToMany(() => Additional, (additional) => additional.id)
  @JoinColumn()
  additional: Additional[];
}
