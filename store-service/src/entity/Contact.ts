import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Tenant } from "./Tenant";
import { length } from "class-validator";
import { Store } from "./Store";


@Entity()
export class Contact {
    @PrimaryColumn()
    contactId: number;

    @Column({nullable: true})
    storePhone?: string;

    @Column({ length: 100, nullable: true})
    email?: string;

    @Column({length: 100, nullable: true})
    facebookLink?: string

    @Column({length: 100, nullable: true})
    facebookLogo?: string

    @Column({length: 100, nullable: true})
    instaLink?: string

    @Column({length: 100, nullable: true})
    instaLogo?: string

    @Column({ length: 100, nullable: true})
    categoryId: string;

    @Column({ length: 800, nullable: true })
    description?: string;

    @Column({ length: 800, nullable: true })
    imageUrl?: string;

    @OneToOne(() => Store, (stores) => stores.registerId)
    @JoinColumn({name: 'registerId'})
    stores: Store
}

