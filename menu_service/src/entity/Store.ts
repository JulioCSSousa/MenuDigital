import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Category } from "./Category";
import {IsNotEmpty as IsNotEmptyValidation, IsString, Length, Matches } from 'class-validator';

@Entity()
export class Store {
    @PrimaryColumn()
    registerId: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 800, nullable: true })
    description?: string;

    @OneToMany(() => Category, (category) => category.store, {cascade: true})
    @JoinColumn()
    category: Category[];

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

function IsNotEmpty(): (target: Store, propertyKey: "cnpj") => void {
    throw new Error("Function not implemented.");
}
