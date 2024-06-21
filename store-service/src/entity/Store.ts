import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Tenant } from "./Tenant";
import { Contact } from "./Contact";


@Entity()
export class Store {
    @PrimaryColumn('uuid')
    storeId: string;

    @Column()
    registerId: string;

    @Column({ length: 100 })
    name: string;

    @ManyToOne(() => Tenant, (tenant) => tenant.stores)
    @JoinColumn()
    tenant: Tenant

    @Column({ length: 100 })
    categoryId: string;

    @Column({ length: 800, nullable: true })
    description?: string;

    @Column({ length: 800, nullable: true })
    imageUrl?: string;

    @Column({ type: 'json', nullable: true })
    color?: {
        primary: string,
        secundary: string
    };

    @Column({ length: 300 })
    logo: string;

    @OneToOne(() => Contact, (contacts) => contacts)
    @JoinColumn()
    contacts: Contact
}

