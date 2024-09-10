import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Product } from "../menu-service/entity/Product"
import { Combined } from "../menu-service/entity/Combined"
import { Store } from "../store-service/entity/Store"
import { Address } from "../address-service/entity/Address"
import { SocialMedia } from "../store-service/entity/SocialMedia"
import { Order } from "../order-service/entity/Order"


dotenv.config();


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.LOCAL_HOST,
    port: parseInt(process.env.LOCAL_PORT),
    username: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.DB,
    synchronize: true,
    logging: false,
    entities: [Product, Combined, Store, Address, SocialMedia, Order],
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}']
})


