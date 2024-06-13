import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { SizeInfo } from './SizeInfo';
import { Category } from './Category';
import { Additional } from './Additional';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 100 })
  flavor!: string;

  @Column({ length: 500 })
  description: string;

  @Column()
  isSale!: boolean;

  @Column({ length: 300 })
  image: string;

  @OneToMany(() => SizeInfo, (size) => size.product, { cascade: true })
  @JoinColumn()
  size: SizeInfo[];

  @ManyToOne(() => Category, (category) => category.product, { cascade: true })
  @JoinColumn({name: 'categoryId'})
  category: Category;

  @OneToMany(() => Additional, (additional) => additional.product, { cascade: true })
  @JoinColumn()
  additional?: Additional[] | null;
}
