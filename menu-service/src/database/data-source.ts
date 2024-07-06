import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import {Product} from "../entity/Product"
import {Combined} from "../entity/Combined"

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
    entities: [Product,Combined],
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}']
})


