import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Address } from '../../address-service/entity/Address';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId!: string;

  @Column()
  name: string;

  @Column()
  phone: string

  @Column()
  password: string

  @OneToMany(() => Address, (address) => address.addressId, { nullable: true, eager: true, cascade: true })
  @JoinColumn({ name: 'address' })
  Address?: Address;
  
}

