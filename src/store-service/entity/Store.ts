import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../../address-service/entity/Address";
import { SocialMedia } from "./SocialMedia";


@Entity()
export class Store {
    @PrimaryGeneratedColumn('uuid')
    storeId: string;


    @Column({ length: 100 })
    storeName: string;

    @Column({ type: 'simple-array', nullable: true })
    category: string[];

    @Column({ length: 800, nullable: true })
    description?: string;

    @Column({ length: 800, nullable: true })
    imageUrl?: string;

    @Column()
    hasImage: boolean | true

    @Column()
    closed: boolean | false

    @Column({ type: 'json', nullable: true })
    color?: {
        primary: string,
        secundary: string
    };

    @Column({ type: 'json', nullable: true })
    images?: {
        logo?: string;
        header?: string;
    }

    @Column({ type: 'simple-array' })
    openingHours: string[][];    
    
    @Column({ type: 'simple-array' })
    paymentForms: string[];

    @Column({ type: 'json', nullable: true })
    contact?: {
        storePhone?: string[],
        whatsApp?: string[],
        email?: string[]
    };

    alert?: string;

    @Column({ nullable: true })
    minOrderPrice?: number

    @Column({type: 'json'})
    address?: JSON;

    @OneToMany(() => SocialMedia, (socialMedias) => socialMedias.store, { nullable: true, cascade: true, onDelete: 'SET NULL' })
    @JoinColumn()
    socialMedias?: SocialMedia[];
}

