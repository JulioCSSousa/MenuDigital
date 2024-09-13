import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Address {

    @PrimaryGeneratedColumn('uuid')
    addressId: string;

    @Column({ length: 100, nullable: true })
    street?: string;

    @Column({ nullable: true })
    number?: string;

    @Column({ length: 100, nullable: true })
    district?: string;

    @Column({ nullable: true })
    complement?: string;

    @Column()
    zipCode?: string

}

