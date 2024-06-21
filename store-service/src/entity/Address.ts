import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Address {

    @PrimaryColumn()
    addressId: number;

    @Column({ length: 100, nullable: true })
    street?: string;

    @Column({ nullable: true })
    storeNumber?: string;

    @Column({ length: 100, nullable: true })
    district?: string;

    @Column({ nullable: true })
    complement?: string;


}

