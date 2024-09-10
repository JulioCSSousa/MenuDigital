import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Store } from "./Store";

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

}

