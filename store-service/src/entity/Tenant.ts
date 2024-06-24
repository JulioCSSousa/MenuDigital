import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Store } from "./Store";
import { Address } from "./Address";

@Entity()
export class Tenant {
    
    @PrimaryGeneratedColumn('uuid')
    tenantId: string;
    
    @Column()
    registerId: string;

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

    @OneToMany(() => Store, (stores) => stores.storeId, {nullable: true})
    @JoinColumn({name: 'storeId'})
    stores?: Store[]

    @OneToMany(() => Address, (address) => address.addressId)
    @JoinColumn({name: 'addressId'})
    address: Address[]

    


}

