import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Category } from './Category';
import { Combined } from './Combined';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 500, nullable: true})
  description?: string | null;

  @Column()
  isSale!: boolean;

  @Column({ length: 300, nullable: true })
  image?: string | null;

  @Column({nullable: true})
  extraIndex?: number |null

  @Column({nullable: true})
  observation?: string | null

  @Column()
  amount?: number | null

  @Column({nullable: true})
  previewsAmount?: number |null

  @Column()
  combineAmount: boolean | false

  
  @ManyToOne(() => Category, (category) => category.product, { cascade: true })
  @JoinColumn({name: 'category'})
  category?: Category;

  @OneToMany(() => Combined, (combined) => combined.product, { cascade: true, nullable: true })
  @JoinColumn()
  combined?: Combined[] | null;
}

