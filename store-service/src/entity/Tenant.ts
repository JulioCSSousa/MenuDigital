import { register } from "tsconfig-paths";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, Unique } from "typeorm";
import { Store } from "./Store";

@Entity()
export class Tenant {
    
    @PrimaryColumn('uuid')
    tenantId: string
 
    @Column()
    registerId: string;

    @Column({ length: 100 })
    fullName: string;

    @Column()
    subscription: number;

    @Column()
    payment: number;

    @OneToMany(() => Store, (stores) => stores.storeId)
    @JoinColumn({name: 'storeId'})
    stores: Store[]

    


}

