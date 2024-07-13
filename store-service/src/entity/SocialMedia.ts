import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Store } from "./Store";

@Entity()
export class SocialMedia{
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({type: 'simple-array', nullable: true})
    facebook?: string[]

    @Column({type: 'simple-array', nullable: true})
    x?: string[]

    @Column({type: 'simple-array', nullable: true})
    instagram?: string[]

    @Column({ type: 'simple-array', nullable: true })
    linkedIn?: string[]

    @ManyToOne(() => Store, store => store.storeId, { nullable: true, onDelete: 'CASCADE' })
    @JoinColumn()
    store?: Store;

}