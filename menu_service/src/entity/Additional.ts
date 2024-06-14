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
  export class Additional {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Product, product => product.id, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn()
    product?: Product | null;
  
    @Column({ nullable: true })
    productId?: string | null; 
    
    @Column({ type: 'boolean', default: false })
    combineAmount!: boolean;
  
    @Column({ type: 'json', nullable: true })
    combineWith!: {
      type: string;
      options: string;
      mainMenu: boolean;
      sizeRestriction: {
        size: string;
        min: number | null;
        max: number | null;
      }[];
    }[];
   
  }
  