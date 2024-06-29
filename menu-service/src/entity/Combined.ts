
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
    type: string;

    @Column()
    category: string

    @Column({nullable: true})
    mainMenu: boolean;

    @ManyToOne(() => Product, product => product.id, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn()
    product?: Product;

    @Column({nullable: true })
    size: string;

    @Column({nullable: true })
    min: number;

    @Column({nullable: true })
    max: number;
  }
  