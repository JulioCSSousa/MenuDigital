import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Store {
    @PrimaryColumn()
    registerId: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100 })
    category: string;

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

