import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryColumn()
    Id: number;

    @Column({ length: 100 })
    street: string;

    @Column({ length: 100 })
    houseNumber: string;

    @Column({ length: 800, nullable: true })
    district: string;

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

