import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Tenant } from "./Tenant";


@Entity()
export class Store {
    @PrimaryColumn('uuid')
    storeId: string;

    @Column()
    registerId: string;

    @Column({nullable: true})
    storePhone?: string;

    @Column({ length: 100 })
    storeName: string;

    @Column({nullable: true})
    workTime?: string;

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

}

