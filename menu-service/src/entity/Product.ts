import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Combined } from './Combined';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  storeId?: string

  @Column({ length: 100 })
  name: string;

  @Column()
  category: string

  @Column({ length: 500, nullable: true })
  description?: string | null;

  @Column()
  isSale!: boolean | true;

  @Column({ length: 300, nullable: true })
  image?: string | null;

  @Column({ nullable: true })
  extraIndex?: number | null

  @Column({ nullable: true, type: 'simple-array' })
  observation?: string[] | null

  @Column({ type: 'simple-array', nullable: true })
  price: number[];

  @Column({ type: 'simple-array', nullable: true })
  previewsPrice?: number[];

  @Column()
  combinedPrice: boolean

  @Column()
  multiple: boolean
  
  @OneToMany(() => Combined, (combined) => combined.product, { cascade: true, nullable: true })
  @JoinColumn()
  combined?: Combined[] | null;
}

