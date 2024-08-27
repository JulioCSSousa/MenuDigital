import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Combined } from './Combined';
import { Store } from '../../store-service/entity/Store';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => Store, (store) => store.storeId, { cascade: true, nullable: true })
  @JoinColumn()
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

