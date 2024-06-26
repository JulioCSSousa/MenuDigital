import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tenant } from "./Tenant";
import { Address } from "./Address";


@Entity()
export class Store {
    @PrimaryGeneratedColumn('uuid')
    storeId: string;

    @ManyToOne(() => Tenant, (tenantId) => tenantId.stores, {onDelete: 'SET NULL'})
    @JoinColumn({name: 'tenantId'})
    tenant: Tenant

    @OneToOne(() => Address, (address) => address.stores, {nullable: true, cascade: true, onDelete: 'SET NULL'})
    @JoinColumn({name: 'addressId'})
    address?: Address

    @Column({nullable: true})
    storePhone?: string;

    @Column({ length: 100 })
    storeName: string;

    @Column({nullable: true})
    workTime?: string;

    @Column({ length: 100, nullable: true })
    categoryId?: string;

    @Column({ length: 800, nullable: true })
    description?: string;

    @Column({ length: 800, nullable: true })
    imageUrl?: string;

    @Column({ type: 'json', nullable: true })
    color?: {
        primary: string,
        secundary: string
    };

    @Column({ length: 300, nullable: true })
    logo?: string;

}

