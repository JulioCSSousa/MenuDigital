
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToOne,
    JoinColumn,
    OneToMany,
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

    @OneToMany(() => Category, category => category.combined, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn()
    category?: Category;
  
    @Column({nullable: true })
    size: string;

    @Column({nullable: true })
    min: number;

    @Column({nullable: true })
    max: number;
  }
  