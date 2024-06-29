import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Category } from './Category';
import { Combined } from './Combined';
import { json } from 'stream/consumers';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  name: string;

  @Column()
  category: string

  @Column({ length: 500, nullable: true})
  description?: string | null;

  @Column()
  isSale!: boolean | true;

  @Column({ length: 300, nullable: true })
  image?: string | null;

  @Column({nullable: true})
  extraIndex?: number | null

  @Column({nullable: true, type: 'json'})
  observation?: string[] | null

  @Column({type: 'json', nullable: true})
  price: number[];

  @Column({type: 'json', nullable: true})
  previewsPrice?: number[];

  @Column()
  combinedPrice: boolean

  @OneToMany(() => Combined, (combined) => combined.product, { cascade: true, nullable: true })
  @JoinColumn()
  combined?: Combined[] | null;
}

