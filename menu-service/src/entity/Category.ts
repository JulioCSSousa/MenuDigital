import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100, nullable: true })
  name?: string;

  @Column({ length: 100, nullable: true})
  label?: string;
  

}
