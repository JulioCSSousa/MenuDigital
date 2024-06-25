
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToOne,
    JoinColumn,
  } from 'typeorm';

  import { Product } from './Product';
  import { Category } from './Category';
  
  @Entity()
  export class Combined {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column({nullable: true})
    type: string;

    @Column({nullable: true})
    mainMenu: boolean;

    @ManyToOne(() => Product, product => product.id, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn()
    product?: Product;
  
    @Column({ type: 'json', nullable: true })
      sizeRestriction?: {
        size: string;
        min: number;
        max: number;
      }[];
  }
  