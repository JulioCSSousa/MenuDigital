// src/entity/AdictionalItem.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';

  import { Product } from './Product';
  
  @Entity()
  export class Combined {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column()
    type: string;

    @Column()
    options: string;

    @Column()
    mainMenu: boolean;

    @ManyToOne(() => Product, product => product.id, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn()
    product?: Product | null;
  
    @Column({ nullable: true })
    productId?: string | null; 
  
    @Column({ type: 'json', nullable: true })
      sizeRestriction?: {
        size: string | null;
        min: number | null;
        max: number | null;
      }[];
  }
  