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

  @Column({ length: 100, nullable: true })
  flavor?: string | null;

  @Column({ length: 500, nullable: true})
  description?: string | null;

  @Column()
  isSale!: boolean;

  @Column({ length: 300, nullable: true })
  image?: string | null;

  @OneToMany(() => SizeInfo, (size) => size.product, { cascade: true })
  @JoinColumn()
  size: SizeInfo[];

  @ManyToOne(() => Category, (category) => category.product, { cascade: true })
  @JoinColumn({name: 'categoryId'})
  category?: Category;

  @OneToMany(() => Additional, (additional) => additional.product, { cascade: true, nullable: true })
  @JoinColumn()
  additional?: Additional[] | null;
}
