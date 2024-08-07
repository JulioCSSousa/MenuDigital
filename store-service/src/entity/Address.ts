import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "./Store";
import { Tenant } from "./Tenant";

@Entity()
export class Address {

    
    @PrimaryGeneratedColumn('uuid')
    addressId: string;

    @Column({ length: 100, nullable: true })
    street?: string;

    @Column({ nullable: true })
    storeNumber?: string;

    @Column({ length: 100, nullable: true })
    district?: string;

    @Column({ nullable: true })
    complement?: string;

}

