import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Product } from "../menu-service/entity/Product"
import { Combined } from "../menu-service/entity/Combined"
import { Store } from "../store-service/entity/Store"
import { Address } from "../store-service/entity/Address"
import { SocialMedia } from "../store-service/entity/SocialMedia"


dotenv.config();


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    synchronize: true,
    logging: false,
    entities: [Product, Combined, Store, Address, SocialMedia],
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}']
})


