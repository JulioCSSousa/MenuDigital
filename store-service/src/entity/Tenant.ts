import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Store } from "./Store";
import { Address } from "./Address";

@Entity()
export class Tenant {
    
    @PrimaryGeneratedColumn('uuid')
    tenantId!: string;
    
    @Column({unique: true})
    registerId!: string;

    @Column({ length: 100 })
    fullName: string;

    @Column({length: 15})
    phoneNumber: string

    @Column()
    subscription: number;

    @Column()
    payment: number;

    @Column()
    planValue: number;

    @OneToMany(() => Store, (stores) => stores.tenant, {nullable: true, cascade: true, onDelete: 'SET NULL'})
    @JoinColumn()
    stores?: Store[]

    @OneToMany(() => Address, (address) => address.tenant, {cascade: true, onDelete: 'SET NULL', })
    @JoinColumn()
    address: Address[]

}

