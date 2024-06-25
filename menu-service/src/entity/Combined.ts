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
    
    @Column({nullable: true})
    type?: string;

    @Column({nullable: true})
    options: string;

    @Column({nullable: true})
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
  